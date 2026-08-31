# Ders: URL'ler ile Çalışma (Working with URLs)

URL, İnternet üzerindeki bir kaynağın adresidir. Java programlarınız `java.net` paketindeki `URL` ve `URLConnection` sınıflarını kullanarak ağ üzerindeki kaynakları belirleyebilir, ayrıştırabilir, bu kaynaklardan veri okuyabilir ve bu kaynaklara veri yazabilir.

---

## 1. URL Nedir? (What Is a URL?)

**URL (Uniform Resource Locator)**, World Wide Web üzerindeki bir kaynağın genel adresidir. Bir URL genel olarak iki ana bileşenden oluşur:

- **Protokol Tanımlayıcı (Protocol Identifier):** Kaynağa erişmek için kullanılan protokolü belirtir (örneğin `http`, `https`, `ftp`, `file`).
- **Kaynak Adı (Resource Name):** Sunucu adresi, port numarası, dizin yolu ve dosya adını içerir.

```text
http://example.com:80/docs/books/tutorial/index.html?name=networking#DOWNLOADING
\__/   \_________/ \_/\____________________________/ \_____________/ \_________/
 |          |       |               |                       |              |
Protokol   Host    Port            Yol                    Sorgu         Referans
```

---

## 2. URL Oluşturma (Creating a URL)

Java'da `java.net.URL` sınıfı kullanılarak mutlak (absolute) veya göreceli (relative) URL nesneleri oluşturulabilir:

### Mutlak URL Oluşturma
```java
URL myURL = new URL("http://example.com/");
```

### Bileşenleri Belirterek URL Oluşturma (Protokol, Host, Port, Dosya Yolu)
```java
URL myURL = new URL("http", "example.com", 80, "/pages/page1.html");
```

### Göreceli (Relative) URL Oluşturma
Bir temel URL nesnesi ve göreceli bir yol kullanarak yeni bir URL türetilebilir:
```java
URL baseURL = new URL("http://example.com/pages/");
URL page1URL = new URL(baseURL, "page1.html");
URL page2URL = new URL(baseURL, "page2.html");
```

---

## 3. URL Ayrıştırma (Parsing a URL)

Bir `URL` nesnesi oluşturulduktan sonra, adresin bileşenlerine erişmek için çeşitli erişimci (accessor) metotlar kullanılır:

```java
import java.net.URL;

public class ParseURL {
    public static void main(String[] args) throws Exception {
        URL aURL = new URL("http://example.com:80/docs/books/tutorial/index.html?name=networking#DOWNLOADING");

        System.out.println("Protokol = " + aURL.getProtocol());
        System.out.println("Yetkili (Authority) = " + aURL.getAuthority());
        System.out.println("Host = " + aURL.getHost());
        System.out.println("Port = " + aURL.getPort());
        System.out.println("Yol (Path) = " + aURL.getPath());
        System.out.println("Sorgu (Query) = " + aURL.getQuery());
        System.out.println("Dosya Adı = " + aURL.getFile());
        System.out.println("Referans (Ref/Anchor) = " + aURL.getRef());
    }
}
```

---

## 4. Doğrudan Bir URL'den Okuma (Reading Directly from a URL)

Bir URL içeriğini okumanın en doğrudan yolu `openStream()` metodudur:

```java
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class URLReader {
    public static void main(String[] args) throws Exception {
        URL oracle = new URL("https://docs.oracle.com/");
        
        try (BufferedReader in = new BufferedReader(new InputStreamReader(oracle.openStream()))) {
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println(inputLine);
            }
        }
    }
}
```

---

## 5. Bir URL'e Bağlanma (Connecting to a URL)

`openConnection()` metodu, uygulama ile URL arasında bir iletişim bağlantısını temsil eden bir `URLConnection` nesnesi döndürür:

```java
import java.net.URL;
import java.net.URLConnection;

public class URLConnectionDemo {
    public static void main(String[] args) throws Exception {
        URL myURL = new URL("https://docs.oracle.com/");
        URLConnection myURLConnection = myURL.openConnection();
        
        // Bağlantıyı başlat
        myURLConnection.connect();
        
        System.out.println("İçerik Türü: " + myURLConnection.getContentType());
        System.out.println("İçerik Uzunluğu: " + myURLConnection.getContentLength());
        System.out.println("Son Değiştirilme Tarihi: " + myURLConnection.getLastModified());
    }
}
```

---

## 6. URLConnection'dan Okuma ve Yazma (Reading from and Writing to a URLConnection)

`URLConnection` nesnesi üzerinden hem veri okumak (`getInputStream()`) hem de sunucuya POST isteği ile veri göndermek (`getOutputStream()`) mümkündür:

```java
import java.io.*;
import java.net.*;

public class URLConnectionWriter {
    public static void main(String[] args) throws Exception {
        URL url = new URL("http://example.com/cgi-bin/test");
        URLConnection connection = url.openConnection();
        
        // Çıktı göndermeyi etkinleştir (POST için)
        connection.setDoOutput(true);

        // Sunucuya veri yazma
        try (OutputStreamWriter out = new OutputStreamWriter(connection.getOutputStream())) {
            out.write("string=JavaTutorialsTest");
        }

        // Sunucudan gelen yanıtı okuma
        try (BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
            String decodedString;
            while ((decodedString = in.readLine()) != null) {
                System.out.println(decodedString);
            }
        }
    }
}
```
