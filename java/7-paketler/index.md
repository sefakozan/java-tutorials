# Ders: Paketler (Packages)

Bir **paket (package)**, birbiriyle ilişkili türleri (sınıflar, arayüzler, numaralandırmalar ve ek açıklamalar) gruplayarak ad çakışmalarını önleyen ve erişim koruması sağlayan bir ad alanıdır (*namespace*).

1. [**Paket Oluşturma (Creating a Package)**](#1-paket-oluşturma-creating-a-package)
2. [**Paket İsimlendirme Kuralları**](#2-paket-i̇simlendirme-kuralları)
3. [**Paket Üyelerini Kullanma (`import` Deyimi)**](#3-paket-üyelerini-kullanma-import-deyimi)
4. [**Dosya Sistemi Yapısı ve Sınıf Yolu (Classpath)**](#4-dosya-sistemi-yapısı-ve-sınıf-yolu-classpath)
---

# 1. Paket Oluşturma (Creating a Package)

Bir paket oluşturmak için, pakete dahil edilecek her kaynak dosyanın en başına `package` ifadesini eklersiniz:

```java
package com.example.graphics;

public class Rectangle {
    // Sınıf gövdesi
}
```

> **Önemli Kural:** `package` ifadesi, dosyadaki **yorum satırları hariç ilk satır** olmalıdır. Bir dosyada yalnızca bir `package` ifadesi bulunabilir. `package` ifadesi belirtilmezse, dosya varsayılan isimsiz pakete (*default package*) dahil edilir.

---

# 2. Paket İsimlendirme Kuralları

Şirketler ve geliştiriciler paket adlarının benzersiz olmasını sağlamak için ters çevrilmiş İnternet alan adlarını (*reversed domain names*) kullanırlar:

- `com.example.mypackage`
- `org.myorganization.project`
- `tr.edu.university.department`

Paket adlarındaki tüm harfler küçük harfle yazılır; bu, sınıf adlarıyla karışmalarını önler.

---

# 3. Paket Üyelerini Kullanma (`import` Deyimi)

Farklı bir paketteki `public` bir sınıfı kullanmak için üç yöntem vardır:

### 1. Tam Nitelikli Adı (Fully Qualified Name) ile Başvurma
```java
com.example.graphics.Rectangle myRect = new com.example.graphics.Rectangle();
```

### 2. Belirli Bir Paket Üyesini İçe Aktarma (`import`)
```java
import com.example.graphics.Rectangle;

// Artık doğrudan sınıf adını kullanabilirsiniz:
Rectangle myRect = new Rectangle();
```

### 3. Bir Paketteki Tüm Türleri İçe Aktarma (Joker Karakter - `*`)
```java
import com.example.graphics.*;
```

> **Not:** `java.lang` paketi içindeki tüm sınıflar (`String`, `System`, `Math` vb.) her Java kaynak dosyasına otomatik olarak içe aktarılır.

### Statik İçe Aktarma (`import static`)
Bir sınıfın `static` alanlarını ve metotlarını sınıf adını yazmadan kullanmak için `import static` kullanılır:

```java
import static java.lang.Math.PI;
import static java.lang.Math.cos;

double r = cos(PI * theta);
```

---

# 4. Dosya Sistemi Yapısı ve Sınıf Yolu (Classpath)

Java'da paket adı, dosya sistemindeki dizin yapısıyla birebir eşleşmelidir. Örneğin `com.example.graphics` paketindeki `Rectangle.java` kaynak dosyası şu dizin yolunda bulunmalıdır:

```text
com/example/graphics/Rectangle.java
```

Derleme ve çalıştırma sırasında Java Sanal Makinesinin bu paketleri bulabilmesi için, en üst dizinin (`com` klasörünün bulunduğu yerin) `CLASSPATH` ortam değişkeninde veya `-cp` / `-classpath` komut satırı parametresinde belirtilmesi gerekir.
