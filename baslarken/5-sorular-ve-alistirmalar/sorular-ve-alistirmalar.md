# Sorular ve Alıştırmalar: Başlarken

## Sorular

1. Java programlama dilinde yazılmış bir programı derlediğinizde, derleyici insan tarafından okunabilir kaynak dosyasını bir Java Sanal Makinesinin anlayabileceği platformdan bağımsız bir koda dönüştürür. Bu platformdan bağımsız koda ne ad verilir?
2. Aşağıdakilerden hangisi geçerli bir yorum satırı **değildir**?
   - a. `/** yorum */`
   - b. `/* yorum */`
   - c. `/* yorum`
   - d. `// yorum`
3. Çalışma zamanında aşağıdaki hatayı görürseniz ilk kontrol etmeniz gereken şey nedir?
   ```cmd
   Exception in thread "main" java.lang.NoClassDefFoundError: HelloWorldApp.java.
   ```
4. `main` metodunun doğru imzası nedir?
5. `main` metodunu tanımlarken hangi değiştirici (modifier) önce gelmelidir, `public` mi yoksa `static` mi?
6. `main` metodu hangi parametreleri tanımlar?

---

## Alıştırmalar

1. `HelloWorldApp.java` programını `Hello World!` yerine `Hola Mundo!` yazdıracak şekilde değiştirin.
2. Aşağıdaki kodda bir hata bulunmaktadır:
   ```java
   class HelloWorldApp2 {
       public static void main(String[] args) {
           System.out.println("Hello World!); // Metni ekrana yazdırır.
       }
   }
   ```
   Programın başarıyla derlenip çalışması için bu hatayı düzeltin. Hata neydi?

---

## Yanıtlar

### Soruların Yanıtları

1. **Bayt kodu (Bytecode).**
2. **c seçeneği (`/* yorum`)** geçerli bir yorum değildir çünkü kapatma karakterleri (`*/`) eksiktir.
3. **Sınıf yolunuzu (classpath) ve komutunuzu kontrol edin.** Programı çalıştırırken `.class` veya `.java` uzantısını vermemelisiniz. Doğru komut `java HelloWorldApp` şeklindedir.
4. Doğru imza `public static void main(String[] args)` veya `public static void main(String... args)` şeklindedir.
5. İki değiştirici de herhangi bir sırada yazılabilir (`public static` veya `static public`), ancak genel kural ve teamül **`public static`** şeklinde yazmaktır.
6. `main` metodu genellikle `args` olarak adlandırılan ve türü bir `String` nesneleri dizisi (`String[]`) olan tek bir parametre tanımlar.

### Alıştırmaların Yanıtları

1. Değiştirilmesi gereken tek satır şudur:
   ```java
   System.out.println("Hola Mundo!"); // Metni ekrana yazdırır.
   ```
2. Programı derlemeye çalıştığınızda aşağıdaki hatayı alırsınız:
   ```cmd
   HelloWorldApp2.java:3: error: unclosed string literal
           System.out.println("Hello World!); // Metni ekrana yazdırır.
                              ^
   HelloWorldApp2.java:3: error: ')' expected
           System.out.println("Hello World!); // Metni ekrana yazdırır.
                                                                   ^
   2 errors
   ```
   Bu hatayı düzeltmek için metin dizesinin sonuna kapatma tırnak işaretini eklemeniz gerekir:
   ```java
   System.out.println("Hello World!"); // Metni ekrana yazdırır.
   ```
