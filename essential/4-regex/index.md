# Ders: Düzenli İfadeler (Regular Expressions)

**Düzenli İfadeler (Regular Expressions - Regex)**, metin dizgilerini belirli kalıplara (pattern) göre aramak, doğrulamak ve değiştirmek için kullanılan güçlü bir sözdizimidir.

Java'da düzenli ifadeler `java.util.regex` paketi tarafından sağlanır ve üç temel sınıftan oluşur:
1. `Pattern`: Derlenmiş bir regex kalıbını temsil eder.
2. `Matcher`: Bir girdi metni üzerinde kalıbı eşleştiren motordur.
3. `PatternSyntaxException`: Geçersiz regex sözdizimi durumunda fırlatılan denetlenmeyen bir istisnadır.

---

## Regex Kullanım Örneği

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class RegexTest {
    public static void main(String[] args) {
        String input = "Java 17, Java 21 ve Java 25 sürümleri LTS'tir.";
        String regex = "Java \\d+";

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(input);

        while (matcher.find()) {
            System.out.println("Eşleşen: " + matcher.group() + 
                               " (Başlangıç: " + matcher.start() + 
                               ", Bitiş: " + matcher.end() + ")");
        }
    }
}
```

---

## Temel Regex Yapıları

- `.` : Herhangi bir tek karakter
- `^` : Satırın başlangıcı
- `$` : Satırın sonu
- `[abc]` : `a`, `b` veya `c` karakterlerinden biri
- `[^abc]` : `a`, `b` veya `c` dışındaki herhangi bir karakter
- `[0-9]` veya `\d` : Rakam (0-9)
- `\w` : Kelime karakteri (`[a-zA-Z_0-9]`)
- `\s` : Boşluk karakteri (boşluk, sekme, yeni satır)
- `*` : 0 veya daha fazla kez
- `+` : 1 veya daha fazla kez
- `?` : 0 veya 1 kez
- `{n}` : Tam olarak n kez
