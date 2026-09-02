# Ders: Generics (Genel Türler)

Java 5 ile tanıtılan **Generics (Genel Türler)**, sınıfları, arayüzleri ve metotları tanımlarken türlerin (sınıfların ve arayüzlerin) parametre olarak belirtilmesine olanak tanır. Metot bildirimlerinde kullanılan biçimsel parametrelere çok benzer şekilde, tür parametreleri farklı girdilerle aynı kodu yeniden kullanmanın bir yolunu sunar.

1. [**Neden Generics Kullanılır?**](#1-neden-generics-kullanılır)
2. [**Genel Türler (Generic Types)**](#2-genel-türler-generic-types)
3. [**Tür Parametresi İsimlendirme Kuralları**](#3-tür-parametresi-i̇simlendirme-kuralları)
4. [**Genel Metotlar (Generic Methods)**](#4-genel-metotlar-generic-methods)
5. [**Sınırlandırılmış Tür Parametreleri (Bounded Type Parameters)**](#5-sınırlandırılmış-tür-parametreleri-bounded-type-parameters)
6. [**Ham Türler (Raw Types) ve Elmas İşleci (Diamond Operator)**](#6-ham-türler-raw-types-ve-elmas-i̇şleci-diamond-operator)
---

# 1. Neden Generics Kullanılır?

Generics, kodunuza birçok önemli fayda sağlar:

- **Derleme Zamanında Daha Güçlü Tür Denetimi:** Java derleyicisi, genel türe sahip koda katı tür denetimi uygular ve kod tür güvenliğini ihlal ederse hatalar üretir. Derleme zamanı hatalarını düzeltmek, bulunması zor olabilecek çalışma zamanı hatalarını (`ClassCastException`) düzeltmekten çok daha kolaydır.
- **Tür Dönüşümlerinin (Cast) Ortadan Kaldırılması:**
  ```java
  // Generics olmadan: açık cast gerekir
  List list = new ArrayList();
  list.add("hello");
  String s = (String) list.get(0);

  // Generics ile: cast gerekmez
  List<String> list = new ArrayList<String>();
  list.add("hello");
  String s = list.get(0); // cast gerekmez!
  ```
- **Genel Algoritmaların Uygulanması:** Generics kullanarak, farklı türdeki koleksiyonlar üzerinde çalışan, tür açısından güvenli ve okunması kolay algoritmalar yazabilirsiniz.

---

# 2. Genel Türler (Generic Types)

Genel bir tür (*generic type*), türler üzerinde parametrelendirilmiş genel bir sınıf veya arayüzdür.

Basit bir `Box` sınıfını ele alalım:

```java
public class Box<T> {
    // T, "Tür" (Type) anlamına gelir
    private T t;

    public void set(T t) { this.t = t; }
    public T get() { return t; }
}
```

Burada `T` bir tür parametresidir. `Box` sınıfını kullanırken `T` yerine gerçek bir tür argümanı sağlarsınız:

```java
Box<Integer> integerBox = new Box<Integer>();
integerBox.set(10);
Integer someInteger = integerBox.get();
```

---

# 3. Tür Parametresi İsimlendirme Kuralları

Teamül gereği, tür parametresi adları tek, büyük harflerden oluşur:

- `E` - Eleman (Java Koleksiyonlar Çerçevesi tarafından yaygın olarak kullanılır)
- `K` - Anahtar (Key)
- `N` - Sayı (Number)
- `T` - Tür (Type)
- `V` - Değer (Value)
- `S`, `U`, `V` vb. - 2., 3., 4. türler

---

# 4. Genel Metotlar (Generic Methods)

Genel metotlar, kendi tür parametrelerini tanıtan metotlardır. Genel tür bildirimine benzer, ancak tür parametresinin kapsamı bildirildiği metotla sınırlıdır:

```java
public class Util {
    public static <K, V> boolean compare(Pair<K, V> p1, Pair<K, V> p2) {
        return p1.getKey().equals(p2.getKey()) &&
               p1.getValue().equals(p2.getValue());
    }
}
```

---

# 5. Sınırlandırılmış Tür Parametreleri (Bounded Type Parameters)

Bir tür parametresi olarak kullanılabilecek türleri kısıtlamak istediğiniz zamanlar olabilir. Örneğin, yalnızca `Number` veya onun alt sınıflarını kabul eden bir metot tanımlamak için `extends` anahtar sözcüğü kullanılır:

```java
public class Box<T> {
    private T t;          

    public void set(T t) {
        this.t = t;
    }

    public T get() {
        return t;
    }

    public <U extends Number> void inspect(U u){
        System.out.println("T: " + t.getClass().getName());
        System.out.println("U: " + u.getClass().getName());
    }
}
```

---

# 6. Ham Türler (Raw Types) ve Elmas İşleci (Diamond Operator)

- **Ham Tür (*Raw Type*):** Tür argümanı olmadan kullanılan genel bir sınıf veya arayüzün adıdır (örneğin `Box rawBox = new Box();`). Ham türler yalnızca geriye dönük uyumluluk için mevcuttur; yeni kodlarda kullanılmamalıdır.
- **Elmas İşleci (*Diamond Operator - `<>`*):** Java SE 7 ve sonrasında, derleyici yapıcı çağrısındaki tür argümanlarını bağlamdan çıkarabildiği için boş bir tür bağımsız değişkeni kümesi (`<>`) kullanabilirsiniz:
  ```java
  Box<Integer> integerBox = new Box<>();
  ```
