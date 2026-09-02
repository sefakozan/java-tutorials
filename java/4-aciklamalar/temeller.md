# Açıklamaların Temelleri (Annotations Basics)

## Bir Açıklamanın Biçimi

En basit biçiminde bir açıklama (*annotation*) aşağıdaki gibi görünür:

```java
@Entity
```

Et işareti karakteri (`@`), derleyiciye kendisinden sonra gelen ifadenin bir açıklama olduğunu bildirir. Aşağıdaki örnekte açıklamanın adı `Override`'dır:

```java
@Override
void mySuperMethod() { ... }
```

Açıklamalar; adlandırılmış veya adlandırılmamış **öğeler (*elements*)** içerebilir ve bu öğeler için değerler tanımlanır:

```java
@Author(
   name = "Benjamin Franklin",
   date = "3/27/2003"
)
class MyClass { ... }
```

veya

```java
@SuppressWarnings(value = "unchecked")
void myMethod() { ... }
```

Eğer yalnızca `value` adında tek bir öğe bulunuyorsa, öğenin adı atlanabilir:

```java
@SuppressWarnings("unchecked")
void myMethod() { ... }
```

Açıklamanın hiçbir öğesi yoksa, önceki `@Override` örneğinde gösterildiği gibi parantezler tamamen atlanabilir.

Ayrıca aynı bildirim üzerinde birden fazla açıklama kullanmak da mümkündür:

```java
@Author(name = "Jane Doe")
@EBook
class MyClass { ... }
```

Eğer bu açıklamalar aynı türdeyse, buna **yinelenen açıklama (*repeating annotation*)** denir:

```java
@Author(name = "Jane Doe")
@Author(name = "John Smith")
class MyClass { ... }
```

> **Not:** Yinelenen açıklamalar Java SE 8 sürümünden itibaren desteklenmektedir. Daha fazla bilgi için [Yinelenen Açıklamalar](java/4-aciklamalar/yinelenen-aciklamalar.md) bölümüne bakın.

Açıklama türü, Java SE API'sinin `java.lang` veya `java.lang.annotation` paketlerinde tanımlanmış standart türlerden biri olabilir. Önceki örneklerde yer alan `Override` ve `SuppressWarnings`, [Önceden Tanımlanmış Java Açıklamaları](java/4-aciklamalar/onceden-tanimlanmis-aciklamalar.md) arasındadır. Kendi özel (*custom*) açıklama türlerinizi tanımlamanız da mümkündür. Yukarıdaki örnekteki `Author` ve `EBook` açıklamaları özel açıklama türleridir.

---

## Açıklamalar Nerelerde Kullanılabilir?

Açıklamalar bildirimlere uygulanabilir: sınıfların, alanların (*fields*), metotların ve diğer program öğelerinin bildirimleri. Bir bildirim üzerinde kullanıldığında, her açıklama geleneksel olarak kendi ayrı satırında yer alır.

Java SE 8 sürümünden itibaren açıklamalar **tür kullanımlarına (*use of types*)** da uygulanabilmektedir. İşte bazı örnekler:

- **Sınıf örneği oluşturma ifadesi (*Class instance creation expression*):**
  ```java
  new @Interned MyObject();
  ```

- **Tür dönüştürme (*Type cast*):**
  ```java
  myString = (@NonNull String) str;
  ```

- **`implements` tümcesi:**
  ```java
  class UnmodifiableList<T> implements
      @Readonly List<@Readonly T> { ... }
  ```

- **Fırlatılan istisna bildirimi (*Thrown exception declaration*):**
  ```java
  void monitorTemperature() throws
      @Critical TemperatureException { ... }
  ```

Bu biçimdeki açıklamalara **tür açıklaması (*type annotation*)** adı verilir. Daha fazla bilgi için [Tür Açıklamaları ve Eklenebilir Tür Sistemleri](java/4-aciklamalar/tur-aciklamalari.md) bölümüne bakın.
