# Ders: Sınıf Nedir? (What Is a Class?)

Gerçek dünyada sıklıkla aynı türden birçok bireysel nesne bulursunuz. Dünyada aynı modelde binlerce bisiklet bulunabilir. Her bisiklet aynı taslaktan üretilmiştir.

1. [**Sınıf Kavramı ve Taslaklar**](#1.-sınıf-kavramı-ve-taslaklar)
2. [**Bicycle Sınıf Örneği**](#2.-bicycle-sınıf-örneği)
3. [**Nesneleri Örnekleme ve BicycleDemo**](#3.-nesneleri-örnekleme-ve-bicycledemo)
---

# 1. Sınıf Kavramı ve Taslaklar

Nesne yönelimli terminolojide, bisikletinizin *bisikletler* olarak bilinen nesneler sınıfının bir **örneği (instance)** olduğunu söyleriz. Bir **sınıf (class)**, bireysel nesnelerin oluşturulduğu taslaktır.

---

# 2. Bicycle Sınıf Örneği

Aşağıda bir bisikletin olası bir uygulamasını temsil eden bir `Bicycle` sınıfı gösterilmiştir:

```java
class Bicycle {

    int cadence = 0;
    int speed = 0;
    int gear = 1;

    void changeCadence(int newValue) {
         cadence = newValue;
    }

    void changeGear(int newValue) {
         gear = newValue;
    }

    void speedUp(int increment) {
         speed = speed + increment;   
    }

    void applyBrakes(int decrement) {
         speed = speed - decrement;
    }

    void printStates() {
         System.out.println("cadence:" +
             cadence + " speed:" + 
             speed + " gear:" + gear);
    }
}
```

---

# 3. Nesneleri Örnekleme ve BicycleDemo

Aşağıda iki ayrı `Bicycle` nesnesi oluşturan ve metotlarını çağıran bir `BicycleDemo` sınıfı verilmiştir:

```java
class BicycleDemo {
    public static void main(String[] args) {

        // İki farklı Bicycle nesnesi oluşturuluyor
        Bicycle bike1 = new Bicycle();
        Bicycle bike2 = new Bicycle();

        // bike1 metotları çağrılıyor
        bike1.changeCadence(50);
        bike1.speedUp(10);
        bike1.changeGear(2);
        bike1.printStates();

        // bike2 metotları çağrılıyor
        bike2.changeCadence(40);
        bike2.speedUp(10);
        bike2.changeGear(3);
        bike2.printStates();
    }
}
```
