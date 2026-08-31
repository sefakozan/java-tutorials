# Ders: Kurulu Eklentiler Oluşturma (Creating Installed Extensions)

**Kurulu Eklentiler (Installed Extensions)**, Java Çalışma Zamanı Ortamının (JRE) standart `lib/ext` dizinine kopyalanan JAR dosyalarıdır.

---

## 1. Kurulu Eklenti Oluşturma Adımları

1. Eklenti sınıflarını derleyin:
   ```bash
   javac RectangleArea.java
   ```
2. Bir JAR arşivi oluşturun:
   ```bash
   jar cvf area.jar RectangleArea.class
   ```
3. JAR dosyasını JRE eklenti dizinine kopyalayın:
   - `<java-home>/lib/ext` (JRE 8)

---

## 2. Eklentiyi Kullanma

Kurulu eklentiler otomatik olarak `ExtensionClassLoader` tarafından yüklendiğinden, uygulamanızı çalıştırırken `-classpath` içine `area.jar` dosyasını dahil etmeniz gerekmez:

```bash
java AreaApp
```
