# Operatörler (Operators)

Operatörler, bir, iki veya üç işlenen (operand) üzerinde işlem gerçekleştirerek bir sonuç döndüren özel sembollerdir.

---

## 1. Basit Atama Operatörü

En yaygın operatör `=` basit atama operatörüdür. Sağındaki değeri solundaki değişkene atar:

```java
int cadence = 0;
int speed = 0;
int gear = 1;
```

---

## 2. Aritmetik Operatörler

Java programlama dili temel aritmetik işlemleri destekler:

- `+` : Toplama (aynı zamanda `String` birleştirme için kullanılır)
- `-` : Çıkarma
- `*` : Çarpma
- `/` : Bölme
- `%` : Mod alma (kalanı bulma)

```java
int result = 1 + 2; // 3
result = result - 1; // 2
result = result * 2; // 4
result = result / 2; // 2
result = result + 8; // 10
result = result % 7; // 3
```

---

## 3. Birli (Unary) Operatörler

Birli operatörler tek bir işlenen üzerinde çalışır:

- `+` : Pozitif değer göstergesi
- `-` : Sayının işaretini tersine çevirir
- `++` : Değeri 1 artırır (önek `++i` veya sonek `i++`)
- `--` : Değeri 1 azaltır (önek `--i` veya sonek `i--`)
- `!` : Mantıksal DEĞİL (boolean değerini tersine çevirir)

---

## 4. Eşitlik ve İlişkisel Operatörler

İki değer arasındaki ilişkiyi karşılaştırır ve `boolean` (`true`/`false`) bir sonuç döndürür:

- `==` : Eşit midir?
- `!=` : Eşit değil midir?
- `>` : Büyüktür
- `>=` : Büyük veya eşittir
- `<` : Küçüktür
- `<=` : Küçük veya eşittir
- `instanceof` : Bir nesnenin belirli bir sınıf veya arayüzün örneği olup olmadığını test eder.

---

## 5. Koşullu (Mantıksal) Operatörler

- `&&` : Koşullu VE (Short-circuit AND)
- `||` : Koşullu VEYA (Short-circuit OR)
- `?:` : Üçlü operatör (Ternary operator — `koşul ? dogruDeger : yanlisDeger`)

```java
int value1 = 1;
int value2 = 2;
if ((value1 == 1) && (value2 == 2)) {
    System.out.println("value1 1'dir VE value2 2'dir");
}

int result = (value1 == 1) ? 100 : 200; // result = 100
```
