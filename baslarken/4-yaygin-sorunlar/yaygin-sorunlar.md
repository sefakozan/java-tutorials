# Ders: Yaygın Sorunlar (ve Çözümleri)

Bu kılavuzdaki programları derlerken veya çalıştırırken sorun yaşarsanız bu sayfadaki çözümlere başvurabilirsiniz.

1. [**Derleyici Sorunları (Compiler Problems)**](#1.-derleyici-sorunları-(compiler-problems))
2. [**Çalışma Zamanı Sorunları (Runtime Problems)**](#2.-çalışma-zamanı-sorunları-(runtime-problems))
---

# 1. Derleyici Sorunları (Compiler Problems)

## Microsoft Windows'ta Sık Karşılaşılan Hata Mesajları

### `'javac' is not recognized as an internal or external command, operable program or batch file`

Bu hatayı alıyorsanız Windows `javac` derleyicisini nerede bulacağını bilmiyordur.

**Çözüm:** `PATH` ortam değişkenini güncelleyin:
1. **Sistem Özellikleri > Gelişmiş > Ortam Değişkenleri** penceresini açın.
2. `Path` değişkenini seçip **Düzenle** butonuna tıklayın.
3. JDK `bin` klasör yolunu (örneğin: `C:\Program Files\Java\jdk-xx\bin`) ekleyin.
4. Yeni bir komut istemi açın.

---

## UNIX / Linux / macOS'ta Sık Karşılaşılan Hata Mesajları

### `javac: Command not found`

**Çözüm:** Shell profil dosyanıza (`~/.bashrc` veya `~/.zshrc`) JDK yolunu ekleyin:
```bash
export PATH=/usr/lib/jvm/jdk-xx/bin:$PATH
```

---

## Sözdizimi (Syntax) Hataları

### `error: cannot find symbol`
Derleyicinin bir değişkeni, metodu veya sınıf adını bulamadığı anlamına gelir. Yazım hatası ve büyük/küçük harf duyarlılığını kontrol edin.

---

# 2. Çalışma Zamanı Sorunları (Runtime Problems)

## `Could not find or load main class HelloWorldApp` veya `NoClassDefFoundError`

Java sanal makinesi (`java`), belirttiğiniz `.class` dosyasını bulamadığında bu hatayı verir.

- Programı çalıştırırken `.class` uzantısını yazmayın: `java HelloWorldApp` şeklinde çalıştırın.
- Komut satırında `.class` dosyasının bulunduğu dizinde olduğunuzdan emin olun.

---

## `Exception in thread "main" java.lang.NoSuchMethodError: main`

Uygulamanın `main` metodunun tam olarak şu imzaya sahip olduğunu doğrulayın:

```java
public static void main(String[] args)
```