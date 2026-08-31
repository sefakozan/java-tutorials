# Ders: Arayüz Nedir? (What Is an Interface?)

Nesneler dış dünya ile olan etkileşimlerini dışa sundukları metotlar aracılığıyla tanımlarlar. Metotlar, nesnenin dış dünyayla olan **arayüzünü (interface)** oluşturur.

1. [**Arayüz Kavramı ve Sözleşmeler**](#1.-arayüz-kavramı-ve-sözleşmeler)
2. [**Bicycle Arayüzü Tanımlama**](#2.-bicycle-arayüzü-tanımlama)
3. [**implements ile Arayüzü Uygulama**](#3.-implements-ile-arayüzü-uygulama)
---

# 1. Arayüz Kavramı ve Sözleşmeler

Örneğin televizyonunuzun ön panelindeki düğmeler, sizinle cihazın iç devreleri arasındaki arayüzdür. Televizyonu açıp kapatmak için "güç" düğmesine basarsınız.

En yaygın biçimiyle bir arayüz, boş gövdelere sahip bir grup ilgili metottur. Bir bisikletin davranışını bir arayüz olarak şu şekilde belirtebiliriz:

---

# 2. Bicycle Arayüzü Tanımlama

```java
interface Bicycle {

    // Kadans değiştirme
    void changeCadence(int newValue);

    // Vites değiştirme
    void changeGear(int newValue);

    // Hızlanma
    void speedUp(int increment);

    // Fren uygulama
    void applyBrakes(int decrement);
}
```

---

# 3. implements ile Arayüzü Uygulama

Bu arayüzü uygulamak için sınıf bildiriminde `implements` anahtar sözcüğü kullanılır:

```java
class ACMEBicycle implements Bicycle {

    int cadence = 0;
    int speed = 0;
    int gear = 1;

    // Compiler bu metotların uygulanmasını zorunlu kılar
    public void changeCadence(int newValue) {
         cadence = newValue;
    }

    public void changeGear(int newValue) {
         gear = newValue;
    }

    public void speedUp(int increment) {
         speed = speed + increment;   
    }

    public void applyBrakes(int decrement) {
         speed = speed - decrement;
    }

    public void printStates() {
         System.out.println("cadence:" +
             cadence + " speed:" + 
             speed + " gear:" + gear);
    }
}
```
