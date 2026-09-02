# Ders: Tür Silme (Type Erasure)

Generics, Java diline derleme zamanında daha sıkı tür denetimleri sağlamak ve genel programlamayı desteklemek için eklenmiştir. Java Sanal Makinesinde çalışma zamanı yükü oluşturmamak ve eski Java sürümleriyle geriye dönük byte kodu uyumluluğu sağlamak için Java derleyicisi **tür silme (type erasure)** uygular.

1. [**Tür Silme Nasıl Çalışır?**](#1-tür-silme-nasıl-çalışır)
2. [**Genel Türlerin Silinmesi**](#2-genel-türlerin-silinmesi)
3. [**Köprü Metotları (Bridge Methods)**](#3-köprü-metotları-bridge-methods)
---

# 1. Tür Silme Nasıl Çalışır?

Derleyici derleme işlemi sırasında:
1. Genel türlerdeki tüm tür parametrelerini sınırlarıyla (*bounds*) veya sınırlandırılmamışsa **`Object`** ile değiştirir. Bu nedenle üretilen `.class` byte kodunda yalnızca sıradan sınıflar, arayüzler ve metotlar bulunur.
2. Tür güvenliğini korumak için gerektiğinde açık tür dönüşümlerini (*type casts*) otomatik olarak ekler.
3. Genişletilmiş genel türlerde polimorfizmi korumak için **köprü metotları (bridge methods)** üretir.

---

# 2. Genel Türlerin Silinmesi

Aşağıdaki genel sınıfı ele alalım:

```java
public class Node<T> {
    private T data;
    private Node<T> next;

    public Node(T data, Node<T> next) {
        this.data = data;
        this.next = next;
    }

    public T getData() { return data; }
}
```

`T` tür parametresi sınırlandırılmadığından, derleyici bunu `Object` ile değiştirir:

```java
public class Node {
    private Object data;
    private Node next;

    public Node(Object data, Node next) {
        this.data = data;
        this.next = next;
    }

    public Object getData() { return data; }
}
```

Eğer tür parametresi sınırlandırılmışsa (örneğin `<T extends Comparable<T>>`), derleyici `T` yerine sınır türünü (`Comparable`) koyar.

---

# 3. Köprü Metotları (Bridge Methods)

Bazen tür silme işlemi, bir alt sınıfın üst sınıfındaki metodu geçersiz kılmasını (*override*) engelleyen imza uyuşmazlıklarına yol açabilir. Bu gibi durumlarda Java derleyicisi sentetik bir **köprü metodu (bridge method)** üreterek polimorfik çağrının doğru şekilde hedefe yönlendirilmesini sağlar.
