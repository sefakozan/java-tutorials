# Ders: Solaris OS, Linux ve macOS için "Hello World!"

Bu talimatlar Solaris OS, Linux ve macOS kullanıcıları içindir. Java programlarını terminal üzerinden derlemek ve çalıştırmak için gerekli adımları kapsar.

1. [**Kontrol Listesi**](#1.-kontrol-listesi)
2. [**Adım 1: Kaynak Dosyayı Oluşturma**](#2.-adım-1:-kaynak-dosyayı-oluşturma)
3. [**Adım 2: Kaynak Dosyayı Derleme**](#3.-adım-2:-kaynak-dosyayı-derleme)
4. [**Adım 3: Programı Çalıştırma**](#4.-adım-3:-programı-çalıştırma)
---

# 1. Kontrol Listesi

Sisteminizde **Java SE Development Kit (JDK)** kurulu olmalıdır. Terminalde `java -version` yazarak kurulumu doğrulayın.

---

# 2. Adım 1: Kaynak Dosyayı Oluşturma

Tercih ettiğiniz metin düzenleyici ile aşağıdaki kodu yazın ve `HelloWorldApp.java` adıyla kaydedin:

```java
/**
 * HelloWorldApp sınıfı, standart çıktıya
 * "Hello World!" yazdıran bir uygulama tanımlar.
 */
class HelloWorldApp {
    public static void main(String[] args) {
        System.out.println("Hello World!"); // Metni ekrana yazdırır.
    }
}
```

<figure style="text-align: center;">
  <img src="_media/figures/helloWorld.gif" alt="Java Platformlar Arası Çalışma" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Java bayt kodu (bytecode) tüm işletim sistemlerinde aynı şekilde çalışır.</figcaption>
</figure>

---

# 3. Adım 2: Kaynak Dosyayı Derleme

Terminalde dosyanın bulunduğu dizine geçin ve `javac` komutunu çalıştırın:

```bash
cd ~/javatutorial
javac HelloWorldApp.java
```

<figure style="text-align: center;">
  <img src="_media/figures/prompt.gif" alt="Terminal İstemi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Terminal komut satırında derleme.</figcaption>
</figure>

---

# 4. Adım 3: Programı Çalıştırma

Derlenen bayt kodunu çalıştırmak için `java` komutunu çağırın:

```bash
java HelloWorldApp
```

<figure style="text-align: center;">
  <img src="_media/figures/result.gif" alt="Terminal Çıktısı" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Terminalde Hello World! program çıktısı.</figcaption>
</figure>
