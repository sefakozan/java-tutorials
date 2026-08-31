# Ders: Standart MBean'ler ve MXBean'ler (MBeans)

**MBean (Managed Bean)**, JMX ajanına kaydedilen ve yönetimsel işlemleri dışarıya açan nesnedir.

---

## 1. Standart MBean Örneği

### Arayüz: `HelloMBean.java`
```java
public interface HelloMBean {
    void setMessage(String message);
    String getMessage();
    void sayHello();
    int add(int x, int y);
}
```

### Sınıf: `Hello.java`
```java
public class Hello implements HelloMBean {
    private String message = "Varsayılan Mesaj";

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return this.message;
    }

    public void sayHello() {
        System.out.println("Merhaba, dünya!");
    }

    public int add(int x, int y) {
        return x + y;
    }
}
```

---

## 2. MBean Kaydı

```java
import java.lang.management.ManagementFactory;
import javax.management.*;

public class Main {
    public static void main(String[] args) throws Exception {
        MBeanServer mbs = ManagementFactory.getPlatformMBeanServer();
        ObjectName name = new ObjectName("com.example:type=Hello");
        Hello mbean = new Hello();
        mbs.registerMBean(mbean, name);

        System.out.println("Süreç çalışıyor. Çıkış için Enter'a basın...");
        System.in.read();
    }
}
```
