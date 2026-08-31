# Ders: Sayı ve Tarih Biçimlendirme (Formatting Numbers, Dates, and Messages)

Farklı ülkeler ve diller; sayıları, para birimlerini, tarihleri ve metin kalıplarını farklı şekillerde biçimlendirir. Java'nın `java.text` paketi yerel ayarlara duyarlı güçlü biçimlendirme sınıfları sağlar.

1. [**Sayı ve Para Birimi Biçimlendirme (`NumberFormat`)**](#1-sayı-ve-para-birimi-biçimlendirme-numberformat)
2. [**Tarih ve Saat Biçimlendirme (`DateFormat`)**](#2-tarih-ve-saat-biçimlendirme-dateformat)
3. [**Dinamik Mesaj Biçimlendirme (`MessageFormat`)**](#3-dinamik-mesaj-biçimlendirme-messageformat)
4. [**Çoğul Yönetimi (`ChoiceFormat`)**](#4-çoğul-yönetimi-choiceformat)
---

# 1. Sayı ve Para Birimi Biçimlendirme (`NumberFormat`)

`NumberFormat` sınıfı, sayıları ve para birimlerini geçerli yerel ayara göre otomatik olarak biçimlendirir:

```java
import java.text.NumberFormat;
import java.util.Locale;

public class NumberFormatDemo {
    public static void main(String[] args) {
        double amount = 123456.78;

        // Türkiye Yerel Ayarı
        NumberFormat nfTR = NumberFormat.getCurrencyInstance(new Locale("tr", "TR"));
        System.out.println("Türkiye: " + nfTR.format(amount)); // 123.456,78 ₺

        // ABD Yerel Ayarı
        NumberFormat nfUS = NumberFormat.getCurrencyInstance(Locale.US);
        System.out.println("ABD: " + nfUS.format(amount)); // $123,456.78

        // Almanya Yerel Ayarı
        NumberFormat nfDE = NumberFormat.getCurrencyInstance(Locale.GERMANY);
        System.out.println("Almanya: " + nfDE.format(amount)); // 123.456,78 €
    }
}
```

---

# 2. Tarih ve Saat Biçimlendirme (`DateFormat`)

`DateFormat` sınıfı tarih ve saatleri yerel alışkanlıklara göre biçimlendirir:

```java
import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

public class DateFormatDemo {
    public static void main(String[] args) {
        Date today = new Date();

        DateFormat dfTR = DateFormat.getDateInstance(DateFormat.FULL, new Locale("tr", "TR"));
        System.out.println("Türkiye: " + dfTR.format(today));

        DateFormat dfUS = DateFormat.getDateInstance(DateFormat.FULL, Locale.US);
        System.out.println("ABD: " + dfUS.format(today));
    }
}
```

---

# 3. Dinamik Mesaj Biçimlendirme (`MessageFormat`)

Metin içinde değişken parametrelerin yerleştirilmesi gerektiğinde `MessageFormat` kullanılır:

```java
import java.text.MessageFormat;
import java.util.Date;

public class MessageFormatDemo {
    public static void main(String[] args) {
        String pattern = "Tarih: {1,date,long}, Disk alanı {0} dosya tarafından kullanılıyor.";
        MessageFormat formatter = new MessageFormat(pattern);

        Object[] arguments = { Integer.valueOf(42), new Date() };
        String output = formatter.format(arguments);
        System.out.println(output);
    }
}
```

---

# 4. Çoğul Yönetimi (`ChoiceFormat`)

Sayıya bağlı olarak tekil/çoğul ifadelerini dinamik olarak seçmek için kullanılır:

```java
import java.text.ChoiceFormat;
import java.text.MessageFormat;

double[] fileLimits = {0, 1, 2};
String[] fileStrings = {"dosya yok", "bir dosya", "{0} dosya"};
ChoiceFormat choiceForm = new ChoiceFormat(fileLimits, fileStrings);

MessageFormat messageForm = new MessageFormat("Dizinde {0} bulundu.");
messageForm.setFormatByArgumentIndex(0, choiceForm);

System.out.println(messageForm.format(new Object[]{0})); // "Dizinde dosya yok bulundu."
System.out.println(messageForm.format(new Object[]{1})); // "Dizinde bir dosya bulundu."
System.out.println(messageForm.format(new Object[]{5})); // "Dizinde 5 dosya bulundu."
```
