# Karakterler, String ve StringBuilder (Characters and Strings)

Java programlama dilinde karakterler `char` türü ve `Character` sınıfı ile, metin dizgileri ise `String` ve `StringBuilder` sınıfları ile temsil edilir.

---

## `String` Sınıfı

`String` nesneleri değişmezdir (**immutable**); yani bir kez oluşturulduktan sonra içeriği değiştirilemez. Bir String üzerinde yapılan tüm değişiklik işlemleri aslında yeni bir `String` nesnesi üretir.

```java
String greeting = "Merhaba Dünya!";
int len = greeting.length(); // 14

// İki metni birleştirme
String fullName = "James " + "Gosling";
String s = "Java".concat(" Tutorials");

// Karakter ve alt metin arama
char c = greeting.charAt(0); // 'M'
String sub = greeting.substring(0, 7); // "Merhaba"
int index = greeting.indexOf("Dünya"); // 8

// Karşılaştırma
boolean isEqual = "Java".equals("java"); // false (büyük/küçük harf duyarlı)
boolean isIgnoreCase = "Java".equalsIgnoreCase("java"); // true
```

---

## `StringBuilder` Sınıfı

Çok sayıda metin birleştirme işlemi yapılacaksa, her adımda yeni bir `String` nesnesi oluşturulmasını önlemek ve yüksek performans sağlamak için `StringBuilder` sınıfı kullanılmalıdır:

```java
StringBuilder sb = new StringBuilder();
sb.append("Java ");
sb.append("Programlama ");
sb.append("Dili");

String result = sb.toString(); // "Java Programlama Dili"
```

`StringBuilder` nesneleri değiştirilebilir (**mutable**) karakter dizileridir ve bellek açısından çok daha verimlidir.
