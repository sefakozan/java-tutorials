# Ders: Java Teknolojisi Fenomeni  
Java teknolojisi hakkında konuşmalar her yerde gibi görünüyor, ama bu tam olarak nedir? Aşağıdaki bölümler, Java teknolojisinin hem bir programlama dili hem de bir platform olduğunu açıklar ve bu teknolojinin sizin için neler yapabileceği hakkında genel bir bakış sunar.

1. **Java Teknolojisi Hakkında**  
2. **Java Teknolojisi Neler Yapabilir?**  
3. **Java Teknolojisi Hayatımı Nasıl Değiştirecek?**
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

Java programlama dilinde, tüm kaynak kodu önce **.java** uzantılı düz metin dosyalarına yazılır. Bu kaynak dosyalar daha sonra **javac** derleyicisi tarafından **.class** dosyalarına derlenir. Bir **.class** dosyası, işlemcinize özgü kodu içermez; bunun yerine Java Sanal Makinesi1 (Java VM) makine dili olan **bayt kodlarını (byte)** içerir. Java başlatıcı aracı daha sonra uygulamanızı Java Sanal Makinesi’nin bir örneğiyle çalıştırır.

<figure style="text-align: center;">
  <img src="https://docs.oracle.com/javase/tutorial/figures/getStarted/getStarted-compiler.gif" alt="image00" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Yazılım geliştirme sürecine genel bir bakış.</figcaption>
</figure>

Java VM birçok farklı işletim sisteminde mevcut olduğundan, aynı .class dosyaları Microsoft Windows, Solaris™ İşletim Sistemi (Solaris OS), Linux veya Mac OS üzerinde çalışabilir. Java SE HotSpot at a Glance gibi bazı sanal makineler, çalışma zamanında uygulamanıza performans artışı sağlamak için ek adımlar gerçekleştirir. Bu, performans darboğazlarını bulma ve sık kullanılan kod bölümlerini (yerel koda) yeniden derleme gibi çeşitli görevleri içerir.

<figure style="text-align: center;">
  <img src="https://docs.oracle.com/javase/tutorial/figures/getStarted/helloWorld.gif" alt="image01" style="width: 500px; height: 400px;">
  <figcaption style="margin-top: 10px;">Java VM aracılığıyla aynı uygulama birden fazla platformda çalışabilir.</figcaption>
</figure>

## Java Platformu

Bir platform, bir programın çalıştığı donanım veya yazılım ortamıdır. Microsoft Windows, Linux, Solaris OS ve Mac OS gibi en popüler platformlardan bazılarını zaten bahsettik. Çoğu platform, işletim sistemi ve altta yatan donanımın bir kombinasyonu olarak tanımlanabilir. Java platformu, diğer donanım tabanlı platformların üzerinde çalışan yalnızca yazılım tabanlı bir platform olmasıyla diğer platformlardan farklıdır.

Java platformunun iki bileşeni vardır:

- Java Sanal Makinesi
- Java Uygulama Programlama Arayüzü (API)

Java Sanal Makinesi’ni zaten tanıdınız; bu, Java platformunun temelidir ve çeşitli donanım tabanlı platformlara taşınır.

API, birçok kullanışlı yetenek sağlayan hazır yazılım bileşenlerinin büyük bir koleksiyonudur. İlgili sınıflar ve arayüzlerden oluşan kütüphanelere gruplandırılmıştır; bu kütüphaneler paketler olarak bilinir. Bir sonraki bölüm; **Java Teknolojisi Ne Yapabilir?**, API tarafından sağlanan bazı işlevsellikleri vurgular.

<figure style="text-align: center;">
  <img src="https://docs.oracle.com/javase/tutorial/figures/getStarted/getStarted-jvm.gif" alt="Java Platformu Diyagramı" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">API ve Java Sanal Makinesi, programı altta yatan donanımdan yalıtır.</figcaption>
</figure>

Platformdan bağımsız bir ortam olarak, Java platformu yerel koda kıyasla biraz daha yavaş olabilir. Ancak, derleyici ve sanal makine teknolojilerindeki ilerlemeler, taşınabilirliği tehdit etmeden performansı yerel koda yaklaştırıyor.

"Java Sanal Makinesi" ve "JVM" terimleri, Java platformu için bir Sanal Makine anlamına gelir.

---

# 2. Java Teknolojisi Neler Yapabilir? 
Genel amaçlı, üst düzey Java programlama dili, güçlü bir yazılım platformudur. Java platformunun her tam uygulaması, aşağıdaki özellikleri sunar:

