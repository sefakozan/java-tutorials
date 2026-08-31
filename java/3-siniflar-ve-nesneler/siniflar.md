# Ders: Sınıfları Tanımlama

Bu bölüm, sınıfların nasıl tanımlanacağını, alanların ve metotların nasıl bildirileceğini, kurucuların (constructors) nasıl oluşturulacağını ve metotlara argümanların nasıl iletileceğini açıklar.

1. [**Sınıf Bildirimi (Declaring Classes)**](#1-sınıf-bildirimi-declaring-classes)
2. [**Üye Değişkenleri Bildirme (Member Variables)**](#2-üye-değişkenleri-bildirme-member-variables)
3. [**Metotları Tanımlama (Defining Methods)**](#3-metotları-tanımlama-defining-methods)
4. [**Yapıcılar / Kurucular (Constructors)**](#4-yapıcılar-kurucular-constructors)
5. [**Metotlara ve Kuruculara Bilgi Aktarma (Parametreler ve Argümanlar)**](#5-metotlara-ve-kuruculara-bilgi-aktarma)
---

# 1. Sınıf Bildirimi

Bir sınıf bildirimi aşağıdaki bileşenleri sırasıyla içerir:

1. **Değiştiriciler (*Modifiers*):** `public`, `private` ve daha sonra göreceğiniz diğerleri gibi (isteğe bağlıdır).
2. **`class` anahtar sözcüğü.**
3. **Sınıf adı:** Teamül gereği ilk harfi büyük yazılır (*PascalCase*).
4. **Üst sınıf (*Superclass*):** Sınıfın üst sınıfının adı (varsa), başına `extends` anahtar sözcüğü eklenir. Bir sınıf yalnızca tek bir üst sınıftan türeyebilir.
5. **Arayüzler (*Interfaces*):** Sınıf tarafından uygulanan arayüzlerin virgülle ayrılmış listesi (varsa), başına `implements` anahtar sözcüğü eklenir. Bir sınıf birden fazla arayüzü uygulayabilir.
6. **Sınıf gövdesi:** Süslü parantezler (`{ }`) ile çevrelenen alan.

```java
public class Bicycle {
    // Alan (field) bildirimleri
    public int cadence;
    public int gear;
    public int speed;
        
    // Yapıcı (constructor) bildirimi
    public Bicycle(int startCadence, int startSpeed, int startGear) {
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;
    }
        
    // Metot bildirimleri
    public void setCadence(int newValue) {
        cadence = newValue;
    }
        
    public void setGear(int newValue) {
        gear = newValue;
    }
        
    public void applyBrakes(int decrement) {
        speed -= decrement;
    }
        
    public void speedUp(int increment) {
        speed += increment;
    }
}
```

---

# 2. Üye Değişkenleri Bildirme (Member Variables)

Java'da değişkenlerin erişim düzeyleri dört erişim değiştiricisi (*access modifiers*) ile belirlenir:

<figure style="text-align: center;">
  <img src="_media/figures/classes-access.gif" alt="Erişim Düzeyleri Tablosu" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Java erişim düzeyi değiştiricileri ve görünürlük kapsamları.</figcaption>
</figure>

- **`public`:** Değişkene her sınıftan erişilebilir.
- **`protected`:** Değişkene kendi paketi içindeki sınıflardan ve diğer paketlerdeki alt sınıflardan erişilebilir.
- **Paket-Özel (*Package-Private* - değiştirici yoksa):** Değişkene yalnızca aynı paket içindeki sınıflardan erişilebilir.
- **`private`:** Değişkene yalnızca bildirildiği sınıfın içinden erişilebilir.

---

# 3. Metotları Tanımlama

Bir metot bildirimi şu öğelerden oluşur:
- **Erişim Değiştiricisi:** `public`, `protected`, `private` veya paket-özel.
- **Dönüş Türü (*Return Type*):** Metodun döndürdüğü değerin veri türü; değer döndürmüyorsa `void`.
- **Metot Adı:** Teamül gereği küçük harfle başlar ve *camelCase* kullanılır (örneğin `applyBrakes`).
- **Parametre Listesi:** Parantez içinde virgülle ayrılmış giriş parametreleri listesi: `(int decrement)`.
- **İstisnalar Listesi (*Exception List*):** `throws` anahtar sözcüğü ile fırlatılabilecek istisnalar (isteğe bağlı).
- **Metot Gövdesi:** `{ }` arasındaki kod bloğu.

### Metot Aşırı Yükleme (Method Overloading)
Java, aynı ada sahip ancak farklı parametre listelerine (farklı sayıda veya türde parametrelere) sahip birden fazla metot tanımlamanıza olanak tanır. Buna **aşırı yükleme (overloading)** denir:

```java
public class DataArtist {
    public void draw(String s) { ... }
    public void draw(int i) { ... }
    public void draw(double f) { ... }
    public void draw(int i, double f) { ... }
}
```

---

# 4. Yapıcılar / Kurucular (Constructors)

Bir sınıf, o sınıftan nesneler oluşturulurken çağrılan bir veya daha fazla **yapıcı (constructor)** içerir. Yapıcı bildirimleri metot bildirimlerine benzer, ancak sınıf adıyla aynı ada sahiptirler ve bir dönüş türleri yoktur:

```java
public Bicycle(int startCadence, int startSpeed, int startGear) {
    gear = startGear;
    cadence = startCadence;
    speed = startSpeed;
}
```

Bir sınıf için açıkça hiçbir yapıcı yazmazsanız, Java derleyicisi parametresiz varsayılan bir yapıcı (*no-argument default constructor*) otomatik olarak sağlar.

---

# 5. Metotlara ve Kuruculara Bilgi Aktarma

### İlkel Tür Argümanları (Değer ile İletim - Pass-by-Value)
İlkel veri türleri (`int`, `double` vb.) metotlara **değer ile (by value)** iletilir. Metot içinde parametrenin değerinde yapılan herhangi bir değişiklik metodun çağrıldığı yerdeki orijinal değişkeni etkilemez.

### Referans Türü Argümanları
Nesne referansları da metotlara değer ile iletilir; yani referansın bir kopyası metoda geçer. Metot içinde bu referans üzerinden nesnenin alanları veya durumları değiştirilirse, bu değişiklikler orijinal nesneye yansır. Ancak referansın kendisine başka bir nesne atanırsa, bu durum çağıran taraftaki orijinal referansı değiştirmez.

### Değişken Sayıda Argüman (Varargs)
Bir metoda aynı türden rastgele sayıda argüman iletmek için `...` sözdizimi kullanılır:

```java
public Polygon polygonFrom(Point... corners) {
    int numberOfSides = corners.length;
    // corners bir dizi gibi işlenir
}
```
