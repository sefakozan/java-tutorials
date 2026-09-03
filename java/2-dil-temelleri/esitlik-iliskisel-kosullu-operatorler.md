# Eşitlik, İlişkisel ve Koşullu Operatörler (Equality, Relational, and Conditional Operators)

## 1. Eşitlik ve İlişkisel Operatörler (Equality and Relational Operators)

Bu operatörler bir işlenenin diğerinden büyük, küçük, eşit veya farklı olup olmadığını belirler:

- `==` : Eşittir (*Equal to*)
- `!=` : Eşit değildir (*Not equal to*)
- `>` : Büyüktür (*Greater than*)
- `>=` : Büyük veya eşittir (*Greater than or equal to*)
- `<` : Küçüktür (*Less than*)
- `<=` : Küçük veya eşittir (*Less than or equal to*)

```java
class ComparisonDemo {
    public static void main(String[] args){
        int value1 = 1;
        int value2 = 2;
        if(value1 == value2)
            System.out.println("value1 == value2");
        if(value1 != value2)
            System.out.println("value1 != value2");
        if(value1 > value2)
            System.out.println("value1 > value2");
        if(value1 < value2)
            System.out.println("value1 < value2");
        if(value1 <= value2)
            System.out.println("value1 <= value2");
    }
}
```

---

## 2. Koşullu Operatörler (Conditional Operators)

- `&&` : Koşullu VE (*Conditional-AND*) — Kısa devre (*short-circuit*) değerlendirme yapar; sol taraf `false` ise sağ tarafı değerlendirmez.
- `||` : Koşullu VEYA (*Conditional-OR*) — Kısa devre değerlendirme yapar; sol taraf `true` ise sağ tarafı değerlendirmez.
- `?:` : Üçlü operatör (*Ternary operator*) — `if-then-else` ifadesinin kısaltmasıdır: `koşul ? dogruDeger : yanlisDeger`.

```java
class ConditionalDemo {
    public static void main(String[] args){
        int value1 = 1;
        int value2 = 2;
        if((value1 == 1) && (value2 == 2))
            System.out.println("value1 1'dir VE value2 2'dir");
        if((value1 == 1) || (value2 == 1))
            System.out.println("value1 1'dir VEYA value2 1'dir");

        // Üçlü (Ternary) Operatör
        int result = (value1 == 1) ? 100 : 200;
        System.out.println("Sonuç: " + result); // 100
    }
}
```

---

## 3. Tip Karşılaştırma Operatörü (`instanceof`)

`instanceof` operatörü, bir nesnenin belirli bir sınıftan, alt sınıftan veya arayüzü uygulayan bir türden türetilip türetilmediğini çalışma zamanında test eder:

```java
String name = "Java";
boolean isString = name instanceof String; // true
```
