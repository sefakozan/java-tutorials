# Diziler (Arrays)

Bir dizi (array), tek bir türden (*single type*) sabit sayıda değer tutan bir kapsayıcı nesnedir (*container object*). Bir dizinin uzunluğu, dizi oluşturulduğunda belirlenir. Oluşturulduktan sonra uzunluğu sabittir. Dizilere dair bir örneği daha önce "Hello World!" uygulamasının `main` metodunda görmüştünüz. Bu bölümde diziler daha ayrıntılı olarak ele alınmaktadır.

<figure style="text-align: center;">
  <img src="_media/figures/objects-tenElementArray.gif" alt="0'dan 9'a kadar numaralandırılmış 10 kutudan oluşan bir dizi gösterimi; 0 indeksi dizideki ilk elemanı belirtir" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">10 elemanlı bir dizi.</figcaption>
</figure>

Dizideki her bir öğeye **eleman (element)** denir ve her bir elemana sayısal **indeksi (index)** ile erişilir. Yukarıdaki çizimde gösterildiği gibi, numaralandırma 0 ile başlar. Örneğin, 9. elemana 8 numaralı indeks ile erişilir.

Aşağıdaki `ArrayDemo` programı, bir tamsayı dizisi oluşturur, diziye bazı değerler yerleştirir ve her bir değeri standart çıktıya yazdırır:

```java
class ArrayDemo {
    public static void main(String[] args) {
        // bir tamsayı dizisi bildirir
        int[] anArray;

        // 10 tamsayı için bellek ayırır
        anArray = new int[10];
           
        // ilk elemana (elemente) değer atar
        anArray[0] = 100;
        // ikinci elemana değer atar
        anArray[1] = 200;
        // ve bu şekilde devam eder
        anArray[2] = 300;
        anArray[3] = 400;
        anArray[4] = 500;
        anArray[5] = 600;
        anArray[6] = 700;
        anArray[7] = 800;
        anArray[8] = 900;
        anArray[9] = 1000;

        System.out.println("Element at index 0: "
                           + anArray[0]);
        System.out.println("Element at index 1: "
                           + anArray[1]);
        System.out.println("Element at index 2: "
                           + anArray[2]);
        System.out.println("Element at index 3: "
                           + anArray[3]);
        System.out.println("Element at index 4: "
                           + anArray[4]);
        System.out.println("Element at index 5: "
                           + anArray[5]);
        System.out.println("Element at index 6: "
                           + anArray[6]);
        System.out.println("Element at index 7: "
                           + anArray[7]);
        System.out.println("Element at index 8: "
                           + anArray[8]);
        System.out.println("Element at index 9: "
                           + anArray[9]);
    }
} 
```

Bu programın çıktısı şöyledir:

```text
Element at index 0: 100
Element at index 1: 200
Element at index 2: 300
Element at index 3: 400
Element at index 4: 500
Element at index 5: 600
Element at index 6: 700
Element at index 7: 800
Element at index 8: 900
Element at index 9: 1000
```

Gerçek dünya programlama senaryolarında, önceki örnekte olduğu gibi her bir satırı tek tek yazmak yerine, dizinin her bir elemanı üzerinde yineleme yapmak (*iterate*) için desteklenen **döngü yapılarından (looping constructs)** birini kullanırsınız. Yine de bu örnek dizi sözdizimini açıkça göstermektedir. Çeşitli döngü yapılarını (`for`, `while` ve `do-while`), [Kontrol Akış İfadeleri (Control Flow Statements)](kontrol-akisi.md) bölümünde öğreneceksiniz.

---

## Bir Diziye Referans Veren Değişken Bildirme (Declaring a Variable to Refer to an Array)

Önceki program, aşağıdaki kod satırıyla (`anArray` adında) bir dizi bildirir (*declares*):

```java
// bir tamsayı dizisi bildirir
int[] anArray;
```

Diğer türlerdeki değişken bildirimlerinde olduğu gibi, bir dizi bildiriminin de iki bileşeni vardır: dizinin türü ve dizinin adı. Bir dizinin türü `tür[]` şeklinde yazılır; burada `tür`, dizinin içerdiği elemanların veri türüdür; köşeli parantezler (*brackets*), bu değişkenin bir dizi tutacağını belirten özel sembollerdir. Dizinin boyutu (*size*), türünün bir parçası değildir (köşeli parantezlerin boş olmasının nedeni budur). Bir dizinin adı, daha önce [İsimlendirme (Naming)](java/2-dil-temelleri/degiskenler?id=isimlendirme-naming) bölümünde ele alınan kural ve geleneklere uyduğu sürece istediğiniz herhangi bir şey olabilir. Diğer türlerdeki değişkenlerde olduğu gibi, bildirim (*declaration*) işlemi aslında bir dizi oluşturmaz; yalnızca derleyiciye bu değişkenin belirtilen türde bir dizi tutacağını bildirir.

Benzer şekilde, diğer türlerde de diziler bildirebilirsiniz:

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

Köşeli parantezleri dizinin adından sonra da yerleştirebilirsiniz:

