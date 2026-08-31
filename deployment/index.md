# Kılavuz: Uygulama Dağıtımı (Deployment)

Java uygulamaları geliştirildikten sonra son kullanıcılara dağıtılmak üzere paketlenir. Bu kılavuz; Java arşivleme formatı olan **JAR (Java ARchive)** dosyalarını, manifest yapılandırmasını ve çalıştırılabilir JAR paketlemeyi kapsamaktadır.

1. [**JAR Dosyalarına Giriş**](#1-jar-dosyalarına-giriş)
2. [**`jar` Komutu ile Temel İşlemler**](#2-jar-komutu-ile-temel-i̇şlemler)
3. [**Manifest Dosyası ve `Main-Class` Yapılandırması**](#3-manifest-dosyası-ve-main-class-yapılandırması)
4. [**Çalıştırılabilir JAR Dosyasını Yürütme**](#4-çalıştırılabilir-jar-dosyasını-yürütme)
5. [**JAR Dosyalarını İmzalama ve Güvenlik**](#5-jar-dosyalarını-i̇mzalama-ve-güvenlik)
---

# 1. JAR Dosyalarına Giriş

**JAR (Java ARchive)** dosyası formatı, birden çok Java sınıfı (`.class`) dosyasını, ilişkili meta verileri ve kaynakları (görseller, sesler, yapılandırma metinleri) tek bir sıkıştırılmış zip dosyasında toplamanıza olanak tanır.

JAR formatının avantajları:
- **Güvenlik:** JAR içeriğini dijital olarak imzalayabilirsiniz.
- **Daha Hızlı İndirme/Yükleme:** Dosya sıkıştırma sayesinde ağ trafiğini azaltır.
- **Paket Mührü (*Package Sealing*):** Bir paketteki tüm sınıfların aynı JAR dosyasından yüklenmesini zorunlu kılabilir.
- **Sürüm Takibi:** Manifest dosyasında sürüm bilgilerini saklayabilir.

---

# 2. `jar` Komutu ile Temel İşlemler

JDK ile birlikte gelen `jar` komut satırı aracı kullanılır:

- **JAR Oluşturma:**
  ```bash
  jar cf app.jar *.class
  ```
  (`c`: create, `f`: filename)
- **JAR İçeriğini Listeleme:**
  ```bash
  jar tf app.jar
  ```
  (`t`: table of contents)
- **JAR Dosyasını Açma / Çıkartma:**
  ```bash
  jar xf app.jar
  ```
  (`x`: extract)
- **Var Olan JAR'ı Güncelleme:**
  ```bash
  jar uf app.jar NewClass.class
  ```
  (`u`: update)

---

# 3. Manifest Dosyası ve `Main-Class` Yapılandırması

Her JAR dosyası `META-INF/MANIFEST.MF` konumunda bir manifest dosyası içerir. Bir JAR dosyasını doğrudan çalıştırılabilir hale getirmek için manifest dosyasına `Main-Class` başlığı eklenir:

```manifest
Manifest-Version: 1.0
Main-Class: com.example.helloworld.HelloWorldApp
Class-Path: lib/helper.jar
```

Manifest dosyası ile birlikte JAR oluşturmak için:

```bash
jar cfm app.jar Manifest.txt com/example/helloworld/*.class
```

---

# 4. Çalıştırılabilir JAR Dosyasını Yürütme

`Main-Class` başlığı içeren bir JAR dosyasını doğrudan Java başlatıcısıyla çalıştırabilirsiniz:

```bash
java -jar app.jar
```

Gelişmiş işletim sistemlerinde (Windows, macOS), çalıştırılabilir JAR dosyalarına çift tıklanarak da uygulama başlatılabilir.

---

# 5. JAR Dosyalarını İmzalama ve Güvenlik

JAR dosyaları `jarsigner` aracı ile dijital olarak imzalanabilir:

```bash
jarsigner -keystore myKeystore app.jar myAlias
```

Bu işlem, kodun güvenilir bir kaynaktan geldiğini ve iletim sırasında üzerinde herhangi bir tahrifat yapılmadığını garanti eder.
