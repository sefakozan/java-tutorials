# Ders: Paket Nedir? (What Is a Package?)

Bir **paket (package)**, birbiriyle ilişkili bir grup sınıfı ve arayüzü düzenleyen bir ad alanıdır (namespace).

1. [**Paket Kavramı ve Klasör Benzetimi**](#1.-paket-kavramı-ve-klasör-benzetimi)
2. [**Paketlerin Sağladığı Faydalar**](#2.-paketlerin-sağladığı-faydalar)
3. [**Java Platformu API Paketleri**](#3.-java-platformu-api-paketleri)
---

# 1. Paket Kavramı ve Klasör Benzetimi

Kavramsal olarak paketleri bilgisayarınızdaki klasörlere benzetebilirsiniz: HTML sayfalarını bir klasörde, resimleri başka bir klasörde tutarsınız. Java platformunda da yüzlerce ve binlerce sınıf paketler halinde düzenlenir.

---

# 2. Paketlerin Sağladığı Faydalar

- **İsim Çakışmalarını Önleme:** Farklı paketlerde aynı ada sahip sınıflar bulunabilir (örneğin `graphics.Rectangle` ve `geometry.Rectangle`).
- **Erişim Koruması:** Paket düzeyinde erişim kontrolü sağlayarak (`package-private`) sınıfların yalnızca paket içi sınıflar tarafından kullanılmasını sağlayabilirsiniz.
- **Kolay Bulunabilirlik:** İlgili sınıflar ve arayüzler mantıksal bir arada tutulur.

---

# 3. Java Platformu API Paketleri

Java platformu, zengin bir standart sınıf kütüphanesini (API) paketler halinde sunar:

- `java.lang`: Temel dil sınıfları (`String`, `Math`, `System` vb. - otomatik olarak dahil edilir).
- `java.io`: Giriş ve çıkış (I/O) sınıfları.
- `java.util`: Koleksiyonlar, tarih-saat ve yardımcı araç sınıfları.
- `java.net`: Ağ iletişimi ve soket sınıfları.