```java
// bu biçim önerilmez
float anArrayOfFloats[];
```

Ancak geleneklere göre bu biçim önerilmez; köşeli parantezler dizi türünü tanımlar ve tür belirtecinin yanında yer almalıdır.

---

## Dizi Oluşturma, Değer Verme ve Diziye Erişme (Creating, Initializing, and Accessing an Array)

Bir dizi oluşturmanın bir yolu `new` operatörü kullanmaktır. `ArrayDemo` programındaki bir sonraki ifade, 10 tamsayı elemanı için yeterli belleğe sahip bir dizi tahsis eder ve bu diziyi `anArray` değişkenine atar:

```java
// bir tamsayı dizisi oluşturur
anArray = new int[10];
```

Bu ifade eksik olursa, derleyici aşağıdakine benzer bir hata verir ve derleme başarısız olur:

### ! `ArrayDemo.java:4: Variable anArray may not have been initialized.`

Sonraki birkaç satır, dizinin her bir elemanına değer atar:

```java
anArray[0] = 100; // ilk elemana değer atar
anArray[1] = 200; // ikinci elemana değer atar
anArray[2] = 300; // ve bu şekilde devam eder
```

Her dizi elemanına sayısal indeksi ile erişilir:

```java
System.out.println("Element 1 at index 0: " + anArray[0]);
System.out.println("Element 2 at index 1: " + anArray[1]);
System.out.println("Element 3 at index 2: " + anArray[2]);
```

Alternatif olarak, bir dizi oluşturmak ve değer atamak için kısayol sözdizimini kullanabilirsiniz:

```java
int[] anArray = { 
    100, 200, 300,
    400, 500, 600, 
    700, 800, 900, 1000
};
```

Burada dizinin uzunluğu, süslü parantezler (*braces*) arasında sağlanan ve virgülle ayrılan değerlerin sayısıyla belirlenir.

Ayrıca, `String[][] names` gibi iki veya daha fazla köşeli parantez kümesi kullanarak dizilerin dizisini (aynı zamanda **çok boyutlu dizi / multidimensional array** olarak da bilinir) bildirebilirsiniz. Bu nedenle her bir elemana, karşılık gelen sayıda indeks değeriyle erişilmelidir.

Java programlama dilinde çok boyutlu bir dizi, bileşenleri kendileri de dizi olan bir dizidir. Bu, C veya Fortran'daki dizilerden farklıdır. Bunun bir sonucu olarak, satırların uzunluklarının değişkenlik göstermesine izin verilir; bu durum aşağıdaki `MultiDimArrayDemo` programında gösterilmiştir:

```java
class MultiDimArrayDemo {
    public static void main(String[] args) {
        String[][] names = {
            {"Mr. ", "Mrs. ", "Ms. "},
            {"Smith", "Jones"}
        };
        
        // 0. satırın 0. sütunu (Mr.) + 1. satırın 0. sütunu (Smith)
        System.out.println(names[0][0] + names[1][0]); // Mr. Smith
        
        // 0. satırın 2. sütunu (Ms.) + 1. satırın 1. sütunu (Jones)
        System.out.println(names[0][2] + names[1][1]); // Ms. Jones
    }
}
```

Bu programın çıktısı şöyledir:

```text
Mr. Smith
Ms. Jones
```

Son olarak, herhangi bir dizinin boyutunu belirlemek için yerleşik `length` özelliğini kullanabilirsiniz. Aşağıdaki kod, dizinin boyutunu standart çıktıya yazdırır:

```java
System.out.println(anArray.length);
```

---

## Dizileri Kopyalama (Copying Arrays)

`System` sınıfı, verileri bir diziden diğerine verimli bir şekilde kopyalamak için kullanabileceğiniz bir `arraycopy` metoduna sahiptir:

```java
public static void arraycopy(Object src, int srcPos,
                             Object dest, int destPos, int length)
```

İki `Object` bağımsız değişkeni (*arguments*), *nereden* kopyalanacağını (`src`) ve *nereye* kopyalanacağını (`dest`) belirtir. Üç `int` bağımsız değişkeni ise kaynak dizideki başlangıç konumunu (`srcPos`), hedef dizideki başlangıç konumunu (`destPos`) ve kopyalanacak dizi elemanı sayısını (`length`) belirtir.

Aşağıdaki `ArrayCopyDemo` programı, bir `String` elemanları dizisi bildirir. Dizi bileşenlerinin bir alt dizisini ikinci bir diziye kopyalamak için `System.arraycopy` metodunu kullanır:

```java
class ArrayCopyDemo {
    public static void main(String[] args) {
        String[] copyFrom = {
            "Affogato", "Americano", "Cappuccino", "Corretto", "Cortado",   
            "Doppio", "Espresso", "Frappucino", "Freddo", "Lungo", "Macchiato",      
            "Marocchino", "Ristretto" };
        
        String[] copyTo = new String[7];
        System.arraycopy(copyFrom, 2, copyTo, 0, 7);
        for (String coffee : copyTo) {
            System.out.print(coffee + " ");           
        }
    }
}
```

Bu programın çıktısı şöyledir:

