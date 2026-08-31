# Ders: Arayüzler (Interfaces)

Java programlama dilinde bir **arayüz (interface)**, bir sınıfın sağlamayı taahhüt ettiği metot imzalarını ve sabitleri tanımlayan bir referans türüdür. Arayüzler sınıflar arasında ortak davranış sözleşmeleri oluşturur.

1. [**Arayüz Tanımlama (Defining an Interface)**](#1-arayüz-tanımlama-defining-an-interface)
2. [**Arayüzü Uygulama (Implementing an Interface)**](#2-arayüzü-uygulama-implementing-an-interface)
3. [**Arayüzü Veri Türü Olarak Kullanma**](#3-arayüzü-veri-türü-olarak-kullanma)
4. [**Varsayılan Metotlar (Default Methods - Java SE 8+)**](#4-varsayılan-metotlar-default-methods---java-se-8)
---

# 1. Arayüz Tanımlama (Defining an Interface)

Bir arayüz bildirimi `interface` anahtar sözcüğü ile başlar:

```java
public interface Relatable {
        
    // Bu (this) nesne ile other nesnesini karşılaştırır.
    // 1: this > other, 0: this == other, -1: this < other
    public int isLargerThan(Relatable other);
}
```

Bir arayüzün gövdesi şunları içerebilir:
- **Soyut Metotlar (*Abstract Methods*):** Gövdesi olmayan metotlar (örtük olarak `public` ve `abstract`tır).
- **Sabit Bildirimleri (*Constants*):** Değerleri değiştirilemeyen alanlar (örtük olarak `public static final`dır).
- **Varsayılan Metotlar (*Default Methods*):** `default` anahtar sözcüğü ile tanımlanan gövdeli metotlar (Java SE 8+).
- **Statik Metotlar (*Static Methods*):** `static` anahtar sözcüğü ile tanımlanan yardımcı metotlar (Java SE 8+).

Bir arayüz başka arayüzleri genişletebilir (`extends`):

```java
public interface GroupedInterface extends Interface1, Interface2, Interface3 {
    // Tüm arayüzlerin metotlarını miras alır
}
```

---

# 2. Arayüzü Uygulama (Implementing an Interface)

Bir sınıf bir arayüzü uygulamak için sınıf bildiriminde `implements` anahtar sözcüğünü kullanır:

```java
public class RectanglePlus 
    implements Relatable {
    
    public int width = 0;
    public int height = 0;
    public Point origin;

    // Kurucular
    public RectanglePlus() {
        origin = new Point(0, 0);
    }
    public RectanglePlus(Point p, int w, int h) {
        origin = p;
        width = w;
        height = h;
    }

    public int getArea() {
        return width * height;
    }
    
    // Relatable arayüzünün gerektirdiği metot
    public int isLargerThan(Relatable other) {
        RectanglePlus otherRect = (RectanglePlus)other;
        if (this.getArea() < otherRect.getArea())
            return -1;
        else if (this.getArea() > otherRect.getArea())
            return 1;
        else
            return 0;               
    }
}
```

> **Not:** Bir arayüzü uygulayan bir sınıf, arayüzde bildirilen tüm soyut metotları `public` erişim belirleyicisi ile uygulamak zorundadır. Aksi takdirde sınıf `abstract` olarak bildirilmelidir.

---

# 3. Arayüzü Veri Türü Olarak Kullanma

Yeni bir arayüz tanımladığınızda, yeni bir referans veri türü tanımlamış olursunuz. Herhangi bir veri türü adını kullanabileceğiniz her yerde arayüz adlarını kullanabilirsiniz:

```java
public Object findLargest(Relatable object1, Relatable object2) {
   if (object1.isLargerThan(object2) > 0)
      return object1;
   else 
      return object2;
}
```

Bu metot, `Relatable` arayüzünü uygulayan herhangi bir nesne çiftini (dikdörtgenler, daireler, çizgiler vb.) karşılaştırabilir.

---

# 4. Varsayılan Metotlar (Default Methods - Java SE 8+)

Java SE 8'den önce, yayınlanmış bir arayüze yeni bir metot eklemek, o arayüzü uygulayan tüm mevcut sınıfların bozulmasına (derlenememesine) neden oluyordu. **Varsayılan metotlar (default methods)**, mevcut implementasyonları bozmadan bir arayüze varsayılan bir gövdeye sahip yeni metotlar eklemenize olanak tanır:

```java
public interface TimeClient {
    void setTime(int hour, int minute, int second);
    void setDate(int day, int month, int year);
    
    // Varsayılan metot
    default ZonedDateTime getZonedDateTime(String zoneString) {
        return ZonedDateTime.of(getLocalDateTime(), getZoneId(zoneString));
    }
    
    // Statik metot
    static ZoneId getZoneId (String zoneString) {
        try {
            return ZoneId.of(zoneString);
        } catch (DateTimeException e) {
            System.err.println("Invalid time zone: " + zoneString +
                "; using default time zone instead.");
            return ZoneId.systemDefault();
        }
    }
}
```
