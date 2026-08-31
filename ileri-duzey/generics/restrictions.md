# Ders: Generics Kısıtlamaları (Restrictions on Generics)

Java'da jenerik türleri kullanırken derleyicinin uyguladığı bazı zorunlu kısıtlamalar vardır:

---

## 1. İlkel Türler Tür Argümanı Olamaz
`Pair<int, char>` yazılamaz; bunun yerine sarmalayıcı sınıflar (`Pair<Integer, Character>`) kullanılmalıdır.

## 2. Tür Parametrelerinin Doğrudan Örneği Oluşturulamaz
`E elem = new E();` ifadesi geçersizdir. Yansıma (Reflection) veya `Supplier<E>` fabrikaları kullanılmalıdır.

## 3. Statik Alanlar Tür Parametresini Kullanamaz
`private static T os;` geçersizdir çünkü statik alanlar tüm nesne örnekleri arasında paylaşılır.

## 4. `instanceof` ve Dizi Oluşturma Kısıtlamaları
- `if (cs instanceof List<String>)` geçersizdir (çalışma zamanında tür bilgisi silinmiştir).
- `List<String>[] arrayOfLists = new List<String>[2];` jenerik dizi oluşturulamaz.

## 5. İstisna (Exception) Kısıtlamaları
Bir jenerik sınıf `Throwable` sınıfını genişletemez ve `catch(T e)` yapılamaz.
