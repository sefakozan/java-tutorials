# Ders: İmplementasyonlar (Implementations)

İmplementasyonlar, çekirdek koleksiyon arayüzlerini uygulayan somut veri yapısı sınıflarıdır. Java Koleksiyonlar Çerçevesi; genel amaçlı, özel amaçlı, eşzamanlı ve sarmalayıcı olmak üzere zengin bir implementasyon ailesi sunar.

1. [**Genel Amaçlı İmplementasyonlar Tablosu**](#1-genel-amaçlı-i̇mplementasyonlar-tablosu)
2. [**Set İmplementasyonları (`HashSet`, `TreeSet`, `LinkedHashSet`)**](#2-set-i̇mplementasyonları-hashset-treeset-linkedhashset)
3. [**List İmplementasyonları (`ArrayList`, `LinkedList`)**](#3-list-i̇mplementasyonları-arraylist-linkedlist)
4. [**Queue & Deque İmplementasyonları (`ArrayDeque`, `PriorityQueue`)**](#4-queue--deque-i̇mplementasyonları-arraydeque-priorityqueue)
5. [**Map İmplementasyonları (`HashMap`, `TreeMap`, `LinkedHashMap`)**](#5-map-i̇mplementasyonları-hashmap-treemap-linkedhashmap)
6. [**Sarmalayıcı ve Kolaylık İmplementasyonları (Wrappers)**](#6-sarmalayıcı-ve-kolaylık-i̇mplementasyonları-wrappers)
---

# 1. Genel Amaçlı İmplementasyonlar Tablosu

| Arayüz | Hash Tablosu | Yeniden Boyutlandırılabilir Dizi | Dengeli Ağaç | Bağlantılı Liste | Hash Tablosu + Bağlantılı Liste |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **`Set`** | `HashSet` | | `TreeSet` | | `LinkedHashSet` |
| **`List`** | | `ArrayList` | | `LinkedList` | |
| **`Deque`** | | `ArrayDeque` | | `LinkedList` | |
| **`Map`** | `HashMap` | | `TreeMap` | | `LinkedHashMap` |

---

# 2. Set İmplementasyonları

- **`HashSet`:** En yüksek performansı sunan genel amaçlı kümedir ($O(1)$ ekleme/arama). Elemanların sırasını garanti etmez.
- **`TreeSet`:** Elemanları doğal sıralarına veya bir `Comparator`'a göre sıralı tutan kırmızı-siyah ağaç tabanlı kümedir ($O(\log n)$).
- **`LinkedHashSet`:** Elemanları kümeye eklenme sırasına (*insertion-order*) göre tutar.

---

# 3. List İmplementasyonları

- **`ArrayList`:** Arka planda dinamik olarak büyüyen bir dizi kullanır. Rastgele erişim ($O(1)$) için en iyi seçimdir. Varsayılan `List` tercihidir.
- **`LinkedList`:** Çift bağlantılı liste kullanır. Listenin başına veya arasına sık sık eleman ekleme ve çıkarma işlemlerinde ($O(1)$) verimlidir, ancak rastgele erişim $O(n)$ sürede gerçekleşir.

---

# 4. Queue & Deque İmplementasyonları

- **`ArrayDeque`:** Kuyruk ve yığın (*stack*) veri yapıları için en verimli genel amaçlı çift uçlu kuyruk implementasyonudur. `Stack` sınıfı yerine `ArrayDeque` kullanılması önerilir.
- **`PriorityQueue`:** Elemanları önceliklerine (doğal sıralama veya `Comparator`) göre sıralayan bir ikili yığın (*binary heap*) yapısıdır.

---

# 5. Map İmplementasyonları

- **`HashMap`:** $O(1)$ zaman karmaşıklığı sunan en hızlı `Map` implementasyonudur. Sıralama garantisi vermez.
- **`TreeMap`:** Anahtarları sıralı tutar ($O(\log n)$).
- **`LinkedHashMap`:** Anahtarları eklenme sırasına veya en son erişim sırasına (*LRU cache*) göre korur.

---

# 6. Sarmalayıcı ve Kolaylık İmplementasyonları (Wrappers)

### Değiştirilemez Koleksiyonlar (Unmodifiable Wrappers)
Var olan bir koleksiyonu salt okunur hale getirmek için:
```java
List<String> list = new ArrayList<>();
list.add("Java");
List<String> unmodifiable = Collections.unmodifiableList(list);
```

### Senkronize Koleksiyonlar (Synchronized Wrappers)
Çok iş parçacıklı erişim için koleksiyonları senkronize eder:
```java
Map<String, String> syncMap = Collections.synchronizedMap(new HashMap<>());
```

### Kolaylık Metotları
- `Arrays.asList("a", "b", "c")`: Sabit boyutlu bir liste oluşturur.
- `Collections.emptyList()`, `Collections.emptySet()`, `Collections.emptyMap()`
- `Collections.singleton("tekEleman")`
