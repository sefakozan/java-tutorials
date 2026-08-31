# Ders: Enum Türleri (Enum Types)

Bir **enum türü (numaralandırılmış tür / enumerated type)**, bir değişkenin önceden tanımlanmış bir sabitler kümesi olmasını sağlayan özel bir veri türüdür. Değişken yalnızca kendisi için önceden tanımlanmış değerlerden birine eşit olmalıdır.

Yaygın örnekler arasında pusula yönleri (`NORTH`, `SOUTH`, `EAST`, `WEST`) ve haftanın günleri yer alır.

1. [**Enum Bildirimi ve Temel Kullanımı**](#1-enum-bildirimi-ve-temel-kullanımı)
2. [**`switch` İfadesinde Enum Kullanımı**](#2-switch-ifadesinde-enum-kullanımı)
3. [**Gelişmiş Enum Özellikleri (Alanlar, Metotlar ve Yapıcılar)**](#3-gelişmiş-enum-özellikleri-alanlar-metotlar-ve-yapıcılar)
---

# 1. Enum Bildirimi ve Temel Kullanımı

Bir enum türü tanımlamak için `enum` anahtar sözcüğünü kullanırsınız:

```java
public enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY,
    THURSDAY, FRIDAY, SATURDAY 
}
```

> **Teamül:** Enum türü alanları sabit oldukları için adları tamamen BÜYÜK HARFLERLE yazılır.

Sabit bir değer kümesini temsil etmeniz gerektiğinde her zaman enum türlerini kullanmalısınız.

---

# 2. `switch` İfadesinde Enum Kullanımı

Enum türleri `switch` ifadeleriyle mükemmel bir şekilde entegre olur:

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
                System.out.println("Hafta içi günleri fena değil.");
                break;
        }
    }
    
    public static void main(String[] args) {
        EnumTest firstDay = new EnumTest(Day.MONDAY);
        firstDay.tellItLikeItIs();
        EnumTest thirdDay = new EnumTest(Day.WEDNESDAY);
        thirdDay.tellItLikeItIs();
        EnumTest fifthDay = new EnumTest(Day.FRIDAY);
        fifthDay.tellItLikeItIs();
        EnumTest sixthDay = new EnumTest(Day.SATURDAY);
        sixthDay.tellItLikeItIs();
    }
}
```

---

# 3. Gelişmiş Enum Özellikleri (Alanlar, Metotlar ve Yapıcılar)

Java programlama dilinde enum türleri diğer birçok dildeki gibi basit tamsayı takma adları değildir; tam özellikli sınıflardır. Alanlar (*fields*), metotlar ve yapıcılar (*constructors*) içerebilirler:

```java
public enum Planet {
    MERCURY (3.303e+23, 2.4397e6),
    VENUS   (4.869e+24, 6.0518e6),
    EARTH   (5.976e+24, 6.37814e6),
    MARS    (6.421e+23, 3.3972e6),
    JUPITER (1.9e+27,   7.1492e7),
    SATURN  (5.688e+26, 6.0268e7),
    URANUS  (8.686e+25, 2.5559e7),
    NEPTUNE (1.024e+26, 2.4746e7);

    private final double mass;   // kilogram cinsinden
    private final double radius; // metre cinsinden
    
    // Enum yapıcısı (constructor)
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }
    
    public double mass() { return mass; }
    public double radius() { return radius; }

    // Evrensel yerçekimi sabiti (m3 kg-1 s-2)
    public static final double G = 6.67300E-11;

    public double surfaceGravity() {
        return G * mass / (radius * radius);
    }
    public double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
}
```

### Yerleşik Metotlar
- `Planet.values()`: Tanımlı tüm sabitleri tanımlandıkları sırayla bir dizi olarak döndürür.
- `Planet.valueOf("EARTH")`: Belirtilen dize adına sahip enum sabitini döndürür.
