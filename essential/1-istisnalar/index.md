# Ders: İstisnalar (Exceptions)

Bir **istisna (exception)**, bir programın yürütülmesi sırasında meydana gelen ve program yönergelerinin normal akışını bozan beklenmedik bir olaydır.

1. [**İstisna Nedir ve Nasıl Çalışır?**](#1-i̇stisna-nedir-ve-nasıl-çalışır)
2. [**Yakalama veya Belirtme Zorunluluğu (Checked vs Unchecked)**](#2-yakalama-veya-belirtme-zorunluluğu-checked-vs-unchecked)
3. [**İstisnaları Yakalama ve Yönetme (`try`, `catch`, `finally`)**](#3-i̇stisnaları-yakalama-ve-yönetme-try-catch-finally)
4. [**Kaynaklarla `try` İfadesi (The `try-with-resources` Statement)**](#4-kaynaklarla-try-i̇fadesi-the-try-with-resources-statement)
5. [**İstisna Fırlatma (`throw` ve `throws`) ve Özel İstisnalar**](#5-i̇stisna-fırlatma-throw-ve-throws-ve-özel-i̇stisnalar)
---

# 1. İstisna Nedir ve Nasıl Çalışır?

Bir metot içinde bir hata meydana geldiğinde, metot bir **istisna nesnesi (exception object)** oluşturur ve bunu çalışma zamanı sistemine teslim eder. Buna **istisna fırlatma (throwing an exception)** denir:

<figure style="text-align: center;">
  <img src="_media/figures/exceptions-errorOccurs.gif" alt="Hata Oluşumu ve İstisna Fırlatma" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Bir hata meydana geldiğinde bir istisna nesnesi fırlatılır.</figcaption>
</figure>

Çalışma zamanı sistemi, hatayı işleyebilecek bir kod bloğu bulmak için **çağrı yığınını (call stack)** geriye doğru tarar:

<figure style="text-align: center;">
  <img src="_media/figures/exceptions-callStack.gif" alt="Çağrı Yığını Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">İstisna işleyicisini aramak için çağrı yığını taranır.</figcaption>
</figure>

---

# 2. Yakalama veya Belirtme Zorunluluğu (Checked vs Unchecked)

Java'da üç temel istisna türü vardır:

1. **Denetlenen İstisnalar (*Checked Exceptions*):** İyi yazılmış bir uygulamanın öngörmesi ve kurtarması gereken istisnalardır (örneğin dosya bulunamadığında fırlatılan `java.io.FileNotFoundException`). Java derleyicisi bu istisnaların mutlaka bir `try-catch` bloğunda yakalanmasını veya metodun imzasında `throws` ile belirtilmesini zorunlu kılar.
2. **Hatalar (*Errors*):** Uygulamanın kontrolü dışındaki ciddi sistemik durumlardır (örneğin donanım arızası veya bellek tükenmesi: `OutOfMemoryError`). Uygulamalar tarafından yakalanması beklenmez.
3. **Çalışma Zamanı İstisnaları (*Runtime Exceptions / Unchecked Exceptions*):** Genellikle mantıksal programlama hatalarından (örneğin `NullPointerException`, `ArrayIndexOutOfBoundsException`) kaynaklanan durumlardır. Derleyici tarafından yakalanması zorunlu tutulmaz.

---

# 3. İstisnaları Yakalama ve Yönetme (`try`, `catch`, `finally`)

### `try`, `catch` ve `finally` Blokları
```java
public void writeList() {
    PrintWriter out = null;
    try {
        System.out.println("Entering try statement");
        out = new PrintWriter(new FileWriter("OutFile.txt"));
        for (int i = 0; i < SIZE; i++) {
            out.println("Value at: " + i + " = " + list.get(i));
        }
    } catch (IndexOutOfBoundsException e) {
        System.err.println("IndexOutOfBoundsException: " + e.getMessage());
    } catch (IOException e) {
        System.err.println("Caught IOException: " + e.getMessage());
    } finally {
        if (out != null) {
            System.out.println("Closing PrintWriter");
            out.close();
        } else {
            System.out.println("PrintWriter not open");
        }
    }
}
```

- **`try` bloğu:** İstisna oluşturabilecek kodları barındırır.
- **`catch` bloğu:** Fırlatılan belirli bir istisna türünü yakalar ve işler.
- **`finally` bloğu:** İstisna fırlatılsın veya fırlatılmasın **her durumda mutlaka çalıştırılır**. Dosya veya ağ bağlantısı gibi kaynakları kapatmak için kullanılır.

### Çoklu Yakalama (Multi-Catch - Java SE 7+)
Birden fazla istisna türü tek bir `catch` bloğunda dikey çizgi (`|`) ile ayrılabilir:

```java
catch (IOException | SQLException ex) {
    logger.log(ex);
    throw ex;
}
```

---

# 4. Kaynaklarla `try` İfadesi (The `try-with-resources` Statement)

Java SE 7 ile tanıtılan `try-with-resources` ifadesi, `java.lang.AutoCloseable` arayüzünü uygulayan kaynakların (dosyalar, akışlar, veritabanı bağlantıları vb.) işlem bittiğinde **otomatik olarak kapatılmasını** garanti eder:

```java
static String readFirstLineFromFile(String path) throws IOException {
    try (BufferedReader br = new BufferedReader(new FileReader(path))) {
        return br.readLine();
    }
}
```

Bu sözdizimi sayesinde `finally` bloğu içinde manuel olarak `close()` çağırma zorunluluğu ortadan kalkar.

---

# 5. İstisna Fırlatma (`throw` ve `throws`) ve Özel İstisnalar

### `throw` İfadesi
Kodunuzun herhangi bir yerinde açıkça bir istisna fırlatmak için `throw` kullanılır:

```java
public Object pop() {
    if (size == 0) {
        throw new EmptyStackException();
    }
    ...
}
```

### Özel İstisna Sınıfları Tanımlama
Uygulamanıza özgü hata durumları için `Exception` (denetlenen istisna için) veya `RuntimeException` (denetlenmeyen istisna için) sınıfından türeyen kendi sınıflarınızı yazabilirsiniz:

```java
public class InsufficientFundsException extends Exception {
    private double amount;
    
    public InsufficientFundsException(double amount) {
        super("Yetersiz bakiye: Gerekli miktar = " + amount);
        this.amount = amount;
    }
    
    public double getAmount() {
        return amount;
    }
}
```
