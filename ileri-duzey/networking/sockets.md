# Ders: Soketler Hakkında Her Şey (All About Sockets)

Normalde bir sunucu belirli bir bilgisayarda çalışır ve belirli bir bağlantı noktasına (*port*) bağlı bir sokete sahiptir. Sunucu sadece bekler ve bir istemcinin bağlantı isteğinde bulunmasını dinler. Bir **soket (socket)**, ağ üzerinde çalışan iki program arasındaki iki yönlü iletişim bağlantısının bir uç noktasıdır.

<figure style="text-align: center;">
  <img src="_media/figures/2tcp.gif" alt="TCP Soket İletişimi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">İstemci ve sunucu arasındaki iki yönlü güvenilir TCP soket bağlantısı.</figcaption>
</figure>

1. [**İstemci Soketleri (`Socket`)**](#1-i̇stemci-soketleri-socket)
2. [**Sunucu Soketleri (`ServerSocket`)**](#2-sunucu-soketleri-serversocket)
3. [**Yankı İstemcisi ve Sunucusu (Echo Client & Server)**](#3-yankı-i̇stemcisi-ve-sunucusu-echo-client--server)
4. [**Çoklu İstemci Destekleyen Sunucular (Multi-threaded Server)**](#4-çoklu-i̇stemci-destekleyen-sunucular-multi-threaded-server)
---

# 1. İstemci Soketleri (`Socket`)

İstemci tarafında bir sunucuya bağlanmak için `java.net.Socket` sınıfı kullanılır:

```java
String hostName = "localhost";
int portNumber = 4444;

try (
    Socket echoSocket = new Socket(hostName, portNumber);
    PrintWriter out = new PrintWriter(echoSocket.getOutputStream(), true);
    BufferedReader in = new BufferedReader(new InputStreamReader(echoSocket.getInputStream()));
    BufferedReader stdIn = new BufferedReader(new InputStreamReader(System.in))
) {
    String userInput;
    while ((userInput = stdIn.readLine()) != null) {
        out.println(userInput); // Sunucuya gönder
        System.out.println("Sunucudan yanıt: " + in.readLine()); // Yanıtı oku
    }
}
```

---

# 2. Sunucu Soketleri (`ServerSocket`)

Sunucu tarafında belirli bir portta gelen bağlantı isteklerini dinlemek için `java.net.ServerSocket` sınıfı kullanılır:

```java
int portNumber = 4444;

try (
    ServerSocket serverSocket = new ServerSocket(portNumber);
    Socket clientSocket = serverSocket.accept(); // İstemci bağlanana kadar bekler
    PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
    BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
) {
    String inputLine;
    while ((inputLine = in.readLine()) != null) {
        out.println("Echo: " + inputLine); // İstemciye geri yansıt
    }
}
```

---

# 3. Çoklu İstemci Destekleyen Sunucular (Multi-threaded Server)

Gerçek dünyada bir sunucunun aynı anda yüzlerce istemciye hizmet vermesi gerekir. Bunun için ana sunucu döngüsü `accept()` çağrısıyla gelen her bağlantı için yeni bir iş parçacığı (*thread*) başlatır:

```java
public class MultiServer {
    public static void main(String[] args) throws IOException {
        int portNumber = 4444;
        ServerSocket serverSocket = new ServerSocket(portNumber);
        
        System.out.println("Sunucu başlatıldı, istemciler dinleniyor...");

        while (true) {
            Socket clientSocket = serverSocket.accept();
            // Her istemci için ayrı bir iş parçacığı başlat
            new Thread(new ClientHandler(clientSocket)).start();
        }
    }
}

class ClientHandler implements Runnable {
    private Socket socket;
    
    public ClientHandler(Socket socket) {
        this.socket = socket;
    }
    
    @Override
    public void run() {
        try (
            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true)
        ) {
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                out.println("Sunucu: " + inputLine);
            }
        } catch (IOException e) {
            System.err.println("İstemci bağlantı hatası: " + e.getMessage());
        }
    }
}
```
