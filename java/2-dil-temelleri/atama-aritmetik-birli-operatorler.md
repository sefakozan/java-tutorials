# Atama, Aritmetik ve Birli Operatörler (Assignment, Arithmetic, and Unary Operators)

## 1. Basit Atama Operatörü (`=`)

En sık karşılaşacağınız operatörlerden biri basit atama operatörüdür (`=`). Sağındaki değeri solundaki değişkene atar:

```java
int cadence = 0;
int speed = 0;
int gear = 1;
```

---

## 2. Aritmetik Operatörler (Arithmetic Operators)

Java programlama dili toplama, çıkarma, çarpma, bölme ve kalan (mod alma) işlemleri için 5 temel aritmetik operatör sağlar:

- `+` : Toplama operatörü (*Additive operator*) — Ayrıca dizeleri birleştirmek (*String concatenation*) için kullanılır.
- `-` : Çıkarma operatörü (*Subtraction operator*)
- `*` : Çarpma operatörü (*Multiplication operator*)
- `/` : Bölme operatörü (*Division operator*)
- `%` : Kalan / Mod operatörü (*Remainder operator*)

```java
class ArithmeticDemo {
    public static void main (String[] args) {
        int result = 1 + 2; // 3
        System.out.println("1 + 2 = " + result);

        result = result - 1; // 2
        System.out.println("3 - 1 = " + result);

        result = result * 2; // 4
        System.out.println("2 * 2 = " + result);

        result = result / 2; // 2
        System.out.println("4 / 2 = " + result);

        result = result + 8; // 10
        result = result % 7; // 3 (10 % 7)
        System.out.println("10 % 7 = " + result);
    }
}
```

### Bileşik Atama Operatörleri (Compound Assignment Operators)
Aritmetik işlemleri atama ile birleştirmek için bileşik atama operatörleri kullanılır: `+=`, `-=`, `*=`, `/=`, `%=`. Örneğin `x += 2;` ifadesi `x = x + 2;` ile eşdeğerdir.

---

## 3. Birli Operatörler (Unary Operators)

Birli operatörler yalnızca tek bir işlenen (*operand*) üzerinde işlem yapar:

- `+` : Birli artı operatörü (*Unary plus operator*); pozitif bir değeri gösterir (sayılar varsayılan olarak pozitiftir).
- `-` : Birli eksi operatörü (*Unary minus operator*); bir ifadenin işaretini tersine çevirir.
- `++` : Artırma operatörü (*Increment operator*); değeri 1 artırır.
- `--` : Azaltma operatörü (*Decrement operator*); değeri 1 azaltır.
- `!` : Mantıksal tamamlama / DEĞİL operatörü (*Logical complement operator*); bir `boolean` değerini tersine çevirir.

```java
class UnaryDemo {
    public static void main(String[] args) {
        int result = +1;
        System.out.println(result); // 1

        result--; // result 0 olur
        System.out.println(result); // 0

        result++; // result 1 olur
        System.out.println(result); // 1

        result = -result; // result -1 olur
        System.out.println(result); // -1

        boolean success = false;
        System.out.println(success);  // false
        System.out.println(!success); // true
    }
}
```

### Önek ve Sonek Artırma/Azaltma (Prefix vs Postfix)
- **Önek (*Prefix* - `++i`):** Değer önce 1 artırılır, ardından ifadenin içinde değerlendirilir.
- **Sonek (*Postfix* - `i++`):** İfade mevcut değerle değerlendirilir, ardından değer 1 artırılır.
