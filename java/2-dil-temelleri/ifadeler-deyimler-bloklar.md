# Ders: İfadeler, Deyimler ve Bloklar (Expressions, Statements, and Blocks)

Değişkenleri ve operatörleri anladığınıza göre, artık ifadeleri (*expressions*), deyimleri (*statements*) ve kod bloklarını (*blocks*) inceleme zamanı geldi.

1. [**İfadeler (Expressions)**](#1-ifadeler-expressions)
2. [**Deyimler (Statements)**](#2-deyimler-statements)
3. [**Bloklar (Blocks)**](#3-bloklar-blocks)
---

# 1. İfadeler

Bir **ifade (expression)**; değişkenler, operatörler ve metot çağrılarından oluşan, dilin sözdizimine uygun olarak yapılandırılmış ve tek bir değere dönüşen (*evaluate* edilen) bir yapıdır:

```java
int cadence = 0;
anArray[0] = 100;
System.out.println("Element 1 at index 0: " + anArray[0]);

int result = 1 + 2; // result şimdi 3
if (value1 == value2)
    System.out.println("value1 == value2");
```

Bir ifade tarafından döndürülen değerin veri türü, ifadede kullanılan öğelere bağlıdır. `cadence = 0` ifadesi bir `int` döndürür çünkü atama operatörü sol işleneniyle aynı veri türünde bir değer üretir. `1 + 2` ifadesi de bir `int` üretir.

Java programlama dili, parantezlerin (`( )`) gerektirdiği durumlar dışında, bir ifadenin çeşitli bölümlerini operatör önceliğine göre değerlendirir:

```java
(x + y) / 100 // Önce toplama, sonra bölme yapılır
```

---

# 2. Deyimler

Bir **deyim (statement)**, programın çalıştırılabilir eksiksiz bir birimini oluşturur. Bir deyim, ifadenin sonuna noktalı virgül (`;`) eklenerek sonlandırılır.

Aşağıdaki ifade türleri birer noktalı virgülle sonlandırılarak **ifade deyimine (expression statement)** dönüştürülebilir:

- **Atama ifadeleri:** `aValue = 8933.234;`
- **Artırma ve azaltma ifadeleri:** `aValue++;` veya `++aValue;`
- **Metot çağrıları:** `System.out.println("Hello World!");`
- **Nesne oluşturma ifadeleri:** `Bicycle myBike = new Bicycle();`

İfade deyimlerine ek olarak iki tür deyim daha vardır:
1. **Bildirim Deyimleri (Declaration Statements):** Bir değişkeni bildiren deyimlerdir:
   ```java
   double aValue = 8933.234;
   ```
2. **Kontrol Akış Deyimleri (Control Flow Statements):** Programın yürütülme sırasını düzenler (`if-then`, `switch`, `for`, `while` vb.).

---

# 3. Bloklar

Bir **blok (block)**, açılış ve kapanış süslü parantezleri (`{ }`) arasında yer alan sıfır veya daha fazla deyimden oluşan bir gruptur. Tek bir deyimin kullanılmasına izin verilen her yerde bir kod bloğu kullanılabilir.

Aşağıdaki `BlockDemo` örneği blok kullanımını gösterir:

```java
class BlockDemo {
    public static void main(String[] args) {
        boolean condition = true;
        if (condition) { // 1. bloğun başlangıcı
            System.out.println("Condition is true.");
        } // 1. bloğun sonu
        else { // 2. bloğun başlangıcı
            System.out.println("Condition is false.");
        } // 2. bloğun sonu
    }
}
```
