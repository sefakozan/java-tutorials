# Enum Türleri (Enum Types)

Bir **enum türü (enum type)**, alanları önceden tanımlanmış sabit bir kümeden oluşan özel bir veri türüdür.

Sabitlerin adları geleneksel olarak BÜYÜK HARFLE yazılır. Örneğin haftanın günlerini temsil eden bir enum:

```java
public enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY,
    THURSDAY, FRIDAY, SATURDAY 
}
```

---

## Enum'ların Kullanımı

Enum türleri, `switch` ifadeleriyle birlikte yaygın olarak kullanılır:

```java
public class EnumTest {
    Day day;
    
    public EnumTest(Day day) {
        this.day = day;
    }
    
    public void tellItLikeItIs() {
        switch (day) {
            case MONDAY:
                System.out.println("Pazartesileri zordur.");
                break;
            case FRIDAY:
                System.out.println("Cuma günleri harikadır.");
                break;
            case SATURDAY: case SUNDAY:
                System.out.println("Hafta sonları en iyisidir.");
                break;
            default:
                System.out.println("Hafta içi günleri normaldir.");
                break;
        }
    }
}
```

---

## Alan ve Metot İçeren Gelişmiş Enum'lar

Java'da enum'lar tam teşekküllü sınıflardır; bu nedenle kendi yapıcılarını, alanlarını ve metotlarını içerebilirler:

```java
public enum Planet {
    MERCURY (3.303e+23, 2.4397e6),
    VENUS   (4.869e+24, 6.0518e6),
    EARTH   (5.976e+24, 6.37814e6);

    private final double mass;   // kilogram cinsinden kütle
    private final double radius; // metre cinsinden yarıçap

    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }

    public double mass() { return mass; }
    public double radius() { return radius; }
}
```
