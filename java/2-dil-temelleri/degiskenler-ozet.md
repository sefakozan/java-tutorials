# Değişkenlerin Özeti (Summary of Variables)

Java programlama dili hem "alan" (*field*) hem de "değişken" (*variable*) terimlerini kullanır:

- **Örnek Değişkenleri (Statik Olmayan Alanlar - Instance Variables / Non-Static Fields):** Bir sınıfın her bir nesne örneğine özgüdür.
- **Sınıf Değişkenleri (Statik Alanlar - Class Variables / Static Fields):** `static` anahtar sözcüğü ile bildirilir; kaç nesne oluşturulursa oluşturulsun tek bir kopyası vardır.
- **Yerel Değişkenler (Local Variables):** Bir metot içinde geçici durumu saklar; metodun dışından erişilemez ve varsayılan bir değer almaz.
- **Parametreler (Parameters):** Metot, kurucu veya istisna işleyicilerine bilgi aktaran değişkenlerdir.

---

## Özet Tablosu

| Konu | Temel Kural / Tanım |
| :--- | :--- |
| **İsimlendirme** | Harf ile başlar, büyük/küçük harfe duyarlıdır (*case-sensitive*), `lowerCamelCase` kullanılır. Sabitler `CONSTANT_CASE` ile yazılır. |
| **İlkel Tipler (*Primitive Types*)** | 8 ilkel veri türü: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`. |
| **Diziler (*Arrays*)** | Tek bir türden sabit sayıda değer tutan kapsayıcı nesnelerdir. Uzunlukları oluşturulduktan sonra sabittir. |
| **Varsayılan Değerler** | Alanlar otomatik varsayılan değer alır (`0`, `false`, `null`). Yerel değişkenler almaz; kullanılmadan önce başlatılmalıdır. |
| **Değişmez Değerler (*Literals*)** | Kaynak kodda doğrudan yazılan sabit değerlerdir. Sayısal literallerde alt çizgi (`_`) kullanılabilir. |
