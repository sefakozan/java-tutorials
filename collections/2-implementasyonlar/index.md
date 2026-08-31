# Ders: Genel Amaçlı İmplementasyonlar (Implementations)

Java Koleksiyon Çerçevesi'nin arayüzleri, farklı performans ve veri yapısı özelliklerine sahip somut sınıflar tarafından uygulanır.

---

## Genel Amaçlı İmplementasyonlar Tablosu

| Arayüz | Hash Tablosu | Yeniden Boyutlanan Dizi | Ağaç (Tree) | Bağlı Liste (Linked List) |
|---|---|---|---|---|
| **`Set`** | `HashSet` | | `TreeSet` | `LinkedHashSet` |
| **`List`** | | `ArrayList` | | `LinkedList` |
| **`Queue` / `Deque`** | | `ArrayDeque` | | `LinkedList` |
| **`Map`** | `HashMap` | | `TreeMap` | `LinkedHashMap` |

---

## Somut Sınıfların Özellikleri

### 1. `Set` İmplementasyonları
- **`HashSet`:** Elemanları bir hash tablosunda saklar. En iyi performansı sunar ancak elemanların sırasını garanti etmez.
- **`TreeSet`:** Elemanları kırmızı-siyah bir ağaçta sıralı (doğal sıralama veya bir `Comparator` ile) saklar. `HashSet`'e göre biraz daha yavaştır.
- **`LinkedHashSet`:** Hash tablosu ve bağlı liste kombinasyonudur; ekleme sırasını (insertion order) korur.

### 2. `List` İmplementasyonları
- **`ArrayList`:** Dinamik olarak büyüyüp küçülebilen bir dizidir. Rastgele erişim (`get(index)`) $O(1)$ sabit zamanlı ve çok hızlıdır.
- **`LinkedList`:** Çift yönlü bağlı listedir. Listenin başına veya ortasına sık sık eleman ekleme ve çıkarma işlemleri için uygundur.

### 3. `Map` İmplementasyonları
- **`HashMap`:** Anahtar-değer çiftlerini saklar. `null` anahtar ve değerleri destekler. Sıralama garantisi yoktur.
- **`TreeMap`:** Anahtarları sıralı tutan bir Map'tir.
- **`LinkedHashMap`:** Ekleme sırasını koruyan bir HashMap'tir.
