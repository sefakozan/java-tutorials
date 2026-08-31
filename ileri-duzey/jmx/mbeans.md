# Ders: Standart MBean ve MXBean (Managed Beans)

Bir **MBean (Managed Bean)**, JMX arayüzü üzerinden yönetilebilir bir kaynağı temsil eden Java nesnesidir. Bir MBean; öznitelikleri (*attributes*), metot işlemlerini (*operations*) ve bildirimleri dışa açar.

1. [**Standart MBean Arayüzü Tanımlama**](#1-standart-mbean-arayüzü-tanımlama)
2. [**MBean Sınıfını Uygulama**](#2-mbean-sınıfını-uygulama)
3. [**`MBeanServer`'a Kayıt Etme**](#3-mbeanservera-kayıt-etme)
---

# 1. Standart MBean Arayüzü Tanımlama

Bir standart MBean arayüzünün adı, onu uygulayan sınıfın adının sonuna `MBean` eki getirilerek oluşturulmalıdır:

```java
package com.example;

public interface AuthorMBean {
    // Getter ve Setter (Öznitelikler / Attributes)
    public void setMessage(String message);
    public String getMessage();
    public int getCacheSize();
    public void setCacheSize(int size);

    // İşlemler (Operations)
    public void sayHello();
}
```

---

# 2. MBean Sınıfını Uygulama

```java
package com.example;

public class Author implements AuthorMBean {
    private String message = "Merhaba Dünya";
    private int cacheSize = 200;

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }

    public int getCacheSize() {
        return this.cacheSize;
    }

    public void setCacheSize(int size) {
        this.cacheSize = size;
        System.out.println("Önbellek boyutu güncellendi: " + size);
    }

    public void sayHello() {
        System.out.println("Author MBean: " + message);
    }
}
```

---

# 3. `MBeanServer`'a Kayıt Etme

Uygulamanız başlatıldığında MBean nesnesini platform `MBeanServer`'ına benzersiz bir `ObjectName` ile kaydeder:

```java
package com.example;

import java.lang.management.ManagementFactory;
import javax.management.MBeanServer;
import javax.management.ObjectName;

public class Main {
    public static void main(String[] args) throws Exception {
        // Platform MBeanServer'ı al
        MBeanServer mbs = ManagementFactory.getPlatformMBeanServer();

        // Benzersiz nesne adı oluştur
        ObjectName name = new ObjectName("com.example:type=Author");

        // MBean örneğini oluştur ve kaydet
        Author mbean = new Author();
        mbs.registerMBean(mbean, name);

        System.out.println("JMX MBean kaydedildi. İzlemek için jconsole aracını başlatın.");
        Thread.sleep(Long.MAX_VALUE);
    }
}
```
