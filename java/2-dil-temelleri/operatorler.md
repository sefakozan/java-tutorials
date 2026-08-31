# Ders: Operatörler (Operators)

Operatörler, bir, iki veya üç işlenen (*operand*) üzerinde belirli işlemleri gerçekleştiren ve ardından bir sonuç döndüren özel sembollerdir.

1. [**Basit Atama ve Aritmetik Operatörler**](#1-basit-atama-ve-aritmetik-operatörler)
2. [**Birli (Unary) Operatörler**](#2-birli-unary-operatörler)
3. [**Eşitlik, İlişkisel ve Tip Karşılaştırma Operatörleri**](#3-eşitlik-ilişkisel-ve-tip-karşılaştırma-operatörleri)
4. [**Koşullu (Conditional) Operatörler**](#4-koşullu-conditional-operatörler)
5. [**Bit Düzeyinde ve Kaydırma Operatörleri**](#5-bit-düzeyinde-ve-kaydırma-operatörleri)
6. [**Operatör Önceliği Tablosu**](#6-operatör-önceliği-tablosu)
---

# 1. Basit Atama ve Aritmetik Operatörler

### Basit Atama Operatörü (`=`)
En sık kullanılan operatörlerden biri basit atama operatörüdür (`=`). Sağındaki değeri solundaki değişkene atar:

```java
int cadence = 0;
int speed = 0;
int gear = 1;
```

### Aritmetik Operatörler
Java programlama dili toplama, çıkarma, çarpma, bölme ve kalan (mod alma) işlemleri için aritmetik operatörleri sağlar:

- `+` Toplama operatörü (aynı zamanda `String` birleştirme için kullanılır)
- `-` Çıkarma operatörü
- `*` Çarpma operatörü
- `/` Bölme operatörü
- `%` Kalan (mod alma) operatörü

```java
class ArithmeticDemo {
    public static void main (String[] args) {
        int result = 1 + 2; // result = 3
        System.out.println("1 + 2 = " + result);

        result = result - 1; // result = 2
        System.out.println("3 - 1 = " + result);

        result = result * 2; // result = 4
        System.out.println("2 * 2 = " + result);

        result = result / 2; // result = 2
        System.out.println("4 / 2 = " + result);

        result = result + 8; // result = 10
        result = result % 7; // result = 3 (10'un 7'ye bölümünden kalan)
        System.out.println("10 % 7 = " + result);
    }
}
```

Bileşik atama operatörleri aritmetik işlemleri atama ile birleştirir: `+=`, `-=`, `*=`, `/=`, `%=`. Örneğin `x += 2;` ifadesi `x = x + 2;` ile eşdeğerdir.

---

# 2. Birli (Unary) Operatörler

Birli operatörler yalnızca tek bir işlenen gerektirir:

- `+` Birli artı operatörü; pozitif değeri belirtir (isteğe bağlıdır).
- `-` Birli eksi operatörü; bir ifadenin işaretini tersine çevirir.
- `++` Artırma operatörü; değeri 1 artırır.
- `--` Azaltma operatörü; değeri 1 azaltır.
- `!` Mantıksal tümleyen operatörü; bir boolean değerini tersine çevirir.

```java
class UnaryDemo {
    public static void main(String[] args) {
        int result = +1; // result = 1
        System.out.println(result);

        result--; // result = 0
        System.out.println(result);

        result++; // result = 1
        System.out.println(result);

        result = -result; // result = -1
        System.out.println(result);

        boolean success = false;
        System.out.println(success); // false
        System.out.println(!success); // true
    }
}
```

### Önek (Prefix) ve Sonek (Postfix) Farkı
Artırma/azaltma operatörleri değişkenden önce (**önek**, örneğin `++i`) veya sonra (**sonek**, örneğin `i++`) uygulanabilir:
- `++i` (önek): Değişken önce 1 artırılır, ardından ifadenin yeni değeri değerlendirilir.
- `i++` (sonek): İfadede değişkenin mevcut değeri kullanılır, ardından değişken 1 artırılır.

---

# 3. Eşitlik, İlişkisel ve Tip Karşılaştırma Operatörleri

Bu operatörler bir işlenenin diğerinden büyük, küçük, eşit veya farklı olup olmadığını belirler:

- `==` Eşittir
- `!=` Eşit değildir
- `>` Büyüktür
- `>=` Büyük veya eşittir
- `<` Küçüktür
- `<=` Küçük veya eşittir

### Tip Karşılaştırma Operatörü (`instanceof`)
`instanceof` operatörü, bir nesnenin belirtilen bir sınıfın, alt sınıfın veya arayüzün örneği olup olmadığını test eder:

```java
class InstanceofDemo {
    public static void main(String[] args) {
        Parent parent = new Parent();
        Child child = new Child();

        System.out.println(parent instanceof Parent); // true
        System.out.println(child instanceof Parent);  // true (alt sınıf)
        System.out.println(parent instanceof Child);  // false
    }
}
```

---

# 4. Koşullu (Conditional) Operatörler

- `&&` Koşullu VE (Kısa devre / Short-circuit AND): Sol taraf `false` ise sağ taraf değerlendirilmez.
- `||` Koşullu VEYA (Kısa devre / Short-circuit OR): Sol taraf `true` ise sağ taraf değerlendirilmez.
- `?:` Üçlü (Ternary) Operatör: `if-then-else` ifadesinin kısaltmasıdır:
  ```java
  sonuc = (kosul) ? ifade1 : ifade2;
  ```
  `kosul` doğruysa `ifade1`, yanlışsa `ifade2` atanır.

---

# 5. Bit Düzeyinde ve Kaydırma Operatörleri

Tamsayı türleri (`byte`, `short`, `int`, `long`) üzerinde bit düzeyinde işlemler gerçekleştirmek için kullanılır:

- `~` Birli bit düzeyinde tersini alma (Bitwise NOT)
- `&` Bit düzeyinde VE (Bitwise AND)
- `^` Bit düzeyinde Özel VEYA (Bitwise XOR)
- `|` Bit düzeyinde VEYA (Bitwise OR)
- `<<` Sola kaydırma (Signed left shift)
- `>>` İşaretli sağa kaydırma (Signed right shift)
- `>>>` İşaretsiz sağa kaydırma (Unsigned right shift - sola sıfır doldurur)

---

# 6. Operatör Önceliği Tablosu

Aşağıdaki tablo operatörleri en yüksek öncelikten en düşüğe doğru listeler:

| Operatörler | Öncelik Derecesi |
| :--- | :--- |
| Sonek (*postfix*) | `expr++` `expr--` |
| Birli (*unary*) | `++expr` `--expr` `+expr` `-expr` `~` `!` |
| Çarpımsal | `*` `/` `%` |
| Toplamsal | `+` `-` |
| Kaydırma | `<<` `>>` `>>>` |
| İlişkisel | `<` `>` `<=` `>=` `instanceof` |
| Eşitlik | `==` `!=` |
| Bit düzeyinde VE | `&` |
| Bit düzeyinde XOR | `^` |
| Bit düzeyinde VEYA | `\|` |
| Mantıksal VE | `&&` |
| Mantıksal VEYA | `\|\|` |
| Üçlü (*ternary*) | `? :` |
| Atama | `=` `+=` `-=` `*=` `/=` `%=` `&=` `^=` `\|=` `<<=` `>>=` `>>>=` |