- **Geliştirme Araçları:** Geliştirme araçları, uygulamalarınızı derlemek, çalıştırmak, izlemek, hata ayıklamak ve belgelemek için ihtiyacınız olan her şeyi sağlar. Yeni bir geliştirici olarak kullanacağınız ana araçlar; javac derleyicisi, java başlatıcısı ve javadoc dökümantasyon aracıdır.

- **Uygulama Programlama Arayüzü (API):** API, Java programlama dilinin temel işlevselliğini sağlar. Kendi uygulamalarınızda kullanmaya hazır çok çeşitli faydalı sınıflar sunar. Temel nesnelerden ağ oluşturma ve güvenliğe, XML oluşturmadan veritabanı erişimine kadar birçok alanı kapsar. Çekirdek API oldukça geniştir; içeriği hakkında genel bir fikir edinmek için Java Platform Standard Edition 8 Dökümantasyonuna bakabilirsiniz.

- **Dağıtım Teknolojileri:** JDK yazılımı, uygulamalarınızı son kullanıcılara dağıtmak için Java Web Start yazılımı ve Java Eklenti yazılımı gibi standart mekanizmalar sağlar.

- **Kullanıcı Arayüzü Araç Takımları:** JavaFX, Swing ve Java 2D araç takımları, gelişmiş Grafiksel Kullanıcı Arayüzleri (GUI'ler) oluşturmayı mümkün kılar.

- **Entegrasyon Kütüphaneleri:** Java IDL API, JDBC API, Java Adlandırma ve Dizin Arayüzü (JNDI) API, Java RMI ve Java Uzak Metot Çağırma Internet Inter-ORB Protokol Teknolojisi (Java RMI-IIOP Teknolojisi) gibi entegrasyon kütüphaneleri, veritabanı erişimi ve uzak nesnelerin manipülasyonunu sağlar.
---

# 3. Java Teknolojisi Hayatımı Nasıl Değiştirecek? 
Java programlama dilini öğrenirseniz size şöhret, servet ya da iş garantisi vaat edemeyiz. Yine de, bu teknoloji programlarınızı daha iyi hale getirecek ve diğer dillere kıyasla daha az çaba gerektirecektir. Java teknolojisinin size şu konularda yardımcı olacağına inanıyoruz:

- **Hızlı Başlangıç:** Java programlama dili güçlü bir nesne yönelimli dil olmasına rağmen, özellikle C veya C++ bilen programcılar için öğrenmesi kolaydır.
- **Daha Az Kod Yazma:** Program metriklerinin (sınıf sayısı, metot sayısı vb.) karşılaştırmaları, Java programlama dilinde yazılmış bir programın, C++ ile yazılmış aynı programdan dört kat daha küçük olabileceğini gösteriyor.
- **Daha İyi Kod Yazma:** Java programlama dili, iyi kodlama uygulamalarını teşvik eder ve otomatik çöp toplama (garbage collection) özelliği, bellek sızıntılarını önlemenize yardımcı olur. Nesne yönelimli yapısı, JavaBeans™ bileşen mimarisi ve geniş, kolayca genişletilebilir API’si, mevcut ve test edilmiş kodları yeniden kullanmanızı sağlar ve daha az hata oluşmasına yol açar.
- **Programları Daha Hızlı Geliştirme:** Java programlama dili, C++’tan daha basittir ve bu nedenle geliştirme süreniz iki kat daha hızlı olabilir. Ayrıca programlarınız daha az kod satırı gerektirir.
- **Platform Bağımlılıklarından Kaçınma:** Diğer dillerde yazılmış kütüphaneleri kullanmaktan kaçınarak programınızı taşınabilir tutabilirsiniz.
- **Bir Kez Yaz, Her Yerde Çalıştır:** Java programlama dilinde yazılan uygulamalar, makineden bağımsız bayt kodlarına derlendiği için herhangi bir Java platformunda tutarlı bir şekilde çalışır.
- **Yazılımı Daha Kolay Dağıtma:** Java Web Start yazılımı ile kullanıcılar, uygulamalarınızı tek bir fare tıklamasıyla başlatabilir. Başlangıçtaki otomatik sürüm kontrolü, kullanıcıların her zaman yazılımınızın en güncel sürümüne sahip olmasını sağlar. Bir güncelleme mevcutsa, Java Web Start yazılımı kurulumu otomatik olarak günceller.