# Ders: Soketler Hakkında Her Şey (All About Sockets)

Soketler, ağ üzerinden TCP protokolü kullanarak iki yönlü, güvenilir ve sıralı veri iletimi kurmak için kullanılan uç noktalardır.

---

## 1. Soket Nedir? (What Is a Socket?)

Bir **soket (socket)**, ağ üzerinde çalışan iki program arasındaki iki yönlü iletişim bağlantısının bir uç noktasıdır. Soket, TCP katmanının verinin hedeflenen uygulamaya yönlendirilmesini sağlamak için bir port numarasına bağlanır (`bound`).

---

## 2. Soketten Okuma ve Sokete Yazma (Reading from and Writing to a Socket)

İstemci uygulaması, hedef sunucunun adresini ve port numarasını belirterek bir `Socket` oluşturur, ardından giriş ve çıkış akışları üzerinden iletişim kurar:

```java
import java.io.*;
import java.net.*;

public class EchoClient {
    public static void main(String[] args) {
        String hostName = "localhost";
        int portNumber = 7;

        try (
            Socket echoSocket = new Socket(hostName, portNumber);
            PrintWriter out = new PrintWriter(echoSocket.getOutputStream(), true);
            BufferedReader in = new BufferedReader(new InputStreamReader(echoSocket.getInputStream()));
            BufferedReader stdIn = new BufferedReader(new InputStreamReader(System.in))
        ) {
            String userInput;
            while ((userInput = stdIn.readLine()) != null) {
                out.println(userInput);
                System.out.println("echo: " + in.readLine());
            }
        } catch (UnknownHostException e) {
            System.err.println("Bilinmeyen ana bilgisayar: " + hostName);
        } catch (IOException e) {
            System.err.println("G/Ç bağlantı hatası: " + e.getMessage());
        }
    }
}
```

---

## 3. Soketin Sunucu Tarafını Yazma (Writing the Server Side of a Socket)

Sunucu uygulaması bir `ServerSocket` oluşturarak belirli bir portu dinler. İstemci bağlandığında `accept()` metodu yeni bir `Socket` nesnesi döndürür:

```java
import java.net.*;
import java.io.*;

public class EchoServer {
    public static void main(String[] args) throws IOException {
        int portNumber = 7;

        try (
            ServerSocket serverSocket = new ServerSocket(portNumber);
            Socket clientSocket = serverSocket.accept();     
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);                   
            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()))
        ) {
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                out.println(inputLine);
            }
        } catch (IOException e) {
            System.out.println("Port dinlenirken istisna yakalandı: " + portNumber);
        }
    }
}
```

---

## 4. Çoklu İstemci Desteği (Supporting Multiple Clients)

Bir sunucunun aynı anda birden fazla istemciye hizmet verebilmesi için, her yeni istemci bağlantısı kabul edildiğinde (`accept()`) ayrı bir iş parçacığı (`Thread`) başlatılır:

```java
import java.net.*;
import java.io.*;

public class KKMultiServer {
    public static void main(String[] args) throws IOException {
        int portNumber = 4444;
        boolean listening = true;
        
        try (ServerSocket serverSocket = new ServerSocket(portNumber)) { 
            while (listening) {
                new KKMultiServerThread(serverSocket.accept()).start();
            }
        } catch (IOException e) {
            System.err.println("Port dinlenemedi: " + portNumber);
        }
    }
}
```
