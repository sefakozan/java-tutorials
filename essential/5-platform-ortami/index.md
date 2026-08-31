# Ders: Platform Ortamı (The Platform Environment)

Bir Java uygulaması, yürütüldüğü platform ortamı (işletim sistemi, donanım, kullanıcı profili ve çalışma zamanı parametreleri) ile sürekli etkileşim halindedir. Bu ders, uygulamanızı ortam parametreleriyle nasıl yapılandıracağınızı ve sistem düzeyindeki yardımcı sınıfları nasıl kullanacağınızı açıklar.

1. [**Yapılandırma Özellikleri (`java.util.Properties`)**](#1-yapılandırma-özellikleri-javautilproperties)
2. [**Sistem Özellikleri (System Properties)**](#2-sistem-özellikleri-system-properties)
3. [**Ortam Değişkenleri (Environment Variables)**](#3-ortam-değişkenleri-environment-variables)
4. [**Sistem Yardımcı Programları (`System` Sınıfı)**](#4-sistem-yardımcı-programları-system-sınıfı)
---

# 1. Yapılandırma Özellikleri (`java.util.Properties`)

`Properties` nesnesi, anahtar-değer (*key-value*) çiftlerinden oluşan ve doğrudan akışlara (`.properties` dosyalarına veya XML dosyalarına) kaydedilebilen ya da yüklenebilen bir yapılandırma deposudur.

```java
import java.io.*;
import java.util.Properties;

public class PropertiesDemo {
    public static void main(String[] args) throws IOException {
        Properties appProps = new Properties();

        // Özellikleri dosyadan yükle
        try (FileInputStream in = new FileInputStream("appProperties")) {
            appProps.load(in);
        } catch (FileNotFoundException e) {
            // Varsayılan değerler ata
            appProps.setProperty("timeout", "30");
            appProps.setProperty("theme", "dark");
        }

        // Değer okuma
        String timeout = appProps.getProperty("timeout", "45");
        System.out.println("Timeout: " + timeout);

        // Yeni özellik ekleyip diske kaydetme
        appProps.setProperty("language", "tr");
        try (FileOutputStream out = new FileOutputStream("appProperties")) {
            appProps.store(out, "--- Uygulama Yapılandırma Dosyası ---");
        }
    }
}
```

---

# 2. Sistem Özellikleri (System Properties)

Java Sanal Makinesi, geçerli çalışma ortamı hakkında bilgi sağlayan bir dizi sistem özelliğini başlatır. `System.getProperty(name)` ile bu özellikler sorgulanabilir:

| Özellik Adı | Açıklama |
| :--- | :--- |
| `file.separator` | Dosya yolu ayırıcı karakteri (`/` veya `\`) |
| `java.home` | Java kurulum dizini |
| `java.version` | Java çalışma zamanı sürümü |
| `os.name` | İşletim sisteminin adı |
| `os.arch` | İşletim sistemi mimarisi |
| `path.separator` | Sınıf yolu ayırıcı karakteri (`:` veya `;`) |
| `user.dir` | Geçerli çalışma dizini |
| `user.home` | Kullanıcı ana dizini |
| `user.name` | Kullanıcı hesap adı |

Komut satırından `-D` parametresi verilerek özel sistem özellikleri tanımlanabilir:

```bash
java -Dcustom.setting=enabled MyApp
```

---

# 3. Ortam Değişkenleri (Environment Variables)

Ortam değişkenleri işletim sistemi tarafından yönetilen anahtar-değer çiftleridir. Java programında `System.getenv()` ile okunabilirler:

```java
// Tek bir ortam değişkenini okuma
String path = System.getenv("PATH");

// Tüm ortam değişkenlerini listeleme
for (String envName : System.getenv().keySet()) {
    System.out.format("%s=%s%n", envName, System.getenv(envName));
}
```

---

# 4. Sistem Yardımcı Programları (`System` Sınıfı)

`java.lang.System` sınıfı sistem düzeyinde birçok kritik statik işlev sağlar:

- **Standart Akışlar:** `System.in` (standart girdi), `System.out` (standart çıktı), `System.err` (standart hata akışı). `System.setOut(PrintStream)` ile yönlendirilebilirler.
- **Süre Ölçümü:**
  - `System.currentTimeMillis()`: 1 Ocak 1970 UTC'den bu yana geçen milisaniye.
  - `System.nanoTime()`: Kod bloklarının çalışma süresini yüksek hassasiyetle ölçmek için nanosaniye cinsinden süre.
- **Uygulamayı Sonlandırma:** `System.exit(0)` programı belirtilen çıkış koduyla durdurur.
- **Çöp Toplayıcıyı Tetikleme İsteği:** `System.gc()`.
