# Ders: Algoritmalar (Algorithms)

`java.util.Collections` sınıfı, koleksiyonlar üzerinde çalışan polimorfik statik algoritmalar sağlar. Bu algoritmalar yeniden kullanılabilir ve optimize edilmiştir.

---

## 1. Sıralama (Sorting)

`sort` algoritması bir `List` nesnesinin elemanlarını doğal artan düzende veya sağlanan bir `Comparator` nesnesine göre sıralar:

```java
List<String> list = Arrays.asList("Kırmızı", "Mavi", "Yeşil", "Sarı");
Collections.sort(list);
System.out.println(list); // [Kırmızı, Mavi, Sarı, Yeşil]
```

---

## 2. Karıştırma (Shuffling)

`shuffle` algoritması bir `List` içindeki elemanların sırasını rastgele yeniden düzenler (örneğin kart oyunları için):

```java
Collections.shuffle(list);
```

---

## 3. Arama (Searching)

`binarySearch` algoritması, daha önceden sıralanmış bir listede ikili arama yapar ve aranan elemanın indeksini $O(\log n)$ sürede bulur:

```java
int index = Collections.binarySearch(list, "Mavi");
```

---

## 4. Rutin Veri Manipülasyonları

- `Collections.reverse(List<?> list)` : Listedeki elemanların sırasını tersine çevirir.
- `Collections.fill(List<? super T> list, T obj)` : Listedeki her elemanı belirtilen nesneyle değiştirir.
- `Collections.copy(List<? super T> dest, List<? extends T> src)` : Kaynak listeyi hedef listeye kopyalar.
- `Collections.min(Collection<? extends T> coll)` : En küçük elemanı döndürür.
- `Collections.max(Collection<? extends T> coll)` : En büyük elemanı döndürür.
- `Collections.frequency(Collection<?> c, Object o)` : Belirtilen öğenin koleksiyonda kaç kez geçtiğini sayar.
