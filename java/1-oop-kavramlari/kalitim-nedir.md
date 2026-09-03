# Kalıtım (Inheritance) Nedir?

Farklı türdeki nesneler genellikle birbiriyle belirli miktarda ortak özelliğe sahiptir. Örneğin dağ bisikletleri (*mountain bikes*), yarış/yol bisikletleri (*road bikes*) ve tandem bisikletler (*tandem bikes*), bisikletlerin ortak özelliklerini (mevcut hız, mevcut pedal kadansı, mevcut vites) paylaşırlar. Ancak her biri onları farklı kılan ek özellikleri de tanımlar: tandem bisikletlerin iki selesi ve iki gidonu vardır; yol bisikletleri aşağı kıvrık yarış gidonlarına sahiptir; bazı dağ bisikletleri ise daha düşük vites oranı sağlayan ek bir aynakola sahiptir.

Nesne yönelimli programlama, sınıfların yaygın olarak kullanılan durum ve davranışları diğer sınıflardan **miras almasına (inherit)** olanak tanır. Bu örnekte **Bicycle**; `MountainBike`, `RoadBike` ve `TandemBike` sınıflarının **üst sınıfı (superclass)** haline gelir. Java programlama dilinde, her sınıfın yalnızca **tek bir doğrudan üst sınıfına** sahip olmasına izin verilir ve her üst sınıfın sınırsız sayıda **alt sınıfı (subclass)** olma potansiyeli vardır:

<figure style="text-align: center;">
  <img src="_media/figures/concepts-bikeHierarchy.gif" alt="Bisiklet Sınıfları Hiyerarşisi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Bisiklet sınıflarının kalıtım hiyerarşisi.</figcaption>
</figure>

Bir alt sınıf oluşturmanın sözdizimi oldukça basittir. Sınıf bildiriminizin başında `extends` anahtar sözcüğünü ve ardından miras alınacak sınıfın adını kullanırsınız:

```java
class MountainBike extends Bicycle {

    // Dağ bisikletini tanımlayan yeni alanlar
    // ve metotlar buraya gelir

}
```

Bu bildirim `MountainBike` sınıfına `Bicycle` ile aynı alanları ve metotları kazandırır, ancak kodunun yalnızca onu benzersiz kılan özelliklere odaklanmasına olanak tanır. Bu durum alt sınıflarınızın kodunun okunmasını kolaylaştırır. Ancak her üst sınıfın tanımladığı durum ve davranışı uygun şekilde belgelemeye özen göstermelisiniz; çünkü bu kodlar her alt sınıfın kaynak dosyasında doğrudan görünmeyecektir.
