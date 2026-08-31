# Ders: Nesne Nedir? (What Is an Object?)

Nesneler, nesne yönelimli teknolojiyi anlamanın anahtarıdır. Şu anda etrafınıza bakın; gerçek dünyadan birçok nesne örneği bulacaksınız: köpeğiniz, masanız, televizyonunuz, bisikletiniz.

1. [**Gerçek Dünya Nesneleri ve Durum/Davranış**](#1.-gerçek-dünya-nesneleri-ve-durum/davranış)
2. [**Yazılım Nesneleri ve Veri Kapsülleme**](#2.-yazılım-nesneleri-ve-veri-kapsülleme)
3. [**Kapsüllemenin (Encapsulation) Faydaları**](#3.-kapsüllemenin-(encapsulation)-faydaları)
---

# 1. Gerçek Dünya Nesneleri ve Durum/Davranış

Gerçek dünyadaki nesneler iki ortak özelliği paylaşır: Hepsinin bir **durumu (state)** ve **davranışı (behavior)** vardır.

- Köpeklerin durumu (isim, renk, cins, açlık) ve davranışı (havlama, yakalama, kuyruk sallama) vardır.
- Bisikletlerin durumu (mevcut vites, kadans, hız) ve davranışı (vites değiştirme, fren yapma, pedal çevirme) vardır.

---

# 2. Yazılım Nesneleri ve Veri Kapsülleme

Yazılım nesneleri kavramsal olarak gerçek dünya nesnelerine benzer: onlar da durum ve ilgili davranışlardan oluşur.

<figure style="text-align: center;">
  <img src="_media/figures/concepts-object.gif" alt="Yazılım Nesnesi Diyagramı" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Bir yazılım nesnesi: Durum değişkenlerde saklanır, davranış metotlarla sergilenir.</figcaption>
</figure>

Gerçek dünyadaki bir bisikleti modelleyen bir yazılım nesnesi:

<figure style="text-align: center;">
  <img src="_media/figures/concepts-bicycleObject.gif" alt="Bisiklet Nesnesi Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Bicycle nesnesi: speed, cadence, gear durum alanları ve ilgili metotlar.</figcaption>
</figure>

- Bir yazılım nesnesi durumunu bir veya daha fazla **alan (field)** içinde saklar.
- Davranışını ise **metotlar (methods)** aracılığıyla sergiler.

Dahili durumu gizlemek ve tüm etkileşimin bir nesnenin metotları üzerinden gerçekleştirilmesini zorunlu kılmak **veri kapsülleme (data encapsulation)** olarak bilinir.

---

# 3. Kapsüllemenin (Encapsulation) Faydaları

1. **Modülerlik:** Bir nesnenin kaynak kodu diğer nesnelerden bağımsız olarak geliştirilebilir ve korunabilir.
2. **Bilgi Gizleme:** Dahili uygulamanın karmaşık ayrıntıları dış dünyadan gizli tutulur.
3. **Kodun Yeniden Kullanılabilirliği:** Önceden test edilmiş nesneler farklı projelerde doğrudan kullanılabilir.
4. **Hata Ayıklama Kolaylığı:** Sorunlu bir nesne sistemden kolayca çıkarılıp yenisiyle değiştirilebilir.
