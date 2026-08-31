# Ders: Diziler (Arrays)

Bir **dizi (array)**, tek bir türden sabit sayıda değer tutan bir kapsayıcı nesnedir (*container object*). Bir dizinin uzunluğu (*length*) dizi oluşturulduğunda belirlenir. Oluşturulduktan sonra dizinin uzunluğu sabittir.

<figure style="text-align: center;">
  <img src="_media/figures/objects-tenElementArray.gif" alt="10 Elemanlı Dizi Şeması" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">10 elemanlı bir dizi: İndeksler 0'dan 9'a kadar numaralandırılır.</figcaption>
</figure>

Dizideki her bir öğeye **eleman (element)** denir ve her elemana sayısal **indeksi (index)** ile erişilir. Yukarıdaki şekilde gösterildiği gibi numaralandırma 0'dan başlar. Örneğin 9. elemana indeks 8 ile erişilir.

1. [**Dizi Bildirimi (Declaring an Array)**](#1-dizi-bildirimi-declaring-an-array)
2. [**Dizi Oluşturma, Başlatma ve Erişim**](#2-dizi-oluşturma-başlatma-ve-erişim)
3. [**Çok Boyutlu Diziler (Multidimensional Arrays)**](#3-çok-boyutlu-diziler-multidimensional-arrays)
4. [**Dizileri Kopyalama (Copying Arrays)**](#4-dizileri-kopyalama-copying-arrays)
5. [**java.util.Arrays ile Dizi İşlemleri**](#5-javautilarrays-ile-dizi-işlemleri)
---

# 1. Dizi Bildirimi (Declaring an Array)

Bir dizi değişkenini bildirmek için dizinin tutacağı verinin türünü ve ardından köşeli parantezleri (`[]`) yazarsınız:

```java
byte[] anArrayOfBytes;
short[] anArrayOfShorts;
long[] anArrayOfLongs;
float[] anArrayOfFloats;
double[] anArrayOfDoubles;
boolean[] anArrayOfBooleans;
char[] anArrayOfChars;
String[] anArrayOfStrings;
```

> **Not:** Köşeli parantezleri dizi değişken adından sonra da koyabilirsiniz (örneğin `float anArrayOfFloats[];`). Ancak teamül, köşeli parantezleri veri türünün hemen yanına koymaktır (`float[] anArrayOfFloats;`), çünkü parantezler veri tipinin bir dizi olduğunu belirtir.

---

# 2. Dizi Oluşturma, Başlatma ve Erişim

Bir dizi değişkenini bildirmek gerçekte bir dizi oluşturmaz; yalnızca derleyiciye bu değişkenin belirtilen türde bir diziyi tutacağını söyler. Bir dizi oluşturmak için `new` işlecini kullanırsınız.

Aşağıdaki `ArrayDemo` programı bir tamsayı dizisi oluşturur, elemanlarına değerler atar ve bu değerleri standart çıktıya yazdırır:

```java
class ArrayDemo {
    public static void main(String[] args) {
        // Bir tamsayı dizisi bildir
        int[] anArray;

        // 10 tamsayı için bellek ayır
        anArray = new int[10];
           
        // İlk elemanı başlat
        anArray[0] = 100;
        // İkinci elemanı başlat
        anArray[1] = 200;
        // ve diğerleri...
        anArray[2] = 300;
        anArray[3] = 400;
        anArray[4] = 500;
        anArray[5] = 600;
        anArray[6] = 700;
        anArray[7] = 800;
        anArray[8] = 900;
        anArray[9] = 1000;

        System.out.println("Element at index 0: " + anArray[0]);
        System.out.println("Element at index 1: " + anArray[1]);
        System.out.println("Element at index 2: " + anArray[2]);
        System.out.println("Element at index 3: " + anArray[3]);
        System.out.println("Element at index 4: " + anArray[4]);
        System.out.println("Element at index 5: " + anArray[5]);
        System.out.println("Element at index 6: " + anArray[6]);
        System.out.println("Element at index 7: " + anArray[7]);
        System.out.println("Element at index 8: " + anArray[8]);
        System.out.println("Element at index 9: " + anArray[9]);
    }
}
```

### Kısayol Başlatma Sözdizimi (Array Initializer)
Bir diziyi tek satırda hem oluşturup hem de başlatabilirsiniz:

```java
int[] anArray = { 
    100, 200, 300,
    400, 500, 600, 
    700, 800, 900, 1000
};
```

Dizinin uzunluğu süslü parantezler arasına yazılan değerlerin sayısına göre otomatik belirlenir. Bir dizinin uzunluğunu öğrenmek için `.length` özelliğini kullanabilirsiniz (örneğin `anArray.length`).

---

# 3. Çok Boyutlu Diziler (Multidimensional Arrays)

Çok boyutlu bir dizi, bileşenleri başka diziler olan bir dizidir. İki boyutlu bir dizi satırlar ve sütunlar içeren bir tabloya benzer:

```java
class MultiDimArrayDemo {
    public static void main(String[] args) {
        String[][] names = {
            {"Mr. ", "Mrs. ", "Ms. "},
            {"Smith", "Jones"}
        };
        // Mr. Smith
        System.out.println(names[0][0] + names[1][0]);
        // Ms. Jones
        System.out.println(names[0][2] + names[1][1]);
    }
}
```

---

# 4. Dizileri Kopyalama (Copying Arrays)

`System` sınıfı, verileri bir diziden diğerine verimli bir şekilde kopyalamak için `arraycopy` metodunu sağlar:

```java
public static void arraycopy(Object src, int srcPos,
                             Object dest, int destPos, int length)
```

Aşağıdaki `ArrayCopyDemo` programı bir karakter dizisinin bir alt dizisini kopyalar:

```java
class ArrayCopyDemo {
    public static void main(String[] args) {
        char[] copyFrom = { 'd', 'e', 'c', 'a', 'f', 'f', 'e',
			    'i', 'n', 'a', 't', 'e', 'd' };
        char[] copyTo = new char[7];

        System.arraycopy(copyFrom, 2, copyTo, 0, 7);
        System.out.println(new String(copyTo)); // "caffein" yazar
    }
}
```

Java SE 6'dan itibaren `java.util.Arrays.copyOfRange` metodu da kullanılabilir:

```java
class ArrayCopyOfDemo {
    public static void main(String[] args) {
        char[] copyFrom = {'d', 'e', 'c', 'a', 'f', 'f', 'e',
            'i', 'n', 'a', 't', 'e', 'd'};
            
        char[] copyTo = java.util.Arrays.copyOfRange(copyFrom, 2, 9);
        
        System.out.println(new String(copyTo));
    }
}
```

---

# 5. java.util.Arrays ile Dizi İşlemleri

`java.util.Arrays` sınıfı, dizileri işlemek için birçok yararlı statik metot içerir:

- **Arama (`binarySearch`):** Sıralı bir dizide belirli bir değeri ikili arama algoritmasıyla arar.
- **Karşılaştırma (`equals`):** İki dizinin eşit olup olmadığını (aynı elemanları aynı sırada içerip içermediğini) kontrol eder.
- **Doldurma (`fill`):** Dizinin her elemanına belirli bir değeri atar.
- **Sıralama (`sort`):** Bir diziyi küçükten büyüğe sıralar.
- **Paralel Sıralama (`parallelSort`):** Çok çekirdekli sistemlerde büyük dizileri paralel sıralar.
- **Metne Dönüştürme (`toString`):** Dizinin içeriğini okunabilir bir String formatına dönüştürür.
