# Ders: Sayı, Tarih ve Mesaj Biçimlendirme (Formatting)

Farklı ülkeler sayıları, para birimlerini ve tarihleri farklı biçimlerde görüntüler. Java bu işlemler için standart biçimlendiriciler sağlar.

---

## 1. Sayı ve Para Birimi (`NumberFormat`)

```java
import java.text.NumberFormat;
import java.util.Locale;

public class NumberFormatDemo {
    public static void main(String[] args) {
        double amount = 9876543.21;

        NumberFormat nfTR = NumberFormat.getCurrencyInstance(new Locale("tr", "TR"));
        NumberFormat nfUS = NumberFormat.getCurrencyInstance(Locale.US);

        System.out.println("Türkiye: " + nfTR.format(amount)); // ₺9.876.543,21
        System.out.println("ABD: " + nfUS.format(amount));      // $9,876,543.21
    }
}
```

---

## 2. Dinamik Mesaj Formatlama (`MessageFormat`)

```java
import java.text.MessageFormat;
import java.util.Date;

String pattern = "Bugün {0,date,full} tarihinde saat {0,time,short} itibariyle {1} adet sipariş alındı.";
String result = MessageFormat.format(pattern, new Date(), 42);
System.out.println(result);
```
