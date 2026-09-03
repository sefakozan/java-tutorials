# Ders: İfadeler, Deyimler ve Bloklar (Expressions, Statements, and Blocks)

Operatörleri anladıktan sonra artık onları ifadeler (*expressions*) oluşturmak için kullanabilirsiniz. İfadeler deyimlerin (*statements*) temel yapı taşlarıdır; deyimler ise kod blokları (*blocks*) halinde gruplanabilir.

---

## 1. İfadeler (Expressions)

Bir **ifade (expression)**; değişkenler, operatörler ve metot çağrılarından oluşan ve tek bir değere indirgenen bir sözdizimi yapısıdır:

```java
int cadence = 0;
anArray[0] = 100;
System.out.println("Element 1 at index 0: " + anArray[0]);

int result = 1 + 2; // result 3 değerini alır
if (value1 == value2) 
    System.out.println("value1 == value2");
```

---

## 2. Deyimler (Statements)

Bir **deyim (statement)**, eksiksiz bir yürütme birimi oluşturan programlama cümlesidir. Doğal dillerdeki cümlelerin noktayla bitmesi gibi, Java deyimleri de noktalı virgül (`;`) ile sonlandırılır.

### Deyim Türleri:
1. **Atama İfadeleri:** `aValue = 8933.234;`
2. **Artırma/Azaltma:** `aValue++;`
3. **Metot Çağrıları:** `System.out.println("Hello World!");`
4. **Nesne Oluşturma:** `Bicycle myBike = new Bicycle();`
5. **Bildirim Deyimleri (*Declaration Statements*):** `double aValue = 8933.234;`
6. **Kontrol Akış Deyimleri (*Control Flow Statements*):** `if`, `while`, `for` vb.

---

## 3. Bloklar (Blocks)

Bir **blok (block)**, açılış ve kapanış süslü parantezleri (`{ }`) arasında yer alan sıfır veya daha fazla deyimden oluşan bir gruptur. Tek bir deyimin kullanılabileceği her yerde bir blok kullanılabilir:

```java
class BlockDemo {
    public static void main(String[] args) {
        boolean condition = true;
        if (condition) { // 1. bloğun başlangıcı
            System.out.println("Koşul true!");
        } // 1. bloğun sonu
        else { // 2. bloğun başlangıcı
            System.out.println("Koşul false!");
        } // 2. bloğun sonu
    }
}
```
