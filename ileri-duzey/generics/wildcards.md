# Ders: Joker Karakterler (Wildcards)

Java Generics kodlarında soru işareti (`?`), türü bilinmeyen bir tipi temsil eden **joker karakter (wildcard)** olarak adlandırılır.

---

## 1. Üst Sınırlı Jokerler (Upper Bounded Wildcards)

Bir türü ve onun tüm alt sınıflarını kabul etmek için `<? extends SınıfAdı>` sözdizimi kullanılır:

```java
import java.util.List;

public class WildcardUpper {
    public static double sumOfList(List<? extends Number> list) {
        double s = 0.0;
        for (Number n : list) {
            s += n.doubleValue();
        }
        return s;
    }
}
```

---

## 2. Alt Sınırlı Jokerler (Lower Bounded Wildcards)

Bir türü ve onun tüm üst sınıflarını kabul etmek için `<? super SınıfAdı>` kullanılır:

```java
public static void addNumbers(List<? super Integer> list) {
    for (int i = 1; i <= 10; i++) {
        list.add(i);
    }
}
```

---

## 3. Joker Karakter Kullanım Rehberi (PECS)

- **Producer Extends:** Eğer bir yapıdan yalnızca veri okuyacaksanız `extends` kullanın.
- **Consumer Super:** Eğer bir yapıya yalnızca veri yazacaksanız `super` kullanın.
- **Her İkisi:** Hem okuyup hem yazacaksanız joker karakter yerine doğrudan somut tür parametresi `<T>` kullanın.
