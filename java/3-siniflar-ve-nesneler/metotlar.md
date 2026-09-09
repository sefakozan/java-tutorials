# Metotları Tanımlama (Defining Methods)

İşte tipik bir metot bildirimine bir örnek:

```java
public double calculateAnswer(double wingSpan, int numberOfEngines,
                              double length, double grossTons) {
    // hesaplamayı burada yapın
}
```

Bir metot bildiriminin yalnızca gerekli olan öğeleri; metodun dönüş türü (return type), adı (name), bir çift parantez `()` ve süslü parantezler `{}` arasındaki gövdesidir (body).

Daha genel olarak metot bildirimleri, sırasıyla altı bileşene sahiptir:

1. **Niteleyiciler (Modifiers)** — `public`, `private` ve daha sonra öğreneceğiniz diğerleri gibi.
2. **Dönüş türü (The return type)** — metot tarafından döndürülen değerin veri türü veya metot bir değer döndürmüyorsa `void`.
3. **Metot adı** — alan adları (fields) için geçerli olan kurallar metot adları için de geçerlidir, ancak gelenek biraz farklıdır.
4. **Parantez içindeki parametre listesi** — veri türlerinin önüne geldiği, parantez içine alınmış `()`, virgülle ayrılmış girdi parametreleri listesi. Hiç parametre yoksa boş parantez kullanmanız gerekir.
5. **İstisna listesi** — daha sonra ele alınacaktır.
6. **Süslü parantezler arasına alınmış metot gövdesi (The method body)** — yerel değişkenlerin bildirilmesi de dahil olmak üzere metodun kodu buraya yazılır.

Niteleyiciler, dönüş türleri ve parametreler bu dersin ilerleyen kısımlarında ele alınacaktır. İstisnalar (Exceptions) daha sonraki bir derste tartışılmaktadır.

> **Tanım:** Bir metot bildiriminin iki bileşeni **metot imzasını (method signature)** oluşturur — metodun adı ve parametre türleri.

Yukarıda bildirilen **metodun imzası** şudur:

```java
calculateAnswer(double, int, double, double)
```

## Bir Metodu İsimlendirme (Naming a Method)

Bir metot adı herhangi bir yasal tanımlayıcı olabilse de, kodlama kuralları metot adlarını sınırlar. Kural gereği metot adları küçük harfle başlayan bir fiil veya küçük harfle başlayan bir fiille başlayıp ardından sıfatlar, isimler vb. gelen çok kelimeli bir ad olmalıdır. Çok kelimeli adlarda, ikinci ve sonraki kelimelerin ilk harfi büyük yazılmalıdır. İşte bazı örnekler:

```text
run
runFast
getBackground
getFinalData
compareTo
setX
isEmpty
```

Tipik olarak bir metodun kendi sınıfı içinde benzersiz bir adı vardır. Bununla birlikte, **metot aşırı yüklemesi (method overloading)** nedeniyle bir metot diğer metotlarla aynı ada sahip olabilir.

## Metotları Aşırı Yükleme (Overloading Methods)

Java programlama dili metotların ***aşırı yüklenmesini (overloading)*** destekler ve Java, farklı ***metot imzalarına (method signatures)*** sahip metotları birbirinden ayırt edebilir. Bu, bir sınıftaki metotların farklı parametre listelerine sahip olmaları koşuluyla aynı ada sahip olabileceği anlamına gelir (bunun "[Arayüzler ve Kalıtım](../java/5-arayuzler-ve-kalitim/index.md)" başlıklı derste tartışılacak bazı nitelikleri vardır).

Çeşitli veri türlerini (stringler, integerlar ve benzerleri) çizmek için kaligrafi (calligraphy) kullanabilen ve her bir veri türünü çizmek için bir metot içeren bir sınıfınız olduğunu varsayalım. Her metot için yeni bir ad kullanmak zahmetlidir — örneğin `drawString`, `drawInteger`, `drawFloat` vb. Java programlama dilinde, tüm çizim metotları için aynı adı kullanabilir, ancak her metoda farklı bir bağımsız değişken (argüman) listesi iletebilirsiniz. Böylece veri çizim sınıfı, her biri farklı bir parametre listesine sahip olan `draw` adlı dört metot bildirebilir:

```java
public class DataArtist {
    ...
    public void draw(String s) {
        ...
    }
    public void draw(int i) {
        ...
    }
    public void draw(double f) {
        ...
    }
    public void draw(int i, double f) {
        ...
    }
}
```

**Aşırı yüklenmiş metotlar, metoda iletilen *bağımsız değişkenlerin (argümanların) sayısı* ve *türü* ile ayırt edilir**. Kod örneğinde `draw(String s)` ve `draw(int i)`, farklı bağımsız değişken türleri gerektirdikleri için ayrı ve benzersiz metotlardır.

Aynı ada ve aynı sayıda ve türde bağımsız değişkene sahip birden fazla metot bildiremezsiniz, çünkü derleyici bunları birbirinden ayıramaz.

Derleyici, metotları ayırt ederken dönüş türünü dikkate almaz; bu nedenle farklı bir dönüş türüne sahip olsalar bile aynı imzaya sahip iki metot bildiremezsiniz.

> **Not:** Aşırı yüklenmiş metotlar (overloaded methods) tutumlu kullanılmalıdır, çünkü kodu çok daha az okunabilir hale getirebilirler.
