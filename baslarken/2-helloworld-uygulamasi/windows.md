# Ders: Microsoft Windows için "Hello World!"

Bu talimatlar Microsoft Windows kullanıcıları içindir. Java programlarını komut satırından derlemek ve çalıştırmak için gerekli adımları kapsar.

1. [**Kontrol Listesi**](#1.-kontrol-listesi)
2. [**Adım 1: Kaynak Dosyayı Oluşturma ve Kaydetme**](#2.-adım-1:-kaynak-dosyayı-oluşturma-ve-kaydetme)
3. [**Adım 2: Kaynak Dosyayı Derleme**](#3.-adım-2:-kaynak-dosyayı-derleme)
4. [**Adım 3: Programı Çalıştırma**](#4.-adım-3:-programı-çalıştırma)
---

# 1. Kontrol Listesi

Başlamadan önce sisteminizde **Java SE Development Kit (JDK)** kurulu olmalıdır.

Kurulumu doğrulamak için:
1. **Başlat** menüsünden **Komut İstemi**'ni (`cmd.exe`) açın.
2. `java -version` yazıp `Enter`a basın. Sürüm bilgilerini görüyorsanız devam edebilirsiniz.

---

# 2. Adım 1: Kaynak Dosyayı Oluşturma ve Kaydetme

1. **Not Defteri**'ni (Notepad) açın.
2. Aşağıdaki kodu tam olarak metin düzenleyicinize yazın:

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

3. Dosyayı kaydedin:
   - **Dosya > Farklı Kaydet** seçeneğini seçin.
   - **Kayıt türü** olarak **Tüm Dosyalar (*.*)** seçin.
   - **Dosya adı** olarak `HelloWorldApp.java` yazın.

<figure style="text-align: center;">
  <img src="_media/figures/saveas.png" alt="Dosyayı Kaydetme" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">HelloWorldApp.java dosyasının kaydedilmesi.</figcaption>
</figure>

---

# 3. Adım 2: Kaynak Dosyayı Derleme

Komut İsteminde dosyanın bulunduğu dizine geçin ve `javac` ile derleyin:

```cmd
cd C:\JavaTutorial
javac HelloWorldApp.java
```

<figure style="text-align: center;">
  <img src="_media/figures/getStarted-compiler.gif" alt="Derleme Süreci" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Kaynak kodun bayt koduna derlenmesi.</figcaption>
</figure>

---

# 4. Adım 3: Programı Çalıştırma

Derlenen Java bayt kodunu çalıştırmak için:

```cmd
java HelloWorldApp
```

<figure style="text-align: center;">
  <img src="_media/figures/dos.png" alt="Komut İsteminde Derleme ve Çalıştırma" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Komut isteminde javac ile derleme ve java ile çalıştırma.</figcaption>
</figure>

Ekranda `Hello World!` çıktısını göreceksiniz.
