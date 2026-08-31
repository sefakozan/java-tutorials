# Ders: Platform Ortamı (Platform Environment)

Bir Java uygulaması, işletim sistemi ve Java Sanal Makinesi tarafından sağlanan bir ortam içinde çalışır. Bu ders sistem özellikleri, ortam değişkenleri ve yapılandırma araçları ile çalışma yöntemlerini ele alır.

---

## 1. Sistem Özellikleri (System Properties)

Java çalışma zamanı ortamı, geçerli çalışma ortamını tanımlayan bir dizi sistem özelliği tutar (`java.version`, `os.name`, `user.home`, `file.separator` vb.).

```java
// Tek bir sistem özelliğini okuma
String javaVersion = System.getProperty("java.version");
String osName = System.getProperty("os.name");
String userHome = System.getProperty("user.home");

System.out.println("Java Sürümü: " + javaVersion);
System.out.println("İşletim Sistemi: " + osName);
System.out.println("Kullanıcı Ev Dizini: " + userHome);
```

---

## 2. Ortam Değişkenleri (Environment Variables)

Ortam değişkenleri, işletim sistemi düzeyinde tanımlanan anahtar-değer çiftleridir (`PATH`, `JAVA_HOME` vb.):

```java
// Belirli bir ortam değişkenini okuma
String path = System.getenv("PATH");

// Tüm ortam değişkenlerini listeleme
for (String envName : System.getenv().keySet()) {
    System.out.format("%s = %s%n", envName, System.getenv(envName));
}
```

---

## 3. Yapılandırma Özellikleri (`java.util.Properties`)

`Properties` sınıfı, anahtar-değer çiftlerini `.properties` dosyalarında kalıcı olarak saklamak ve geri yüklemek için kullanılır:

```java
import java.util.Properties;
import java.io.FileInputStream;
import java.io.FileOutputStream;

Properties prop = new Properties();
prop.setProperty("db.url", "localhost:5432");
prop.setProperty("db.user", "admin");

// Dosyaya kaydetme
try (FileOutputStream out = new FileOutputStream("config.properties")) {
    prop.store(out, "Uygulama Yapılandırması");
}
```
