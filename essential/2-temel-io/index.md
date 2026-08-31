# Ders: Temel Giriş/Çıkış (Basic I/O)

Bu ders, Java programlama dilinde veri okuma ve yazma işlemlerini kapsar: geleneksel G/Ç Akışları (I/O Streams) ve modern Dosya G/Ç (NIO.2).

1. [**G/Ç Akışları (I/O Streams)**](#1.-g/ç-akışları-(i/o-streams))
2. [**Bayt ve Karakter Akışları**](#2.-bayt-ve-karakter-akışları)
3. [**Tamponlu Akışlar (Buffered Streams)**](#3.-tamponlu-akışlar-(buffered-streams))
4. [**Modern Dosya G/Ç (NIO.2 - Path ve Files)**](#4.-modern-dosya-g/ç-(nio.2---path-ve-files))
---

# 1. G/Ç Akışları (I/O Streams)

Bir G/Ç Akışı, bir girdi kaynağından veri okumayı veya bir çıktı hedefine veri yazmayı temsil eder:

<figure style="text-align: center;">
  <img src="_media/figures/io-ins.gif" alt="Girdi Akışı Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Girdi akışı: Program harici kaynaktan veri okur.</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="_media/figures/io-outs.gif" alt="Çıktı Akışı Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Çıktı akışı: Program harici hedefe veri yazar.</figcaption>
</figure>

---

# 2. Bayt ve Karakter Akışları

<figure style="text-align: center;">
  <img src="_media/figures/byteStream.gif" alt="Bayt Akışı Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Bayt akışları veriyi 8-bitlik bayt dizileri halinde okur ve yazar.</figcaption>
</figure>

- **Bayt Akışları:** 8-bitlik ikili veriler için `InputStream` ve `OutputStream` kullanılır.
- **Karakter Akışları:** 16-bitlik Unicode karakterler için `Reader` ve `Writer` kullanılır.

---

# 3. Tamponlu Akışlar (Buffered Streams)

Disk erişim yükünü azaltmak için tamponlu akışlar kullanılır:

```java
BufferedReader inputStream = new BufferedReader(new FileReader("input.txt"));
BufferedWriter outputStream = new BufferedWriter(new FileWriter("output.txt"));
```

---

# 4. Modern Dosya G/Ç (NIO.2 - Path ve Files)

Java SE 7 `java.nio.file` paketi dosya sistemleri için modern bir API sağlar:

<figure style="text-align: center;">
  <img src="_media/figures/io-dirStructure.gif" alt="Dizin Ağacı Yapısı" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">NIO.2 Path nesneleri dosya sistemi hiyerarşisini temsil eder.</figcaption>
</figure>

```java
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.List;

Path path = Paths.get("/home/user/logs/app.log");

if (Files.exists(path)) {
    List<String> lines = Files.readAllLines(path);
    for (String line : lines) {
        System.out.println(line);
    }
}
```
