# Ders: Kalıtım Nedir? (What Is Inheritance?)

Farklı türdeki nesneler birbirleriyle belirli miktarda ortak özelliği paylaşır. Dağ bisikletleri, yarış bisikletleri ve tandem bisikletlerin tümü bisikletlerin ortak özelliklerini paylaşır.

1. [**Üst Sınıf ve Alt Sınıf Hiyerarşisi**](#1.-üst-sınıf-ve-alt-sınıf-hiyerarşisi)
2. [**extends Anahtar Sözcüğü**](#2.-extends-anahtar-sözcüğü)
3. [**Kalıtımın Sağladığı Avantajlar**](#3.-kalıtımın-sağladığı-avantajlar)
---

# 1. Üst Sınıf ve Alt Sınıf Hiyerarşisi

Nesne yönelimli programlama, sınıfların durum ve davranışları diğer sınıflardan **miras (inherit)** almasına izin verir.

<figure style="text-align: center;">
  <img src="_media/figures/concepts-bikeHierarchy.gif" alt="Bisiklet Sınıf Hiyerarşisi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Bicycle üst sınıfı ve ondan türeyen MountainBike, RoadBike, TandemBike alt sınıfları.</figcaption>
</figure>

---

# 2. extends Anahtar Sözcüğü

Java programlama dilinde her sınıfın doğrudan bir **üst sınıfı (superclass)** olabilir ve `extends` sözcüğü ile miras alınır:

```java
class MountainBike extends Bicycle {

    // yeni alanlar ve metotlar
    public int seatHeight;

    public void setHeight(int newValue) {
        seatHeight = newValue;
    }
}
```

`MountainBike`, `Bicycle` içindeki tüm alan ve metotları devralır ve kendi ek özelliklerini tanımlar.

---

# 3. Kalıtımın Sağladığı Avantajlar

- **Kod Tekrarını Önleme:** Ortak kodlar tek bir üst sınıfta toplanır.
- **Bakım Kolaylığı:** Üst sınıftaki iyileştirmeler tüm alt sınıflara otomatik aktarılır.
- **Hiyerarşik Düzen:** Gerçek dünya modelleri doğrudan koda yansıtılır.
