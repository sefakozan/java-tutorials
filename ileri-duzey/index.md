# Özel Kılavuzlar ve Dersler

Bu kılavuz, Java platformunun ileri düzey yeteneklerini, kurumsal entegrasyon kütüphanelerini, sistem yönetimi ve özelleştirilmiş API'lerini kapsamaktadır.

---

## Bu Kılavuzdaki Özel Konular ve Dersler

### 1. [Özel Ağ Programlama (Custom Networking)](ileri-duzey/networking/index.md)
Ağ uygulamaları geliştirme, URL nesneleriyle web kaynaklarına erişim, TCP soketleri ile istemci-sunucu iletişimi ve UDP datagram paketleri ile veri iletimi.
- [URL'ler ile Çalışma](ileri-duzey/networking/urls.md)
- [Soketler Hakkında Her Şey (Sockets)](ileri-duzey/networking/sockets.md)
- [Datagramlar Hakkında Her Şey (Datagrams)](ileri-duzey/networking/datagrams.md)

### 2. [Eklenti Mekanizması (The Extension Mechanism)](ileri-duzey/ext/index.md)
Java platformunu standart uzantılarla genişletme, kurulu ve indirilebilir eklentiler (*installed and download extensions*) ve eklenti güvenlik politikaları.
- [Kurulu Eklentiler](ileri-duzey/ext/installed.md)
- [İndirilebilir Eklentiler](ileri-duzey/ext/download.md)
- [Eklenti Güvenliği](ileri-duzey/ext/security.md)

### 3. [Tam Ekran Özel Mod API'si (Full-Screen Exclusive Mode API)](ileri-duzey/fullscreen/index.md)
Yüksek performanslı grafik ve oyun uygulamaları için donanım hızlandırmalı tam ekran modları, tampon stratejileri (*buffer strategy*) ve ekran çözünürlüğü değiştirme.
- [Tampon Stratejisi ve Sayfa Çevirme (BufferStrategy)](ileri-duzey/fullscreen/bufferstrategy.md)
- [Ekran Modunu Değiştirme (DisplayMode)](ileri-duzey/fullscreen/displaymode.md)

### 4. [Genel Türler - İleri Düzey (Generics)](ileri-duzey/generics/index.md)
Gelişmiş generics kavramları, joker karakterler (*wildcards*), tür silme (*type erasure*) mekanizması ve generics kullanımındaki kısıtlamalar.
- [Joker Karakterler (Wildcards)](ileri-duzey/generics/wildcards.md)
- [Tür Silme (Type Erasure)](ileri-duzey/generics/erasure.md)
- [Generics Kısıtlamaları (Restrictions)](ileri-duzey/generics/restrictions.md)

### 5. [Uluslararasılaştırma (Internationalization - i18n)](ileri-duzey/i18n/index.md)
Yazılımları farklı dil, bölge ve kültürlere uyarlama, `Locale` nesneleri, `ResourceBundle` ile yerelleştirilmiş metin yönetimi ve sayı/tarih biçimlendirme.
- [Yerel Ayarları Belirleme (Locale)](ileri-duzey/i18n/locale.md)
- [ResourceBundle ile Ayrıştırma](ileri-duzey/i18n/resourcebundle.md)
- [Sayı ve Tarih Biçimlendirme](ileri-duzey/i18n/format.md)

### 6. [JavaBeans Bileşen Teknolojisi](ileri-duzey/javabeans/index.md)
Yeniden kullanılabilir yazılım bileşenleri geliştirme, özellikler (*properties*), erişimci/değiştirici metotlar (*getters/setters*), bağlı (*bound*) ve kısıtlı (*constrained*) özellikler.
- [JavaBean Özellikleri (Properties)](ileri-duzey/javabeans/properties.md)
- [Bağlı ve Kısıtlı Özellikler](ileri-duzey/javabeans/bound.md)

### 7. [JAXB ile XML Bağlama (Java Architecture for XML Binding)](ileri-duzey/jaxb/index.md)
Java nesneleri ile XML belgeleri arasında otomatik eşleme, XML şeması (*XSD*) bağlama, serileştirme (*marshaling*) ve ters serileştirme (*unmarshaling*).
- [XML Şeması Bağlama](ileri-duzey/jaxb/binding.md)
- [Marshal ve Unmarshal İşlemleri](ileri-duzey/jaxb/marshal.md)

### 8. [JAXP ile XML İşleme (Java API for XML Processing)](ileri-duzey/jaxp/index.md)
XML belgelerini işleme yöntemleri, DOM (*Document Object Model*) ağaç yapısı, SAX (*Simple API for XML*) olay tabanlı ayrıştırma ve XSLT dönüşümleri.
- [DOM Ayrıştırıcı](ileri-duzey/jaxp/dom.md)
- [SAX Ayrıştırıcı](ileri-duzey/jaxp/sax.md)
- [XSLT Dönüşümleri](ileri-duzey/jaxp/xslt.md)

### 9. [JDBC Veritabanı Erişimi (Java Database Connectivity)](ileri-duzey/jdbc/index.md)
İlişkisel veritabanlarına bağlanma, SQL sorguları çalıştırma, `PreparedStatement`, `ResultSet` yönetimi ve hareket yönetimi (*transactions*).
- [Bağlantı ve SQL İşleme](ileri-duzey/jdbc/basics.md)
- [PreparedStatements & ResultSets](ileri-duzey/jdbc/preparedstatement.md)
- [İşlem Yönetimi (Transactions)](ileri-duzey/jdbc/transactions.md)

### 10. [JMX - Java Yönetim Uzantıları (Java Management Extensions)](ileri-duzey/jmx/index.md)
Uygulama, cihaz ve hizmetlerin kaynaklarını izleme ve yönetme, Standart MBean'ler, MXBean'ler, bildirimler ve JConsole izleme aracı.
- [Standart MBean ve MXBean](ileri-duzey/jmx/mbeans.md)
- [Bildirimler ve JConsole ile İzleme](ileri-duzey/jmx/notifications.md)

### 11. [JNDI - İsim ve Dizin Arayüzü (Java Naming and Directory Interface)](ileri-duzey/jndi/index.md)
Çeşitli adlandırma ve dizin hizmetlerine (DNS, LDAP vb.) erişim sağlayan birleşik arayüz, isim bağlama işlemleri ve dizin arama.
- [İsimlendirme İşlemleri (Naming)](ileri-duzey/jndi/naming.md)
- [Dizin İşlemleri ve LDAP (Directory)](ileri-duzey/jndi/directory.md)

### 12. [Reflection - Yansıma API'si](ileri-duzey/reflection/index.md)
Çalışma zamanında sınıfları, arayüzleri, alanları ve metotları dinamik olarak inceleme ve çağırma yeteneği.
- [Sınıfları İnceleme (Classes)](ileri-duzey/reflection/classes.md)
- [Sınıf Üyeleri (Members)](ileri-duzey/reflection/members.md)
- [Dinamik Metot Çağırma (Dynamic Invocation)](ileri-duzey/reflection/invoke.md)

### 13. [RMI - Uzaktan Metot Çağırma (Remote Method Invocation)](ileri-duzey/rmi/index.md)
Farklı Java Sanal Makinelerinde çalışan nesnelerin birbirlerinin metotlarını uzaktan çağırabilmesini sağlayan dağıtık nesne mimarisi.
- [RMI Sunucusu Yazma](ileri-duzey/rmi/server.md)
- [RMI İstemcisi Yazma](ileri-duzey/rmi/client.md)

### 14. [Güvenlik (Security)](ileri-duzey/security/index.md)
Java platformunun güvenlik mimarisi, Java Kriptografi Mimarisi (JCA/JCE), dijital imzalar, izinler (*permissions*) ve güvenlik politikaları (*policy files*).
- [Kriptografi (JCA/JCE)](ileri-duzey/security/jca.md)
- [İzinler ve Güvenlik Politikaları (Policy)](ileri-duzey/security/policy.md)

### 15. [Sockets Direct Protokolü (SDP)](ileri-duzey/sdp/index.md)
Yüksek hızlı InfiniBand ağ kumaşları üzerinde doğrudan donanım hızlandırmalı soket iletişimi sağlayan protokolün yapılandırılması.
- [SDP Yapılandırması (sdp.conf)](ileri-duzey/sdp/config.md)

### 16. [Ses API'si (Java Sound API)](ileri-duzey/sound/index.md)
Ses verilerinin kaydı, işlenmesi ve çalınması, örneklenmiş ses (*sampled audio*) ve MIDI müzik sentezleme mimarisi.
- [Örneklenmiş Ses (Sampled Audio)](ileri-duzey/sound/sampled.md)
- [MIDI Mimarisi](ileri-duzey/sound/midi.md)

### 17. [2B Grafikler (2D Graphics)](ileri-duzey/2d/index.md)
İki boyutlu şekiller, metinler ve görüntüleri gelişmiş görsel efektlerle işlemek ve çizmek için `Graphics2D` API'si.
- [Graphics2D ile Çizim](ileri-duzey/2d/graphics2d.md)
- [Şekiller ve Metin (Shapes & Text)](ileri-duzey/2d/shapes.md)
- [Görseller ve BufferedImage](ileri-duzey/2d/images.md)
