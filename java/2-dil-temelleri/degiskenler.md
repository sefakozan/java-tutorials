# Ders: Değişkenler ve İlkel Veri Tipleri (Variables & Primitive Data Types)

Önceki derste öğrendiğiniz gibi, bir nesne durumunu **alanlarda (fields)** saklar:

```java
int cadence = 0;
int speed = 0;
int gear = 1;
```

Java programlama dilinde "alan" (*field*) ve "değişken" (*variable*) terimlerinin her ikisi de kullanılır. Java programlama dili aşağıdaki değişken türlerini tanımlar:

1. [**Değişken Türleri**](#1-değişken-türleri)
2. [**İsimlendirme Kuralları ve Teamülleri**](#2-isimlendirme-kuralları-ve-teamülleri)
3. [**İlkel Veri Tipleri (Primitive Data Types)**](#3-ilkel-veri-tipleri-primitive-data-types)
4. [**Varsayılan Değerler (Default Values)**](#4-varsayılan-değerler-default-values)
5. [**Değişmez Değerler (Literals)**](#5-değişmez-değerler-literals)
---

# 1. Değişken Türleri

Java'da dört tür değişken bulunur:

- **Örnek Değişkenleri (Statik Olmayan Alanlar - Instance Variables / Non-Static Fields):** Nesneler bireysel durumlarını `static` anahtar sözcüğü olmadan bildirilen alanlarda saklarlar. Bunlara *örnek değişkenleri* denir çünkü değerleri bir sınıfın her bir örneğine (*instance*, yani nesnesine) özgüdür; bir bisikletin `currentSpeed` değeri diğer bisikletinkinden bağımsızdır.
- **Sınıf Değişkenleri (Statik Alanlar - Class Variables / Static Fields):** `static` değiştiricisi ile bildirilen herhangi bir alandır; bu, derleyiciye kaç tane nesne örneği oluşturulursa oluşturulsun bu değişkenin tam olarak tek bir kopyasının var olduğunu söyler. Örneğin `static int numBicycles = 0;` alanı tüm bisiklet nesneleri tarafından paylaşılan ortak bir sayaçtır. İsteğe bağlı olarak `final` anahtar sözcüğü eklenerek değerinin asla değiştirilemeyeceği belirtilebilir (`static final double PI = 3.141592653589793;`).
- **Yerel Değişkenler (Local Variables):** Bir metot, durumunu geçici olarak depolamak için yerel değişkenler tanımlar. Yerel bir değişkeni tanımlama sözdizimi bir alanı bildirmeye benzer (örneğin `int count = 0;`). Değişken yalnızca bildirildiği metot gövdesi (`{}`) içinde geçerlidir; metodun dışından erişilemez.
- **Parametreler (Parameters):** Metot ve kurucuların (*constructors*) imzasında yer alan parametrelerdir (örneğin `public static void main(String[] args)` içindeki `args` bir parametredir). Parametreler her zaman "değişken" olarak sınıflandırılır, "alan" olarak değil.

---

# 2. İsimlendirme Kuralları ve Teamülleri

Tüm programlama dillerinde olduğu gibi Java'da da değişken adları için kurallar ve teamüller vardır:

- Değişken adları büyük/küçük harfe duyarlıdır (*case-sensitive*). Bir değişken adı herhangi bir Unicode harf, rakam, alt çizgi (`_`) veya dolar işareti (`$`) dizisinden oluşabilir.
- Değişken adları her zaman bir harf ile başlamalıdır. Dolar işareti (`$`) ve alt çizgi (`_`) teknik olarak geçerli olsa da teamül gereği kullanılmamalıdır.
- Java anahtar sözcükleri (*keywords*) veya ayrılmış sözcükler (*reserved words*) değişken adı olarak kullanılamaz.
- **Teamül (CamelCase):** Değişken adı tek bir kelimeden oluşuyorsa tamamı küçük harfle yazılır (örneğin `speed`). Birden fazla kelimeden oluşuyorsa ilk kelimeden sonraki her kelimenin ilk harfi büyük yazılır (örneğin `gearRatio`, `currentSpeed`).
- Değişken bir sabiti temsil ediyorsa (`static final`), tüm harfler büyük yazılır ve kelimeler alt çizgi ile ayrılır (örneğin `NUM_GEARS`).

---

# 3. İlkel Veri Tipleri (Primitive Data Types)

Java programlama dili statik tür denetimli (*statically-typed*) bir dildir, yani tüm değişkenler kullanılmadan önce bildirilmelidir:

```java
int gear = 1;
```

Java programlama dili sekiz **ilkel veri tipini (primitive data types)** destekler:

| Veri Tipi | Boyut | Min Değer | Max Değer | Açıklama |
| :--- | :--- | :--- | :--- | :--- |
| **`byte`** | 8-bit | -128 | 127 | Bellek tasarrufu için büyük dizilerde tercih edilir. |
| **`short`** | 16-bit | -32,768 | 32,767 | Bellek tasarrufu gereken durumlarda kullanılır. |
| **`int`** | 32-bit | $-2^{31}$ | $2^{31}-1$ | Tamsayılar için standart seçimdir. |
| **`long`** | 64-bit | $-2^{63}$ | $2^{63}-1$ | `int` sınırlarını aşan değerler için kullanılır. Sonuna `L` veya `l` eklenir. |
| **`float`** | 32-bit | IEEE 754 | IEEE 754 | Tek duyarlıklı kayan noktalı sayı. Sonuna `F` veya `f` eklenir. |
| **`double`** | 64-bit | IEEE 754 | IEEE 754 | Çift duyarlıklı kayan noktalı sayı. Ondalıklı sayılar için standart tercihtir. |
| **`boolean`** | 1-bit (mantıksal) | - | - | Yalnızca iki olası değere sahiptir: `true` ve `false`. |
| **`char`** | 16-bit | `'\u0000'` (0) | `'\uffff'` (65,535) | Tek bir 16-bit Unicode karakterini temsil eder. |

Bu sekiz ilkel tipe ek olarak Java, nesneler için `java.lang.String` sınıfı üzerinden zengin bir karakter dizisi desteği de sağlar.

---

# 4. Varsayılan Değerler (Default Values)

Bir alan (*field*) bildirildiğinde ona açıkça bir başlangıç değeri atanmazsa derleyici makul bir varsayılan değer atar:

| Veri Tipi | Varsayılan Değer (Alanlar İçin) |
| :--- | :--- |
| `byte` | `0` |
| `short` | `0` |
| `int` | `0` |
| `long` | `0L` |
| `float` | `0.0f` |
| `double` | `0.0d` |
| `char` | `'\u0000'` |
| `String` (veya herhangi bir nesne referansı) | `null` |
| `boolean` | `false` |

> **Önemli Not:** Yerel değişkenler (*local variables*) hiçbir zaman varsayılan bir değer almaz! Başlatılmamış yerel bir değişkeni okumaya çalışmak derleme zamanı hatasına (*compiler error*) yol açar.

---

# 5. Değişmez Değerler (Literals)

Kaynak kodda doğrudan yazılan sabit değerlere **değişmez değer (literal)** denir.

### Tamsayı Literalleri (Integer Literals)
- **Onluk (Decimal):** `int decVal = 26;`
- **Onaltılık (Hexadecimal):** `0x` veya `0X` ile başlar: `int hexVal = 0x1a;`
- **Sekizlik (Octal):** `0` ile başlar: `int octVal = 032;`
- **İkilik (Binary):** `0b` veya `0B` ile başlar (Java SE 7+): `int binVal = 0b11010;`

### Sayısal Literallerde Alt Çizgi Kullanımı
Java SE 7 ve sonrasında, okunabilirliği artırmak için sayısal literallerin basamakları arasında alt çizgi (`_`) kullanılabilir:

```java
long creditCardNumber = 1234_5678_9012_3456L;
long socialSecurityNumber = 999_99_9999L;
float pi = 3.14_15F;
long hexBytes = 0xFF_EC_DE_5E;
```

### Karakter ve Dize Kaçış Dizileri (Escape Sequences)
Java karakter ve dize literallerinde özel kaçış dizilerini destekler:
- `\b` (Backspace)
- `\t` (Tab)
- `\n` (Yeni Satır / Line Feed)
- `\f` (Form Feed)
- `\r` (Satır Başı / Carriage Return)
- `\"` (Çift Tırnak)
- `\'` (Tek Tırnak)
- `\\` (Ters Eğik Çizgi / Backslash)
