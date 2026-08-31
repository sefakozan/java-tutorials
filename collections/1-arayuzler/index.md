# Ders: Koleksiyon Arayüzleri (Collection Interfaces)

Çekirdek koleksiyon arayüzleri, koleksiyonları temsil eden ve işleyen soyut veri türlerini tanımlar. Bu arayüzler, koleksiyonların ayrıntılı iç yapılarından bağımsız olarak evrensel bir şekilde yönetilmesini sağlar.

<figure style="text-align: center;">
  <img src="_media/figures/colls-coreInterfaces.gif" alt="Koleksiyon Arayüzleri Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Çekirdek koleksiyon arayüzleri.</figcaption>
</figure>

1. [**`Collection` Arayüzü**](#1-collection-arayüzü)
2. [**`Set` ve `SortedSet` Arayüzleri**](#2-set-ve-sortedset-arayüzleri)
3. [**`List` Arayüzü**](#3-list-arayüzü)
4. [**`Queue` ve `Deque` Arayüzleri**](#4-queue-ve-deque-arayüzleri)
5. [**`Map` ve `SortedMap` Arayüzleri**](#5-map-ve-sortedmap-arayüzleri)
---

# 1. `Collection` Arayüzü

`Collection`, koleksiyon hiyerarşisinin kök arayüzüdür. Tüm koleksiyonların desteklediği temel işlemleri tanımlar:

- **Temel İşlemler:** `int size()`, `boolean isEmpty()`, `boolean contains(Object element)`, `boolean add(E element)`, `boolean remove(Object element)`, `Iterator<E> iterator()`.
- **Toplu İşlemler:** `boolean containsAll(Collection<?> c)`, `boolean addAll(Collection<? extends E> c)`, `boolean removeAll(Collection<?> c)`, `boolean retainAll(Collection<?> c)`, `void clear()`.
- **Dizi İşlemleri:** `Object[] toArray()`, `<T> T[] toArray(T[] a)`.
- **Toplu Akış İşlemleri (Streams - Java 8+):** `stream()`, `parallelStream()`.

---

# 2. `Set` ve `SortedSet` Arayüzleri

- **`Set`:** Tekrarlanan (*duplicate*) elemanlara izin vermeyen bir koleksiyondur. Matematiksel küme modelini temsil eder. En fazla bir adet `null` eleman içerebilir.
- **`SortedSet`:** Elemanlarını artan sırada (*natural ordering* veya bir `Comparator` ile) garanti eden bir `Set` alt arayüzüdür (`first()`, `last()`, `headSet()`, `tailSet()`, `subSet()`).

---

# 3. `List` Arayüzü

`List` (bazen *dizi* veya *sıralı liste* olarak adlandırılır), sıralı bir koleksiyondur (*sequence*).
- Kullanıcı her bir elemanın nereye ekleneceğini tam olarak kontrol edebilir.
- Elemanlara tamsayı indeksleri (*positional access*) ile erişilebilir: `get(int index)`, `set(int index, E element)`, `add(int index, E element)`, `remove(int index)`.
- Tekrarlanan elemanlara izin verir.
- `ListIterator` ile listede hem ileri hem de geri yönde gezinebilirsiniz.

---

# 4. `Queue` ve `Deque` Arayüzleri

- **`Queue` (Kuyruk):** İşlenmeden önce elemanları tutmak için tasarlanmıştır. Genellikle FIFO (İlk Giren İlk Çıkar) düzenini kullanır.
  - Ekleme: `add(e)` / `offer(e)`
  - Çıkarma: `remove()` / `poll()`
  - İnceleme: `element()` / `peek()`
- **`Deque` (Çift Uçlu Kuyruk):** Hem baştan hem sondan eleman ekleme ve çıkarmaya izin verir (FIFO veya LIFO yığın / stack olarak kullanılabilir): `addFirst()`, `addLast()`, `pollFirst()`, `pollLast()`.

---

# 5. `Map` ve `SortedMap` Arayüzleri

`Map`, anahtarları değerlerle eşleyen (*key-value mapping*) bir nesnedir.
- Bir `Map` yinelenen anahtarlar içeremez; her anahtar en fazla bir değerle eşleşebilir.
- Üç farklı koleksiyon görünümü sağlar:
  1. `keySet()`: Anahtarlar kümesi (`Set<K>`).
  2. `values()`: Değerler koleksiyonu (`Collection<V>`).
  3. `entrySet()`: Anahtar-değer çiftleri kümesi (`Set<Map.Entry<K, V>>`).
- **`SortedMap`:** Anahtarlarını artan sırada tutan bir `Map` alt arayüzüdür.
