# Özel Kılavuz: İleri Düzey Generics (Genel Türler)

Bu kılavuz, Java Generics sisteminin ileri düzey konularını ele alır: joker karakterler (*wildcards*), tür silme (*type erasure*) mekanizması ve genel türler üzerindeki kısıtlamalar.

---

## Bu Kılavuzdaki Dersler

### 1. [Joker Karakterler (Wildcards)](ileri-duzey/generics/wildcards.md)
Üst sınırlandırılmış (`? extends T`), alt sınırlandırılmış (`? super T`) ve sınırlandırılmamış (`?`) joker karakterleri, joker yakalamayı ve kullanım kılavuzunu (*in/out* kuralı) inceler.

### 2. [Tür Silme (Type Erasure)](ileri-duzey/generics/erasure.md)
Java derleyicisinin geriye dönük bayt kodu uyumluluğu sağlamak için genel tür parametrelerini nasıl sildiğini ve köprü metotlarını (*bridge methods*) açıklar.

### 3. [Generics Kısıtlamaları (Restrictions)](ileri-duzey/generics/restrictions.md)
Tür parametreleri ile nesne oluşturamama, statik alan bildirememe, dizi oluşturamama ve istisna yakalayamama gibi Java genel tür kısıtlamalarını ve çözümlerini ele alır.
