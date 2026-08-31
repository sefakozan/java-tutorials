# Yuvalanmış ve İç Sınıflar (Nested Classes)

Java programlama dili, bir sınıfın içerisinde başka bir sınıf tanımlamanıza olanak tanır. Buna **yuvalanmış sınıf (nested class)** denir.

```java
class OuterClass {
    ...
    class NestedClass {
        ...
    }
}
```

Yuvalanmış sınıflar iki kategoriye ayrılır:

1. **Statik Yuvalanmış Sınıflar (Static Nested Classes):** `static` olarak bildirilen sınıflar.
2. **İç Sınıflar (Inner Classes):** Statik olmayan (`non-static`) yuvalanmış sınıflar.

---

## Neden Yuvalanmış Sınıflar Kullanılır?

- **Mantıksal Gruplama:** Bir sınıf yalnızca başka bir tek sınıf için yararlıysa, onu o sınıfın içine yerleştirmek mantıklıdır.
- **Kapsüllemeyi Artırma:** İki üst düzey sınıf `A` ve `B` düşünün; `B`'nin `A`'nın `private` üyelerine erişmesi gerekiyorsa, `B`'yi `A`'nın içine gömerek `A`'nın üyelerini dış dünyadan gizli tutabilirsiniz.
- **Daha Okunabilir ve Bakımı Kolay Kod:** Kodları kullanıldıkları yere yakın tutar.

---

## İç Sınıflar (Inner Classes)

İç sınıflar, kendilerini çevreleyen `OuterClass`'ın tüm üyelerine (özel `private` üyeler dahil) doğrudan erişebilir. Bir iç sınıf örneği oluşturmak için önce dış sınıfın bir örneği mevcut olmalıdır:

```java
OuterClass outerObject = new OuterClass();
OuterClass.InnerClass innerObject = outerObject.new InnerClass();
```

---

## Statik Yuvalanmış Sınıflar (Static Nested Classes)

Statik yuvalanmış bir sınıf, dış sınıfın örnek değişkenlerine doğrudan erişemez (yalnızca dış sınıfın `static` üyelerine erişebilir). Dış sınıfın bir örneği olmadan doğrudan başlatılabilir:

```java
OuterClass.StaticNestedClass nestedObject = new OuterClass.StaticNestedClass();
```
