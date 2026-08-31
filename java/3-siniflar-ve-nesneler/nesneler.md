# Ders: Nesneleri Kullanma (Objects & Using Objects)

Tipik bir Java programı birçok nesne oluşturur ve bu nesneler birbirleriyle metotlar aracılığıyla etkileşime girer. Bu etkileşimler sayesinde bir program GUI pencereleri oluşturma, animasyon yürütme veya ağ üzerinden bilgi gönderme ve alma gibi görevleri yerine getirir.

1. [**Nesne Oluşturma (Creating Objects)**](#1-nesne-oluşturma-creating-objects)
2. [**Nesneleri Kullanma (Using Objects)**](#2-nesneleri-kullanma-using-objects)
3. [**`this` Anahtar Sözcüğü**](#3-this-anahtar-sözcüğü)
4. [**Sınıf Üyeleri (Static Alanlar ve Metotlar)**](#4-sınıf-üyeleri-static-alanlar-ve-metotlar)
5. [**Çöp Toplama (Garbage Collection)**](#5-çöp-toplama-garbage-collection)
---

# 1. Nesne Oluşturma (Creating Objects)

Bir sınıf, nesneler için bir taslak (*blueprint*) sağlar; bir nesneyi bir sınıftan oluşturursunuz. Aşağıdaki `CreateObjectDemo` programı üç nesne oluşturur: bir `Point` nesnesi ve iki `Rectangle` nesnesi:

```java
public class CreateObjectDemo {
    public static void main(String[] args) {
        
        // Bir Point nesnesi ve iki Rectangle nesnesi bildir ve oluştur
        Point originOne = new Point(23, 94);
        Rectangle rectOne = new Rectangle(originOne, 100, 200);
        Rectangle rectTwo = new Rectangle(50, 100);
        
        // rectOne'ın genişliğini, yüksekliğini ve alanını yazdır
        System.out.println("Width of rectOne: " + rectOne.width);
        System.out.println("Height of rectOne: " + rectOne.height);
        System.out.println("Area of rectOne: " + rectOne.getArea());
        
        // rectTwo'nun konumunu ayarla
        rectTwo.origin = originOne;
        
        // rectTwo'nun konumunu yazdır
        System.out.println("X Position of rectTwo: " + rectTwo.origin.x);
        System.out.println("Y Position of rectTwo: " + rectTwo.origin.y);
        
        // rectTwo'yu taşı ve yeni konumunu yazdır
        rectTwo.move(40, 72);
        System.out.println("X Position of rectTwo: " + rectTwo.origin.x);
        System.out.println("Y Position of rectTwo: " + rectTwo.origin.y);
    }
}
```

Bir nesne oluşturma işlemi üç adımdan oluşur:

### 1. Bildirim (Declaration)
Bir değişken adı ile bir nesne türünü ilişkilendirir:
```java
Point originOne;
```
Bu satır henüz bir nesne oluşturmaz. Değişken, geçerli bir nesneye atanana kadar `null` değerini tutar:

<figure style="text-align: center;">
  <img src="_media/figures/objects-null.gif" alt="Null Referans" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">originOne henüz hiçbir nesneye işaret etmiyor (null).</figcaption>
</figure>

### 2. Örnekleme (Instantiation)
`new` işleci nesne için bellek ayırır ve o belleğe bir referans döndürür:
```java
Point originOne = new Point(23, 94);
```

<figure style="text-align: center;">
  <img src="_media/figures/objects-oneRef.gif" alt="Tek Referans" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">originOne bellekteki yeni Point nesnesine referans verir.</figcaption>
</figure>

Birden fazla değişken aynı nesneye referans verebilir:

<figure style="text-align: center;">
  <img src="_media/figures/objects-multipleRefs.gif" alt="Çoklu Referans" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Birden fazla referans aynı nesneye işaret edebilir.</figcaption>
</figure>

### 3. Başlatma (Initialization)
`new` işlecinin ardından gelen yapıcı (*constructor*) çağrısı yeni oluşturulan nesneyi başlatır.

---

# 2. Nesneleri Kullanma (Using Objects)

Bir nesne oluşturduktan sonra onu bir şey yapmak için kullanmak istersiniz:

- **Alanlara Erişim:** Bir nesnenin alanına erişmek için nesne referansı ve alan adı arasına nokta (`.`) konur:
  ```java
  System.out.println("Width of rectOne: " + rectOne.width);
  ```
- **Metotları Çağırma:** Bir nesnenin metodunu çağırmak için:
  ```java
  rectOne.move(40, 72);
  System.out.println("Area of rectOne: " + rectOne.getArea());
  ```

---

# 3. `this` Anahtar Sözcüğü

Bir örnek metodu veya yapıcı içinde `this`, **geçerli nesneye (current object)** yapılan bir referanstır.

### Alan Gölgelemesini (Shadowing) Çözme
Bir alan bir metot parametresiyle aynı ada sahip olduğunda `this` kullanılır:

```java
public class Point {
    public int x = 0;
    public int y = 0;
    
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

### Yapıcı İçinden Başka Bir Yapıcıyı Çağırma (Explicit Constructor Invocation)
Bir yapıcı içinden aynı sınıftaki başka bir yapıcıyı çağırmak için `this()` kullanılır (çağrı ilk satırda olmalıdır):

```java
public class Rectangle {
    private int x, y;
    private int width, height;
        
    public Rectangle() {
        this(0, 0, 1, 1);
    }
    public Rectangle(int width, int height) {
        this(0, 0, width, height);
    }
    public Rectangle(int x, int y, int width, int height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}
```

---

# 4. Sınıf Üyeleri (Static Alanlar ve Metotlar)

Bir sınıfın tüm örnekleri tarafından paylaşılan alanlar ve metotlar tanımlamak için `static` anahtar sözcüğü kullanılır.

- **Statik Alanlar:** `Bicycle.numberOfBicycles` gibi doğrudan sınıf adı üzerinden erişilir.
- **Statik Metotlar:** Nesne oluşturulmadan doğrudan çağrılabilir: `Math.sqrt(4.0)`.
- **Sabitler:** `static final double PI = 3.141592653589793;`

---

# 5. Çöp Toplama (Garbage Collection)

Java çalışma zamanı ortamı, artık kullanılmayan nesnelerin belleğini otomatik olarak serbest bırakan bir **çöp toplayıcıya (Garbage Collector - GC)** sahiptir. Bir nesneye sistemde artık hiçbir aktif referans kalmadığında (örneğin değişken `null` yapıldığında veya kapsam dışına çıktığında), nesne çöp toplanmaya uygun hale gelir.
