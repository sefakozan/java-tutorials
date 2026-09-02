# Ders: Nesne (Object) Nedir?

Nesneler, **nesne yönelimli (object-oriented)** teknolojiyi anlamanın anahtarıdır. Şu anda etrafınıza bakın; gerçek dünyadan birçok nesne örneği bulacaksınız: köpeğiniz, masanız, televizyonunuz, bisikletiniz.

Gerçek dünyadaki nesneler iki ortak özelliği paylaşır: Hepsinin bir **durumu (state)** ve **davranışı (behavior)** vardır. Köpeklerin durumu (isim, renk, cins, açlık) ve davranışı (havlama, yakalama, kuyruk sallama) vardır. Bisikletlerin de durumu (mevcut vites, mevcut pedal kadansı, mevcut hız) ve davranışı (vites değiştirme, pedal kadansını değiştirme, fren yapma) vardır. Gerçek dünya nesnelerinin durumunu ve davranışını tanımlamak, nesne yönelimli programlama mantığıyla düşünmeye başlamanın harika bir yoludur.

Şu anda bir dakikanızı ayırıp yakın çevrenizdeki gerçek dünya nesnelerini gözlemleyin. Gördüğünüz her nesne için kendinize şu iki soruyu sorun: "Bu nesne hangi olası durumlarda bulunabilir?" ve "Bu nesne hangi olası davranışları sergileyebilir?". Gözlemlerinizi mutlaka yazın. Bunu yaptıkça, gerçek dünya nesnelerinin karmaşıklık açısından farklılık gösterdiğini fark edeceksiniz; masa lambanız yalnızca iki olası duruma (açık ve kapalı) ve iki olası davranışa (açma, kapama) sahip olabilir, ancak masaüstü radyonuz ek durumlara (açık, kapalı, mevcut ses seviyesi, mevcut radyo istasyonu) ve davranışlara (açma, kapama, sesi artırma, sesi azaltma, arama, tarama ve frekans ayarlama) sahip olabilir. Ayrıca bazı nesnelerin kendi içlerinde başka nesneleri barındırdığını da fark edebilirsiniz. Bu gerçek dünya gözlemlerinin tümü doğrudan nesne yönelimli programlama dünyasına aktarılır.

---

<figure style="text-align: center;">
  <img src="_media/figures/concepts-object.gif" alt="Yazılım Nesnesi Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Bir yazılım nesnesi: Durum değişkenlerde (alanlarda) saklanır, davranış metotlarla sergilenir.</figcaption>
</figure>

Yazılım nesneleri kavramsal olarak gerçek dünya nesnelerine benzer: onlar da durum ve ilgili davranışlardan oluşur. Bir nesne durumunu **alanlarda (fields)** (bazı programlama dillerinde değişkenler olarak adlandırılır) saklar ve davranışını **metotlar (methods)** (bazı programlama dillerinde fonksiyonlar) aracılığıyla dışa açar. Metotlar bir nesnenin dahili durumu üzerinde çalışır ve nesneler arası iletişimin birincil mekanizması olarak hizmet eder. Dahili durumu gizlemek ve tüm etkileşimin bir nesnenin metotları üzerinden gerçekleştirilmesini zorunlu kılmak **veri kapsülleme (data encapsulation)** olarak bilinir — bu, nesne yönelimli programlamanın temel bir ilkesidir.

Örneğin bir bisikleti ele alalım:

<figure style="text-align: center;">
  <img src="_media/figures/concepts-bicycleObject.gif" alt="Yazılım Nesnesi Olarak Modellenen Bisiklet" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Yazılım nesnesi olarak modellenmiş bir bisiklet.</figcaption>
</figure>

Bisiklete durum (mevcut hız, mevcut pedal kadansı ve mevcut vites) atfederek ve bu durumu değiştirmek için metotlar sağlayarak, nesne dış dünyanın kendisini nasıl kullanabileceği üzerindeki kontrolü elinde tutar. Örneğin bisikletin yalnızca 6 vitesi varsa, vites değiştirme metodu 1'den küçük veya 6'dan büyük herhangi bir değeri reddedebilir.

---

Kodu bağımsız yazılım nesneleri halinde paketlemek bir dizi avantaj sağlar:

1. **Modülerlik (Modularity):** Bir nesnenin kaynak kodu, diğer nesnelerin kaynak kodundan bağımsız olarak yazılabilir ve sürdürülebilir. Bir nesne oluşturulduktan sonra sistem içinde kolayca aktarılabilir.
2. **Bilgi Gizleme (Information-hiding):** Yalnızca bir nesnenin metotlarıyla etkileşime girilerek, onun dahili uygulama ayrıntıları dış dünyadan gizli kalır.
3. **Kodun Yeniden Kullanılabilirliği (Code re-use):** Bir nesne zaten mevcutsa (belki başka bir yazılım geliştiricisi tarafından yazılmıştır), bu nesneyi kendi programınızda kullanabilirsiniz. Bu, uzmanların göreve özgü karmaşık nesneleri uygulamasını/test etmesini/hata ayıklamasını sağlar ve siz de bu nesnelerin kendi kodunuzda güvenle çalışacağına güvenebilirsiniz.
4. **Takılabilirlik ve Hata Ayıklama Kolaylığı (Pluggability and debugging ease):** Belirli bir nesnenin sorunlu olduğu ortaya çıkarsa, onu uygulamanızdan kolayca çıkarabilir ve yerine farklı bir nesne takabilirsiniz. Bu, gerçek dünyadaki mekanik sorunları onarmaya benzer. Bir cıvata kırılırsa tüm makineyi değil, sadece *o cıvatayı* değiştirirsiniz.