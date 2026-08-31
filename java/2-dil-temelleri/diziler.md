# Ders: Diziler (Arrays)

Bir **dizi (array)**, tek bir türe ait sabit sayıda değeri tutan bir kap nesnesidir (container object). Bir dizinin uzunluğu oluşturulduğu anda belirlenir ve oluşturulduktan sonra sabit kalır.

1. [**Dizi Bildirimi ve Bellekte Oluşturma**](#1.-dizi-bildirimi-ve-bellekte-oluşturma)
2. [**Dizi İndeksleri ve Elemanlara Erişim**](#2.-dizi-i̇ndeksleri-ve-elemanlara-erişim)
3. [**Dizi Başlatıcı Kısayolu**](#3.-dizi-başlatıcı-kısayolu)
4. [**Dizileri Kopyalama (System.arraycopy)**](#4.-dizileri-kopyalama-(system.arraycopy))
---

# 1. Dizi Bildirimi ve Bellekte Oluşturma

Bir diziyi bildirmek için değişkenin türünün ardından köşeli parantezler `[]` eklenir:

```java
// Bir tamsayı dizisi bildirimi
int[] anArray;

// 10 elemanlı bir int dizisi için bellek ayırma
anArray = new int[10];
```

---

# 2. Dizi İndeksleri ve Elemanlara Erişim

Dizi içerisindeki her bir öğeye bir tamsayı indeksi (0 tabanlı) ile başvurulur:

<figure style="text-align: center;">
  <img src="_media/figures/objects-tenElementArray.gif" alt="10 Elemanlı Dizi Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">10 elemanlı bir dizide indeksler 0 ile 9 arasındadır.</figcaption>
</figure>

```java
// Elemanlara değer atama
anArray[0] = 100;
anArray[1] = 200;
anArray[2] = 300;
anArray[3] = 400;
anArray[4] = 500;
anArray[5] = 600;
anArray[6] = 700;
anArray[7] = 800;
anArray[8] = 900;
anArray[9] = 1000;
```

---

# 3. Dizi Başlatıcı Kısayolu

Dizileri bildirirken doğrudan değerleriyle başlatabilirsiniz:

```java
int[] anArray = { 
    100, 200, 300,
    400, 500, 600, 
    700, 800, 900, 1000
};
```

---

# 4. Dizileri Kopyalama (System.arraycopy)

```java
class ArrayCopyDemo {
    public static void main(String[] args) {
        char[] copyFrom = { 'd', 'e', 'c', 'a', 'f', 'f', 'e', 'i', 'n', 'a', 't', 'e', 'd' };
        char[] copyTo = new char[7];

        System.arraycopy(copyFrom, 2, copyTo, 0, 7);
        System.out.println(new String(copyTo));
    }
}
```
