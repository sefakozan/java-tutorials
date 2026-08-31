# Ders: Koleksiyon Arayüzleri (Interfaces)

Java Koleksiyon Çerçevesi'nin çekirdek arayüzleri iki ana hiyerarşik ağaçtan oluşur: `Collection` hiyerarşisi ve `Map` hiyerarşisi.

1. [**Çekirdek Koleksiyon Arayüzleri Hiyerarşisi**](#1.-çekirdek-koleksiyon-arayüzleri-hiyerarşisi)
2. [**Collection Arayüzleri (List, Set, Queue, Deque)**](#2.-collection-arayüzleri)
3. [**Map Arayüzü**](#3.-map-arayüzü)
4. [**Koleksiyonlar Üzerinde Gezinme Yöntemleri**](#4.-koleksiyonlar-üzerinde-gezinme-yöntemleri)
---

# 1. Çekirdek Koleksiyon Arayüzleri Hiyerarşisi

<figure style="text-align: center;">
  <img src="_media/figures/colls-coreInterfaces.gif" alt="Çekirdek Koleksiyon Arayüzleri" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Java Koleksiyon Çerçevesi çekirdek arayüz hiyerarşisi.</figcaption>
</figure>

---

# 2. Collection Arayüzleri

- **`Collection<E>`:** Hiyerarşinin kök arayüzüdür.
- **`Set<E>`:** Tekrarlanan (duplicate) eleman kabul etmeyen küme yapısı.
- **`List<E>`:** Sıralı ve indeksli koleksiyon (tekrarlanan eleman içerebilir).
- **`Queue<E>`:** İşlenmeyi bekleyen FIFO (İlk Giren İlk Çıkar) kuyruk modeli.
- **`Deque<E>`:** Çift uçlu kuyruk (hem kuyruk hem yığın/stack olarak çalışabilir).

---

# 3. Map Arayüzü

- **`Map<K,V>`:** Benzersiz anahtarları (keys) değerlerle (values) eşleyen yapı.
- **`SortedMap<K,V>`:** Anahtarları artan sırada sıralı tutan harita.

---

# 4. Koleksiyonlar Üzerinde Gezinme Yöntemleri

```java
List<String> list = Arrays.asList("Java", "Kotlin", "Scala");

// For-each döngüsü
for (String lang : list) {
    System.out.println(lang);
}

// Stream API (Java 8+)
list.stream()
    .filter(s -> s.startsWith("J"))
    .forEach(System.out::println);
```
