# Sorular ve Alıştırmalar: Başlarken

## Sorular

1. Java programlama dilinde yazılmış bir programı derlediğinizde, derleyici insan tarafından okunabilir kaynak dosyasını bir Java Sanal Makinesinin anlayabileceği platformdan bağımsız bir koda dönüştürür. Bu platformdan bağımsız koda ne ad verilir?
2. Java programlama dilinde yazılmış bir programın çalışmasını sağlayan üç temel şey nedir?
3. Aşağıdaki Java kodundaki hatayı bulun:
   ```java
   class HelloWorld {
       public static void main(String[] args) {
           System.out.println("Hello World!");
       }
   }
   ```
   (Dosya `helloworld.java` adıyla kaydedilmiştir.)

---

## Alıştırmalar

1. `HelloWorldApp.java` programını konsola `"Hola Mundo!"` yazdıracak şekilde değiştirin. Değişikliği derleyin ve çalıştırın.
2. `HelloWorldApp.java` programında kasıtlı olarak bir sözdizimi hatası oluşturun (örneğin bir noktalı virgülü kaldırın) ve derleyicinin verdiği hata mesajını inceleyin.

---

## Yanıtlar

1. **Bayt kodu (Bytecode).**
2. **Java Sanal Makinesi (JVM)**, **Java API (Uygulama Programlama Arayüzü)** ve **Java Çalışma Zamanı Ortamı (JRE)**.
3. Java büyük/küçük harfe duyarlıdır. `public class HelloWorld` veya `class HelloWorld` içeren bir dosya `HelloWorld.java` olarak kaydedilmelidir; `helloworld.java` adı derleme veya çalıştırma aşamasında uyumsuzluk yaratır.
