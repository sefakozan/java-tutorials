# Özel Kılavuz: Ağ Programlama (Custom Networking)

Ağ üzerinde çalışan uygulamalar diğer sistemlerle veri alışverişinde bulunmak için standart İnternet protokollerini (IP, TCP, UDP, HTTP) kullanırlar. Java platformu, `java.net` paketi üzerinden doğrudan ve üst düzey ağ programlama desteği sunar.

<figure style="text-align: center;">
  <img src="_media/figures/1netw.gif" alt="Ağ Bağlantısı Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Ağ üzerinden haberleşen uygulamalar.</figcaption>
</figure>

---

## Bu Kılavuzdaki Dersler

### 1. [URL'ler ile Çalışma (Working with URLs)](ileri-duzey/networking/urls.md)
`URL` ve `URLConnection` sınıflarını, URL nesneleri oluşturmayı, web kaynaklarını okumayı ve HTTP bağlantılarını yönetmeyi ele alır.

### 2. [Soketler Hakkında Her Şey (All About Sockets)](ileri-duzey/networking/sockets.md)
İki yönlü güvenilir TCP iletişimini, istemci soketlerini (`Socket`), sunucu soketlerini (`ServerSocket`) ve çok iş parçacıklı sunucu mimarilerini inceler.

### 3. [Datagramlar Hakkında Her Şey (All About Datagrams)](ileri-duzey/networking/datagrams.md)
Bağlantısız ve hızlı UDP protokolünü, `DatagramPacket` ve `DatagramSocket` sınıflarını ve çok noktaya yayın (*multicast*) işlemlerini açıklar.
