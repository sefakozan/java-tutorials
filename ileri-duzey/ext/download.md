# Ders: İndirilebilir Eklentiler (Downloadable Extensions)

**İndirilebilir Eklentiler (Downloadable Extensions)**, bir JAR dosyasının `META-INF/MANIFEST.MF` dosyasında listelenen ve ihtiyaç halinde otomatik indirilen eklentilerdir.

---

## 1. Manifest Dosyasında Eklenti Tanımlama

Bir kütüphaneyi eklenti olarak sunan JAR dosyasının manifest başlıkları:

```manifest
Extension-Name: javax.servlet
Specification-Title: Java Servlet Specification
Specification-Version: 3.1
Specification-Vendor: Oracle Corporation
Implementation-Title: javax.servlet
Implementation-Version: 3.1.0
Implementation-Vendor: Oracle Corporation
```

---

## 2. İstemci Uygulamanın Eklentiyi İstemesi

İstemci JAR dosyasının manifest başlıkları:

```manifest
Extension-List: servlet
servlet-Extension-Name: javax.servlet
servlet-Specification-Version: 3.1
servlet-Implementation-URL: http://example.com/servlet.jar
```
