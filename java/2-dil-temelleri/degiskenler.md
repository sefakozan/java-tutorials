# Değişkenler ve İlkel Veri Tipleri

Bir nesne durumunu *alanlarda (fields)* saklar. Java programlama dilinde "alan" ve "değişken" terimleri sıklıkla birlikte kullanılır.

Java dili şu değişken türlerini tanımlar:

1. **Örnek Değişkenleri (Statik Olmayan Alanlar - Instance Variables):** `static` anahtar sözcüğü olmadan bildirilen alanlardır. Değerleri bir sınıfın her nesne örneğine özeldir.
2. **Sınıf Değişkenleri (Statik Alanlar - Class Variables):** `static` niteleyicisiyle bildirilen alanlardır. Sınıftan kaç nesne oluşturulursa oluşturulsun, bu değişkenin bellekte yalnızca bir kopyası bulunur.
3. **Yerel Değişkenler (Local Variables):** Bir metodun gövdesinde tanımlanan ve yalnızca o metodun çalışması sırasında geçerli olan geçici değişkenlerdir.
4. **Parametreler (Parameters):** Bir metodun imzasında yer alan ve metoda dışarıdan iletilen argümanları tutan değişkenlerdir.

---

## İlkel Veri Tipleri (Primitive Data Types)

Java programlama dili statik olarak türlenmiş (statically-typed) bir dildir; yani tüm değişkenler kullanılmadan önce bildirilmelidir. Java sekiz ilkel veri tipini destekler:

| Tür | Boyut | Min Değer | Max Değer | Varsayılan | Açıklama |
|---|---|---|---|---|---|
| `byte` | 8-bit | -128 | 127 | 0 | Küçük tam sayılar ve bellek tasarrufu için |
| `short` | 16-bit | -32,768 | 32,767 | 0 | Kısa tam sayılar |
| `int` | 32-bit | -2^31 | 2^31 - 1 | 0 | Standart tam sayı türü |
| `long` | 64-bit | -2^63 | 2^63 - 1 | 0L | Çok büyük tam sayılar |
| `float` | 32-bit | IEEE 754 | IEEE 754 | 0.0f | Tek duyarlıklı kayan noktalı sayı |
| `double` | 64-bit | IEEE 754 | IEEE 754 | 0.0d | Çift duyarlıklı ondalıklı sayı (varsayılan tercih) |
| `boolean` | 1-bit (mantıksal) | `false` | `true` | `false` | Mantıksal doğru/yanlış değerleri |
| `char` | 16-bit | `\u0000` (0) | `\uffff` (65,535) | `\u0000` | Tek bir 16-bit Unicode karakteri |

---

## Değişken Adlandırma Kuralları

- Değişken adları büyük/küçük harfe duyarlıdır.
- Bir değişken adı bir harf, dolar işareti `$` veya alt çizgi `_` ile başlayabilir (geleneksel olarak bir harf ile başlanmalıdır).
- Takip eden karakterler harf veya rakam olabilir.
- Değişken adlarında boşluk kullanılamaz ve Java anahtar sözcükleri (örneğin `class`, `public`, `int`) değişken adı olarak kullanılamaz.
- **CamelCase Kuralı:** Birden çok kelimeden oluşan değişken adlarında ilk harf küçük, sonraki kelimelerin ilk harfi büyük yazılır (örneğin: `gearRatio`, `currentSpeed`).
