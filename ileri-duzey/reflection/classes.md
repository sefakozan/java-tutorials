# Ders: Sınıfları İnceleme (Examining Classes)

Her Java türü için JVM bir `Class` nesnesi tutar. Bu nesne üzerinden sınıfın tüm meta verileri incelenebilir.

---

## 1. Sınıf Bildirimlerini Okuma

```java
import java.lang.reflect.Modifier;

Class<?> c = String.class;

System.out.println("Tam Adı: " + c.getName());
System.out.println("Basit Adı: " + c.getSimpleName());
System.out.println("Paketi: " + c.getPackage().getName());
System.out.println("Üst Sınıfı: " + c.getSuperclass().getName());

int mods = c.getModifiers();
System.out.println("Public mi? " + Modifier.isPublic(mods));
System.out.println("Final mı? " + Modifier.isFinal(mods));
```
