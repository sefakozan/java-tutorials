# Ders: Ağ Programlama (Custom Networking)

Java platformu, ağ üzerinden iletişim kuran uygulamalar geliştirmek için `java.net` paketinde zengin sınıflar sağlar.

1. [**Ağ İletişimi Temelleri**](#1.-ağ-i̇letişimi-temelleri)
2. [**TCP/IP ve Portlar**](#2.-tcp/ip-ve-portlar)
3. [**URL'ler ile Çalışma**](#3.-url'ler-ile-çalışma)
4. [**Soketler (Sockets - TCP İletişimi)**](#4.-soketler-(sockets---tcp-i̇letişimi))
5. [**Datagramlar (UDP İletişimi)**](#5.-datagramlar-(udp-i̇letişimi))
---

# 1. Ağ İletişimi Temelleri

Bilgisayarlar ağ üzerinden birbirleriyle veri paketleri paylaşarak iletişim kurar:

<figure style="text-align: center;">
  <img src="_media/figures/1netw.gif" alt="Ağ Bağlantısı Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Ağ üzerindeki düğümler ve veri iletişimi.</figcaption>
</figure>

---

# 2. TCP/IP ve Portlar

TCP (Transmission Control Protocol), iki uygulama arasında güvenilir ve sıralı bir veri akışı sağlar:

<figure style="text-align: center;">
  <img src="_media/figures/2tcp.gif" alt="TCP/IP ve Port Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">TCP/IP portları uygulamaları yönlendirir.</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="_media/figures/3tcpudp.gif" alt="TCP ve UDP Karşılaştırması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">TCP (bağlantı yönelimli, güvenilir) ve UDP (bağlantısız, hafif).</figcaption>
</figure>

---

# 3. URL'ler ile Çalışma

```java
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class URLReader {
    public static void main(String[] args) throws Exception {
        URL oracle = new URL("https://docs.oracle.com/");
        BufferedReader in = new BufferedReader(
            new InputStreamReader(oracle.openStream()));

        String inputLine;
        while ((inputLine = in.readLine()) != null)
            System.out.println(inputLine);
        in.close();
    }
}
```

---

# 4. Soketler (Sockets - TCP İletişimi)

- **İstemci Soketi (`Socket`):** `Socket socket = new Socket("localhost", 8080);`
- **Sunucu Soketi (`ServerSocket`):** `ServerSocket server = new ServerSocket(8080);`

---

# 5. Datagramlar (UDP İletişimi)

Hafif ve bağlantısız paket iletimi için `DatagramSocket` ve `DatagramPacket` sınıfları kullanılır.
