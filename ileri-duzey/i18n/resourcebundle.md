# Ders: Yerel Verileri Kaynak Dosyalarında Ayrıştırma (ResourceBundle)

**`ResourceBundle`**, uygulamada kullanılan metin, etiket ve mesajları kaynak koddan bağımsız `.properties` dosyalarında tutmayı sağlar.

---

## 1. Kaynak Dosyalarını Tanımlama

- `MessagesBundle_tr_TR.properties`:
  ```properties
  gsl.welcome = Java Tutorials'a Hoş Geldiniz!
  gsl.farewell = Güle güle!
  ```
- `MessagesBundle_en_US.properties`:
  ```properties
  gsl.welcome = Welcome to Java Tutorials!
  gsl.farewell = Goodbye!
  ```

---

## 2. ResourceBundle ile Okuma

```java
import java.util.Locale;
import java.util.ResourceBundle;

public class I18nSample {
    public static void main(String[] args) {
        String language = "tr";
        String country = "TR";

        Locale currentLocale = new Locale(language, country);
        ResourceBundle messages = ResourceBundle.getBundle("MessagesBundle", currentLocale);

        System.out.println(messages.getString("gsl.welcome"));
        System.out.println(messages.getString("gsl.farewell"));
    }
}
```
