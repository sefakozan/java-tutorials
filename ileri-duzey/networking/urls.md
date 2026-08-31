# Ders: URL'ler ile Çalışma (Working with URLs)

**URL (Uniform Resource Locator - Tekdüze Kaynak Bulucu)**, İnternet üzerindeki bir kaynağın (bir web sayfası, bir dosya veya bir API uç noktası) küresel adresidir.

1. [**URL Yapısı ve Nesnesi Oluşturma**](#1-url-yapısı-ve-nesnesi-oluşturma)
2. [**Bir URL'yi Ayrıştırma (Parsing a URL)**](#2-bir-urlyi-ayrıştırma-parsing-a-url)
3. [**Doğrudan URL'den Veri Okuma**](#3-doğrudan-urlden-veri-okuma)
4. [**`URLConnection` ile Bağlantı Kurma ve Yazma**](#4-urlconnection-ile-bağlantı-kurma-ve-yazma)
---

# 1. URL Yapısı ve Nesnesi Oluşturma

Tipik bir URL şu bileşenlerden oluşur:
- **Protokol:** `http`, `https`, `ftp` vb.
- **Ana Bilgisayar Adı (*Host*):** `docs.oracle.com`
- **Bağlantı Noktası (*Port*):** `80`, `443` (belirtilmezse varsayılan kullanılır)
- **Yol (*Path*):** `/javase/tutorial/index.html`

```java
import java.net.*;

public class CreateURL {
    public static void main(String[] args) throws MalformedURLException {
        // Mutlak URL
        URL myURL = new URL("https://docs.oracle.com/javase/tutorial/index.html");

        // Protokol, sunucu ve dosya yolu ile URL
        URL page = new URL("https", "docs.oracle.com", "/javase/tutorial/index.html");

        // Göreli (Relative) URL
        URL baseURL = new URL("https://docs.oracle.com/javase/tutorial/");
        URL relativeURL = new URL(baseURL, "networking/index.html");
    }
}
```

---

# 2. Bir URL'yi Ayrıştırma (Parsing a URL)

`URL` sınıfı, bir URL'nin bileşenlerini incelemek için çeşitli erişim metotları sağlar:

```java
import java.net.*;

public class ParseURL {
    public static void main(String[] args) throws Exception {
        URL aURL = new URL("http://example.com:80/docs/books/tutorial"
                           + "/index.html?name=networking#DOWNLOADING");

        System.out.println("protocol = " + aURL.getProtocol());
        System.out.println("authority = " + aURL.getAuthority());
        System.out.println("host = " + aURL.getHost());
        System.out.println("port = " + aURL.getPort());
        System.out.println("path = " + aURL.getPath());
        System.out.println("query = " + aURL.getQuery());
        System.out.println("filename = " + aURL.getFile());
        System.out.println("ref = " + aURL.getRef());
    }
}
```

---

# 3. Doğrudan URL'den Veri Okuma

Bir `URL` nesnesi oluşturduktan sonra, web içeriğini doğrudan okumak için `openStream()` metodunu çağırabilirsiniz:

```java
import java.net.*;
import java.io.*;

public class URLReader {
    public static void main(String[] args) throws Exception {
        URL oracle = new URL("https://docs.oracle.com/");
        try (BufferedReader in = new BufferedReader(
                new InputStreamReader(oracle.openStream()))) {
            String inputLine;
            while ((inputLine = in.readLine()) != null)
                System.out.println(inputLine);
        }
    }
}
```

---

# 4. `URLConnection` ile Bağlantı Kurma ve Yazma

Bir web kaynağıyla daha fazla etkileşime girmek (HTTP başlıklarını okumak, POST verisi göndermek vb.) için `URLConnection` sınıfı kullanılır:

```java
import java.net.*;
import java.io.*;

public class URLConnectionReader {
    public static void main(String[] args) throws Exception {
        URL url = new URL("https://example.com/api/data");
        URLConnection connection = url.openConnection();
        
        // POST isteği için çıktı akışını etkinleştir
        connection.setDoOutput(true);
        try (OutputStreamWriter out = new OutputStreamWriter(connection.getOutputStream())) {
            out.write("param1=value1&param2=value2");
        }

        // Yanıtı oku
        try (BufferedReader in = new BufferedReader(
                new InputStreamReader(connection.getInputStream()))) {
            String inputLine;
            while ((inputLine = in.readLine()) != null) 
                System.out.println(inputLine);
        }
    }
}
```
