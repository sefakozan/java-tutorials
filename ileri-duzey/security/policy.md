# Ders: İzinler ve Güvenlik Politikaları (Permissions & java.policy)

Java Güvenlik Yöneticisi (`SecurityManager`), uygulamanın dosya sistemine, ağa veya sistem özelliklerine erişimini `.policy` dosyalarındaki kurallara göre denetler.

---

## 1. İlke Dosyası Yapısı

```text
grant codeBase "file:/home/app/bin/*" {
    // Sadece /tmp dizinine yazma izni
    permission java.io.FilePermission "/tmp/*", "read,write";

    // Belirli bir sunucuya bağlanma izni
    permission java.net.SocketPermission "api.example.com:443", "connect";

    // Sistem özelliğini okuma izni
    permission java.util.PropertyPermission "user.language", "read";
};
```

---

## 2. Güvenlik Yöneticisi ile Çalıştırma

```bash
java -Djava.security.manager -Djava.security.policy=myApp.policy MyApp
```
