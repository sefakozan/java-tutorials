# Ders: Kalıtım ve Üst Sınıflar (Inheritance)

Bir sınıf, başka bir sınıftan türetilerek onun tüm `public` ve `protected` alan ve metotlarını devralabilir. Türetilen sınıfa **alt sınıf (subclass)**, türetildiği sınıfa ise **üst sınıf (superclass)** denir.

1. [**Java Sınıf Hiyerarşisi ve Object Sınıfı**](#1.-java-sınıf-hiyerarşisi-ve-object-sınıfı)
2. [**Metot Ezme (Method Overriding)**](#2.-metot-ezme-(method-overriding))
3. [**super Anahtar Sözcüğü**](#3.-super-anahtar-sözcüğü)
4. [**final Sınıflar ve Metotlar**](#4.-final-sınıflar-ve-metotlar)
---

# 1. Java Sınıf Hiyerarşisi ve Object Sınıfı

Java'da her sınıf doğrudan veya dolaylı olarak `java.lang.Object` sınıfından türer. `Object` sınıfı Java hiyerarşisinin en tepesindeki kök sınıftır:

<figure style="text-align: center;">
  <img src="_media/figures/classes-object.gif" alt="Object Kök Sınıfı" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Object sınıfı tüm Java sınıflarının evrensel üst sınıfıdır.</figcaption>
</figure>

```java
public class MountainBike extends Bicycle {
    public int seatHeight;

    public MountainBike(int startHeight, int startCadence, int startSpeed, int startGear) {
        super(startCadence, startSpeed, startGear);
        seatHeight = startHeight;
    }
}
```

---

# 2. Metot Ezme (Method Overriding)

Bir alt sınıf, üst sınıfındaki bir metodu aynı imza ile yeniden tanımlarsa metodu ezmiş (override etmiş) olur:

```java
public class Animal {
    public void makeSound() {
        System.out.println("Bir hayvan sesi");
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

# 3. super Anahtar Sözcüğü

- `super(...)`: Üst sınıfın yapıcısını çağırır.
- `super.metotAdi()`: Üst sınıfta tanımlı orijinal metot sürümünü çağırır.

---

# 4. final Sınıflar ve Metotlar

- **final Metot:** Alt sınıflar tarafından ezilemez.
- **final Sınıf:** Alt sınıf türetilmesini engeller (`String` sınıfı gibi).
