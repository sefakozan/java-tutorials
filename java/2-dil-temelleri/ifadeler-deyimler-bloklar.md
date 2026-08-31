# İfadeler, Deyimler ve Bloklar (Expressions, Statements, and Blocks)

Değişkenler ve operatörlerin ardından, bunların bir araya gelerek nasıl anlamlı komut dizileri oluşturduğunu inceleyelim.

---

## İfadeler (Expressions)

Bir **ifade (expression)**; değişkenler, operatörler ve metot çağrılarından oluşan ve tek bir değere indirgenen (hesaplanan) bir yapıdır.

```java
int cadence = 0;
anArray[0] = 100;
System.out.println("Element 1 at index 0: " + anArray[0]);

int result = 1 + 2; // 1 + 2 bir ifadedir
if (value1 == value2) // value1 == value2 bir ifadedir
    System.out.println("value1 == value2");
```

---

## Deyimler (Statements)

Bir **deyim (statement)**, bağımsız bir yürütme birimidir. Doğal dillerdeki tam bir cümleye benzer. Java'da deyimler noktalı virgül (`;`) ile sonlandırılır.

Deyim türleri:
- **Atama deyimleri:** `aValue = 8933.234;`
- **Artırma/Azaltma deyimleri:** `aValue++;`
- **Metot çağrı deyimleri:** `System.out.println("Hello World!");`
- **Nesne oluşturma deyimleri:** `Bicycle myBike = new Bicycle();`
- **Bildirim deyimleri:** `double aValue = 8933.234;`
- **Kontrol akış deyimleri:** `if`, `while`, `for` vb.

---

## Bloklar (Blocks)

Bir **blok (block)**, açılan ve kapanan süslü parantezler (`{` ve `}`) arasında yer alan sıfır veya daha fazla deyimden oluşan bir gruptur. Bloklar tek bir deyimin beklendiği her yerde kullanılabilir:

```java
boolean condition = true;
if (condition) { // Blok başlangıcı
    System.out.println("Koşul doğru!");
    int count = 10;
    System.out.println("Sayı: " + count);
} // Blok sonu
```
