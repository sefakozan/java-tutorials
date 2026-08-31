# Kılavuz: Özel Ağ Programlama (Custom Networking)

Ağ üzerinde iletişim kuran uygulamalar yazmak `java.net` paketi sayesinde oldukça kolaydır. Bu kılavuz, URL'lerden TCP soketlerine ve UDP datagramlarına kadar Java ağ yeteneklerini açıklar.

---

## Bu Kılavuzdaki Dersler

### 1. [Ağ İletişimi Temelleri](ileri-duzey/networking/index.md)
Bilgisayarların ağ üzerinden veri paketleri alışverişi, TCP/IP protokol yığını ve port kavramı.

### 2. [URL'ler ile Çalışma (Working with URLs)](ileri-duzey/networking/urls.md)
URL nesneleri oluşturma, URL bileşenlerini ayrıştırma, bir URL'den doğrudan veri okuma ve `URLConnection` ile bağlantı yönetimi.

### 3. [Soketler Hakkında Her Şey (All About Sockets)](ileri-duzey/networking/sockets.md)
İki yönlü güvenilir TCP iletişimi: `Socket` ile istemci yazma, `ServerSocket` ile sunucu yazma ve çoklu istemci (multi-threaded) desteği.

### 4. [Datagramlar Hakkında Her Şey (All About Datagrams)](ileri-duzey/networking/datagrams.md)
Bağlantısız, hızlı UDP iletişimi: `DatagramPacket`, `DatagramSocket` ve çok noktaya yayın (`MulticastSocket`).
