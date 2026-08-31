# Ders: Algoritmalar

Java Koleksiyonlar Çerçevesi tarafından sağlanan **polimorfik algoritmalar**, koleksiyonlar üzerinde çalışan ve `java.util.Collections` sınıfında statik metotlar olarak tanımlanmış yeniden kullanılabilir algoritmalardır.

1. [**Sıralama (Sorting)**](#1-sıralama-sorting)
2. [**Karıştırma (Shuffling)**](#2-karıştırma-shuffling)
3. [**Rutin Veri İşleme Algoritmaları**](#3-rutin-veri-i̇şleme-algoritmaları)
4. [**Arama (Searching - Binary Search)**](#4-arama-searching---binary-search)
5. [**Aşırı Değerleri Bulma (Finding Extreme Values)**](#5-aşırı-değerleri-bulma-finding-extreme-values)
---

# 1. Sıralama

Sıralama algoritması bir `List` nesnesinin elemanlarını yeniden sıralar. Kararlı (*stable*) ve $O(n \log n)$ performans sunan bir sıralama algoritması kullanır.

- **Doğal Sıralama (*Natural Ordering*):**
  ```java
  List<String> list = Arrays.asList("Zeynep", "Ahmet", "Mehmet");
  Collections.sort(list);
  // list artık ["Ahmet", "Mehmet", "Zeynep"] şeklindedir
  ```
- **Özel Karşılaştırıcı (*Comparator*):**
  ```java
  // Dizgileri uzunluklarına göre sıralama
  Collections.sort(list, Comparator.comparingInt(String::length));
  ```

---

# 2. Karıştırma

`Collections.shuffle(list)` metodu bir listedeki elemanların sırasını rastgele karıştırır (örneğin bir deste kartı karıştırmak gibi):

```java
List<Card> deck = new ArrayList<>(...);
Collections.shuffle(deck);
```

---

# 3. Rutin Veri İşleme Algoritmaları

- **`Collections.reverse(list)`:** Listenin eleman sıralamasını tersine çevirir.
- **`Collections.fill(list, obj)`:** Listedeki her elemanı belirtilen nesneyle değiştirir.
- **`Collections.copy(dest, src)`:** Kaynak listenin tüm elemanlarını hedef listeye kopyalar (hedef liste en az kaynak kadar uzun olmalıdır).
- **`Collections.swap(list, i, j)`:** İki indeksin yerini değiştirir.
- **`Collections.addAll(coll, e1, e2, ...)`:** Koleksiyona birden çok öğe ekler.

---

# 4. Arama (Searching - Binary Search)

İkili arama (*binary search*) algoritması, **önceden sıralanmış** bir listede belirtilen bir anahtarı $O(\log n)$ sürede arar:

```java
Collections.sort(list);
int index = Collections.binarySearch(list, "Mehmet");
if (index >= 0) {
    System.out.println("Eleman indeksi: " + index);
}
```

---

# 5. Uç Değerleri Bulma (Min / Max)

- **`Collections.min(coll)`:** Koleksiyondaki en küçük elemanı döndürür.
- **`Collections.max(coll)`:** Koleksiyondaki en büyük elemanı döndürür.
- **`Collections.frequency(coll, obj)`:** Belirtilen nesnenin koleksiyonda kaç kez yer aldığını sayar.
- **`Collections.disjoint(coll1, coll2)`:** İki koleksiyonun hiçbir ortak elemanı yoksa `true` döndürür.
