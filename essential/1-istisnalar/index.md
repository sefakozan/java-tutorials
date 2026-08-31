# Ders: İstisnalar (Exceptions)

Bir **istisna (exception)**, bir programın yürütülmesi sırasında normal komut akışını bozan beklenmedik bir olayın meydana gelmesidir.

1. [**İstisna Nedir ve Nasıl Fırlatılır?**](#1.-i̇stisna-nedir-ve-nasıl-fırlatılır?)
2. [**Çağrı Yığını ve İstisna Yakalama**](#2.-çağrı-yığını-ve-i̇stisna-yakalama)
3. [**try-catch-finally Blokları**](#3.-try-catch-finally-blokları)
4. [**Try-with-resources İfadesi**](#4.-try-with-resources-i̇fadesi)
5. [**Kontrollü (Checked) ve Kontrolsüz İstisnalar**](#5.-kontrollü-(checked)-ve-kontrolsüz-i̇stisnalar)
---

# 1. İstisna Nedir ve Nasıl Fırlatılır?

Bir metotta hata oluştuğunda metot bir istisna nesnesi oluşturur ve bunu çalışma zamanına iletir. Bu işleme istisna fırlatma (**throwing an exception**) denir.

<figure style="text-align: center;">
  <img src="_media/figures/exceptions-errorOccurs.gif" alt="İstisna Fırlatma" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Metot içinde hata oluşması ve istisna nesnesinin fırlatılması.</figcaption>
</figure>

---

# 2. Çağrı Yığını ve İstisna Yakalama

İstisna fırlatıldıktan sonra çalışma zamanı sistemi çağrı yığınında (call stack) bu hatayı yakalayabilecek uygun bir blok arar:

<figure style="text-align: center;">
  <img src="_media/figures/exceptions-callStack.gif" alt="Çağrı Yığınında İstisna Arama" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Çağrı yığını boyunca uygun istisna işleyicisinin aranması.</figcaption>
</figure>

---

# 3. try-catch-finally Blokları

```java
try {
    int[] numbers = {1, 2, 3};
    System.out.println(numbers[10]);
} catch (ArrayIndexOutOfBoundsException e) {
    System.err.println("Geçersiz dizi indeksi: " + e.getMessage());
} catch (Exception e) {
    System.err.println("Beklenmeyen hata: " + e.getMessage());
} finally {
    System.out.println("Temizleme adımları tamamlandı.");
}
```

---

# 4. Try-with-resources İfadesi

```java
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line = br.readLine();
    System.out.println(line);
} catch (IOException e) {
    e.printStackTrace();
}
```

---

# 5. Kontrollü (Checked) ve Kontrolsüz İstisnalar

- **Kontrollü İstisnalar (Checked Exceptions):** `IOException`, `SQLException` gibi derleyicinin yakalanmasını zorunlu tuttuğu istisnalardır.
- **Kontrolsüz İstisnalar (Unchecked Exceptions):** `NullPointerException`, `ArrayIndexOutOfBoundsException` gibi `RuntimeException` alt sınıflarıdır.
- **Hatalar (Errors):** `OutOfMemoryError` gibi sistem düzeyindeki ciddi sorunlardır.