```text
Cappuccino Corretto Cortado Doppio Espresso Frappucino Freddo 
```

---

## Dizi Manipülasyonları / İşlemleri (Array Manipulations)

Diziler, programlamada kullanılan güçlü ve yararlı bir kavramdır. Java SE, dizilerle ilgili en yaygın manipülasyonlardan bazılarını gerçekleştirmek için metotlar sağlar. Örneğin `ArrayCopyDemo` örneği, kaynak dizinin (*source array*) elemanları üzerinde manuel olarak yineleme yapıp her birini hedef diziye (*destination array*) yerleştirmek yerine `System` sınıfının `arraycopy` metodunu kullanır. Bu işlem arka planda gerçekleştirilerek geliştiricinin metodu çağırmak için yalnızca tek bir kod satırı kullanmasını sağlar.

Kullanım kolaylığı sağlamak adına Java SE, [`java.util.Arrays`](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html) sınıfında dizi manipülasyonlarını (dizileri kopyalama, sıralama ve arama gibi yaygın görevler) gerçekleştirmek için çeşitli metotlar sunar. Örneğin, `ArrayCopyOfDemo` örneğinde görebileceğiniz gibi, önceki örnek `java.util.Arrays` sınıfının `copyOfRange` metodunu kullanacak şekilde değiştirilebilir. Aradaki fark, `copyOfRange` metodunu kullanmanın metodu çağırmadan önce hedef diziyi oluşturmanızı gerektirmemesidir; çünkü hedef dizi metodun kendisi tarafından döndürülür:

```java
class ArrayCopyOfDemo {
    public static void main(String[] args) {
        String[] copyFrom = {
            "Affogato", "Americano", "Cappuccino", "Corretto", "Cortado",   
            "Doppio", "Espresso", "Frappucino", "Freddo", "Lungo", "Macchiato",      
            "Marocchino", "Ristretto" };
        
        String[] copyTo = java.util.Arrays.copyOfRange(copyFrom, 2, 9);        
        for (String coffee : copyTo) {
            System.out.print(coffee + " ");           
        }            
    }
}
```

Görüldüğü gibi, daha az kod satırı gerektirmesine rağmen bu programın çıktısı da aynıdır. `copyOfRange` metodunun ikinci parametresinin kopyalanacak aralığın başlangıç indeksi (dahil - *inclusively*), üçüncü parametresinin ise kopyalanacak aralığın bitiş indeksi (hariç - *exclusively*) olduğunu unutmayın. Bu örnekte, kopyalanacak aralık 9. indeksteki dizi elemanını (`Lungo` metnini içeren) kapsamaz.

`java.util.Arrays` sınıfındaki metotlar tarafından sağlanan diğer bazı yararlı işlemler şunlardır:

* **Belirli bir değeri arama (`binarySearch` metodu):** Bulunduğu indeksi elde etmek için bir dizide belirli bir değeri arar (the `binarySearch` method).
* **İki diziyi karşılaştırma (`equals` metodu):** Eşit olup olmadıklarını belirlemek için iki diziyi karşılaştırır (the `equals` method).
* **Bir diziyi doldurma (`fill` metodu):** Her bir indekse belirli bir değer yerleştirmek için bir diziyi doldurur (the `fill` method).
* **Bir diziyi artan sırada sıralama (`sort` ve `parallelSort` metotları):** Bir diziyi artan düzende sıralar (*sorting into ascending order*). Bu işlem `sort` metodu kullanılarak sıralı (*sequentially*) olarak ya da Java SE 8 ile sunulan `parallelSort` metodu kullanılarak eşzamanlı/paralel (*concurrently*) olarak yapılabilir. Çok işlemcili sistemlerde büyük dizilerin paralel olarak sıralanması, sıralı dizi sıralamasından daha hızlıdır.
* **Kaynağı dizi olan bir akış oluşturma (`stream` metodu):** Kaynak olarak bir diziyi kullanan bir akış (*stream*) oluşturur (the `stream` method). Örneğin, aşağıdaki ifade `copyTo` dizisinin içeriğini önceki örnekle aynı şekilde yazdırır:
  ```java
  java.util.Arrays.stream(copyTo).map(coffee -> coffee + " ").forEach(System.out::print);  
  ```
  Akışlar hakkında daha fazla bilgi için [Toplu İşlemler (Aggregate Operations)](https://docs.oracle.com/javase/tutorial/collections/streams/index.html) bölümüne bakın.
* **Bir diziyi dizeye/metne dönüştürme (`toString` metodu):** Bir diziyi metne (*string*) dönüştürür. `toString` metodu dizinin her bir elemanını bir dizeye dönüştürür, bunları virgüllerle ayırır ve ardından köşeli parantezlerle çevreler. Örneğin, aşağıdaki ifade `copyTo` dizisini bir dizeye dönüştürür ve yazdırır:
  ```java
  System.out.println(java.util.Arrays.toString(copyTo)); 
  ```
  Bu ifade çıktıda şunu yazdırır:
  ```text
  [Cappuccino, Corretto, Cortado, Doppio, Espresso, Frappucino, Freddo] 
  ```

