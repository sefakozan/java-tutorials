/**
 * The Java™ Tutorials - Docsify Yapılandırması ve Bağımsız Katlanabilir Menü Eklentisi
 */

(function () {
  // Açık olan klasörleri tarayıcı oturumunda tutma (başka derse geçilse bile açık kalır)
  var STORAGE_KEY = 'JAVA_TUTORIALS_OPENED_SECTIONS';
  var openedFolders = new Set();

  try {
    var saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      JSON.parse(saved).forEach(function (k) {
        openedFolders.add(k);
      });
    }
  } catch (e) { }

  function saveState() {
    try {
      var arr = Array.from(openedFolders);
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch (e) { }
  }

  function normalizeText(text) {
    if (!text) return '';
    var trMap = { 'ı': 'i', 'İ': 'i', 'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u', 'ş': 's', 'Ş': 's', 'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c' };
    var str = text.trim();
    str = str.replace(/[ıİğĞüÜşŞöÖçÇ]/g, function (m) { return trMap[m] || m; }).toLowerCase();
    str = str.replace(/^[\d\.\s\-]+/, '');
    str = str.replace(/[^\w]/g, '');
    return str;
  }

  function linkTocItemsToSections() {
    var container = document.querySelector('.markdown-section');
    if (!container) return;

    var headings = Array.from(container.querySelectorAll('h1, h2, h3, h4, h5, h6'));
    if (headings.length <= 1) return;

    var sectionHeadings = headings.slice(1);

    var headingList = sectionHeadings.map(function (h) {
      var anchor = h.querySelector('a.anchor');
      var id = h.getAttribute('id') || (anchor ? anchor.getAttribute('data-id') : '');
      return {
        element: h,
        id: id,
        normText: normalizeText(h.textContent)
      };
    }).filter(function (item) { return item.normText.length > 0; });

    var hr = container.querySelector('hr');
    var firstSectionHeading = sectionHeadings[0];

    var allLists = Array.from(container.querySelectorAll('ol, ul'));

    allLists.forEach(function (listEl) {
      var isTopList = true;
      if (hr) {
        isTopList = (listEl.compareDocumentPosition(hr) & 4) !== 0;
      } else if (firstSectionHeading) {
        isTopList = (listEl.compareDocumentPosition(firstSectionHeading) & 4) !== 0;
      }

      if (!isTopList) return;

      var strongs = listEl.querySelectorAll('li > strong, li > a > strong');
      strongs.forEach(function (strongEl) {
        var liEl = strongEl.closest('li');

        var strongNorm = normalizeText(strongEl.textContent);
        var liTextNorm = normalizeText(liEl ? liEl.textContent : '');

        if (!strongNorm && !liTextNorm) return;

        var match = headingList.find(function (h) {
          return (strongNorm && (h.normText === strongNorm || h.normText.indexOf(strongNorm) !== -1 || strongNorm.indexOf(h.normText) !== -1)) ||
                 (liTextNorm && (h.normText === liTextNorm || h.normText.indexOf(liTextNorm) !== -1 || liTextNorm.indexOf(h.normText) !== -1));
        });

        if (match && match.element) {
          if (liEl) {
            liEl.classList.add('is-toc-item');
          }

          var targetId = match.id || match.element.getAttribute('id');
          if (!targetId) {
            targetId = match.element.textContent.trim().toLowerCase().replace(/\s+/g, '-');
            match.element.setAttribute('id', targetId);
          }

          var currentHash = window.location.hash || '#/';
          var basePath = currentHash.split('?')[0];
          var href = basePath + '?id=' + encodeURIComponent(targetId);

          if (!strongEl.querySelector('a.toc-heading-link') && !strongEl.closest('a')) {
            var originalContent = strongEl.innerHTML;
            strongEl.innerHTML = '<a class="toc-heading-link" href="' + href + '">' + originalContent + '</a>';
          }

          var anchor = strongEl.querySelector('a.toc-heading-link') || strongEl.closest('a');
          if (anchor && !anchor.dataset.tocBound) {
            anchor.dataset.tocBound = 'true';
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              window.location.hash = href;
              match.element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
          }
        }
      });
    });
  }

  function getFolderKey(li) {
    var a = li.querySelector(':scope > a');
    if (a) {
      var h = a.getAttribute('href');
      if (h) return h;
      return a.textContent.trim();
    }
    return li.textContent.split('\n')[0].trim();
  }

  function syncSidebar() {
    var sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;

    var rootUl = sidebarNav.querySelector('ul');
    if (!rootUl) return;

    // Klasörleri işaretle
    var lis = sidebarNav.querySelectorAll('li');
    lis.forEach(function (li) {
      var subUl = li.querySelector(':scope > ul');
      if (subUl) {
        li.classList.add('folder');
        li.classList.remove('file');
      } else {
        li.classList.add('file');
        li.classList.remove('folder', 'open', 'collapse');
      }
    });

    // İlk girişte (oturumda kaydedilmiş bir durum yoksa) yalnızca en üst düzey 1. seviye klasörleri varsayılan olarak açık yap
    var isFirstVisit = !sessionStorage.getItem(STORAGE_KEY) || openedFolders.size === 0;
    if (isFirstVisit) {
      var topLevelLis = rootUl.children;
      for (var i = 0; i < topLevelLis.length; i++) {
        var topLi = topLevelLis[i];
        if (topLi.classList.contains('folder')) {
          openedFolders.add(getFolderKey(topLi));
        }
      }
    }

    lis.forEach(function (li) {
      if (li.classList.contains('folder')) {
        var key = getFolderKey(li);

        // Aktif dersin tüm üst klasörlerini otomatik aç ve açık tutulanlar listesine ekle
        var hasActive = li.querySelector('.active') !== null || li.classList.contains('active');
        if (hasActive) {
          openedFolders.add(key);
        }

        if (openedFolders.has(key)) {
          li.classList.add('open');
          li.classList.remove('collapse');
        } else {
          li.classList.remove('open');
          li.classList.add('collapse');
        }
      }
    });

    saveState();
  }

  // Sayfa geçişlerinde sidebar DOM'unu yeniden yaratmadan yalnızca aktif linki ve üst klasörlerini güncelleme
  function updateActiveLink() {
    var sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;

    var oldActives = sidebarNav.querySelectorAll('.active');
    oldActives.forEach(function (el) {
      el.classList.remove('active');
    });

    var hash = decodeURIComponent(location.hash).replace(/ /gi, '%20');
    if (!hash || hash === '#/') {
      hash = '#/README';
    }

    var link = sidebarNav.querySelector('a[href="' + hash + '"]');
    if (!link && hash === '#/README') {
      link = sidebarNav.querySelector('a[href="#/"]');
    }

    if (link) {
      var li = link.closest('li');
      if (li) {
        li.classList.add('active');

        // Aktif linkin üst klasörlerini görünür kıl (önceki açık klasörleri kesinlikle kapatmaz)
        var parent = li.parentElement;
        while (parent && !parent.classList.contains('sidebar-nav')) {
          if (parent.tagName === 'LI' && parent.classList.contains('folder')) {
            parent.classList.add('open');
            parent.classList.remove('collapse');
            openedFolders.add(getFolderKey(parent));
          }
          parent = parent.parentElement;
        }
        saveState();
      }
    }
  }

  // Menü tıklama olayı: Bir bölüm tıklandığında yalnızca o bölüm açılır/kapanır; diğer bölümler ASLA kapanmaz
  document.addEventListener('click', function (e) {
    var sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav || !sidebarNav.contains(e.target)) return;

    var folder = e.target.closest('li.folder');
    if (!folder) return;

    var link = folder.querySelector(':scope > a');
    var isHeaderClick = (e.target === folder || e.target === link || (link && link.contains(e.target)));

    if (isHeaderClick) {
      var key = getFolderKey(folder);
      var isOpen = folder.classList.contains('open');

      if (isOpen) {
        // Kullanıcı özellikle kapatmak istediğinde kapatılır
        folder.classList.remove('open');
        folder.classList.add('collapse');
        openedFolders.delete(key);
      } else {
        // Bölüm açılır ve diğer bölümler açık kalmaya devam eder
        folder.classList.add('open');
        folder.classList.remove('collapse');
        openedFolders.add(key);
      }

      saveState();
    }
  });

  window.$docsify = {
    name: '<img src="https://raw.githubusercontent.com/sefakozan/java-tutorials/main/docs/_media/java-icon.svg" alt="Java Logosu" style="height: 52px; vertical-align: middle; margin-right: 8px; margin-bottom: 8px;"><br><span style="font-family: \'Iowan Old Style\', \'Palatino Linotype\', \'Book Antiqua\', Georgia, serif; font-size: 1.25rem; font-weight: 700; color: #000000;">Java™ Eğitimleri</span>',
    repo: 'https://github.com/sefakozan/java-tutorials',
    loadSidebar: '_sidebar.md',
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md',
    },
    subMaxLevel: 0,
    auto2top: true,

    // Arama Yapılandırması
    search: {
      maxAge: 86400000,
      paths: 'auto',
      placeholder: 'Konularda ara...',
      noData: 'Sonuç bulunamadı...',
      depth: 4,
      hideOtherSidebarContent: false
    },

    // Sayfalama (Pagination)
    pagination: {
      previousText: 'Önceki Ders',
      nextText: 'Sonraki Ders',
      crossChapter: true,
      crossChapterText: true
    },

    // Kopyalama Butonu Metni
    copyCode: {
      buttonText: 'Kopyala',
      errorText: 'Hata',
      successText: 'Kopyalandı!'
    },

    // Özel Docsify Eklentileri
    plugins: [
      function (hook, vm) {
        var sidebarInitialized = false;

        // Docsify'ın her sayfa geçişinde tüm menü DOM'unu yok edip baştan render ederek titreme (flicker) yapmasını engelleme
        hook.init(function () {
          var originalRenderSidebar = vm._renderSidebar;
          vm._renderSidebar = function (text) {
            var sidebarNav = document.querySelector('.sidebar-nav');
            if (sidebarInitialized && sidebarNav && sidebarNav.querySelector('ul')) {
              // Menü zaten oluşturulmuş; DOM'u silmeyip sadece aktifliği güncelle (0 gecikme, 0 titreme)
              updateActiveLink();
              return;
            }

            // İlk sayfa yüklenişinde render et
            originalRenderSidebar.call(this, text);
            sidebarInitialized = true;
            syncSidebar();
          };
        });

        // Her .md sayfasının sağ üstüne 'GitHub\'ta Düzenle' butonu ekleme
        hook.beforeEach(function (html) {
          var file = vm.route.file || 'README.md';
          var editUrl = 'https://github.com/sefakozan/java-tutorials/edit/main/docs/' + file;
          var editHeader =
            '<div class="edit-on-github-wrapper">' +
            '<a class="edit-on-github-btn" href="' + editUrl + '" target="_blank" rel="noopener noreferrer" title="Bu sayfayı GitHub üzerinde düzenleyin">' +
            '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">' +
            '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>' +
            '</svg>' +
            '<span>GitHub\'ta Düzenle</span>' +
            '</a>' +
            '</div>\n\n';

          return editHeader + html;
        });

        function formatPaginationTitles() {
          var titles = document.querySelectorAll('.docsify-pagination-container .pagination-item-title');
          titles.forEach(function (titleEl) {
            var text = titleEl.textContent;
            if (text && text.indexOf('(') !== -1 && text.indexOf(')') !== -1 && !titleEl.querySelector('.pagination-sub')) {
              var formatted = text.replace(/^(.*?)\s*\((.*?)\)\s*$/, '$1<span class="pagination-sub">($2)</span>');
              if (formatted !== text) {
                titleEl.innerHTML = formatted;
              }
            }
          });
        }

        // Sayfa geçişi bittiğinde anında ve senkron olarak aktif bağlantıyı ve sayfalama başlıklarını güncelle
        hook.doneEach(function () {
          updateActiveLink();
          formatPaginationTitles();
          linkTocItemsToSections();
        });

        hook.ready(function () {
          updateActiveLink();
          formatPaginationTitles();
          linkTocItemsToSections();
        });
      }
    ]
  };
})();
