# Ders: Microsoft Windows için "Hello World!"

İlk uygulamanızı yazmanın zamanı geldi! Aşağıdaki ayrıntılı talimatlar Windows Vista, Windows 7 ve Windows 8 (ve sonraki Windows sürümleri) kullanıcıları içindir. Diğer platformlar için talimatlar [Solaris OS, Linux ve macOS için "Hello World!"](baslarken/2-helloworld-uygulamasi/unix-mac.md) ve [NetBeans IDE için "Hello World!"](baslarken/2-helloworld-uygulamasi/netbeans.md) sayfalarında yer almaktadır.

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
   Windows sürümünü indirebilirsiniz. (JRE değil, **JDK** indirdiğinizden emin olun.) Kurulum talimatlarına [JDK Kurulum Kılavuzu](https://docs.oracle.com/javase/8/docs/technotes/guides/install/windows_jdk_install.html)'ndan ulaşabilirsiniz.

2. **Bir Metin Düzenleyici (Text Editor)**  
   Bu örnekte, Windows platformlarında yerleşik olarak bulunan basit bir düzenleyici olan Not Defteri (Notepad) kullanılacaktır. Farklı bir metin düzenleyici kullanıyorsanız bu talimatları kolayca uyarlayabilirsiniz.

Bu iki öğe, ilk uygulamanızı yazmak için ihtiyacınız olan her şeydir.

---

# 2. İlk Uygulamanızı Oluşturma

İlk uygulamanız olan `HelloWorldApp`, ekranda yalnızca "Hello World!" mesajını gösterecektir. Bu programı oluşturmak için şu adımları izleyeceksiniz:

- **Kaynak dosya oluşturma:** Bir kaynak dosya, Java programlama dilinde yazılmış, sizin ve diğer programcıların anlayabileceği kodları içerir. Kaynak dosyaları oluşturmak ve düzenlemek için herhangi bir metin düzenleyiciyi kullanabilirsiniz.
- **Kaynak dosyayı bir .class dosyasına derleme:** Java programlama dili derleyicisi (`javac`), kaynak dosyanızı alır ve içindeki metni Java Sanal Makinesinin anlayabileceği komutlara dönüştürür. Bu dosyanın içinde yer alan komutlara **byte kodları (bytecodes)** adı verilir.
- **Programı çalıştırma:** Java uygulama başlatıcı aracı (`java`), uygulamanızı çalıştırmak için Java Sanal Makinesini kullanır.

## Kaynak Dosya Oluşturma

Kaynak dosya oluşturmak için iki seçeneğiniz vardır:

- `HelloWorldApp.java` dosyasını bilgisayarınıza kaydederek fazla kod yazmaktan kaçınabilirsiniz. Ardından doğrudan [Kaynak Dosyayı bir .class Dosyasına Derleme](#kaynak-dosyayı-bir-class-dosyasına-derleme) adımına geçebilirsiniz.
- Ya da aşağıdaki (daha kapsamlı) talimatları takip edebilirsiniz.

İlk olarak metin düzenleyicinizi başlatın. **Başlat** menüsünden **Programlar > Donatılar > Not Defteri (Notepad)** yolunu seçerek Not Defteri'ni açabilirsiniz. Yeni bir belgeye aşağıdaki kodu tam olarak yazın:

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

Kodu `HelloWorldApp.java` adıyla bir dosyaya kaydedin. Not Defteri'nde bunu yapmak için önce **Dosya > Farklı Kaydet...** menü öğesini seçin. Ardından **Farklı Kaydet** iletişim kutusunda:

1. **Kayıt yeri (Save in)** açılır kutusunu kullanarak dosyanızı kaydedeceğiniz klasörü (dizini) belirtin. Bu örnekte dizin, `C` sürücüsündeki `myapplication` klasörüdür.
2. **Dosya adı (File name)** metin alanına tırnak işaretleri olmadan `HelloWorldApp.java` yazın.
3. **Kayıt türü (Save as type)** açılır kutusundan **Tüm Dosyalar (*.*)** seçeneğini belirleyin.
4. **Kodlama (Encoding)** kutusunda kodlamayı **ANSI** olarak bırakın.

İşlemi tamamladığınızda iletişim kutusu aşağıdaki gibi görünmelidir:

<figure style="text-align: center;">
  <img src="_media/figures/saveas.png" alt="Farklı Kaydet İletişim Kutusu" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Kaydet'e tıklamadan hemen önceki Farklı Kaydet iletişim kutusu.</figcaption>
</figure>

Şimdi **Kaydet** butonuna tıklayın ve Not Defteri'nden çıkın.

---

## Kaynak Dosyayı bir .class Dosyasına Derleme

Bir komut satırı (kabuk / terminal) penceresi açın. Bunu **Başlat** menüsünden **Çalıştır...** seçeneğini seçip `cmd` yazarak veya Başlat arama kutusuna `cmd` yazıp Enter tuşuna basarak yapabilirsiniz. Komut istemi penceresi aşağıdaki şekle benzer olmalıdır:

<figure style="text-align: center;">
  <img src="_media/figures/dos.png" alt="Komut İstemi Penceresi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Komut İstemi (Shell) penceresi.</figcaption>
</figure>

Komut istemindeki imleç **geçerli dizininizi (current directory)** gösterir. Komut istemini ilk açtığınızda geçerli dizininiz genellikle kullanıcı ana dizininizdir.

Kaynak dosyanızı derlemek için geçerli dizininizi dosyanızın bulunduğu dizin olarak değiştirin. Örneğin kaynak dizininiz `C` sürücüsündeki `myapplication` klasörü ise komut istemine aşağıdaki komutu yazın ve **Enter** tuşuna basın:

```cmd
cd C:\myapplication
```

Şimdi komut satırı istemi `C:\myapplication>` olarak değişmelidir.

> **Not:** Farklı bir sürücüdeki dizine geçmek için fazladan bir komut yazmanız gerekir: sürücü harfi ve iki nokta üst üste. Örneğin `D` sürücüsündeki `myapplication` dizinine geçmek için şu şekilde `D:` girmelisiniz:
> ```cmd
> C:\>D:
> D:\>cd myapplication
> D:\myapplication>
> ```

Komut istemine `dir` yazarsanız kaynak dosyanızı görmelisiniz:

```cmd
C:\>cd myapplication

C:\myapplication>dir
 Volume in drive C is System
 Volume Serial Number is F2E8-C8CC

 Directory of C:\myapplication

2014-04-24  01:34 PM    <DIR>          .
2014-04-24  01:34 PM    <DIR>          ..
2014-04-24  01:34 PM               267 HelloWorldApp.java
               1 File(s)            267 bytes
               2 Dir(s)  93,297,991,680 bytes free

C:\myapplication>
```

Artık derlemeye hazırsınız. Komut istemine aşağıdaki komutu yazın ve **Enter** tuşuna basın:

```cmd
javac HelloWorldApp.java
```

Derleyici `HelloWorldApp.class` adında bir byte kodu dosyası oluşturmuştur. Oluşturulan yeni dosyayı görmek için komut istemine `dir` yazın:

```cmd
C:\myapplication>javac HelloWorldApp.java

C:\myapplication>dir
 Volume in drive C is System
 Volume Serial Number is F2E8-C8CC

 Directory of C:\myapplication

2014-04-24  02:07 PM    <DIR>          .
2014-04-24  02:07 PM    <DIR>          ..
2014-04-24  02:07 PM               432 HelloWorldApp.class
2014-04-24  01:34 PM               267 HelloWorldApp.java
               2 File(s)            699 bytes
               2 Dir(s)  93,298,032,640 bytes free

C:\myapplication>
```

Artık bir `.class` dosyanız olduğuna göre programınızı çalıştırabilirsiniz.

Bu adımdaki talimatlarla ilgili sorun yaşarsanız [Yaygın Sorunlar (ve Çözümleri)](baslarken/4-yaygin-sorunlar/yaygin-sorunlar.md) bölümüne başvurun.

---

## Programı Çalıştırma

Aynı dizindeyken komut istemine aşağıdaki komutu girin:

```cmd
java -cp . HelloWorldApp
```

Ekranınızda aşağıdaki çıktıyı görmelisiniz:

```cmd
C:\myapplication>java -cp . HelloWorldApp
Hello World!

C:\myapplication>
```

Tebrikler! Programınız başarıyla çalıştı!

Bu adımdaki talimatlarla ilgili sorun yaşarsanız [Yaygın Sorunlar (ve Çözümleri)](baslarken/4-yaygin-sorunlar/yaygin-sorunlar.md) sayfasına başvurun.
