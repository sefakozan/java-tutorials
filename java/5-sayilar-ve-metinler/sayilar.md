# Ders: Sayılar ve Math Sınıfı (The Numbers Classes & Math)

Sayılarla çalışırken genellikle kodunuzda ilkel veri türlerini (`byte`, `int`, `double` vb.) kullanırsınız. Ancak bazen sayılar yerine nesneler kullanmanız gerekir; örneğin koleksiyonlar (`List`, `Map`) yalnızca nesneleri tutabilir. Bu amaçla Java, her ilkel tür için bir **sarmalayıcı sınıf (wrapper class)** sağlar: `Byte`, `Short`, `Integer`, `Long`, `Float`, `Double`.

<figure style="text-align: center;">
  <img src="_media/figures/objects-numberHierarchy.gif" alt="Number Sınıf Hiyerarşisi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Sayı sınıflarının Number üst sınıfından türeyen hiyerarşisi.</figcaption>
</figure>

1. [**Sayı Sarmalayıcı Sınıfları (Wrapper Classes)**](#1-sayı-sarmalayıcı-sınıfları-wrapper-classes)
2. [**Otomatik Kutulama ve Kutudan Çıkarma (Autoboxing / Unboxing)**](#2-otomatik-kutulama-ve-kutudan-çıkarma-autoboxing--unboxing)
3. [**Sayısal Çıktıyı Biçimlendirme (Formatting Numeric Output)**](#3-sayısal-çıktıyı-biçimlendirme-formatting-numeric-output)
4. [**Math Matematik Sınıfı**](#4-math-matematik-sınıfı)
---

# 1. Sayı Sarmalayıcı Sınıfları (Wrapper Classes)

Tüm sayısal sarmalayıcı sınıflar soyut `java.lang.Number` sınıfının alt sınıflarıdır:

- `Byte`, `Short`, `Integer`, `Long`, `Float`, `Double`
- Yüksek hassasiyetli matematik için `java.math.BigDecimal` ve `java.math.BigInteger`

Bu sınıflar yararlı sabitler (`Integer.MIN_VALUE`, `Integer.MAX_VALUE`) ve tür dönüştürme metotları (`xxxValue()`, `compareTo()`, `equals()`) içerir.

---

# 2. Otomatik Kutulama ve Kutudan Çıkarma (Autoboxing / Unboxing)

- **Otomatik Kutulama (*Autoboxing*):** Java derleyicisinin bir ilkel tür ile ona karşılık gelen sarmalayıcı sınıf nesnesi arasında yaptığı otomatik dönüştürmedir (örneğin `int`'i `Integer`'a dönüştürme):
  ```java
  List<Integer> li = new ArrayList<>();
  for (int i = 1; i < 50; i += 2)
      li.add(i); // int i otomatik olarak Integer nesnesine kutulanır (autoboxing)
  ```
- **Kutudan Çıkarma (*Unboxing*):** Bir sarmalayıcı sınıf nesnesinin değerinin karşılık gelen ilkel türe otomatik olarak dönüştürülmesidir:
  ```java
  Integer a = new Integer(10);
  int b = a; // Integer nesnesi otomatik olarak int değerine çıkarılır (unboxing)
  ```

---

# 3. Sayısal Çıktıyı Biçimlendirme (Formatting Numeric Output)

`System.out.format` (veya `printf`), sayısal değerleri belirli basamak sayısı, para birimi veya binlik ayırıcı ile ekrana yazdırmanıza olanak tanır:

```java
long n = 461012;
System.out.format("%d%n", n);      //  "461012"
System.out.format("%08d%n", n);    //  "00461012"
System.out.format("%,8d%n", n);    //  " 461,012"
System.out.format("%+.8d%n", n);   //  "+00461012"

double pi = Math.PI;
System.out.format("%f%n", pi);       // "3.141593"
System.out.format("%.3f%n", pi);     // "3.142"
System.out.format("%10.3f%n", pi);   // "     3.142"
```

Ayrıca özelleştirilmiş kalıplar için `java.text.DecimalFormat` sınıfı kullanılır:

```java
DecimalFormat myFormatter = new DecimalFormat("###,###.###");
String output = myFormatter.format(123456.789);
System.out.println(output); // "123,456.789"
```

---

# 4. Math Matematik Sınıfı

`java.lang.Math` sınıfı, temel sayısal işlemler için statik metotlar ve sabitler (`Math.PI`, `Math.E`) sağlar:

### Temel Fonksiyonlar
- `Math.abs(x)`: Mutlak değer
- `Math.ceil(x)`: Yukarı yuvarlama (en küçük tamsayı)
- `Math.floor(x)`: Aşağı yuvarlama (en büyük tamsayı)
- `Math.round(x)`: En yakın tamsayıya yuvarlama
- `Math.min(x, y)` ve `Math.max(x, y)`: Minimum ve maksimum değer

### Üstel ve Logaritmik Fonksiyonlar
- `Math.sqrt(x)`: Karekök
- `Math.pow(base, exp)`: Üs alma
- `Math.exp(x)`: $e^x$
- `Math.log(x)`: Doğal logaritma ($\ln x$)

### Rastgele Sayı Üretimi
- `Math.random()`: `0.0` (dahil) ile `1.0` (hariç) arasında sözde rastgele bir `double` sayı üretir:
  ```java
  // 1 ile 10 arasında rastgele tamsayı:
  int number = (int)(Math.random() * 10) + 1;
  ```
