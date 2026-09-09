# Enum Türleri (Enum Types)

Bir *enum türü (enum type)*, bir değişkenin önceden tanımlanmış bir sabitler kümesi olmasını sağlayan özel bir veri türüdür. Değişken, kendisi için önceden tanımlanmış değerlerden birine eşit olmalıdır. Yaygın örnekler arasında pusula yönleri (NORTH, SOUTH, EAST ve WEST değerleri) ve haftanın günleri yer alır.

Sabit oldukları için, bir enum türünün alanlarının adları büyük harflerle yazılır.

Java programlama dilinde `enum` anahtar sözcüğünü kullanarak bir enum türü tanımlarsınız. Örneğin haftanın günlerini temsil eden bir enum türünü şu şekilde belirlersiniz:

```java
public enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY,
    THURSDAY, FRIDAY, SATURDAY 
}
```

Sabit bir sabitler kümesini temsil etmeniz gereken her zaman enum türlerini kullanmalısınız. Buna güneş sistemimizdeki gezegenler gibi doğal enum türleri ve derleme zamanında tüm olası değerleri bildiğiniz veri kümeleri (örneğin bir menüdeki seçenekler, komut satırı bayrakları vb.) dahildir.

İşte yukarıda tanımlanan `Day` enum'unun nasıl kullanılacağını gösteren bir kod:

```java
public class EnumTest {
    Day day;
    
    public EnumTest(Day day) {
        this.day = day;
    }
    
    public void tellItLikeItIs() {
        switch (day) {
            case MONDAY:
                System.out.println("Mondays are bad.");
                break;
                    
            case FRIDAY:
                System.out.println("Fridays are better.");
                break;
                         
            case SATURDAY: case SUNDAY:
                System.out.println("Weekends are best.");
                break;
                        
            default:
                System.out.println("Midweek days are so-so.");
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
        EnumTest seventhDay = new EnumTest(Day.SUNDAY);
        seventhDay.tellItLikeItIs();
    }
}
```

Çıktı şudur:

```text
Mondays are bad.
Midweek days are so-so.
Fridays are better.
Weekends are best.
Weekends are best.
```

Java programlama dili enum türleri, diğer dillerdeki benzerlerinden çok daha güçlüdür. `enum` bildirimi bir *sınıf* (buna bir *enum türü* denir) tanımlar. Enum sınıfı gövdesi metotlar ve diğer alanları içerebilir. Derleyici, bir enum oluşturduğunda otomatik olarak bazı özel metotlar ekler. Örneğin enum'ın tüm değerlerini bildirildikleri sırada içeren bir dizi döndüren statik bir `values` metoduna sahiptirler. Bu metot, bir enum türünün değerleri üzerinde yineleme yapmak için genellikle `for-each` yapısıyla birlikte kullanılır. Örneğin aşağıdaki `Planet` sınıfı örneğinden alınan bu kod, güneş sistemindeki tüm gezegenler üzerinde yineler:

```java
for (Planet p : Planet.values()) {
    System.out.printf("Your weight on %s is %f%n",
                      p, p.surfaceWeight(mass));
}
```

> **Not:** *Tüm* enum'lar örtük olarak `java.lang.Enum` sınıfını genişletir (`extends`). Bir sınıf yalnızca bir ebeveyni genişletebileceğinden (bkz. [Sınıfları Bildirme](java/3-siniflar-ve-nesneler/sinif-bildirimi.md)), Java dili durumun çoklu kalıtımını desteklemez ve bu nedenle bir enum başka hiçbir şeyi genişletemez.

Aşağıdaki örnekte `Planet`, güneş sistemindeki gezegenleri temsil eden bir enum türüdür. Sabit kütle ve yarıçap özellikleriyle tanımlanırlar:

Her bir enum sabiti, kütle ve yarıçap parametreleri için değerlerle bildirilir. Bu değerler, sabit oluşturulduğunda yapıcıya iletilir. Java sabitlerin herhangi bir alandan veya metottan önce, ilk olarak tanımlanmasını gerektirir. Ayrıca alanlar ve metotlar olduğunda, enum sabitleri listesi noktalı virgülle bitmelidir.

> **Not:** Bir enum türünün yapıcısı (constructor) `package-private` veya `private` erişimli olmalıdır. Enum gövdesinin başında tanımlanan sabitleri otomatik olarak oluşturur. Bir enum yapıcısını kendiniz doğrudan çağıramazsınız.

Özelliklerine ve yapıcısına ek olarak `Planet`, her gezegendeki bir nesnenin yüzey yerçekimini ve ağırlığını almanıza olanak tanıyan metotlara sahiptir. İşte Dünya'daki ağırlığınızı (herhangi bir birimde) alan ve tüm gezegenlerdeki ağırlığınızı (aynı birimde) hesaplayıp yazdıran örnek bir program:

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
    Planet(double mass, double radius) {
        this.mass = mass;
        this.radius = radius;
    }
    private double mass() { return mass; }
    private double radius() { return radius; }

    // evrensel yerçekimi sabiti (m3 kg-1 s-2)
    public static final double G = 6.67300E-11;

    double surfaceGravity() {
        return G * mass / (radius * radius);
    }
    double surfaceWeight(double otherMass) {
        return otherMass * surfaceGravity();
    }
    public static void main(String[] args) {
        if (args.length != 1) {
            System.err.println("Usage: java Planet <earth_weight>");
            System.exit(-1);
        }
        double earthWeight = Double.parseDouble(args[0]);
        double mass = earthWeight/EARTH.surfaceGravity();
        for (Planet p : Planet.values())
           System.out.printf("Your weight on %s is %f%n",
                             p, p.surfaceWeight(mass));
    }
}
```

Komut satırından `Planet.class` dosyasını 175 argümanıyla çalıştırırsanız, şu çıktıyı alırsınız:

```bash
$ java Planet 175
Your weight on MERCURY is 66.107583
Your weight on VENUS is 158.374842
Your weight on EARTH is 175.000000
Your weight on MARS is 66.279007
Your weight on JUPITER is 442.847567
Your weight on SATURN is 186.552719
Your weight on URANUS is 158.397260
Your weight on NEPTUNE is 199.207413
```
