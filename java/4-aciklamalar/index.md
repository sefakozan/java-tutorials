# Ders: Açıklamalar (Annotations)

Bir tür üstveri (*metadata*) biçimi olan **Açıklamalar (Annotations)**, bir program hakkında programın kendisinin parçası olmayan veriler sağlar. Açıklamaların, açıkladıkları kodun doğrudan çalışması üzerinde herhangi bir etkisi yoktur.

Açıklamaların birçok farklı kullanım alanı vardır; bunlardan en yaygın olanları şunlardır:

- **Derleyici için bilgiler (*Information for the compiler*):** Açıklamalar; derleyici tarafından hataları tespit etmek, kuralları zorunlu kılmak veya uyarıları bastırmak için kullanılabilir.
- **Derleme zamanı ve dağıtım zamanı işleme (*Compile-time and deployment-time processing*):** Yazılım geliştirme araçları; kaynak kod, XML yapılandırma dosyaları ve benzeri yapıları otomatik olarak üretmek için açıklama bilgilerini işleyebilir.
- **Çalışma zamanı işleme (*Runtime processing*):** Bazı açıklamalar, program çalışırken yansıma (*reflection*) mekanizmasıyla dinamik olarak incelenip değerlendirilmek üzere hazır bulundurulabilir.

Bu ders; açıklamaların nerelerde kullanılabileceğini, bir açıklamaya nasıl değer atanacağını, Java SE API'sinde hangi önceden tanımlanmış açıklama türlerinin bulunduğunu, daha güçlü tür denetimi sağlamak için tür açıklamalarının eklenebilir tür sistemleriyle (*pluggable type systems*) nasıl entegre edileceğini ve yinelenen açıklamaların (*repeating annotations*) nasıl tanımlanıp kullanılacağını ele almaktadır.

---

## Bu Dersteki Konular

### 1. [Açıklamaların Temelleri](java/4-aciklamalar/temeller.md)
Açıklamaların genel biçimi, parametreleri/öğeleri ve nerelerde kullanılabileceği.

### 2. [Açıklama Türü Tanımlama](java/4-aciklamalar/aciklama-turu-tanimlama.md)
Özel bir açıklama türünün (`@interface`) nasıl bildirileceği, varsayılan değerlerin nasıl atanacağı ve Javadoc entegrasyonu.

### 3. [Önceden Tanımlanmış Açıklama Türleri](java/4-aciklamalar/onceden-tanimlanmis-aciklamalar.md)
Java dilinde yerleşik olarak bulunan standart açıklamalar (`@Deprecated`, `@Override`, `@SuppressWarnings`, `@SafeVarargs`, `@FunctionalInterface`) ve üst açıklamalar (`@Retention`, `@Documented`, `@Target`, `@Inherited`, `@Repeatable`).

### 4. [Tür Açıklamaları ve Eklenebilir Tür Sistemleri](java/4-aciklamalar/tur-aciklamalari.md)
Java SE 8 ile gelen tür kullanımlarında açıklama desteği ve derleme zamanında hataları önleyen harici tür denetleyicileri (*Checker Framework*).

### 5. [Yinelenen Açıklamalar (Repeating Annotations)](java/4-aciklamalar/yinelenen-aciklamalar.md)
Aynı bildirime birden çok aynı türde açıklama ekleme, kapsayıcı (*container*) açıklama türü tanımlama ve Reflection API ile bu açıklamaları okuma.

### 6. [Sorular ve Alıştırmalar: Açıklamalar](java/4-aciklamalar/sorular-ve-alistirmalar.md)
Açıklamalar konusunu pekiştirmeye yönelik sorular, kod alıştırmaları ve ayrıntılı açıklamalı çözümler.
