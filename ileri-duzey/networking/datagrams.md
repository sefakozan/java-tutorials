# Ders: Datagramlar Hakkında Her Şey (All About Datagrams)

UDP protokolü üzerinden çalışan datagramlar, bağlantı kurma ek yükü olmadan hızlı veri paketi iletimi sağlar.

---

## 1. Datagram Nedir? (What Is a Datagram?)

**Datagram**, sistem tarafından kaynak ve hedef arasında varış garantisi veya sıra güvencesi verilmeden yönlendirilen, bağımsız ve kendi kendine yeten bir mesaj paketidir. Java'da `DatagramPacket` sınıfı paketi, `DatagramSocket` sınıfı ise gönderme ve alma mekanizmasını temsil eder.

---

## 2. Datagram İstemcisi ve Sunucusu Yazma (Writing a Datagram Client and Server)

### Sunucu Tarafı (QuoteServer)
```java
import java.io.*;
import java.net.*;

public class QuoteServerThread extends Thread {
    protected DatagramSocket socket = null;

    public QuoteServerThread() throws IOException {
        this("QuoteServerThread");
    }

    public QuoteServerThread(String name) throws IOException {
        super(name);
        socket = new DatagramSocket(4445);
    }

    public void run() {
        while (true) {
            try {
                byte[] buf = new byte[256];

                // İstemciden gelen isteği al
                DatagramPacket packet = new DatagramPacket(buf, buf.length);
                socket.receive(packet);

                // Yanıt hazırla
                String dString = "Java Tutorials UDP: " + new java.util.Date().toString();
                buf = dString.getBytes();

                // Yanıtı istemcinin adresine ve portuna gönder
                InetAddress address = packet.getAddress();
                int port = packet.getPort();
                packet = new DatagramPacket(buf, buf.length, address, port);
                socket.send(packet);
            } catch (IOException e) {
                e.printStackTrace();
                break;
            }
        }
        socket.close();
    }
}
```

### İstemci Tarafı (QuoteClient)
```java
import java.io.*;
import java.net.*;

public class QuoteClient {
    public static void main(String[] args) throws IOException {
        try (DatagramSocket socket = new DatagramSocket()) {
            byte[] buf = new byte[256];
            InetAddress address = InetAddress.getByName("localhost");
            DatagramPacket packet = new DatagramPacket(buf, buf.length, address, 4445);
            socket.send(packet);

            // Sunucunun yanıtını bekle
            packet = new DatagramPacket(buf, buf.length);
            socket.receive(packet);

            String received = new String(packet.getData(), 0, packet.getLength());
            System.out.println("Sunucudan Gelen Yanıt: " + received);
        }
    }
}
```

---

## 3. Çok Noktaya Yayın (Broadcasting to Multiple Recipients / Multicast)

Birden çok istemciye aynı anda tek bir UDP paketi göndermek için `MulticastSocket` kullanılır. İstemciler belirli bir D Sınıfı IP adresine (`224.0.0.0` - `239.255.255.255`) abone olurlar:

```java
import java.net.*;

MulticastSocket socket = new MulticastSocket(4446);
InetAddress group = InetAddress.getByName("230.0.0.1");
socket.joinGroup(group);

// Gruptan yayın alma
byte[] buf = new byte[256];
DatagramPacket packet = new DatagramPacket(buf, buf.length);
socket.receive(packet);
```
