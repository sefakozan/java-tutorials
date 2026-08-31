# Ders: Generics Kısıtlamaları (Restrictions on Generics)

Java'da genel türleri etkili bir şekilde kullanabilmek için tür silme (*type erasure*) mekanizmasının getirdiği kısıtlamaları bilmek önemlidir.

1. [**İlkel Türlerle Örneklenemez**](#1-i̇lkel-türlerle-örneklenemez)
2. [**Tür Parametrelerinin Doğrudan Örneği Oluşturulamaz (`new T()`)**](#2-tür-parametrelerinin-doğrudan-örneği-oluşturulamaz-new-t)
3. [**Statik Alanlar Tür Parametresi Olamaz**](#3-statik-alanlar-tür-parametresi-olamaz)
4. [**Parametreli Türlerle Tür Dönüşümü (`Cast`) ve `instanceof` Kullanılamaz**](#4-parametreli-türlerle-tür-dönüşümü-cast-ve-instanceof-kullanılamaz)
5. [**Parametrelendirilmiş Türlerden Dizi Oluşturulamaz**](#5-parametrelendirilmiş-türlerden-dizi-oluşturulamaz)
6. [**İstisna Sınıfları Genel Tür Olamaz**](#6-i̇stisna-sınıfları-genel-tür-olamaz)
7. [**Aynı Ham Türe Silinen Metotlar Aşırı Yüklenemez**](#7-aynı-ham-türe-silinen-metotlar-aşırı-yüklenemez)
---

# 1. İlkel Türlerle Örneklenemez

Genel türlerin tür argümanı olarak `int`, `char`, `double` gibi ilkel türler kullanılamaz; sarmalayıcı sınıflar (`Integer`, `Character`, `Double`) kullanılmalıdır:

```java
// Derleme Hatası:
Pair<int, char> p = new Pair<>(8, 'a');

// Doğru Kullanım:
Pair<Integer, Character> p = new Pair<>(8, 'a');
```

---

# 2. Tür Parametrelerinin Doğrudan Örneği Oluşturulamaz (`new T()`)

Tür silme nedeniyle çalışma zamanında `E` veya `T` türünün ne olduğu bilinmediğinden `new E()` yazılamaz:

```java
public static <E> void append(List<E> list) {
    // Derleme Hatası:
    // E elem = new E();
}
```

Bunun yerine reflection (*yansıma*) veya fabrika metotları kullanılır:

```java
public static <E> void append(List<E> list, Class<E> cls) throws Exception {
    E elem = cls.getDeclaredConstructor().newInstance();
    list.add(elem);
}
```

---

# 3. Statik Alanlar Tür Parametresi Olamaz

Bir sınıfın statik alanı sınıfın tüm örnekleri tarafından paylaşılır; oysa her nesne farklı bir tür parametresine sahip olabilir:

```java
public class MobileDevice<T> {
    // Derleme Hatası:
    // private static T os;
}
```

---

# 4. Parametreli Türlerle Tür Dönüşümü (`Cast`) ve `instanceof` Kullanılamaz

Çalışma zamanında `List<Integer>` ile `List<String>` aynı ham türe (`List`) silindiği için `instanceof` parametreli türlerle kullanılamaz:

```java
// Derleme Hatası:
if (cs instanceof List<String>) { ... }

// Doğru: Sınırlandırılmamış joker ile kontrol
if (cs instanceof List<?>) { ... }
```

---

# 5. Parametrelendirilmiş Türlerden Dizi Oluşturulamaz

Java dizileri çalışma zamanında bileşen türlerini saklar, oysa genel türler tür silmeye uğrar:

```java
// Derleme Hatası:
List<String>[] arrayOfLists = new List<String>[2];
```

---

# 6. İstisna Sınıfları Genel Tür Olamaz

Bir genel sınıf doğrudan veya dolaylı olarak `Throwable` sınıfını genişletemez ve genel tür parametresi bir `catch` bloğunda yakalanamaz:

```java
// Derleme Hatası:
public class MyGenericException<T> extends Exception { ... }
```

---

# 7. Aynı Ham Türe Silinen Metotlar Aşırı Yüklenemez

Tür silme sonrasında aynı ham metod imzasına sahip olan iki metot aşırı yüklenemez (*overload* edilemez):

```java
public class Example {
    // Derleme Hatası: Her iki metot da print(Set) imzasına silinir
    public void print(Set<String> strSet) { }
    public void print(Set<Integer> intSet) { }
}
```
