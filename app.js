(function () {
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
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(openedFolders)));
    } catch (e) { }
  }

  function normalizeText(text) {
    if (!text) return '';
    var trMap = { 'ı': 'i', 'İ': 'i', 'ğ': 'g', 'Ğ': 'g', 'ü': 'u', 'Ü': 'u', 'ş': 's', 'Ş': 's', 'ö': 'o', 'Ö': 'o', 'ç': 'c', 'Ç': 'c' };
    return text.trim()
      .replace(/[ıİğĞüÜşŞöÖçÇ]/g, function (m) { return trMap[m] || m; })
      .toLowerCase()
      .replace(/^[\d\.\s\-]+/, '')
      .replace(/[^\w]/g, '');
  }

  // Sayfa içi TOC maddelerini başlıklara bağlar
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
            strongEl.innerHTML = '<a class="toc-heading-link" href="javascript:void(0)">' + originalContent + '</a>';
          }

          var anchor = strongEl.querySelector('a.toc-heading-link') || strongEl.closest('a');
          if (anchor && !anchor.dataset.tocBound) {
            anchor.dataset.tocBound = 'true';
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
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

  // Sidebar klasör durumlarını ve ok butonlarını senkronize eder
  function syncSidebar() {
    var sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;

    var rootUl = sidebarNav.querySelector('ul');
    if (!rootUl) return;

    var lis = sidebarNav.querySelectorAll('li');
    lis.forEach(function (li) {
      var subUl = li.querySelector(':scope > ul');
      if (subUl) {
        li.classList.add('folder');
        li.classList.remove('file');

        var toggle = li.querySelector(':scope > .folder-toggle');
        if (!toggle) {
          toggle = document.createElement('span');
          toggle.className = 'folder-toggle';
          toggle.setAttribute('aria-label', 'Menüyü aç/kapat');
          li.insertBefore(toggle, li.firstChild);
        }
      } else {
        li.classList.add('file');
        li.classList.remove('folder', 'open', 'collapse');
        var existingToggle = li.querySelector(':scope > .folder-toggle');
        if (existingToggle) {
          existingToggle.remove();
        }
      }
    });

    // İlk ziyarette 1. seviye klasörleri varsayılan olarak açık getir
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
    observeSidebarActive();
  }

  var isUpdatingActive = false;

  function getCleanHash(h) {
    var raw = decodeURIComponent(h || location.hash || '#/').replace(/ /gi, '%20').trim();
    if (!raw || raw === '#' || raw === '#/' || raw === '#/home' || raw === '#/home.md' || raw === '#/README' || raw === '#/README.md') {
      return '#/';
    }
    var noQuery = raw.split('?')[0];
    if (!noQuery.startsWith('#/')) {
      noQuery = '#/' + noQuery.replace(/^#+/, '').replace(/^\/+/, '');
    }
    return noQuery;
  }

  // Sayfa geçişlerinde ve TOC tıklamalarında sadece aktif linki günceller (sidebar'ı yeniden çizmez)
  function updateActiveLink() {
    var sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav) return;

    var cleanHash = getCleanHash(location.hash);
    var links = [];

    if (cleanHash === '#/') {
      links = Array.from(sidebarNav.querySelectorAll('a[href="#/"], a[href="#/home"], a[href="#/README"], a[href="#/home.md"], a[href="#/README.md"]'));
    } else {
      var base = cleanHash;
      var withoutMd = base.endsWith('.md') ? base.slice(0, -3) : base;
      var withMd = base.endsWith('.md') ? base : (base + '.md');
      var withSlash = withoutMd.endsWith('/') ? withoutMd : (withoutMd + '/');
      var withoutSlash = withoutMd.endsWith('/') ? withoutMd.slice(0, -1) : withoutMd;

      var selectors = [
        'a[href="' + base + '"]',
        'a[href="' + withoutMd + '"]',
        'a[href="' + withMd + '"]',
        'a[href="' + withSlash + '"]',
        'a[href="' + withoutSlash + '"]',
        'a[href="' + withSlash + 'index"]',
        'a[href="' + withSlash + 'index.md"]'
      ];

      links = Array.from(sidebarNav.querySelectorAll(selectors.join(',')));
    }

    if (links.length > 0) {
      var targetLink = links[links.length - 1];
      var targetLi = targetLink.closest('li');
      if (targetLi) {
        isUpdatingActive = true;

        var oldActives = sidebarNav.querySelectorAll('.active');
        oldActives.forEach(function (el) {
          if (el !== targetLi && el !== targetLink) {
            el.classList.remove('active');
          }
        });

        targetLi.classList.add('active');
        targetLink.classList.add('active');

        if (targetLi.classList.contains('folder')) {
          targetLi.classList.add('open');
          targetLi.classList.remove('collapse');
          openedFolders.add(getFolderKey(targetLi));
        }

        var parent = targetLi.parentElement;
        while (parent && !parent.classList.contains('sidebar-nav')) {
          if (parent.tagName === 'LI' && parent.classList.contains('folder')) {
            parent.classList.add('open');
            parent.classList.remove('collapse');
            openedFolders.add(getFolderKey(parent));
          }
          parent = parent.parentElement;
        }
        saveState();

        setTimeout(function () {
          isUpdatingActive = false;
        }, 60);
      }
    }
  }

  // Docsify'ın kaydırma/scroll sırasında sidebar aktifliğini silmesini engelleyen gözlemci
  function observeSidebarActive() {
    var sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav || sidebarNav.dataset.observed) return;
    sidebarNav.dataset.observed = 'true';

    var observer = new MutationObserver(function () {
      if (isUpdatingActive) return;
      var hasActive = sidebarNav.querySelector('.active') !== null;
      if (!hasActive) {
        updateActiveLink();
      }
    });

    observer.observe(sidebarNav, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }

  // Hash değişikliklerini dinle ve aktif menüyü koru
  window.addEventListener('hashchange', function () {
    updateActiveLink();
  });

  // Sidebar menü etkileşimi:
  // - Solundaki ok butonuna (.folder-toggle) tıklandığında menü açılır veya kapanır.
  // - Kapalı olan başlığa / linke ilk kez tıklandığında alt başlıkları açılır.
  // - Başlığa tekrar tıklandığında kapanmaz (açık kalır).
  document.addEventListener('click', function (e) {
    var sidebarNav = document.querySelector('.sidebar-nav');
    if (!sidebarNav || !sidebarNav.contains(e.target)) return;

    var toggleBtn = e.target.closest('.folder-toggle');
    if (toggleBtn) {
      e.preventDefault();
      e.stopPropagation();

      var folder = toggleBtn.closest('li.folder');
      if (!folder) return;

      var key = getFolderKey(folder);
      var isOpen = folder.classList.contains('open');

      if (isOpen) {
        folder.classList.remove('open');
        folder.classList.add('collapse');
        openedFolders.delete(key);
      } else {
        folder.classList.add('open');
        folder.classList.remove('collapse');
        openedFolders.add(key);
      }

      saveState();
      return;
    }

    var folderLi = e.target.closest('li.folder');
    if (folderLi) {
      var targetAnchor = e.target.closest('a');
      var isDirectFolderHeader = !targetAnchor || targetAnchor.parentElement === folderLi;

      if (isDirectFolderHeader) {
        var isClosed = !folderLi.classList.contains('open') || folderLi.classList.contains('collapse');
        if (isClosed) {
          folderLi.classList.add('open');
          folderLi.classList.remove('collapse');
          openedFolders.add(getFolderKey(folderLi));
          saveState();
        }
      }
    }
  });

  // Sayfa içi Markdown anchor bağlantılarına (#anchor veya ?id=...) tıklandığında rotayı bozmadan ilgili başlığa pürüzsüz kaydır
  document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a');
    if (!anchor) return;

    var href = anchor.getAttribute('href') || '';
    if (!href || href.startsWith('javascript:')) return;
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) return;

    var currentFullHash = window.location.hash || '#/';
    var currentPath = currentFullHash.split('?')[0].replace(/\/$/, '');

    var isCurrentPageLink = false;
    var targetId = '';

    if (href.startsWith('?id=')) {
      isCurrentPageLink = true;
      targetId = decodeURIComponent(href.replace('?id=', ''));
    } else if (href.startsWith('#') && !href.startsWith('#/')) {
      isCurrentPageLink = true;
      targetId = decodeURIComponent(href.substring(1));
    } else if (href.startsWith('#/')) {
      var linkPath = href.split('?')[0].replace(/\/$/, '');
      if (linkPath === currentPath && href.indexOf('?id=') !== -1) {
        isCurrentPageLink = true;
        targetId = decodeURIComponent(href.substring(href.indexOf('?id=') + 4));
      } else {
        var cleanHref = href.replace(/^#\/?/, '').split('?')[0];
        var candidate = document.getElementById(cleanHref) ||
          document.getElementById('_' + cleanHref) ||
          document.querySelector('.markdown-section [data-id="' + CSS.escape(cleanHref) + '"]') ||
          document.querySelector('.markdown-section [data-id="_' + CSS.escape(cleanHref) + '"]');

        if (candidate) {
          isCurrentPageLink = true;
          targetId = cleanHref;
        }
      }
    }

    if (!isCurrentPageLink || !targetId) return;

    targetId = targetId.split('&')[0];
    var cleanId = targetId.replace(/^_+/, '');

    var targetEl = document.getElementById(targetId) ||
      document.getElementById('_' + targetId) ||
      document.getElementById(cleanId) ||
      document.getElementById('_' + cleanId) ||
      document.querySelector('.markdown-section [data-id="' + CSS.escape(targetId) + '"]') ||
      document.querySelector('.markdown-section [data-id="_' + CSS.escape(targetId) + '"]') ||
      document.querySelector('.markdown-section [data-id="' + CSS.escape(cleanId) + '"]') ||
      document.querySelector('.markdown-section [data-id="_' + CSS.escape(cleanId) + '"]') ||
      document.querySelector('.markdown-section [id*="' + CSS.escape(cleanId) + '"]');

    if (!targetEl) {
      var headings = document.querySelectorAll('.markdown-section h1, .markdown-section h2, .markdown-section h3, .markdown-section h4, .markdown-section h5, .markdown-section h6');
      var anchorTextNorm = (anchor.textContent || '').trim().toLowerCase().replace(/[^a-z0-9çğıöşü]+/gi, ' ');
      var targetIdNorm = cleanId.toLowerCase().replace(/[^a-z0-9çğıöşü]+/gi, ' ');

      headings.forEach(function (h) {
        if (targetEl) return;
        var hTextNorm = h.textContent.trim().toLowerCase().replace(/[^a-z0-9çğıöşü]+/gi, ' ');
        if (
          (anchorTextNorm && hTextNorm.indexOf(anchorTextNorm) !== -1) ||
          (targetIdNorm && hTextNorm.indexOf(targetIdNorm) !== -1) ||
          (anchorTextNorm && anchorTextNorm.indexOf(hTextNorm) !== -1)
        ) {
          targetEl = h;
        }
      });
    }

    if (targetEl) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      var rect = targetEl.getBoundingClientRect();
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var targetY = rect.top + scrollTop - 40;
      window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });

      var resolvedId = targetEl.getAttribute('id') || (targetEl.querySelector('.anchor') ? targetEl.querySelector('.anchor').getAttribute('data-id') : '') || cleanId;
      history.pushState(null, '', currentPath + '?id=' + encodeURIComponent(resolvedId));
    }
  }, true);

  window.$docsify = {
    name: '<img src="_media/java-icon.svg" alt="Java Logosu" style="height: 52px; vertical-align: middle; margin-bottom: 8px;"><br><span style="font-family: \'Iowan Old Style\', \'Palatino Linotype\', \'Book Antiqua\', Georgia, serif; font-size: 1.25rem; font-weight: 700; color: #000000; display: block; line-height: 1.15;">The Java™ Tutorials</span><span style="font-family: \'Iowan Old Style\', \'Palatino Linotype\', \'Book Antiqua\', Georgia, serif; font-size: 0.84rem; font-weight: 600; color: #64748b; display: block; margin-top: 1px; line-height: 1.1; letter-spacing: 0.02em;">T<span style="display:inline-block; margin-left: 0.06em;">ü</span>rkçe</span>',
    nameLink: '#/',
    repo: 'https://github.com/sefakozan/java-tutorials',
    homepage: 'home.md',
    loadSidebar: '_sidebar.md',
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md',
      '/': '/home.md',
      '/home': '/home.md',
      '/home.md': '/home.md',
      '/README': '/home.md',
      '/README.md': '/home.md',
    },
    subMaxLevel: 0,
    auto2top: true,

    search: {
      maxAge: 86400000,
      paths: 'auto',
      placeholder: 'Konularda ara...',
      noData: 'Sonuç bulunamadı...',
      depth: 4,
      hideOtherSidebarContent: false
    },

    pagination: {
      previousText: 'Önceki Ders',
      nextText: 'Sonraki Ders',
      crossChapter: true,
      crossChapterText: true
    },

    copyCode: {
      buttonText: 'Kopyala',
      errorText: 'Hata',
      successText: 'Kopyalandı!'
    },

    plugins: [
      function (hook, vm) {
        var sidebarInitialized = false;

        // Sayfa geçişlerinde sidebar DOM'unun baştan çizilmesini engelleyerek titremeyi önler
        hook.init(function () {
          var originalRenderSidebar = vm._renderSidebar;
          vm._renderSidebar = function (text) {
            var sidebarNav = document.querySelector('.sidebar-nav');
            if (sidebarInitialized && sidebarNav && sidebarNav.querySelector('ul')) {
              updateActiveLink();
              return;
            }

            originalRenderSidebar.call(this, text);
            sidebarInitialized = true;
            syncSidebar();
          };
        });

        // Sayfanın sağ üstüne GitHub düzenleme bağlantısı ekler ve #! başlıklarını işler
        hook.beforeEach(function (html) {
          var file = vm.route.file || 'home.md';
          var editUrl = 'https://github.com/sefakozan/java-tutorials/edit/main/' + file;
          var editHeader =
            '<div class="edit-on-github-wrapper">' +
            '<a class="edit-on-github-btn" href="' + editUrl + '" target="_blank" rel="noopener noreferrer" title="Bu sayfayı GitHub üzerinde düzenleyin">' +
            '<svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor">' +
            '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>' +
            '</svg>' +
            '<span>GitHub\'ta Düzenle</span>' +
            '</a>' +
            '</div>\n\n';

          // Başlık başındaki sıra numaralarını siyah tutup sağında ferah bir boşluk bırak
          var transformedHtml = html
            .replace(/^(#{1,6})\s*(?:&nbsp;)*\s*\[(\d+\.)\s*(.*?)\]\((.*?)\)/gm, '$1 <span class="heading-num">$2</span> [$3]($4)')
            .replace(/^(#{1,6})\s*(?:&nbsp;)*\s*(\d+\.)\s*\[(.*?)\]\((.*?)\)/gm, '$1 <span class="heading-num">$2</span> [$3]($4)')
            .replace(/^(#{1,6})\s*!\s*(.+)$/gm, function (match, hashes, rest) {
              var processedRest = rest.replace(/`([^`]+)`/g, '<code class="error-code">$1</code>');
              return hashes + ' ' + processedRest;
            });

          return editHeader + transformedHtml;
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

        function initSidebarToggleIcon() {
          var toggleBtn = document.querySelector('.sidebar-toggle');
          if (!toggleBtn) return;
          if (!toggleBtn.querySelector('svg')) {
            toggleBtn.innerHTML =
              '<svg class="sidebar-toggle-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1d1d1f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
              '<rect x="3" y="3" width="18" height="18" rx="4" ry="4"/>' +
              '<path d="M9 3v18"/>' +
              '</svg>';
          }
        }

        function initGithubCorner() {
          function applyModernCorner() {
            var corner = document.querySelector('.github-corner');
            if (!corner) return false;
            if (corner.dataset.modernized !== 'true') {
              corner.dataset.modernized = 'true';
              corner.setAttribute('title', 'GitHub Reposunu Görüntüle ve Yıldızla');
              corner.setAttribute('aria-label', 'GitHub Reposunu Görüntüle ve Yıldızla');
              corner.setAttribute('target', '_blank');
              corner.setAttribute('rel', 'noopener noreferrer');
              corner.innerHTML =
                '<svg class="github-corner-svg" width="28" height="28" viewBox="0 0 16 16" fill="currentColor">' +
                '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>' +
                '</svg>' +
                '<div class="github-corner-text-wrap">' +
                '<span class="github-corner-label">GitHub</span>' +
                '<span class="github-corner-sub">' +
                '<svg class="star-icon" width="12" height="12" viewBox="0 0 16 16" fill="currentColor">' +
                '<path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25z"></path>' +
                '</svg>' +
                '<span>Star</span>' +
                '</span>' +
                '</div>';
            }
            return true;
          }

          if (!applyModernCorner()) {
            var checkInterval = setInterval(function () {
              if (applyModernCorner()) {
                clearInterval(checkInterval);
              }
            }, 50);
            setTimeout(function () { clearInterval(checkInterval); }, 4000);
          }
        }

        hook.doneEach(function () {
          updateActiveLink();
          formatPaginationTitles();
          linkTocItemsToSections();
          initSidebarToggleIcon();
          initGithubCorner();
        });

        hook.ready(function () {
          updateActiveLink();
          formatPaginationTitles();
          linkTocItemsToSections();
          initSidebarToggleIcon();
          initGithubCorner();
        });
      }
    ],

    // --- Kod Bloklarında Kalın Yazı Desteği (<b> veya ** ile) ---
    markdown: {
      renderer: {
        code: function (code, lang) {
          lang = (lang || 'markup').match(/\S*/)[0];
          var prismLang = (typeof Prism !== 'undefined' && Prism.languages && (Prism.languages[lang] || Prism.languages.markup)) || null;
          var cleanCode = code.replace(/@DOCSIFY_QM@/g, '`');

          var boldPlaceholders = [];
          var processedCode = cleanCode
            .replace(/<b>([\s\S]*?)<\/b>/gi, function (match, inner) {
              var id = 'ZZBOLD' + boldPlaceholders.length + 'ZZ';
              boldPlaceholders.push({ id: id, inner: inner });
              return id;
            })
            .replace(/<strong>([\s\S]*?)<\/strong>/gi, function (match, inner) {
              var id = 'ZZBOLD' + boldPlaceholders.length + 'ZZ';
              boldPlaceholders.push({ id: id, inner: inner });
              return id;
            })
            .replace(/\*\*([^\*\n]+?)\*\*/g, function (match, inner) {
              var id = 'ZZBOLD' + boldPlaceholders.length + 'ZZ';
              boldPlaceholders.push({ id: id, inner: inner });
              return id;
            });

          var highlighted = prismLang ? Prism.highlight(processedCode, prismLang, lang) : processedCode;

          if (boldPlaceholders.length > 0) {
            boldPlaceholders.forEach(function (item) {
              var innerHighlight = prismLang ? Prism.highlight(item.inner, prismLang, lang) : item.inner;
              highlighted = highlighted.replace(
                new RegExp(item.id, 'g'),
                '<strong class="code-bold">' + innerHighlight + '</strong>'
              );
            });
          }

          return '<pre v-pre data-lang="' + lang + '"><code class="lang-' + lang + '">' + highlighted + '</code></pre>';
        }
      }
    }
  };
})();
