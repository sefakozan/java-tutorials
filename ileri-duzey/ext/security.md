# Ders: Eklentileri Güvenli Hale Getirme (Making Extensions Secure)

Kurulu eklentiler, sistemdeki diğer kullanıcı kodlarından daha yüksek ayrıcalıklara sahip olabilir. Güvenlik Yöneticisi (`SecurityManager`) aktif olduğunda, `java.policy` dosyasında izinler açıkça tanımlanmalıdır.

---

## 1. İlke Dosyasında (Policy File) Yetkilendirme

Belirli bir eklenti JAR'ına yalnızca ihtiyaç duyduğu izinleri vermek:

```text
grant codeBase "file:${java.home}/lib/ext/myExt.jar" {
    permission java.io.FilePermission "/tmp/*", "read,write";
    permission java.net.SocketPermission "*:1024-", "connect,accept";
};
```

---

## 2. İmzalı Eklentiler (Signed Extensions)

Eklenti JAR dosyaları `jarsigner` aracı ile dijital olarak imzalanabilir ve ilke dosyasında imzalayan sertifikaya göre izinler atanabilir:

```text
grant signedBy "developerKey" {
    permission java.security.AllPermission;
};
```
