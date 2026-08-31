# Ders: Düzenli İfadeler (Regular Expressions - Regex)

**Düzenli ifadeler (regular expressions / regex)**, metinleri belirli kalıplara göre aramak, doğrulamak ve değiştirmek için kullanılan güçlü bir sözdizimidir. Java platformu, `java.util.regex` paketi üzerinden tam regex desteği sunar.

1. [**`java.util.regex` Paketinin Temel Sınıfları**](#1-javautilregex-paketinin-temel-sınıfları)
2. [**Karakter Sınıfları (Character Classes)**](#2-karakter-sınıfları-character-classes)
3. [**Önceden Tanımlanmış Karakter Sınıfları**](#3-önceden-tanımlanmış-karakter-sınıfları)
4. [**Niceleyiciler (Quantifiers)**](#4-niceleyiciler-quantifiers)
5. [**Yakalama Grupları (Capturing Groups)**](#5-yakalama-grupları-capturing-groups)
6. [**Sınır Eşleştiriciler (Boundary Matchers)**](#6-sınır-eşleştiriciler-boundary-matchers)
---

# 1. `java.util.regex` Paketinin Temel Sınıfları

Paket başlıca üç sınıftan oluşur:

- **`Pattern`:** Bir düzenli ifadenin derlenmiş temsilidir. Deseni derlemek için `Pattern.compile(regex)` metodu kullanılır.
- **`Matcher`:** Bir `Pattern` nesnesini bir karakter dizisi üzerinde yorumlayan ve eşleştirme işlemlerini (`find()`, `matches()`, `replaceAll()`) yürüten motordur.
- **`PatternSyntaxException`:** Bir regex modelindeki sözdizimi hatasını belirten denetlenmeyen (*unchecked*) bir istisnadır.

```java
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class RegexExample {
    public static void main(String[] args) {
        Pattern pattern = Pattern.compile("java", Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher("Java programlama dili çok güçlüdür.");
        
        while (matcher.find()) {
            System.out.println("Eşleşme bulundu: " + matcher.group() + 
                               " (Başlangıç: " + matcher.start() + 
                               ", Bitiş: " + matcher.end() + ")");
        }
    }
}
```

---

# 2. Karakter Sınıfları (Character Classes)

Köşeli parantezler (`[ ]`) içine yazılarak belirli karakter kümeleri tanımlanır:

| Yapı | Açıklama |
| :--- | :--- |
| `[abc]` | `a`, `b` veya `c` (basit sınıf) |
| `[^abc]` | `a`, `b` veya `c` hariç herhangi bir karakter (olumsuzlama) |
| `[a-zA-Z]` | `a`'dan `z`'ye veya `A`'dan `Z`'ye tüm harfler (aralık) |
| `[a-d[m-p]]` | `a`'dan `d`'ye veya `m`'den `p`'ye (birleşim) |
| `[a-z&&[def]]` | `d`, `e` veya `f` (kesişim) |

---

# 3. Önceden Tanımlanmış Karakter Sınıfları

Java dizgilerinde ters eğik çizgi kaçış karakteri olduğundan regex yapıları çift ters eğik çizgi (`\\`) ile yazılır:

| Belirteç | Karşılığı | Açıklama |
| :--- | :--- | :--- |
| `.` | Herhangi bir karakter | Yeni satır karakterleri hariç herhangi bir tek karakter |
| `\d` | `[0-9]` | Herhangi bir rakam |
| `\D` | `[^0-9]` | Rakam olmayan herhangi bir karakter |
| `\s` | `[ \t\n\x0B\f\r]` | Herhangi bir boşluk karakteri |
| `\S` | `[^\s]` | Boşluk olmayan herhangi bir karakter |
| `\w` | `[a-zA-Z_0-9]` | Herhangi bir kelime karakteri (harf, rakam, alt çizgi) |
| `\W` | `[^\w]` | Kelime karakteri olmayan herhangi bir karakter |

---

# 4. Niceleyiciler (Quantifiers)

Bir karakterin veya grubun kaç kez tekrarlanabileceğini belirtir:

| Açgözlü (*Greedy*) | Tembel (*Reluctant*) | İyelik (*Possessive*) | Anlamı |
| :--- | :--- | :--- | :--- |
| `X?` | `X??` | `X?+` | `X`, bir kez veya hiç |
| `X*` | `X*?` | `X*+` | `X`, sıfır veya daha fazla kez |
| `X+` | `X+?` | `X++` | `X`, bir veya daha fazla kez |
| `X{n}` | `X{n}?` | `X{n}+` | `X`, tam olarak $n$ kez |
| `X{n,}` | `X{n,}?` | `X{n,}+` | `X`, en az $n$ kez |
| `X{n,m}` | `X{n,m}?` | `X{n,m}+` | `X`, en az $n$, en çok $m$ kez |

---

# 5. Yakalama Grupları (Capturing Groups)

Parantezler (`( )`) kullanılarak çoklu karakterler tek bir grup olarak değerlendirilir. Eşleşen gruplara `matcher.group(1)`, `matcher.group(2)` şeklinde 1 tabanlı indekslerle erişilebilir.

---

# 6. Sınır Eşleştiriciler (Boundary Matchers)

Metin içindeki belirli konumlara eşleşme sağlar:

- `^` Satır başı
- `$` Satır sonu
- `\b` Kelime sınırı (*word boundary*)
- `\B` Kelime sınırı olmayan konum
