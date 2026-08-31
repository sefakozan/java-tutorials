# Ders: Java Teknolojisi Olgusu (The Java Technology Phenomenon)

Java teknolojisi hakkında konuşmalar her yerde gibi görünüyor, ama bu tam olarak nedir? Aşağıdaki bölümler, Java teknolojisinin hem bir programlama dili hem de bir platform olduğunu açıklar ve bu teknolojinin sizin için neler yapabileceği hakkında genel bir bakış sunar.

1. [**Java Teknolojisi Hakkında**](#1-java-teknolojisi-hakkında)
2. [**Java Teknolojisi Neler Yapabilir?**](#2-java-teknolojisi-neler-yapabilir)
3. [**Java Teknolojisi Hayatımı Nasıl Değiştirecek?**](#3-java-teknolojisi-hayatımı-nasıl-değiştirecek)
---

# 1. Java Teknolojisi Hakkında

Java teknolojisi hem bir programlama dili hem de bir platformdur.

## Java Programlama Dili

Java programlama dili, aşağıdaki moda kelimelerin tümüyle karakterize edilebilen yüksek seviyeli bir dildir:

- **Nesne yönelimli:** Java, sınıflar ve nesneler etrafında tasarlanmış olup, kapsülleme, kalıtım ve çok biçimlilik gibi nesne yönelimli programlama ilkelerini destekler.
- **Dağıtık:** Java, RMI ve EJB gibi teknolojilerle ağ üzerinden farklı sistemler arasında veri ve uygulama paylaşımını kolaylaştırır.
- **Çok iş parçacıklı:** Java, birden fazla iş parçacığının (thread) aynı anda çalışmasını destekleyerek paralel işlem yapmayı sağlar.
- **Dinamik:** Java, çalışma zamanında sınıfları yükleme ve bağlama yeteneği ile dinamik olarak yeni işlevler eklenmesine olanak tanır.
- **Mimari nötr:** Java, bayt koduna derlenen programların herhangi bir donanım veya işletim sisteminde çalışmasını sağlayan JVM (Java Sanal Makinesi) kullanır.
- **Taşınabilir:** Java’nın “bir kere yaz, her yerde çalıştır” felsefesi, kodun farklı platformlarda değişiklik gerektirmeden çalışmasını sağlar.
- **Yüksek performans:** Java, JIT (Just-In-Time) derleyicisi sayesinde bayt kodunu makine diline çevirerek yüksek çalışma hızı sunar.
- **Sağlam:** Java, otomatik bellek yönetimi (çöp toplayıcı) ve istisna işleme mekanizmalarıyla hata olasılığını azaltır ve güvenilir programlar geliştirilmesini sağlar.
- **Güvenli:** Java, sandbox modeli ve güvenlik yöneticisi gibi özelliklerle zararlı kodların sistem kaynaklarına erişimini kısıtlayarak güvenliği artırır.

Yukarıdaki moda kelimelerin her biri, James Gosling ve Henry McGilton tarafından yazılmış bir beyaz kağıt olan **Java Dil Ortamı’nda** açıklanmıştır.

Java programlama dilinde, tüm kaynak kodu önce **.java** uzantılı düz metin dosyalarına yazılır. Bu kaynak dosyalar daha sonra **javac** derleyicisi tarafından **.class** dosyalarına derlenir. Bir **.class** dosyası, işlemcinize özgü kodu içermez; bunun yerine Java Sanal Makinesi (Java VM) makine dili olan **bayt kodlarını (bytecode)** içerir. Java başlatıcı aracı daha sonra uygulamanızı Java Sanal Makinesi’nin bir örneğiyle çalıştırır.

<figure style="text-align: center;">
  <img src="_media/figures/getStarted-compiler.gif" alt="Yazılım Geliştirme Süreci" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Yazılım geliştirme sürecine genel bir bakış.</figcaption>
</figure>

Java VM birçok farklı işletim sisteminde mevcut olduğundan, aynı `.class` dosyaları Microsoft Windows, Solaris™ OS, Linux veya Mac OS üzerinde çalışabilir.

<figure style="text-align: center;">
  <img src="_media/figures/helloWorld.gif" alt="Java Sanal Makinesi Taşınabilirliği" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Java VM aracılığıyla aynı uygulama birden fazla platformda çalışabilir.</figcaption>
</figure>

## Java Platformu

Bir platform, bir programın çalıştığı donanım veya yazılım ortamıdır. Microsoft Windows, Linux, Solaris OS ve Mac OS gibi en popüler platformlardan bazılarını zaten bahsettik. Çoğu platform, işletim sistemi ve altta yatan donanımın bir kombinasyonu olarak tanımlanabilir. Java platformu, diğer donanım tabanlı platformların üzerinde çalışan yalnızca yazılım tabanlı bir platform olmasıyla diğer platformlardan farklıdır.

Java platformunun iki bileşeni vardır:
- Java Sanal Makinesi (JVM)
- Java Uygulama Programlama Arayüzü (API)

<figure style="text-align: center;">
  <img src="_media/figures/getStarted-jvm.gif" alt="Java Platformu Mimarisi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">API ve Java Sanal Makinesi, programı altta yatan donanımdan yalıtır.</figcaption>
</figure>

---

# 2. Java Teknolojisi Neler Yapabilir?

Genel amaçlı, üst düzey Java programlama dili, güçlü bir yazılım platformudur. Java platformunun her tam uygulaması aşağıdaki bileşenleri sunar:

- **Geliştirme Araçları:** Geliştirme araçları, uygulamalarınızı derleme, çalıştırma, izleme, hata ayıklama ve belgeleme için ihtiyacınız olan her şeyi sağlar. Yeni bir geliştirici olarak, kullanacağınız ana araçlar `javac` derleyicisi, `java` başlatıcısı ve `javadoc` dokümantasyon aracıdır.
- **Uygulama Programlama Arayüzü (API):** API, Java programlama dilinin temel işlevselliğini sağlar. Kendi uygulamalarınızda kullanılabilecek çok çeşitli faydalı sınıflar sunar. Temel nesnelerden ağ ve güvenlik, XML üretimi ve veritabanı erişimine kadar her şeyi kapsar. Çekirdek API çok büyüktür; içeriğine genel bir bakış için [Java Platform Standard Edition 8 Dokümantasyonu](https://docs.oracle.com/javase/8/docs/api/)'na bakabilirsiniz.
- **Dağıtım Teknolojileri:** Uygulamaları paketleme ve çalıştırma standartları (JAR).
- **Kullanıcı Arayüzü Araç Takımları:** JavaFX ve Swing araç takımları.
- **Entegrasyon Kütüphaneleri:** JDBC, JNDI ve RMI gibi veri erişim araçları.

---

# 3. Java Teknolojisi Hayatımı Nasıl Değiştirecek?

Java programlama dilini öğrenirseniz size şöhret, servet veya hatta iş garantisi veremeyiz. Yine de, programlarınızı daha iyi hale getirecek ve diğer dillere göre daha az çaba gerektirecektir. Java teknolojisinin size aşağıdakileri yapmanıza yardımcı olacağına inanıyoruz:

- **Hızlı Başlangıç:** Java programlama dili güçlü bir nesne yönelimli dil olsa da, özellikle C veya C++ ile aşina olan programcılar için öğrenmesi kolaydır.
- **Daha Az Kod Yazma:** Program metriklerinin (sınıf sayıları, metod sayıları vb.) karşılaştırılması, Java programlama dilinde yazılmış bir programın C++ ile yazılmış aynı programdan dört kat küçük olabileceğini göstermektedir.
- **Daha İyi Kod Yazma:** Java programlama dili iyi kodlama uygulamalarını teşvik eder ve otomatik çöp toplama bellek sızıntılarını önlemenize yardımcı olur. Nesne yönelimi, JavaBeans™ bileşen mimarisi ve geniş kapsamlı, kolayca genişletilebilen API'si sayesinde mevcut test edilmiş kodu tekrar kullanmanızı ve daha az hata eklemenizi sağlar.
- **Programları Daha Hızlı Geliştirin:** Java programlama dili C++'dan daha basittir ve bu nedenle geliştirme süreniz onunla yazarken iki katına kadar hızlı olabilir. Programlarınız ayrıca daha az kod satırı gerektirir.
- **Platform Bağımlılıklarından Kaçının:** Programınızı başka dillerde yazılmış kütüphanelerden kaçınarak taşınabilir tutabilirsiniz.
- **Bir Kez Yaz, Her Yerde Çalıştır:** Java programlama dilinde yazılmış uygulamalar makineden bağımsız bayt kodlarına derlendiği için, herhangi bir Java platformunda tutarlı şekilde çalışırlar.
- **Yazılımı Daha Kolay Dağıtın:** Java Web Start yazılımı ile kullanıcılar uygulamalarınızı tek bir tıklamayla başlatabilecekler. Otomatik sürüm kontrolü, kullanıcıların yazılımınızın en güncel sürümüyle her zaman güncel olmasını sağlar. Bir güncelleme varsa, Java Web Start yazılımı kurulumunu otomatik olarak günceller.