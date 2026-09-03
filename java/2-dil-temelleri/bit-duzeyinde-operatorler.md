# Bit Düzeyinde ve Bit Kaydırma Operatörleri (Bitwise and Bit Shift Operators)

Java programlama dili tamsayı türleri (`byte`, `short`, `int`, `long`, `char`) üzerinde doğrudan bit düzeyinde işlemler gerçekleştirmek için operatörler sağlar.

---

## Bit Düzeyinde Operatörler (Bitwise Operators)

- `~` : Bit düzeyinde tersini alma (*Bitwise unary NOT*) — Her bir biti tersine çevirir (0 -> 1, 1 -> 0).
- `&` : Bit düzeyinde VE (*Bitwise AND*) — Her iki bit 1 ise sonuç 1'dir.
- `|` : Bit düzeyinde VEYA (*Bitwise OR*) — Bitlerden en az biri 1 ise sonuç 1'dir.
- `^` : Bit düzeyinde ÖZEL VEYA (*Bitwise XOR*) — Bitler farklı ise sonuç 1, aynı ise 0'dır.

---

## Bit Kaydırma Operatörleri (Bit Shift Operators)

- `<<` : İşaretli sola kaydırma (*Signed left shift*) — Bitleri belirtilen sayıda sola kaydırır, sağdan 0 ekler. Değeri $2^n$ ile çarpmaya eşdeğerdir.
- `>>` : İşaretli sağa kaydırma (*Signed right shift*) — Bitleri belirtilen sayıda sağa kaydırır, soldan işaret bitini korur. Değeri $2^n$ ile bölmeye eşdeğerdir.
- `>>>` : İşaretsiz sağa kaydırma (*Unsigned right shift*) — Bitleri sağa kaydırır ve soldan her zaman 0 ekler.

```java
class BitDemo {
    public static void main(String[] args) {
        int bitmask = 0x000F;
        int val = 0x2222;
        // 0x2222 & 0x000F = 0x0002
        System.out.println(val & bitmask); // 2
    }
}
```
