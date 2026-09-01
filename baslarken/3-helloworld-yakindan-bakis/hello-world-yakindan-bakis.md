# Ders: "Hello World!" Uygulamasına Yakından Bir Bakış

Artık "Hello World!" uygulamasını gördünüz (ve muhtemelen derleyip çalıştırdınız), şimdi nasıl çalıştığını merak ediyor olabilirsiniz. Kodun tamamı tekrar aşağıda verilmiştir:

```java
class HelloWorldApp {
    public static void main(String[] args) {
        System.out.println("Hello World!"); // Metni ekrana yazdırır.
    }
}
```

"Hello World!" uygulaması üç temel bileşenden oluşur: [kaynak kod yorumları](#1-kaynak-kod-yorumları), [`HelloWorldApp` sınıf tanımı](#2-helloworldapp-sınıf-tanımı) ve [`main` metodu](#3-main-metodu). Aşağıdaki açıklamalar koda dair temel bir anlayış kazanmanızı sağlayacaktır; ancak daha derin ayrıntılar öğreticinin geri kalanını okudukça netleşecektir.

## 1. Kaynak Kod Yorumları

Aşağıdaki kalın gösterilen metinler, "Hello World!" uygulamasının **yorumlarını (comments)** tanımlar:

```java
/**
 * HelloWorldApp sınıfı, standart çıktıya sadece 
 * "Hello World!" yazdıran bir uygulamayı hayata geçirir.
 */
class HelloWorldApp {
    public static void main(String[] args) {
        System.out.println("Hello World!"); // Metni ekrana yazdırır.
    }
}
```

Yorumlar derleyici tarafından tamamen göz ardı edilir, ancak diğer programcılar için oldukça yararlıdır. Java programlama dili üç tür yorumu destekler:

- `/* metin */`  
  Derleyici `/*` ile `*/` arasındaki her şeyi yok sayar.
- `/** dokümantasyon */`  
  Bu bir dokümantasyon yorumunu (*doc comment*) belirtir. Derleyici, tıpkı `/*` ve `*/` kullanan yorumlarda olduğu gibi bu tür yorumları da yok sayar. `javadoc` aracı, otomatik olarak API dokümantasyonu oluştururken bu dokümantasyon yorumlarını kullanır. `javadoc` hakkında daha fazla bilgi için [Javadoc™ Araç Dokümantasyonu](https://docs.oracle.com/javase/8/docs/technotes/guides/javadoc/index.html)'na bakabilirsiniz.
- `// metin`  
  Derleyici `//` işaretinden satırın sonuna kadar olan her şeyi yok sayar.

---

## 2. HelloWorldApp Sınıf Tanımı

Aşağıdaki kalın gösterilen satırlar "Hello World!" uygulaması için sınıf tanım bloğunu başlatır ve sonlandırır:

```java
/**
 * HelloWorldApp sınıfı, standart çıktıya sadece 
 * "Hello World!" yazdıran bir uygulamayı hayata geçirir.
 */
<b>class HelloWorldApp {</b>
    public static void main(String[] args) {
        System.out.println("Hello World!"); // Metni ekrana yazdırır.
    }
}
```

Yukarıda gösterildiği gibi, bir sınıf tanımının en temel biçimi şöyledir:

```java
class isim {
    . . .
}
```

`class` anahtar sözcüğü, `isim` adlı bir sınıf için sınıf tanımını başlatır ve her sınıfa ait kodlar yukarıda kalın olarak gösterilen süslü parantezleri (`{ }`, curly braces) arasında yer alır. Bölüm 2 genel olarak sınıflara genel bir bakış sunar ve Bölüm 4 sınıfları ayrıntılı olarak ele alır. Şimdilik her uygulamanın bir sınıf tanımıyla başladığını bilmeniz yeterlidir.

---

## 3. main Metodu

Aşağıdaki kalın gösterilen satırlar `main` metodunun tanımını başlatır:

```java
/**
 * HelloWorldApp sınıfı, standart çıktıya sadece 
 * "Hello World!" yazdıran bir uygulamayı hayata geçirir.
 */
class HelloWorldApp {
    **public static void main(String[] args)** {
        System.out.println("Hello World!"); // Metni ekrana yazdırır.
    }
}
```

Java programlama dilinde her uygulama, imzası tam olarak aşağıdaki gibi olan bir ***main*** metodu içermek zorundadır:

```java
public static void main(String[] args)
```

***public*** ve ***static*** değiştiricileri (modifiers) her iki sırada da yazılabilir (***public static*** veya ***static public***), ancak genel kabul görmüş kural yukarıda gösterildiği gibi ***public static*** kullanmaktır. Argümana istediğiniz adı verebilirsiniz, ancak çoğu programcı ***args*** veya ***argv*** adını tercih eder.

main metodu, C ve C++ dillerindeki main fonksiyonuna benzer; uygulamanızın **giriş noktasıdır (entry point)** ve sonrasında programınızın ihtiyaç duyduğu diğer tüm metotları çağırır.

main metodu tek bir parametre kabul eder: **String** türündeki elemanlardan oluşan bir dizi (**array**).

```java
public static void main(String[] args)
```

Bu dizi, çalışma zamanı sisteminin uygulamanıza bilgi aktarmasını sağlayan mekanizmadır. Örneğin:

```bash
java MyApp arg1 arg2
```

Dizideki her bir dizgiye (string) **komut satırı argümanı (command-line argument)** adı verilir. Komut satırı argümanları, kullanıcıların uygulamayı yeniden derlemeden çalışmasını etkilemelerine olanak tanır. Örneğin bir sıralama programı, kullanıcının verileri azalan sırada sıralanmasını şu komut satırı argümanıyla belirtmesine izin verebilir:

```bash
-descending
```

"Hello World!" uygulaması komut satırı argümanlarını göz ardı eder, ancak bu tür argümanların varlığından haberdar olmanız önemlidir.

Son olarak:

```java
System.out.println("Hello World!");
```

satırı, "Hello World!" mesajını standart çıktıya yazdırmak için çekirdek kütüphaneden **System** sınıfını kullanır. Bu kütüphanenin parçaları (aynı zamanda **"Uygulama Programlama Arayüzü, Application Programming Interface"** veya **API** olarak da bilinir) öğreticinin geri kalanı boyunca ayrıntılı olarak tartışılacaktır.
