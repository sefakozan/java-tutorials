# Ders: Kalıtım ve Üst Sınıflar (Inheritance)

Java'da bir sınıf başka bir sınıftan **türetilebilir (derived)**. Türetilen sınıfa **alt sınıf (subclass / derived class / child class)**, kendisinden türetilen sınıfa ise **üst sınıf (superclass / base class / parent class)** adı verilir.

Java'da her sınıf (açıkça başka bir üst sınıf belirtilmese bile) `java.lang.Object` sınıfının doğrudan veya dolaylı bir alt sınıfıdır:

<figure style="text-align: center;">
  <img src="_media/figures/classes-object.gif" alt="Object Sınıf Hiyerarşisi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Tüm sınıflar Object sınıfından türer.</figcaption>
</figure>

1. [**Kalıtım Örneği**](#1-kalıtım-örneği)
2. [**Bir Alt Sınıfta Neler Yapabilirsiniz?**](#2-bir-alt-sınıfta-neler-yapabilirsiniz)
3. [**Metot Geçersiz Kılma (Method Overriding)**](#3-metot-geçersiz-kılma-method-overriding)
4. [**`super` Anahtar Sözcüğünün Kullanımı**](#4-super-anahtar-sözcüğünün-kullanımı)
5. [**Nesneleri Dönüştürme (Casting Objects)**](#5-nesneleri-dönüştürme-casting-objects)
6. [**`final` Metotlar ve Sınıflar**](#6-final-metotlar-ve-sınıflar)
---

# 1. Kalıtım Örneği

Aşağıda `Bicycle` sınıfından türeyen `MountainBike` sınıfı gösterilmektedir:

```java
public class MountainBike extends Bicycle {
        
    // MountainBike alt sınıfının kendine özgü alanı
    public int seatHeight;

    // MountainBike kurucusu
    public MountainBike(int startHeight,
                        int startCadence,
                        int startSpeed,
                        int startGear) {
        super(startCadence, startSpeed, startGear);
        seatHeight = startHeight;
    }   
        
    // MountainBike alt sınıfının kendine özgü metodu
    public void setHeight(int newValue) {
        seatHeight = newValue;
    }   
}
```

`MountainBike` sınıfı, `Bicycle` sınıfının tüm `public` ve `protected` alan ve metotlarını otomatik olarak miras alır ve kendi özel `seatHeight` alanını ve metodunu ekler.

---

# 2. Bir Alt Sınıfta Neler Yapabilirsiniz?

Bir alt sınıf üst sınıfından tüm `public` ve `protected` üyeleri miras alır. Bir alt sınıfta:
- Miras alınan alanları doğrudan kullanabilirsiniz.
- Üst sınıfta bulunmayan **yeni alanlar** bildirebilirsiniz.
- Üst sınıfta bulunmayan **yeni metotlar** bildirebilirsiniz.
- Üst sınıfın metotlarını **geçersiz kılabilirsiniz (*override*)**.
- Üst sınıfın kurucusunu `super` anahtar sözcüğü ile çağırabilirsiniz.

---

# 3. Metot Geçersiz Kılma (Method Overriding)

Bir alt sınıftaki örnek metodu, üst sınıftaki bir örnek metoduyla **tam olarak aynı ada, parametre listesine ve uyumlu dönüş türüne** sahipse, alt sınıftaki metot üst sınıftakini **geçersiz kılar (*overrides*)**.

Bir metodun geçersiz kılındığını derleyiciye doğrulatmak için `@Override` ek açıklamasını (*annotation*) kullanmak en iyi uygulamadır:

```java
public class Animal {
    public void makeSound() {
        System.out.println("Animal sound");
    }
}

public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Hav hav!");
    }
}
```

---

# 4. `super` Anahtar Sözcüğünün Kullanımı

### Üst Sınıf Üyelerine Erişim
Alt sınıf, üst sınıfta geçersiz kıldığı bir metodu çağırmak istediğinde `super` anahtar sözcüğünü kullanabilir:

```java
public class Subclass extends Superclass {
    @Override
    public void printMethod() {
        super.printMethod(); // Üst sınıftaki printMethod çağrılır
        System.out.println("Printed in Subclass");
    }
}
```

### Üst Sınıf Kurucusunu Çağırma
Alt sınıf kurucusunun ilk satırında `super()` çağrısı yapılarak üst sınıfın kurucusu yürütülür:

```java
public MountainBike(int startHeight, int startCadence, int startSpeed, int startGear) {
    super(startCadence, startSpeed, startGear);
    seatHeight = startHeight;
}
```

---

# 5. Nesneleri Dönüştürme (Casting Objects)

Bir alt sınıf nesnesi her zaman üst sınıf türündeki bir değişkene örtük olarak atanabilir (*upcasting*):

```java
Bicycle bike = new MountainBike(20, 10, 1, 1);
```

Ancak üst sınıf referansından alt sınıf metotlarına erişmek için açık tür dönüşümü (*downcasting*) yapılmalıdır:

```java
if (bike instanceof MountainBike) {
    MountainBike mb = (MountainBike) bike;
    mb.setHeight(25);
}
```

---

# 6. `final` Metotlar ve Sınıflar

- **`final` Metotlar:** Bir metodun alt sınıflar tarafından geçersiz kılınmasını (*override*) engellemek için `final` değiştiricisi kullanılır.
- **`final` Sınıflar:** Bir sınıfın alt sınıflarının türetilmesini tamamen engellemek için sınıf `final` olarak bildirilir (örneğin standart Java kütüphanesindeki `java.lang.String` sınıfı `final` bir sınıftır).
