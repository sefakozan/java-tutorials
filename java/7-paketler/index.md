# Ders: Paketler (Packages)

Bir paket, ilişkili türlerin (sınıflar, arayüzler, numaralandırmalar ve ek açıklamalar) gruplandırılmasıdır.

---

## Bir Paket Oluşturma

Bir sınıfı belirli bir pakete dahil etmek için kaynak dosyanın en ilk yürütülebilir satırına `package` bildirimi yazılır:

```java
package com.example.graphics;

public class DraggableCircle {
    // Sınıf kodları...
}
```

Eğer bir kaynak dosyada `package` bildirimi kullanılmazsa, o dosyadaki türler varsayılan (adsız) pakete (`unnamed package`) yerleştirilir.

---

## Paket İsimlendirme Kuralları

Paket adlarının dünya çapında benzersiz olmasını sağlamak için şirketler ve organizasyonlar ters çevrilmiş İnternet alan adlarını (domain name) kullanır:

- `com.example.mypackage`
- `org.apache.commons`
- `tr.edu.university.department`

---

## Paket Üyelerini Kullanma (`import`)

Başka bir paketteki genel (`public`) bir sınıfı kullanmanın üç yolu vardır:

1. **Tam Nitelikli Adı (Fully Qualified Name) Kullanma:**
   ```java
   java.util.ArrayList<String> list = new java.util.ArrayList<String>();
   ```

2. **Belirli Bir Türü İçe Aktarma (`import`):**
   ```java
   import java.util.ArrayList;
   // ...
   ArrayList<String> list = new ArrayList<String>();
   ```

3. **Tüm Paketi İçe Aktarma (`import .*`):**
   ```java
   import java.util.*;
   ```

> `java.lang` paketindeki tüm sınıflar Java derleyicisi tarafından her kaynak dosyaya otomatik olarak içe aktarılır.
