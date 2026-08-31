# Ders: Yerel Ayarları Belirleme (Setting the Locale)

Bir **`Locale` (Yerel Ayar)** nesnesi; belirli bir coğrafi, politik veya kültürel bölgeyi temsil eder. Bir işlem yerel ayara duyarlı (*locale-sensitive*) bir bilgi gerektirdiğinde (tarih yazdırma veya sayı biçimlendirme gibi), `Locale` nesnesi kullanılır.

1. [**`Locale` Nesnesi Oluşturma**](#1-locale-nesnesi-oluşturma)
2. [**Dil ve Ülke Kodları (Standartlar)**](#2-dil-ve-ülke-kodları-standartlar)
3. [**Varsayılan Yerel Ayar**](#3-varsayılan-yerel-ayar)
---

# 1. `Locale` Nesnesi Oluşturma

Bir `Locale` nesnesi oluşturmanın dört yolu vardır:

### 1. `Locale.Builder` Kullanarak (Java SE 7+)
```java
Locale aLocale = new Locale.Builder().setLanguage("tr").setRegion("TR").build();
```

### 2. `Locale.forLanguageTag` Fabrika Metodu ile
IETF BCP 47 dil etiketlerini kullanır:
```java
Locale aLocale = Locale.forLanguageTag("tr-TR");
Locale usLocale = Locale.forLanguageTag("en-US");
```

### 3. Önceden Tanımlanmış Sabitler ile
`Locale` sınıfı yaygın yerel ayarlar için hazır sabitler sunar:
```java
Locale german = Locale.GERMAN;
Locale uk = Locale.UK;
```

### 4. Kurucu (Constructor) ile
```java
Locale trLocale = new Locale("tr", "TR");
```

---

# 2. Dil ve Ülke Kodları (Standartlar)

- **Dil Kodları:** ISO-639 standart iki harfli küçük harf kodlarıdır (`tr` = Türkçe, `en` = İngilizce, `de` = Almanca, `fr` = Fransızca).
- **Ülke Kodları:** ISO-3166 standart iki harfli büyük harf kodlarıdır (`TR` = Türkiye, `US` = Amerika Birleşik Devletleri, `GB` = Birleşik Krallık, `DE` = Almanya).

---

# 3. Varsayılan Yerel Ayar

Java programı başlatıldığında işletim sisteminin geçerli bölgesel ayarlarından bir varsayılan yerel ayar belirler:

```java
Locale defaultLocale = Locale.getDefault();
System.out.println("Varsayılan Dil: " + defaultLocale.getDisplayLanguage());
System.out.println("Varsayılan Ülke: " + defaultLocale.getDisplayCountry());
```
