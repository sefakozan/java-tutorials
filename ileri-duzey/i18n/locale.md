# Ders: Yerel Ayarları Belirleme (Setting the Locale)

**`Locale`** nesnesi, yazılımın hedeflediği coğrafi veya kültürel bölgeyi tanımlar.

---

## 1. Locale Oluşturma

```java
import java.util.Locale;

// Dil (ISO 639) ve Ülke (ISO 3166) kodları
Locale tr = new Locale("tr", "TR");
Locale us = Locale.US;
Locale de = Locale.GERMANY;
Locale jp = Locale.JAPAN;
```

---

## 2. Sistem Varsayılanını Okuma ve Değiştirme

```java
Locale defaultLocale = Locale.getDefault();
System.out.println("Geçerli Dil: " + defaultLocale.getDisplayLanguage());
System.out.println("Geçerli Ülke: " + defaultLocale.getDisplayCountry());

// Çalışma zamanında varsayılanı değiştirme
Locale.setDefault(Locale.FRENCH);
```
