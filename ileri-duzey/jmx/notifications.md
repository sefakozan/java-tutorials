# Ders: Bildirimler ve JConsole ile İzleme (JMX Notifications & JConsole)

JMX MBean'leri, kritik olaylar meydana geldiğinde (örneğin önbellek dolduğunda veya hata eşiği aşıldığında) yönetim uygulamalarına ve izleyicilere **bildirimler (notifications)** gönderebilir.

1. [**Bildirim Yayınlama (`NotificationBroadcasterSupport`)**](#1-bildirim-yayınlama-notificationbroadcastersupport)
2. [**JConsole ile Canlı İzleme**](#2-jconsole-ile-canlı-i̇zleme)
---

# 1. Bildirim Yayınlama (`NotificationBroadcasterSupport`)

Bir MBean'in bildirim gönderebilmesi için `NotificationBroadcasterSupport` sınıfını genişletmesi gerekir:

```java
package com.example;

import javax.management.Notification;
import javax.management.NotificationBroadcasterSupport;

public class Author extends NotificationBroadcasterSupport implements AuthorMBean {
    private int sequenceNumber = 1;
    private int cacheSize = 200;

    public synchronized void setCacheSize(int size) {
        int oldSize = this.cacheSize;
        this.cacheSize = size;

        // Bildirim oluştur ve gönder
        Notification n = new Notification(
            "com.example.Author.cacheSizeChanged",
            this,
            sequenceNumber++,
            System.currentTimeMillis(),
            "Önbellek boyutu değiştirildi: " + oldSize + " -> " + size
        );
        sendNotification(n);
    }

    public int getCacheSize() {
        return cacheSize;
    }
}
```

---

# 2. JConsole ile Canlı İzleme

**JConsole**, Java SE JDK ile birlikte gelen yerel bir JMX uyumlu grafiksel izleme aracıdır.

- Terminalde `jconsole` yazarak aracı başlatın.
- Çalışan Java uygulamanızı seçip bağlanın.
- **MBeans** sekmesine gidin.
- `com.example` -> `Author` düğümünü açarak:
  - Değişkenlerin mevcut değerlerini anlık olarak okuyabilir ve değiştirebilirsiniz.
  - Metot işlemlerini (`sayHello()`) uzaktan tetikleyebilirsiniz.
  - **Notifications** sekmesinden gönderilen canlı bildirimleri izleyebilirsiniz.
