# Ders: NetBeans IDE için "Hello World!"

İlk uygulamanızı yazmanın zamanı geldi! Bu ayrıntılı talimatlar, NetBeans IDE kullanıcıları içindir. NetBeans IDE, Java platformunda çalışır; bu da, JDK’nın mevcut olduğu herhangi bir işletim sisteminde kullanabileceğiniz anlamına gelir. Bu işletim sistemleri arasında Microsoft Windows, Solaris OS, Linux ve Mac OS X yer alır.

1. [**Kontrol Listesi**](#1.-kontrol-listesi)
2. [**Adım 1: İlk Uygulamanızı Oluşturma**](#2.-adım-1:-ilk-uygulamanızı-oluşturma)
3. [**Platform Listesine JDK Ekleme (Gerekirse)**](#3.-platform-listesine-jdk-ekleme-(gerekirse))
4. [**Adım 2: Oluşturulan Kaynak Dosyaya Kod Ekleme**](#4.-adım-2:-oluşturulan-kaynak-dosyaya-kod-ekleme)
5. [**Adım 3: Kaynak Dosyayı .class Dosyasına Derleme**](#5.-adım-3:-kaynak-dosyayı-.class-dosyasına-derleme)
6. [**Adım 4: Programı Çalıştırma**](#6.-adım-4:-programı-çalıştırma)
7. [**NetBeans IDE ile Öğreticiye Devam Etme**](#7.-netbeans-ide-ile-öğreticiye-devam-etme)
---

# 1. Kontrol Listesi

İlk programınızı yazmak için şunlara ihtiyacınız olacak:

- <b>Java SE Geliştirme Kiti (bu örnekte JDK 7 seçilmiştir)</b>
  - Microsoft Windows, Solaris işletim sistemi ve Linux için: [Java SE İndirme Sayfası](https://www.oracle.com/java/technologies/downloads/archive/)
- <b>The NetBeans IDE</b>
  - Tüm platformlar için: [NetBeans IDE İndirme Sayfası](https://netbeans.apache.org/download/)

---

# 2. İlk Uygulamanızı Oluşturma

İlk uygulamanız olan HelloWorldApp, sadece “Hello World!” selamlamasını gösterecektir. Bu programı oluşturmak için şunları yapacaksınız:

- <b>Bir IDE projesi oluşturun</b>   
Bir IDE projesi oluşturduğunuzda, uygulamalarınızı derleyip çalıştırabileceğiniz bir ortam oluşturmuş olursunuz. IDE projelerini kullanmak, genellikle komut satırında geliştirme yaparken karşılaşılan yapılandırma sorunlarını ortadan kaldırır. Uygulamanızı, IDE içindeki tek bir menü öğesini seçerek derleyebilir veya çalıştırabilirsiniz.

- <b>Oluşturulan kaynak dosyasına kod ekleyin</b>  
Bir kaynak dosyası, sizin ve diğer programcıların anlayabileceği, Java programlama dilinde yazılmış kod içerir. Bir IDE projesi oluşturma sürecinin bir parçası olarak, bir kaynak dosyası şablonu otomatik olarak oluşturulacaktır. Ardından, “Hello World!” mesajını eklemek için bu kaynak dosyasını düzenleyeceksiniz.

- <b>Kaynak dosyasını bir .class dosyasına derleyin</b>  
IDE, Java programlama dili derleyicisini (javac) çalıştırır; bu derleyici, kaynak dosyanızı alır ve içindeki metni Java sanal makinesinin anlayabileceği komutlara dönüştürür. Bu dosyada yer alan komutlara bayt kodu denir.

- <b>Programı çalıştırın</b>  
IDE, uygulamanızı çalıştırmak için Java sanal makinesini kullanan Java uygulama başlatıcı aracını (java) çalıştırır.

<b>Bir IDE Projesi Oluşturun</b>  
Bir IDE projesi oluşturmak için:

1. NetBeans IDE'yi başlatın.
  - Microsoft Windows sistemlerinde, Başlat menüsündeki NetBeans IDE öğesini kullanabilirsiniz.
  - Solaris işletim sistemi ve Linux sistemlerinde, IDE'nin bin dizinine gidip ./netbeans komutunu yazarak IDE başlatma betiğini çalıştırırsınız.
  - Mac OS X sistemlerinde, NetBeans IDE uygulama simgesine tıklayın.

2. NetBeans IDE'de <b>File > New Project</b> seçeneğini seçin.

<figure style="text-align: center;">
  <img src="_media/figures/nb-javatutorial-newprojectmenu.png" alt="NetBeans New Project Menüsü" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">NetBeans IDE File > New Project menüsü.</figcaption>
</figure>

3. <b>New Project</b> sihirbazında, <b>Java</b> kategorisini genişletin ve aşağıdaki şekilde gösterildiği gibi <b>Java Application</b> seçin:

<figure style="text-align: center;">
  <img src="_media/figures/nb-javatutorial-project1.png" alt="Proje Kategorisi Seçimi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Java Application proje türünün seçimi.</figcaption>
</figure>

4. Sihirbazın <b>Name and Location</b> sayfasında, aşağıdaki şekilde (aşağıdaki şekilde gösterildiği gibi) şu işlemleri gerçekleştirin:
  - <b>Project Name</b> alanına “Hello World App” yazın.
  - <b>Create Main Class</b> alanına helloworldapp.HelloWorldApp yazın.

<figure style="text-align: center;">
  <img src="_media/figures/nb-javatutorial-project2.png" alt="Proje Adı ve Ana Sınıf Belirleme" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">NetBeans IDE, New Project sihirbazı, Name and Location sayfası.</figcaption>
</figure>

5. Finish'e tıklayın.

Proje, IDE'de oluşturuldu ve açıldı. Aşağıdaki bileşenleri görmelisiniz:

- Proje bileşenlerinin ağaç yapısını içeren <b>Projects</b> penceresi; bu bileşenler arasında kaynak dosyalar, kodunuzun bağlı olduğu kütüphaneler vb. yer alır.
- <b>HelloWorldApp.java</b> adlı dosyanın açık olduğu <b>Source Editor (Kaynak Düzenleyici)</b> penceresi.
- Seçili sınıf içindeki öğeler arasında hızlıca gezinmek için kullanabileceğiniz <b>Navigator</b> penceresi.

<figure style="text-align: center;">
  <img src="_media/figures/nb-javatutorial-project-opened.png" alt="Açılan NetBeans Projesi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">HelloWorldApp projesi açık haldeyken NetBeans IDE.</figcaption>
</figure>

---

# 3. Platform Listesine JDK Ekleme

IDE’nin kullanılabilir platformlar listesine JDK 8’i eklemek gerekebilir. Bunu yapmak için, aşağıdaki şekilde gösterildiği gibi <b>Tools > Java Platforms</b> seçeneğini seçin:

<figure style="text-align: center;">
  <img src="_media/figures/nb-javatutorial-toolsmenu.png" alt="NetBeans IDE Tools Menüsü" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Araçlar menüsünden Java Platform Manager'i seçme</figcaption>
</figure>

Yüklü platformlar listesinde JDK 8'i (1.8 veya 1.8.0 olarak görünebilir) görmüyorsanız, “Platform Ekle” seçeneğine tıklayın, JDK 8 kurulum dizinine gidin ve “Bitir” seçeneğine tıklayın. Artık yeni eklenen bu platformu görmelisiniz:

<figure style="text-align: center;">
  <img src="_media/figures/nb-javatutorial-addplatform.png" alt="NetBeans IDE Add Platform" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Java Platform Manager</figcaption>
</figure>

Bu JDK'yı tüm projeler için varsayılan olarak ayarlamak için, komut satırında --jdkhome seçeneğiyle IDE'yi çalıştırabilir veya INSTALLATION_DIRECTORY/etc/netbeans.conf dosyanızdaki netbeans_j2sdkhome özelliğine JDK'nın yolunu girebilirsiniz.</br>  
Bu JDK’yı yalnızca mevcut proje için belirlemek üzere, Projeler bölmesinde <b>Hello World App</b> öğesini seçin, <b>Dosya > Proje Özellikleri (Hello World App)</b> seçeneğini belirleyin, <b>Kütüphaneler</b>’e tıklayın ve ardından <b>Java Platformu</b> açılır menüsünden <b>JDK 1.8</b> seçin. Aşağıdakine benzer bir ekran görmelisiniz:

<figure style="text-align: center;">
  <img src="_media/figures/nb-javatutorial-project-properties.png" alt="NetBeans IDE Project Properties" style="max-width: 100%; height: auto;">
</figure>
IDE artık JDK 8 için yapılandırılmıştır.

---

# 4. Oluşturulan Kaynak Dosyasına Kod Ekleme

Bu projeyi oluştururken, <b>New Project</b> sihirbazında <b>Create Main Class</b> onay kutusunu işaretli bırakmıştınız. Bu nedenle IDE, sizin için bir iskelet sınıf oluşturmuştur. Aşağıdaki satırı değiştirerek iskelet koduna “Hello World!” mesajını ekleyebilirsiniz:

```java
// TODO code application logic here
```

şu satırla:

```java
System.out.println("Hello World!"); // Metni ekrana yazdırır.
```

İsterseniz, oluşturulan bu dört satırlık kodu şu şekilde değiştirebilirsiniz:

```java
/**
 *
 * @author
 */
```
şu satırla:  

```java
/**
 * The HelloWorldApp class implements an application that
 * simply prints "Hello World!" to standard output.
 */
```
Bu dört satır bir kod yorumu olup, programın çalışmasını etkilemez. Bu öğreticinin sonraki bölümlerinde kod yorumlarının kullanımı ve biçimi açıklanmaktadır.

> **Yazarken Dikkatli Olun:** Tüm kodları, komutları ve dosya adlarını tam olarak gösterildiği gibi yazın. Hem derleyici `javac` hem de çalıştırıcı `java` büyük/küçük harfe duyarlıdır; bu nedenle harfleri tutarlı bir şekilde büyük yazmalısınız.</br>  
> HelloWorldApp, helloworldapp ile aynı şey değildir.

Değişikliklerinizi **File > Save** seçeneği ile kaydedin.

Dosya aşağıdakine benzer bir şekilde görünmelidir:

```java
/*
 * Bu şablonu değiştirmek için Tools > Templates seçeneğini seçin ve 
 * şablonu düzenleyicide açın.
 */

package helloworldapp;

/**
 * HelloWorldApp sınıfı, standart çıktıya sadece “Hello World!” yazdıran  
 * bir uygulamayı hayata geçirir.
 */
public class HelloWorldApp {

   
    /**
     * @param args komut satırı argümanları
     */
    public static void main(String[] args) {
        System.out.println("Hello World!"); // Metni ekrana yazdırır.
    }

}
```

---

# 5. Kaynak Dosyayı .class Dosyasına Derleme

Kaynak dosyanızı derlemek için IDE ana menüsünden **Run > Build Project (Hello World App)** seçeneğini seçin (veya `F11` tuşuna basın).

IDE'nin alt kısmında **Output** (Çıktı) penceresi açılır:

- Derleme çıktısı **BUILD SUCCESSFUL** ifadesiyle tamamlanıyorsa tebrikler! Programınızı başarıyla derlediniz.
- Derleme çıktısı **BUILD FAILED** ifadesiyle tamamlanıyorsa kodunuzda bir sözdizimi hatası vardır. Hatalar Output penceresinde köprü (hyperlink) olarak raporlanır. Hatanın kaynağına gitmek için bu köprüye çift tıklayabilir, hatayı düzelttikten sonra tekrar **Run > Build Project** seçeneğini çalıştırabilirsiniz.

Projeyi derlediğinizde `HelloWorldApp.class` bayt kod dosyası üretilir. Üretilen dosyayı **Files** penceresini açıp `HelloWorldApp/build/classes/helloworldapp` düğümünü genişleterek görebilirsiniz.

---

# 6. Programı Çalıştırma

IDE menü çubuğundan **Run > Run Main Project** seçeneğini seçin (veya yeşil **Play** butonuna tıklayın ya da `F6` tuşuna basın).

Program **Output** penceresine `Hello World!` yazdırır:

<figure style="text-align: center;">
  <img src="_media/figures/nb-javatutorial-project-run.png" alt="Program Çıktısı" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Output penceresinde Hello World! çıktısı.</figcaption>
</figure>

Tebrikler! İlk Java uygulamanızı NetBeans IDE ile başarıyla oluşturdunuz ve çalıştırdınız.

---

# 7. NetBeans IDE ile Öğreticiye Devam Etme

Öğreticinin sonraki sayfaları bu basit uygulamadaki kodu ayrıntılı olarak açıklayacaktır. Ardından gelen dersler dilin temel özelliklerine daha derinlemesine iner. Öğreticinin geri kalanı NetBeans IDE kullanımı hakkında özel talimatlar vermese de, örnek kodları yazmak ve çalıştırmak için IDE'yi kolayca kullanabilirsiniz. İşte IDE kullanımıyla ilgili bazı yararlı ipuçları:

- **Yeni Dosya Ekleme:** Bir proje oluşturduktan sonra **File > New File** sihirbazını kullanarak projeye yeni dosyalar (örneğin boş bir Java dosyası şablonu) ekleyebilirsiniz.
- **Tekil Dosyaları Derleme ve Çalıştırma:** Tüm proje yerine tek bir dosyayı derlemek ve çalıştırmak için **Compile File** (`F9`) ve **Run File** (`Shift+F6`) komutlarını kullanabilirsiniz. **Run Main Project** komutu ana proje ile ilişkilendirilmiş sınıfı çalıştırır.
- **Ayrı Projeler Oluşturma:** Birden fazla kaynak dosya içeren örnek uygulamalar için ayrı IDE projeleri oluşturabilirsiniz.
- **Otomatik Kod Tamamlama (Code Completion):** Kod yazarken otomatik tamamlama kutusu açılabilir. İsterseniz önerilen ifadelerden birini seçebilir veya yazmaya devam edebilirsiniz. Bu pencerenin otomatik açılmasını istemiyorsanız **Tools > Options > Editor > Code Completion** sekmesinden **Auto Popup Completion Window** seçeneğini kapatabilirsiniz.
- **Yeniden Yapılandırma (Refactoring):** Bir kaynak dosyanın veya sınıfın adını değiştirmek için IDE menüsünden **Refactor > Rename** seçeneğini kullanın. IDE, sınıf adını ve ona başvuran tüm kodları projenin genelinde otomatik olarak günceller.
