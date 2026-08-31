# Ders: Temel Giriş/Çıkış ve Dosya İşlemleri (Basic I/O & NIO.2)

Java programlama dilinde Giriş/Çıkış (I/O) işlemleri iki ana mimari üzerinden gerçekleştirilir: geleneksel **I/O Akışları (Streams)** ve Java SE 7 ile tanıtılan modern **Dosya I/O (NIO.2 - `java.nio.file`)** API'si.

1. [**I/O Akışları (I/O Streams)**](#1-io-akışları-io-streams)
2. [**Karakter ve Tamponlu Akışlar (Character & Buffered Streams)**](#2-karakter-ve-tamponlu-akışlar-character--buffered-streams)
3. [**Tarama ve Biçimlendirme (`Scanner` & `Formatting`)**](#3-tarama-ve-biçimlendirme-scanner--formatting)
4. [**Nesne Akışları ve Serileştirme (Object Streams & Serialization)**](#4-nesne-akışları-ve-serileştirme-object-streams--serialization)
5. [**Dosya I/O (NIO.2 - `java.nio.file`)**](#5-dosya-io-nio2---javaniofile)
---

# 1. I/O Akışları (I/O Streams)

Bir **I/O Akışı (I/O Stream)**, bir veri kaynağını veya bir veri hedefini temsil eden sıralı bir veri dizisidir.

### Bayt Akışları (Byte Streams)
Bayt akışları 8 bitlik ham baytlar üzerinde okuma ve yazma işlemleri gerçekleştirir. Tüm bayt akışı sınıfları `InputStream` ve `OutputStream` soyut sınıflarından türer.

<figure style="text-align: center;">
  <img src="_media/figures/byteStream.gif" alt="Bayt Akışı Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Giriş ve çıkış bayt akışları.</figcaption>
</figure>

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class CopyBytes {
    public static void main(String[] args) throws IOException {
        try (FileInputStream in = new FileInputStream("xanadu.txt");
             FileOutputStream out = new FileOutputStream("outagain.txt")) {
            int c;
            while ((c = in.read()) != -1) {
                out.write(c);
            }
        }
    }
}
```

---

# 2. Karakter ve Tamponlu Akışlar (Character & Buffered Streams)

### Karakter Akışları (Character Streams)
Karakter akışları verileri 16 bitlik Unicode karakterleri olarak işler ve yerel karakter setlerini otomatik olarak çevirir. Tüm karakter akışları `Reader` ve `Writer` sınıflarından türer (örneğin `FileReader` ve `FileWriter`).

### Tamponlu Akışlar (Buffered Streams)
Tamponlanmamış I/O işlemlerinde her okuma veya yazma isteği doğrudan işletim sistemi tarafından yürütülür; bu da ciddi bir performans kaybına yol açar. **Tamponlu akışlar (buffered streams)** verileri bellekteki bir tampon alandan (*buffer*) okuyarak yerel sistem çağrılarının sayısını büyük ölçüde azaltır:

```java
BufferedReader inputStream = new BufferedReader(new FileReader("xanadu.txt"));
BufferedWriter outputStream = new BufferedWriter(new FileWriter("characteroutput.txt"));
```

---

# 3. Tarama ve Biçimlendirme (`Scanner` & `Formatting`)

`java.util.Scanner` sınıfı, metin girdilerini belirteçlere (*tokens*) böler ve bu belirteçleri ilkel veri türlerine veya dizelere dönüştürür:

```java
import java.io.*;
import java.util.Scanner;

public class ScanXan {
    public static void main(String[] args) throws IOException {
        try (Scanner s = new Scanner(new BufferedReader(new FileReader("xanadu.txt")))) {
            while (s.hasNext()) {
                System.out.println(s.next());
            }
        }
    }
}
```

---

# 4. Nesne Akışları ve Serileştirme (Object Streams & Serialization)

Nesne akışları (`ObjectInputStream` ve `ObjectOutputStream`), ilkel veri türlerinin yanı sıra tüm Java nesnelerinin diske yazılmasını veya ağ üzerinden iletilmesini sağlar. Bir nesnenin serileştirilebilmesi için sınıfının `java.io.Serializable` işaretçi arayüzünü uygulaması gerekir.

```java
// Nesneyi diske yazma
try (ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("object.data"))) {
    out.writeObject(new BigDecimal("1234.56"));
}

// Nesneyi diskten okuma
try (ObjectInputStream in = new ObjectInputStream(new FileInputStream("object.data"))) {
    BigDecimal bd = (BigDecimal) in.readObject();
}
```

---

# 5. Dosya I/O (NIO.2 - `java.nio.file`)

Java SE 7 ile tanıtılan `java.nio.file` paketi, modern ve kapsamlı bir dosya yönetim API'si sunar:

### `Path` Arayüzü
Bir dosya veya dizinin dosya sistemindeki konumunu temsil eder:

```java
Path p1 = Paths.get("/home/logfile.txt");
Path p2 = Paths.get("C:\\Users\\admin\\file.txt");
```

<figure style="text-align: center;">
  <img src="_media/figures/io-dirStructure.gif" alt="Dizin Yapısı" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Dosya sistemi dizin ağacı ve yollar.</figcaption>
</figure>

### `Files` Sınıfı ile Temel Dosya İşlemleri
`java.nio.file.Files` sınıfı, dosya ve dizinleri yönetmek için statik metotlar sağlar:

```java
Path file = Paths.get("test.txt");

// Varlık kontrolü
boolean exists = Files.exists(file);

// Kopyalama, taşıma ve silme
Files.copy(sourcePath, targetPath, StandardCopyOption.REPLACE_EXISTING);
Files.move(sourcePath, targetPath, StandardCopyOption.ATOMIC_MOVE);
Files.delete(file);

// Hızlı okuma ve yazma
List<String> lines = Files.readAllLines(file, StandardCharsets.UTF_8);
Files.write(file, lines, StandardCharsets.UTF_8);
```

### Sembolik Bağlantılar (Symbolic Links)
<figure style="text-align: center;">
  <img src="_media/figures/io-symlink.gif" alt="Sembolik Bağlantı Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Sembolik bağlantı (symbolic link) ve hedef dosya.</figcaption>
</figure>
