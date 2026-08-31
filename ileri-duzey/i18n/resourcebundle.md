# Ders: ResourceBundle ile Yerelleştirme (Isolating Locale-Specific Data)

Uluslararası bir uygulamada yerel ayarlara özgü metinler ve nesneler kaynak kodun içine gömülmez; bunun yerine **`ResourceBundle`** sınıfları ve `.properties` dosyaları aracılığıyla dışarıda tutulur.

1. [**Özellik Dosyaları (`.properties`)**](#1-özellik-dosyaları-properties)
2. [**`ResourceBundle` ile Veri Yükleme**](#2-resourcebundle-ile-veri-yükleme)
3. [**Yedekleme ve Arama Hiyerarşisi (Fallback Mechanism)**](#3-yedekleme-ve-arama-hiyerarşisi-fallback-mechanism)
---

# 1. Özellik Dosyaları (`.properties`)

Her dil ve bölge için aynı kök ada (*base name*) sahip özellik dosyaları oluşturulur:

- `MessagesBundle.properties` (Varsayılan geri dönüş dosyası)
- `MessagesBundle_tr_TR.properties` (Türkçe / Türkiye)
- `MessagesBundle_en_US.properties` (İngilizce / ABD)
- `MessagesBundle_de_DE.properties` (Almanca / Almanya)

### `MessagesBundle_tr_TR.properties` İçeriği
```properties
greetings = Merhaba
farewell = Hoşça kal
inquiry = Nasılsınız?
```

### `MessagesBundle_en_US.properties` İçeriği
```properties
greetings = Hello
farewell = Goodbye
inquiry = How are you?
```

---

# 2. `ResourceBundle` ile Veri Yükleme

Java uygulamanızda `ResourceBundle.getBundle` metodunu çağırarak geçerli yerel ayara uygun paketi yüklersiniz:

```java
import java.util.Locale;
import java.util.ResourceBundle;

public class I18nDemo {
    public static void main(String[] args) {
        String language = "tr";
        String country = "TR";

        Locale currentLocale = new Locale(language, country);
        ResourceBundle messages = ResourceBundle.getBundle("MessagesBundle", currentLocale);

        System.out.println(messages.getString("greetings")); // "Merhaba"
        System.out.println(messages.getString("inquiry"));   // "Nasılsınız?"
        System.out.println(messages.getString("farewell"));  // "Hoşça kal"
    }
}
```

---

# 3. Yedekleme ve Arama Hiyerarşisi (Fallback Mechanism)

Java bir anahtarı ararken şu sırada arama yapar:
1. `MessagesBundle_tr_TR.properties` (Dil + Ülke)
2. `MessagesBundle_tr.properties` (Yalnızca Dil)
3. `MessagesBundle_en_US.properties` (Sistem Varsayılan Yereli)
4. `MessagesBundle.properties` (Varsayılan Kök Paket)

İstenen anahtar hiçbir dosyada bulunamazsa `MissingResourceException` fırlatılır.
