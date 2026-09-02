# Kılavuz: Temel Java Sınıfları

Bu kılavuz, her Java geliştiricisinin uzmanlaşması gereken temel platform bileşenlerini kapsamaktadır: istisnalar (exceptions) ile hata yönetimi, temel Giriş/Çıkış (I/O & NIO.2) işlemleri, eşzamanlılık (concurrency) ve çoklu iş parçacığı (multi-threading), düzenli ifadeler (regex) ve platform ortamı yapılandırması.

---

## Bu Kılavuzdaki Dersler

### 1. [İstisnalar (Exceptions)](essential/1-istisnalar/index.md)
Hata yakalama ve yönetme (`try-catch-finally`, `try-with-resources`), denetlenen ve denetlenmeyen istisnalar (*checked vs unchecked*), özel istisnalar oluşturma ve istisna zincirleme (*chained exceptions*).

### 2. [Temel Giriş/Çıkış (Basic I/O & NIO.2)](essential/2-temel-io/index.md)
Giriş/Çıkış akışları (byte, karakter ve tamponlu akışlar), `Scanner` ile tarama, nesne serileştirme ve modern `java.nio.file` (NIO.2) dosya/dizin işlemleri.

### 3. [Eşzamanlılık (Concurrency)](essential/3-eszamanlilik/index.md)
İş parçacıkları (*threads*), `Runnable` arayüzü, senkronizasyon, atomik erişim, kilitlenmeler (*deadlocks*), `Executor` çerçevesi ve eşzamanlı veri koleksiyonları.

### 4. [Düzenli İfadeler (Regular Expressions - Regex)](essential/4-regex/index.md)
`java.util.regex` paketi, desen eşleştirme (`Pattern` & `Matcher`), karakter sınıfları, niceleyiciler (*quantifiers*) ve yakalama grupları (*capturing groups*).

### 5. [Platform Ortamı (The Platform Environment)](essential/5-platform-ortami/index.md)
Sistem özellikleri (`System.getProperties`), ortam değişkenleri (`System.getenv`), `Properties` yapılandırma dosyaları ve sistem yardımcı programları.
