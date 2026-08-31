# Ders: Datagramlar Hakkında Her Şey (All About Datagrams & UDP)

**Datagram**, ağ üzerinden gönderilen; varışı, varış zamanı ve sırası garanti edilmeyen bağımsız, kendi kendine yeten bir veri paketidir. Datagramlar **UDP (User Datagram Protocol - Kullanıcı Datagram Protokolü)** üzerinde çalışır.

<figure style="text-align: center;">
  <img src="_media/figures/3tcpudp.gif" alt="TCP ve UDP Karşılaştırması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">TCP (bağlantı tabanlı) ile UDP (datagram tabanlı) protokollerinin karşılaştırması.</figcaption>
</figure>

1. [**`DatagramPacket` ve `DatagramSocket` Sınıfları**](#1-datagrampacket-ve-datagramsocket-sınıfları)
2. [**UDP İstemci ve Sunucu Örneği**](#2-udp-i̇stemci-ve-sunucu-örneği)
3. [**Çok Noktaya Yayın (Multicasting - `MulticastSocket`)**](#3-çok-noktaya-yayın-multicasting---multicastsocket)
---

# 1. `DatagramPacket` ve `DatagramSocket` Sınıfları

Java'da UDP iletişimi iki ana sınıf üzerinden yürütülür:

- **`DatagramPacket`:** Taşınacak bayt dizisini, verinin uzunluğunu, hedef IP adresini (`InetAddress`) ve hedef port numarasını barındıran pakettir.
- **`DatagramSocket`:** Datagram paketlerini ağ üzerinden göndermek (`send`) ve almak (`receive`) için kullanılan sokettir.

---

# 2. UDP İstemci ve Sunucu Örneği

### UDP Sunucusu (Paket Gönderme)
```java
import java.net.*;
import java.io.*;

public class QuoteServer {
    public static void main(String[] args) throws IOException {
        DatagramSocket socket = new DatagramSocket(4445);
        byte[] buf = new byte[256];

        System.out.println("UDP Sunucusu dinliyor...");

        while (true) {
            // İstemciden gelen paketi bekle
            DatagramPacket packet = new DatagramPacket(buf, buf.length);
            socket.receive(packet);

            // Yanıt hazırla
            String quote = "Bugünün sözü: Java ile geleceği kodlayın!";
            buf = quote.getBytes();

            // İstemcinin adresine ve portuna geri gönder
            InetAddress address = packet.getAddress();
            int port = packet.getPort();
            packet = new DatagramPacket(buf, buf.length, address, port);
            socket.send(packet);
        }
    }
}
```

### UDP İstemcisi (Paket İsteme ve Alma)
```java
import java.net.*;
import java.io.*;

public class QuoteClient {
    public static void main(String[] args) throws IOException {
        DatagramSocket socket = new DatagramSocket();

        // Sunucuya boş bir istek paketi gönder
        byte[] buf = new byte[256];
        InetAddress address = InetAddress.getByName("localhost");
        DatagramPacket packet = new DatagramPacket(buf, buf.length, address, 4445);
        socket.send(packet);

        // Sunucudan gelen yanıtı al
        packet = new DatagramPacket(buf, buf.length);
        socket.receive(packet);

        // Ekrana yazdır
        String received = new String(packet.getData(), 0, packet.getLength());
        System.out.println("Alınan mesaj: " + received);

        socket.close();
    }
}
```

---

# 3. Çok Noktaya Yayın (Multicasting - `MulticastSocket`)

Geleneksel soketler bire bir (*unicast*) iletişim kurarken, **`MulticastSocket`** verilerin tek bir gönderimle ağdaki birden çok alıcıya aynı anda ulaştırılmasını (*multicast*) sağlar.

İstemciler bir D sınıfı IP adresine sahip çok noktaya yayın grubuna katılırlar (`joinGroup`):

```java
MulticastSocket socket = new MulticastSocket(4446);
InetAddress group = InetAddress.getByName("203.0.113.0");
socket.joinGroup(group);

byte[] buf = new byte[256];
DatagramPacket packet = new DatagramPacket(buf, buf.length);
socket.receive(packet);

System.out.println("Multicast yayını: " + new String(packet.getData(), 0, packet.getLength()));

socket.leaveGroup(group);
socket.close();
```
