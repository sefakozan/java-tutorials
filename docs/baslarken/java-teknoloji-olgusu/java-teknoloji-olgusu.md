# Lesson: The Java Technology Phenomenon
Talk about Java technology seems to be everywhere, but what exactly is it? The following sections explain how Java technology is both a programming language and a platform, and provide an overview of what this technology can do for you.

1. Java Teknolojisi Hakkında
2. What Can Java Technology Do?
3. How Will Java Technology Change My Life?

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

# 2. What Can Java Technology Do?
The general-purpose, high-level Java programming language is a powerful software platform. Every full implementation of the Java platform gives you the following features:

**Development Tools:** The development tools provide everything you'll need for compiling, running, monitoring, debugging, and documenting your applications. As a new developer, the main tools you'll be using are the javac compiler, the java launcher, and the javadoc documentation tool.

**Application Programming Interface (API):** The API provides the core functionality of the Java programming language. It offers a wide array of useful classes ready for use in your own applications. It spans everything from basic objects, to networking and security, to XML generation and database access, and more. The core API is very large; to get an overview of what it contains, consult the Java Platform Standard Edition 8 Documentation.

**Deployment Technologies:** The JDK software provides standard mechanisms such as the Java Web Start software and Java Plug-In software for deploying your applications to end users.

**User Interface Toolkits:** The JavaFX, Swing, and Java 2D toolkits make it possible to create sophisticated Graphical User Interfaces (GUIs).

**Integration Libraries:** Integration libraries such as the Java IDL API, JDBC API, Java Naming and Directory Interface (JNDI) API, Java RMI, and Java Remote Method Invocation over Internet Inter-ORB Protocol Technology (Java RMI-IIOP Technology) enable database access and manipulation of remote objects.

---

# 3. How Will Java Technology Change My Life?

We can't promise you fame, fortune, or even a job if you learn the Java programming language. Still, it is likely to make your programs better and requires less effort than other languages. We believe that Java technology will help you do the following:

Get started quickly: Although the Java programming language is a powerful object-oriented language, it's easy to learn, especially for programmers already familiar with C or C++.
Write less code: Comparisons of program metrics (class counts, method counts, and so on) suggest that a program written in the Java programming language can be four times smaller than the same program written in C++.
Write better code: The Java programming language encourages good coding practices, and automatic garbage collection helps you avoid memory leaks. Its object orientation, its JavaBeans™ component architecture, and its wide-ranging, easily extendible API let you reuse existing, tested code and introduce fewer bugs.
Develop programs more quickly: The Java programming language is simpler than C++, and as such, your development time could be up to twice as fast when writing in it. Your programs will also require fewer lines of code.
Avoid platform dependencies: You can keep your program portable by avoiding the use of libraries written in other languages.
Write once, run anywhere: Because applications written in the Java programming language are compiled into machine-independent bytecodes, they run consistently on any Java platform.
Distribute software more easily: With Java Web Start software, users will be able to launch your applications with a single click of the mouse. An automatic version check at startup ensures that users are always up to date with the latest version of your software. If an update is available, the Java Web Start software will automatically update their installation.