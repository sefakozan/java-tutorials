# Ders: Paket (Package) Nedir?

Bir **paket (package)**, bir dizi ilişkili sınıfı ve arayüzü mantıksal bir düzen içinde organize eden bir **ad alanıdır (namespace)**. Kavramsal olarak paketleri bilgisayarınızdaki farklı klasörlere benzetebilirsiniz. HTML sayfalarını bir klasörde, görselleri başka bir klasörde ve betikleri ya da uygulamaları bir diğerinde tutabilirsiniz. Java programlama dilinde yazılmış yazılımlar yüzlerce veya *binlerce* ayrı sınıftan oluşabildiğinden, ilişkili sınıf ve arayüzleri paketlere yerleştirerek her şeyi düzenli tutmak oldukça mantıklıdır.

Java platformu, kendi uygulamalarınızda kullanabileceğiniz muazzam bir sınıf kütüphanesi (bir paketler kümesi) sunar. Bu kütüphane "Uygulama Programlama Arayüzü (Application Programming Interface)" veya kısaca **API** olarak bilinir. API paketleri, genel amaçlı programlama ile en sık ilişkilendirilen görevleri temsil eder. Örneğin:
- Bir `String` nesnesi, karakter dizgileri için durum ve davranış içerir;
- Bir `File` nesnesi, bir programcının dosya sistemindeki bir dosyayı kolayca oluşturmasına, silmesine, incelemesine, karşılaştırmasına veya değiştirmesine olanak tanır;
- Bir `Socket` nesnesi, ağ soketlerinin oluşturulmasını ve kullanılmasını sağlar;
- Çeşitli GUI nesneleri, düğmeleri, onay kutularını ve grafiksel kullanıcı arayüzleriyle ilgili diğer her şeyi kontrol eder.

Seçebileceğiniz kelimenin tam anlamıyla binlerce sınıf vardır. Bu sayede bir programcı olarak, uygulamanızı çalıştırmak için gereken alt yapıdan ziyade uygulamanızın kendi özel tasarımına odaklanabilirsiniz.

[Java Platform API Spesifikasyonu](https://docs.oracle.com/javase/8/docs/api/index.html), Java SE platformu tarafından sağlanan tüm paketler, arayüzler, sınıflar, alanlar ve metotlar için eksiksiz bir liste içerir. Bu sayfayı tarayıcınızda açıp yer işaretlerine eklemenizi öneririz. Bir programcı olarak bu dokümantasyon, en önemli başvuru kaynağınız olacaktır.