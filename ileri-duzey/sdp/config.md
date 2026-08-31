# Ders: SDP Yapılandırması ve Kuralları (SDP Configuration)

SDP, hangi bağlantıların SDP protokolüne yönlendirileceğini belirleyen bir yapılandırma dosyası (`sdp.conf`) kullanır.

---

## 1. `sdp.conf` Kural Sözdizimi

```text
# Belirli bir alt ağa yapılan tüm giden bağlantıları SDP ile ilet
connect 192.168.1.0/24:*

# Belirli bir yerel portta dinleme yapan soketleri SDP'ye bağla
bind 192.168.1.50:5000
```

---

## 2. Java Uygulamasında SDP'yi Başlatma

```bash
java -Dcom.sun.sdp.conf=sdp.conf -Djava.net.preferIPv4Stack=true -jar HighPerformanceApp.jar
```
