# Ders: Karakterler ve Metinler

Java programlama dilinde karakterler `char` ilkel türü ve `Character` sarmalayıcı sınıfı ile; karakter dizgileri (metinler) ise `String` ve `StringBuilder` sınıfları ile temsil edilir.

1. [**`Character` Sınıfı**](#1-character-sınıfı)
2. [**`String` Sınıfı ve Değişmezlik (Immutability)**](#2-string-sınıfı-ve-değişmezlik-immutability)
3. [**Sayılar ve Metinler Arasında Dönüşüm**](#3-sayılar-ve-metinler-arasında-dönüşüm)
4. [**Dizgileri İşleme ve Arama Metotları**](#4-dizgileri-işleme-ve-arama-metotları)
5. [**`StringBuilder` Sınıfı**](#5-stringbuilder-sınıfı)
---

# 1. `Character` Sınıfı

Java platformu, ilkel `char` değerini sarmalamak için `Character` sınıfını sağlar. Bu sınıf karakterleri incelemek ve işlemek için çok sayıda yararlı statik metot sunar:

- `Character.isLetter(ch)`: Karakterin harf olup olmadığını kontrol eder.
- `Character.isDigit(ch)`: Karakterin rakam olup olmadığını kontrol eder.
- `Character.isWhitespace(ch)`: Karakterin boşluk karakteri (boşluk, sekme, yeni satır) olup olmadığını kontrol eder.
- `Character.isUpperCase(ch)` / `Character.isLowerCase(ch)`: Büyük/küçük harf kontrolü yapar.
- `Character.toUpperCase(ch)` / `Character.toLowerCase(ch)`: Büyük/küçük harfe dönüştürür.

---

# 2. `String` Sınıfı ve Değişmezlik (Immutability)

Java'da bir karakter dizisi olan `String`, nesnelerle temsil edilir. `String` nesneleri **değişmezdir (immutable)**; yani bir `String` nesnesi bir kez oluşturulduktan sonra içeriği asla değiştirilemez. Metin üzerinde değişiklik yapan tüm metotlar aslında **yeni bir String nesnesi** oluşturur ve döndürür.

```java
String greeting = "Hello world!";
int len = greeting.length(); // len = 12
```

### Metinleri Birleştirme (Concatenation)
`+` operatörü veya `concat` metodu ile metinler birleştirilebilir:

```java
String full = "Hello".concat(" ").concat("World!");
```

---

# 3. Sayılar ve Metinler Arasında Dönüşüm

### Metinden Sayıya Dönüştürme (String to Number)
Sarmalayıcı sınıfların `parseXxx` veya `valueOf` metotları kullanılır:

```java
String strVal = "123";
int intVal = Integer.parseInt(strVal);
double dblVal = Double.parseDouble("45.67");
```

### Sayıdan Metne Dönüştürme (Number to String)
`String.valueOf()` metodu veya `+ ""` yöntemi kullanılır:

```java
int i = 42;
String s1 = String.valueOf(i);
String s2 = Integer.toString(i);
```

---

# 4. Dizgileri İşleme ve Arama Metotları

`String` sınıfı zengin bir metot koleksiyonuna sahiptir:

- **Karaktere Erişim:** `ch = str.charAt(0);`
- **Alt Dize (Substring):** `String sub = str.substring(beginIndex, endIndex);`
- **Arama:** `int idx = str.indexOf("world");` veya `str.contains("world");`
- **Başlangıç/Bitiş:** `str.startsWith("He");` / `str.endsWith("!");`
- **Kırpma:** `String trimmed = str.trim();` (baş ve sondaki boşlukları siler)
- **Bölme (Split):** `String[] parts = str.split(",");`
- **Değiştirme (Replace):** `String replaced = str.replace('l', 'p');`

---

# 5. `StringBuilder` Sınıfı

`String` nesneleri değişmez olduğundan, bir döngü içinde sürekli metin birleştirmek çok sayıda geçici nesne oluşturur ve bellek performansını olumsuz etkiler. Değiştirilebilir (*mutable*) karakter dizileri oluşturmak için **`StringBuilder`** kullanılır:

```java
StringBuilder sb = new StringBuilder();
sb.append("Greetings");
sb.append(" to ");
sb.append("everyone!");
sb.insert(9, " from Java");
sb.delete(0, 10);
sb.reverse();

String result = sb.toString();
```

> **StringBuilder vs StringBuffer:** `StringBuilder` tek iş parçacıklı senaryolar için daha hızlıdır ve tercih edilir. Çok iş parçacıklı (*multi-threaded*) ortamlarda eşzamanlı erişim güvenliği gerektiğinde ise senkronize olan `StringBuffer` sınıfı kullanılır.
