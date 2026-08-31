# Kılavuz: Dağıtım (Deployment)

Bu kılavuz, Java uygulamalarını son kullanıcılara dağıtmak için paketleme yöntemlerini, özellikle **JAR (Java Archive)** dosya biçimini açıklamaktadır.

---

## 1. JAR Dosyaları Paketleme

Bir JAR (Java Archive) dosyası, birden fazla Java sınıf dosyasını, ilişkili meta verileri ve kaynakları (resimler, sesler vb.) tek bir ZIP tabanlı arşiv dosyasında birleştiren bir dosya formatıdır.

### JAR Dosyası Oluşturma

`jar` komut satırı aracını kullanarak bir JAR dosyası oluşturulur:

```bash
jar cf MyApp.jar *.class
```

- `c` : Yeni bir arşiv oluştur (create)
- `f` : Arşiv dosyasının adını belirt (file)

---

## 2. Çalıştırılabilir JAR (Executable JAR)

Bir JAR dosyasının doğrudan çalıştırılabilmesi için manifest (`MANIFEST.MF`) dosyasında uygulamanın `main` metodunu içeren sınıfın belirtilmesi gerekir:

```text
Main-Class: helloworldapp.HelloWorldApp
```

Manifest dosyası ile çalıştırılabilir JAR oluşturma:

```bash
jar cfe MyApp.jar helloworldapp.HelloWorldApp *.class
```

---

## 3. JAR Dosyasını Çalıştırma

Çalıştırılabilir bir JAR dosyasını komut satırından çalıştırmak için:

```bash
java -jar MyApp.jar
```
