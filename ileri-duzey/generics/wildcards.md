# Ders: Joker Karakterler (Wildcards)

Genel tür kodlarında, soru işareti (`?`) ile temsil edilen **joker karakter (wildcard)**, bilinmeyen bir türü temsil eder. Joker karakter bir parametrenin, alanın veya yerel değişkenin türü olarak ve bazen bir dönüş türü olarak kullanılabilir.

1. [**Üst Sınırlandırılmış Joker Karakterler (`? extends T`)**](#1-üst-sınırlandırılmış-joker-karakterler--extends-t)
2. [**Sınırlandırılmamış Joker Karakterler (`?`)**](#2-sınırlandırılmamış-joker-karakterler-)
3. [**Alt Sınırlandırılmış Joker Karakterler (`? super T`)**](#3-alt-sınırlandırılmış-joker-karakterler--super-t)
4. [**Joker Karakter Kullanım Kılavuzu (In / Out Kuralı)**](#4-joker-karakter-kullanım-kılavuzu-in--out-kuralı)
---

# 1. Üst Sınırlandırılmış Joker Karakterler (`? extends T`)

Bir değişken üzerindeki tür kısıtlamalarını gevşetmek ve belirtilen bir türün yanı sıra onun tüm alt sınıflarını kabul etmek için **üst sınırlandırılmış joker karakter** kullanılır:

```java
public static double sumOfList(List<? extends Number> list) {
    double s = 0.0;
    for (Number n : list)
        s += n.doubleValue();
    return s;
}
```

Bu metot `List<Integer>`, `List<Double>` ve `List<Number>` türündeki listelerin tümüyle çağrılabilir.

---

# 2. Sınırlandırılmamış Joker Karakterler (`?`)

Bilinmeyen bir türü temsil etmek için yalnızca `?` kullanılır:

```java
public static void printList(List<?> list) {
    for (Object elem: list)
        System.out.print(elem + " ");
    System.out.println();
}
```

Bu metot `Object` sınıfının sağladığı işlevsellikle yetinen herhangi bir somut listenin (`List<String>`, `List<Person>`) elemanlarını yazdırmak için kullanılabilir.

---

# 3. Alt Sınırlandırılmış Joker Karakterler (`? super T`)

Bir türün kendisini ve onun tüm **üst sınıflarını (süper türlerini)** kabul etmek için `? super T` sözdizimi kullanılır:

```java
public static void addNumbers(List<? super Integer> list) {
    for (int i = 1; i <= 10; i++) {
        list.add(i);
    }
}
```

Bu metot `List<Integer>`, `List<Number>` ve `List<Object>` listeleri üzerinde güvenle çalışır.

---

# 4. Joker Karakter Kullanım Kılavuzu (In / Out Kuralı)

Hangi joker karakteri ne zaman kullanmalısınız?

- **"Girdi" (*In*) Değişkeni:** Kodunuza veri sağlayan bir değişken (salt okunur veri kaynağı) için **`? extends`** (Üst Sınır) kullanın.
- **"Çıktı" (*Out*) Değişkeni:** Başka bir yerde kullanılmak üzere veri tutan/eklenen bir değişken (veri hedefi) için **`? super`** (Alt Sınır) kullanın.
- Girdiye hem veri yazıp hem de veri okumanız gerekiyorsa joker karakter **kullanmayın**, doğrudan somut tür parametresi (`List<T>`) kullanın.
