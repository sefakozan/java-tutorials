# Arayüzler (Interfaces)

Java programlama dilinde bir **arayüz (interface)**, sınıfların uygulayabileceği bir referans türüdür. Arayüzler yalnızca sabitler, metot imzaları, varsayılan metotlar (`default methods`), statik metotlar ve yuvalanmış türler içerebilir.

---

## Arayüz Bildirimi

Bir arayüz bildirmek için `class` yerine `interface` anahtar sözcüğü kullanılır:

```java
public interface OperateCar {

    // Sabit bildirimleri (otomatik olarak public static final kabul edilir)
    int MAX_SPEED = 200;

    // Metot imzaları (otomatik olarak public abstract kabul edilir)
    int turn(Direction direction, double radius, double startSpeed, double endSpeed);
    int changeLanes(Direction direction, double startSpeed, double endSpeed);
    int signalTurn(Direction direction, boolean signalOn);
    int getRadarFront(double distanceToCar, double speedOfCar);
}
```

---

## Arayüzleri Uygulama (`implements`)

Bir sınıf bir arayüzü uyguladığında, arayüzde bildirilen tüm gövdesiz metotları somut olarak tanımlamayı taahhüt eder:

```java
public class OperateBMW760i implements OperateCar {

    public int turn(Direction direction, double radius, double startSpeed, double endSpeed) {
        // BMW'ye özgü dönüş mantığı
        return 0;
    }

    public int changeLanes(Direction direction, double startSpeed, double endSpeed) {
        return 0;
    }

    public int signalTurn(Direction direction, boolean signalOn) {
        return 0;
    }

    public int getRadarFront(double distanceToCar, double speedOfCar) {
        return 0;
    }
}
```

Bir sınıf birden çok arayüzü aynı anda uygulayabilir:

```java
public class MyClass implements Interface1, Interface2 {
    // ...
}
```

---

## Varsayılan Metotlar (Default Methods)

Java SE 8 ile birlikte, var olan arayüzleri uygulayan sınıfları bozmadan yeni işlevler eklemek amacıyla **varsayılan metotlar (`default`)** tanıtılmıştır:

```java
public interface TimeClient {
    void setTime(int hour, int minute, int second);
    
    // Varsayılan gövdeye sahip metot
    default String getZonedTime(String zoneId) {
        return "Time for zone: " + zoneId;
    }
}
```
