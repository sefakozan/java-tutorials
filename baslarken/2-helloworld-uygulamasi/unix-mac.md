# Ders: Solaris OS, Linux ve Mac OS X için "Hello World!"

İlk uygulamanızı yazmanın zamanı geldi! Bu ayrıntılı talimatlar Solaris OS, Linux ve macOS (Mac OS X) kullanıcıları içindir. Diğer platformlar için talimatlar [Microsoft Windows için "Hello World!"](baslarken/2-helloworld-uygulamasi/windows.md) ve [NetBeans IDE için "Hello World!"](baslarken/2-helloworld-uygulamasi/netbeans.md) sayfalarında yer almaktadır.

Bu sayfadaki talimatlarla ilgili herhangi bir sorunla karşılaşırsanız, [Yaygın Sorunlar (ve Çözümleri)](baslarken/4-yaygin-sorunlar/yaygin-sorunlar.md) bölümüne başvurun.

1. [**Kontrol Listesi**](#1-kontrol-listesi)
2. [**İlk Uygulamanızı Oluşturma**](#2-ilk-uygulamanızı-oluşturma)
   - [Kaynak Dosya Oluşturma](#kaynak-dosya-oluşturma)
   - [Kaynak Dosyayı bir .class Dosyasına Derleme](#kaynak-dosyayı-bir-class-dosyasına-derleme)
   - [Programı Çalıştırma](#programı-çalıştırma)

---

# 1. Kontrol Listesi

İlk programınızı yazmak için şunlara ihtiyacınız olacak:

1. **Java SE Development Kit 8 (JDK 8)**  
   Solaris OS, Linux veya macOS sürümünü indirebilirsiniz. (JRE değil, **JDK** indirdiğinizden emin olun.) Kurulum talimatlarına [JDK Kurulum Kılavuzu](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html)'ndan ulaşabilirsiniz.

2. **Bir Metin Düzenleyici (Text Editor)**  
   Bu örnekte, UNIX tabanlı birçok platformda bulunan basit bir düzenleyici olan Pico kullanılacaktır. `vi`, `nano`, `gedit` veya `emacs` gibi farklı bir metin düzenleyici kullanıyorsanız bu talimatları kolayca uyarlayabilirsiniz.

Bu iki öğe, ilk uygulamanızı yazmak için ihtiyacınız olan her şeydir.

---

# 2. İlk Uygulamanızı Oluşturma

İlk uygulamanız olan `HelloWorldApp`, ekranda yalnızca "Hello World!" mesajını gösterecektir. Bu programı oluşturmak için şu adımları izleyeceksiniz:

- **Kaynak dosya oluşturma:** Bir kaynak dosya, Java programlama dilinde yazılmış, sizin ve diğer programcıların anlayabileceği kodları içerir. Kaynak dosyaları oluşturmak ve düzenlemek için herhangi bir metin düzenleyiciyi kullanabilirsiniz.
- **Kaynak dosyayı bir .class dosyasına derleme:** Java programlama dili derleyicisi (`javac`), kaynak dosyanızı alır ve içindeki metni Java Sanal Makinesinin anlayabileceği komutlara dönüştürür. Bu `.class` dosyasının içinde yer alan komutlara **bayt kodları (bytecodes)** adı verilir.
- **Programı çalıştırma:** Java uygulama başlatıcı aracı (`java`), uygulamanızı çalıştırmak için Java Sanal Makinesini kullanır.

## Kaynak Dosya Oluşturma

Kaynak dosya oluşturmak için iki seçeneğiniz vardır:

- `HelloWorldApp.java` dosyasını bilgisayarınıza kaydederek fazla kod yazmaktan kaçınabilirsiniz. Ardından doğrudan [Kaynak Dosyayı Derleme](#kaynak-dosyayı-bir-class-dosyasına-derleme) adımına geçebilirsiniz.
- Ya da aşağıdaki (daha kapsamlı) talimatları takip edebilirsiniz.

İlk olarak bir kabuk (shell) veya "terminal" penceresi açın.

Terminal istemini ilk açtığınızda **geçerli dizininiz (current directory)** genellikle **kullanıcı ana dizininiz (home directory)** olacaktır. Komut satırına `cd` yazıp **Enter (Return)** tuşuna basarak istediğiniz zaman ana dizininize dönebilirsiniz.

Oluşturduğunuz kaynak dosyalar ayrı bir dizinde tutulmalıdır. `mkdir` komutunu kullanarak yeni bir dizin oluşturabilirsiniz. Örneğin `/tmp` dizini altında `examples/java` dizini oluşturmak için aşağıdaki komutları kullanın:

```bash
cd /tmp
mkdir examples
cd examples
mkdir java
```

Geçerli dizininizi bu yeni dizin olarak değiştirmek için şunu girin:

```bash
cd /tmp/examples/java
```

Artık kaynak dosyanızı oluşturmaya başlayabilirsiniz.

Komut istemine `pico` (veya `nano`) yazıp **Enter (Return)** tuşuna basarak metin düzenleyiciyi başlatın. (Sistem `pico: command not found` uyarısı verirse `nano` veya başka bir metin düzenleyici kullanabilirsiniz.)

Düzenleyici başladığında yeni ve boş bir çalışma alanı (*buffer*) göreceksiniz. Kodunuzu yazacağınız alan burasıdır.

Bu alana aşağıdaki kodu tam olarak yazın:

```java
/**
 * HelloWorldApp sınıfı, standart çıktıya sadece 
 * "Hello World!" yazdıran bir uygulamayı hayata geçirir.
 */
class HelloWorldApp {
    public static void main(String[] args) {
        System.out.println("Hello World!"); // Metni ekrana yazdırır.
    }
}
```

> **Not:** Tüm kodları, komutları ve dosya adlarını tam olarak gösterildiği gibi yazın. Hem derleyici (`javac`) hem de başlatıcı (`java`) büyük/küçük harfe duyarlıdır (*case-sensitive*), bu nedenle büyük ve küçük harfleri tutarlı bir şekilde kullanmalısınız.  
> `HelloWorldApp` ile `helloworldapp` aynı şey **değildir**.

Kodu `HelloWorldApp.java` adıyla kaydedin. Pico/Nano düzenleyicisinde bunu yapmak için **Ctrl+O** tuşlarına basın. Alt kısımda `File Name to write:` istemini gördüğünüzde, dosyayı kaydetmek istediğiniz dizin yolunu ve ardından dosya adını girin: `/tmp/examples/java/HelloWorldApp.java` yazıp **Enter (Return)** tuşuna basın.

Düzenleyiciden çıkmak için **Ctrl+X** tuşlarına basın.

---

## Kaynak Dosyayı bir .class Dosyasına Derleme

Başka bir kabuk (terminal) penceresi açın veya mevcut terminalinizi kullanın. Kaynak dosyanızı derlemek için geçerli dizininizi dosyanızın bulunduğu dizine geçirin. Örneğin kaynak dizininiz `/tmp/examples/java` ise komut satırına şunu yazıp **Enter (Return)** tuşuna basın:

```bash
cd /tmp/examples/java
```

Komut istemine `pwd` yazarsanız, bu örnekte `/tmp/examples/java` olarak değiştirilmiş olan geçerli dizini görmelisiniz.

Komut istemine `ls` yazarsanız kaynak dosyanızı görmelisiniz:

<figure style="text-align: center;">
  <img src="_media/figures/firstls.gif" alt="ls Komutu Çıktısı" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">.java kaynak dosyasını gösteren <code>ls</code> komutu çıktısı.</figcaption>
</figure>

Artık kaynak dosyayı derlemeye hazırsınız. Komut istemine aşağıdaki komutu yazın ve **Enter (Return)** tuşuna basın:

```bash
javac HelloWorldApp.java
```

Derleyici `HelloWorldApp.class` adında bir bayt kodu dosyası oluşturmuştur. Oluşturulan yeni dosyayı görmek için `ls` yazın:

<figure style="text-align: center;">
  <img src="_media/figures/secondls.gif" alt="Oluşturulan .class Dosyası" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Oluşturulan <code>.class</code> dosyasını gösteren <code>ls</code> komutu çıktısı.</figcaption>
</figure>

Artık bir `.class` dosyanız olduğuna göre programınızı çalıştırabilirsiniz.

Bu adımdaki talimatlarla ilgili sorun yaşarsanız [Yaygın Sorunlar (ve Çözümleri)](baslarken/4-yaygin-sorunlar/yaygin-sorunlar.md) bölümüne başvurun.

---

## Programı Çalıştırma

Aynı dizindeyken komut istemine şunu girin:

```bash
java HelloWorldApp
```

Aşağıdaki şekilde gösterilen çıktıyı görmelisiniz:

<figure style="text-align: center;">
  <img src="_media/figures/result.gif" alt="Program Çıktısı" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Ekrana "Hello World!" yazdıran program çıktısı.</figcaption>
</figure>

Tebrikler! Programınız başarıyla çalıştı!

Bu adımdaki talimatlarla ilgili sorun yaşarsanız [Yaygın Sorunlar (ve Çözümleri)](baslarken/4-yaygin-sorunlar/yaygin-sorunlar.md) bölümüne başvurun.
