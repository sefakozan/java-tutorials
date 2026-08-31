# Ders: Bildirimler ve JConsole ile İzleme (Notifications & Monitoring)

MBean nesneleri, durum değişikliklerini veya kritik olayları dinleyicilere bildirmek için bildirimler (`Notification`) yayınlayabilir.

---

## 1. Bildirim Yayınlama

```java
import javax.management.*;

public class HelloNotify extends NotificationBroadcasterSupport implements HelloNotifyMBean {
    private long sequenceNumber = 1;

    public void triggerAlert(String msg) {
        Notification n = new Notification(
            "com.example.alert",
            this,
            sequenceNumber++,
            System.currentTimeMillis(),
            msg
        );
        sendNotification(n);
    }
}
```

---

## 2. JConsole ile Canlı Yönetim

JDK içerisindeki `jconsole` aracı çalıştırılarak:
- Bellek tüketimi ve CPU kullanımı izlenir.
- MBean sekmesinden metotlar dinamik olarak tetiklenir.
- `triggerAlert` bildirimleri anlık olarak dinlenir.
