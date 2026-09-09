# Bir Sınıfın Üyelerine Erişimi Kontrol Etme (Controlling Access to Members of a Class)

Erişim düzeyi niteleyicileri (access level modifiers), diğer sınıfların belirli bir alanı kullanıp kullanamayacağını veya belirli bir metodu çağırıp çağıramayacağını belirler. İki düzeyde erişim kontrolü vardır:

* Üst düzeyde (top level) — `public` veya *paket-özel (package-private)* (açık bir niteleyici yok).
* Üye düzeyinde (member level) — `public`, `private`, `protected` veya *paket-özel (package-private)* (açık bir niteleyici yok).

Bir sınıf `public` niteleyicisiyle bildirilebilir; bu durumda o sınıf her yerdeki tüm sınıflar tarafından görülebilir. Bir sınıfın hiçbir niteleyicisi yoksa (varsayılan, aynı zamanda *package-private* olarak da bilinir), yalnızca kendi paketi içinde görünürdür (paketler ilişkili sınıfların adlandırılmış gruplarıdır — bunları daha sonraki bir derste öğreneceksiniz).

Üye düzeyinde de üst düzey sınıflarda olduğu gibi ve aynı anlamda `public` niteleyicisini veya niteleyicisiz biçimi (*package-private*) kullanabilirsiniz. Üyeler için iki ek erişim niteleyicisi daha vardır: `private` ve `protected`. `private` niteleyicisi, üyeye yalnızca kendi sınıfı içinde erişilebileceğini belirtir. `protected` niteleyicisi, üyeye yalnızca kendi paketi içinde (*package-private* gibi) ve ek olarak başka bir paketteki sınıfının bir alt sınıfı (subclass) tarafından erişilebileceğini belirtir.

Aşağıdaki tablo, her bir niteleyici tarafından izin verilen üye erişimlerini göstermektedir:

| Niteleyici (Modifier) | Sınıf (Class) | Paket (Package) | Alt Sınıf (Subclass) | Dünya / Herkes (World) |
| :--- | :---: | :---: | :---: | :---: |
| `public` | E | E | E | E |
| `protected` | E | E | E | H |
| *(niteleyici yok)* | E | E | H | H |
| `private` | E | H | H | H |

İlk veri sütunu, sınıfın kendisinin erişim düzeyiyle tanımlanan üyeye erişimi olup olmadığını gösterir. Gördüğünüz gibi, bir sınıf her zaman kendi üyelerine erişebilir. İkinci sütun, sınıfla aynı paketteki sınıfların (ebeveynlerine bakılmaksızın) üyeye erişimi olup olmadığını gösterir. Üçüncü sütun, bu paketin dışında bildirilen sınıfın alt sınıflarının üyeye erişimi olup olmadığını gösterir. Dördüncü sütun ise tüm sınıfların üyeye erişimi olup olmadığını belirtir.

Erişim düzeyleri sizi iki şekilde etkiler. İlk olarak Java platformundaki sınıflar gibi başka bir kaynaktan gelen sınıfları kullandığınızda erişim düzeyleri, kendi sınıflarınızın bu sınıfların hangi üyelerini kullanabileceğini belirler. İkincisi, bir sınıf yazdığınızda, sınıfınızdaki her üye değişkenin ve her metodun hangi erişim düzeyine sahip olması gerektiğine karar vermeniz gerekir.

Bir sınıf koleksiyonuna bakalım ve erişim düzeylerinin görünürlüğü nasıl etkilediğini görelim. Aşağıdaki şekil bu örnekteki dört sınıfı ve bunların birbiriyle nasıl ilişkili olduğunu göstermektedir:

<figure style="text-align: center;">
  <img src="_media/figures/classes-access.gif" alt="Erişim Düzeylerini Göstermek İçin Kullanılan Örnekteki Sınıflar ve Paketler" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Erişim Düzeylerini Göstermek İçin Kullanılan Örnekteki Sınıflar ve Paketler</figcaption>
</figure>

Aşağıdaki tablo, uygulanabilecek erişim niteleyicilerinin her biri için Alpha sınıfının üyelerinin nerede görünür olduğunu gösterir:

| Niteleyici (Modifier) | Alpha | Beta | Alphasub | Gamma |
| :--- | :---: | :---: | :---: | :---: |
| `public` | E | E | E | E |
| `protected` | E | E | E | H |
| *(niteleyici yok)* | E | E | H | H |
| `private` | E | H | H | H |

> **Bir Erişim Düzeyi Seçmeye İlişkin İpuçları:**
>
> Başka programcılar sınıfınızı kullanıyorsa, hatalı kullanımdan kaynaklanan hataların oluşamayacağından emin olmak istersiniz. Erişim düzeyleri bunu yapmanıza yardımcı olabilir.
>
> * Belirli bir üye için anlamlı olan en kısıtlayıcı erişim düzeyini kullanın. Aksini yapmak için iyi bir nedeniniz olmadığı sürece `private` kullanın.
> * Sabitler dışında `public` alanlardan kaçının. (Öğreticideki birçok örnekte public alanlar kullanılmıştır. Bu, bazı noktaları özlü bir şekilde açıklamaya yardımcı olabilir, ancak üretim kodu için önerilmez.) Public alanlar sizi belirli bir uygulamaya bağlama eğilimindedir ve kodunuzu değiştirme esnekliğinizi sınırlar.
