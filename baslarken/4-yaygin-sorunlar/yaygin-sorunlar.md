# Ders: Yaygın Sorunlar ve Çözümleri

Bu kılavuzdaki programları derlerken veya çalıştırırken bir sorunla karşılaşırsanız aşağıdaki hata mesajları ve çözümlerine başvurabilirsiniz.

1. [**Derleyici Sorunları (Compiler Problems)**](#1-derleyici-sorunları-compiler-problems)
   - [Microsoft Windows Sistemlerindeki Yaygın Hata Mesajları](#microsoft-windows-sistemlerindeki-yaygın-hata-mesajları)
   - [UNIX Sistemlerindeki Yaygın Hata Mesajları](#unix-sistemlerindeki-yaygın-hata-mesajları)
   - [Sözdizimi (Syntax) Hataları (Tüm Platformlar)](#sözdizimi-syntax-hataları-tüm-platformlar)
   - [Anlamsal (Semantic) Hatalar](#anlamsal-semantic-hatalar)
2. [**Çalışma Zamanı Sorunları (Runtime Problems)**](#2-çalışma-zamanı-sorunları-runtime-problems)
   - [Microsoft Windows Sistemlerindeki Çalışma Zamanı Hataları](#microsoft-windows-sistemlerindeki-çalışma-zamanı-hataları)
   - [UNIX Sistemlerindeki Çalışma Zamanı Hataları](#unix-sistemlerindeki-çalışma-zamanı-hataları)
   - [Applet veya Java Web Start Uygulamasının Engellenmesi](#applet-veya-java-web-start-uygulamasının-engellenmesi)
---

# 1. Derleyici Sorunları

## Microsoft Windows Sistemlerindeki Yaygın Hata Mesajları

### `'javac' is not recognized as an internal or external command, operable program or batch file`

Bu hatayı alıyorsanız, Windows derleyiciyi (`javac`) nerede bulacağını bilmiyordur.

Windows'a `javac`'ın nerede olduğunu bildirmenin bir yolu şudur: JDK'yı `C:\jdk1.8.0` dizinine kurduğunuzu varsayalım. Komut satırında şu komutu yazıp Enter'a basabilirsiniz:

```cmd
C:\jdk1.8.0\bin\javac HelloWorldApp.java
```

Bu seçeneği tercih ederseniz, bir programı her derlediğinizde veya çalıştırdığınızda `javac` ve `java` komutlarının önüne `C:\jdk1.8.0\bin\` yazmanız gerekir. Bu fazladan yazma işleminden kaçınmak için, JDK kurulum talimatlarındaki [PATH Değişkenini Güncelleme](https://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jdk_install.html) bölümüne bakın.

---

### `Class names, 'HelloWorldApp', are only accepted if annotation processing is explicitly requested`

Bu hatayı alıyorsanız, programı derlerken `.java` uzantısını eklemeyi unutmuşsunuzdur. Komutun `javac HelloWorldApp` değil, `javac HelloWorldApp.java` olduğunu unutmayın.

---

## UNIX Sistemlerindeki Yaygın Hata Mesajları

### `javac: Command not found`

Bu hatayı alıyorsanız, UNIX derleyiciyi (`javac`) bulamıyordur.

UNIX'e `javac`'ın yerini göstermenin bir yolu şudur: JDK'yı `/usr/local/jdk1.8.0` dizinine kurduğunuzu varsayalım. Komut isteminde şu komutu yazıp Enter'a basabilirsiniz:

```bash
/usr/local/jdk1.8.0/javac HelloWorldApp.java
```

> **Not:** Bu seçeneği tercih ederseniz, programı her derlediğinizde veya çalıştırdığınızda `javac` ve `java` komutlarının başına `/usr/local/jdk1.8.0/` eklemeniz gerekecektir. Bundan kaçınmak için bu bilgiyi `PATH` ortam değişkeninize ekleyebilirsiniz. Bunu yapma adımları o anda kullandığınız kabuğa (shell) göre değişiklik gösterir.

---

### `Class names, 'HelloWorldApp', are only accepted if annotation processing is explicitly requested`

Bu hatayı alıyorsanız, programı derlerken `.java` uzantısını eklemeyi unuttunuz demektir. Komutun `javac HelloWorldApp` değil, `javac HelloWorldApp.java` olduğunu unutmayın.

---

## Sözdizimi (Syntax) Hataları (Tüm Platformlar)

Programın bir kısmını yanlış yazarsanız derleyici bir **sözdizimi (syntax)** hatası verebilir. Mesaj genellikle hatanın türünü, hatanın algılandığı satır numarasını, o satırdaki kodu ve hatanın kod içindeki tam konumunu görüntüler. İşte bir ifadenin sonundaki noktalı virgülün (`;`) unutulmasından kaynaklanan bir hata:

```cmd
Testing.java:8: error: ';' expected
            count++
                   ^
1 error
```

Herhangi bir derleyici hatası görürseniz programınız başarıyla derlenmemiş demektir ve derleyici bir `.class` dosyası oluşturmamıştır. Programı dikkatlice inceleyin, tespit ettiğiniz hataları düzeltin ve tekrar deneyin.

---

## Anlamsal (Semantic) Hatalar

Derleyici, programınızın sözdizimsel olarak doğru olduğunu doğrulamanın yanı sıra diğer temel doğruluk kurallarını da kontrol eder. Örneğin, başlatılmamış (initialize edilmemiş) bir değişkeni her kullandığınızda derleyici sizi uyarır:

```cmd
Testing.java:8: error: variable count might not have been initialized
            count++;
            ^
Testing.java:9: error: variable count might not have been initialized
        System.out.println("Input has " + count + " chars.");
                                          ^
2 errors
```

Yine programınız başarıyla derlenmemiştir ve derleyici bir `.class` dosyası oluşturmamıştır. Hatayı düzeltip yeniden deneyin.

---

# 2. Çalışma Zamanı Sorunları

## Microsoft Windows Sistemlerindeki Çalışma Zamanı Hataları

### `Exception in thread "main" java.lang.NoClassDefFoundError: HelloWorldApp`

Bu hatayı alıyorsanız, `java` bayt kodu dosyanızı (`HelloWorldApp.class`) bulamıyordur.

`java`'nın `.class` dosyanızı bulmaya çalıştığı yerlerden biri geçerli çalışma dizininizdir. Dolayısıyla `.class` dosyanız `C:\java` dizinindeyse geçerli dizininizi buna değiştirmelisiniz:

```cmd
cd C:\java
```

İstem `C:\java>` olarak değişmelidir. Komut istemine `dir` yazarsanız `.java` ve `.class` dosyalarınızı görmelisiniz. Şimdi tekrar `java HelloWorldApp` komutunu çalıştırın.

Hala sorun yaşıyorsanız `CLASSPATH` değişkeninizi temizlemeniz gerekebilir. Bunu test etmek için şu komutla sınıf yolunu sıfırlamayı deneyin:

```cmd
set CLASSPATH=
```

Ardından tekrar `java HelloWorldApp` komutunu çalıştırın. Program bu şekilde çalışırsa `CLASSPATH` değişkeninizi güncellemeniz gerekecektir.

---

### `Could not find or load main class HelloWorldApp.class`

Yeni başlayan programcıların sık yaptığı bir hata, `java` başlatıcısını derleyici tarafından oluşturulan `.class` uzantılı dosya adı üzerinde çalıştırmaya çalışmaktır. Örneğin `java HelloWorldApp` yerine `java HelloWorldApp.class` yazarsanız bu hatayı alırsınız. Unutmayın, komut satırındaki argüman dosya adı değil, kullanmak istediğiniz **sınıfın adıdır**.

---

### `Exception in thread "main" java.lang.NoSuchMethodError: main`

Java Sanal Makinesi, kendisiyle çalıştırdığınız sınıfın uygulamanın yürütülmesine başlayabileceği bir `main` metoduna sahip olmasını şart koşar. [HelloWorld Uygulamasına Yakından Bir Bakış](baslarken/3-helloworld-yakindan-bakis/hello-world-yakindan-bakis.md) konusu `main` metodunu ayrıntılı olarak ele almaktadır.

---

## UNIX Sistemlerindeki Çalışma Zamanı Hataları

### `Exception in thread "main" java.lang.NoClassDefFoundError: HelloWorldApp`

Bu hatayı alıyorsanız, `java` bayt kodu dosyanızı (`HelloWorldApp.class`) bulamıyordur.

`java`'nın bayt kodu dosyanızı aradığı yerlerden biri geçerli dizininizdir. Örneğin bayt kodu dosyanız `/home/jdoe/java` dizinindeyse geçerli dizininizi buna değiştirmelisiniz:

```bash
cd /home/jdoe/java
```

`pwd` yazdığınızda `/home/jdoe/java` görmelisiniz. `ls` yazdığınızda `.java` ve `.class` dosyalarınızı görmelisiniz. Şimdi tekrar `java HelloWorldApp` komutunu girin.

Sorun devam ediyorsa `CLASSPATH` ortam değişkenini temizlemeyi deneyebilirsiniz:

```bash
unset CLASSPATH
```

Ardından tekrar `java HelloWorldApp` çalıştırın.

---

### `Exception in thread "main" java.lang.NoClassDefFoundError: HelloWorldApp/class`

Programcıların sık yaptığı bir hata, başlatıcıya `.class` uzantısını vermektir. Örneğin `java HelloWorldApp` yerine `java HelloWorldApp.class` çalıştırmayı denerseniz bu hatayı alırsınız. Unutmayın, argüman dosya adı değil, **sınıfın adıdır**.

---

### `Exception in thread "main" java.lang.NoSuchMethodError: main`

Java Sanal Makinesi, çalıştırılacak sınıfta uygulamanın başlatılabilmesi için bir `main` metodunun bulunmasını zorunlu kılar.

---

## Applet veya Java Web Start Uygulamasının Engellenmesi

Bir uygulamayı tarayıcı üzerinden çalıştırırken uygulamanın engellendiğini belirten güvenlik uyarıları alırsanız şu maddeleri kontrol edin:

- JAR dosyası manifest dosyasındaki özniteliklerin uygulamanın çalıştığı ortam için doğru ayarlandığını doğrulayın (`Permissions` özniteliği zorunludur).
- Uygulamanın geçerli bir sertifika ile imzalandığından ve sertifikanın İmzalayan CA anahtar deposunda yer aldığından emin olun.
- Yerel bir applet çalıştırıyorsanız test amacıyla bir web sunucusu kurun veya uygulamanızı Java Denetim Masası'nın (Java Control Panel) Güvenlik sekmesinde yönetilen istisna site listesine (*exception site list*) ekleyin.