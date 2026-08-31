# Ders: Generics (Genel Türler)

Generics (Genel Türler), sınıfları, arayüzleri ve metotları tanımlarken türlerin (sınıf veya arayüz adlarının) parametre olarak geçilmesine olanak tanır.

---

## Neden Generics Kullanılır?

1. **Derleme Zamanında Daha Güçlü Tür Kontrolleri:** Java derleyicisi, genel türe uymayan tür hatalarını çalışma zamanı yerine derleme zamanında yakalar.
2. **Tür Dönüşümlerinin (Type Casting) Ortadan Kaldırılması:** Açık tür dönüşümü yazma gereksinimini ortadan kaldırır:
   ```java
   // Generics olmadan:
   List list = new ArrayList();
   list.add("merhaba");
   String s = (String) list.get(0); // Açık dönüşüm zorunlu

   // Generics ile:
   List<String> list = new ArrayList<String>();
   list.add("merhaba");
   String s = list.get(0); // Dönüşüm gerekmez, tür güvenlidir
   ```
3. **Genel Algoritmaların Uygulanması:** Farklı türdeki koleksiyonlar üzerinde güvenle çalışan algoritmalar yazmayı sağlar.

---

## Genel Tür Tanımlama: `Box<T>` Örneği

```java
public class Box<T> {
    // T, "Tür" anlamına gelen bir tür parametresidir
    private T t;

    public void set(T t) {
        this.t = t;
    }

    public T get() {
        return t;
    }
}
```

Kullanımı:
```java
Box<Integer> integerBox = new Box<Integer>();
integerBox.set(10);
Integer someInt = integerBox.get();
```

---

## Yaygın Tür Parametresi İsimlendirmeleri

- `E` - Eleman (Element - Java Collections Framework tarafından yaygın kullanılır)
- `K` - Anahtar (Key)
- `N` - Sayı (Number)
- `T` - Tür (Type)
- `V` - Değer (Value)

---

## Joker Karakterler (Wildcards - `?`)

Generics'te soru işareti `?` bilinmeyen bir türü temsil eder:
- `List<?>` : Sınırsız joker tür (herhangi bir türdeki liste)
- `List<? extends Number>` : Üstten sınırlı joker (`Number` veya onun bir alt sınıfı)
- `List<? super Integer>` : Alttan sınırlı joker (`Integer` veya onun bir üst sınıfı)
