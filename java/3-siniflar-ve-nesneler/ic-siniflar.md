# İç Sınıf Örneği (Inner Class Example)

Bir inner class (iç sınıf) kullanımını görmek için önce bir array düşünün. Aşağıdaki örnekte bir dizi oluşturur, onu tamsayı değerlerle doldurur ve ardından yalnızca dizinin çift indeksli değerlerini artan sırada çıktılarsınız.

Aşağıdaki `DataStructure.java` örneği şunlardan oluşur:

* Sıralı tamsayı değerleriyle (0, 1, 2, 3 vb.) doldurulmuş bir dizi içeren bir `DataStructure` instance'ı (örneği) oluşturan bir constructor ve dizinin çift indeks değerine sahip öğelerini yazdıran bir method içeren `DataStructure` outer class'ı (dış sınıfı).
* `Iterator<Integer>` interface'ini extend eden `DataStructureIterator` interface'ini implement eden `EvenIterator` inner class'ı (iç sınıfı). Iterator'lar bir veri yapısı boyunca adım adım ilerlemek için kullanılır ve genellikle son öğeyi test etme, geçerli öğeyi alma ve bir sonraki öğeye geçme method'larına sahiptir.
* Bir `DataStructure` nesnesini (`ds`) instantiate eden (örneklendiren), ardından `arrayOfInts` dizisinin çift indeks değerine sahip öğelerini yazdırmak için `printEven` method'unu çağıran bir `main` method'u.

```java
public class DataStructure {
    
    // Bir dizi oluştur
    private final static int SIZE = 15;
    private int[] arrayOfInts = new int[SIZE];
    
    public DataStructure() {
        // Diziyi artan tamsayı değerleriyle doldur
        for (int i = 0; i < SIZE; i++) {
            arrayOfInts[i] = i;
        }
    }
    
    public void printEven() {
        
        // Dizinin çift indekslerinin değerlerini yazdır
        DataStructureIterator iterator = this.new EvenIterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();
    }
    
    interface DataStructureIterator extends java.util.Iterator<Integer> { } 

    // Inner class, Iterator<Integer> interface'ini extend eden 
    // DataStructureIterator interface'ini implement eder
    
    private class EvenIterator implements DataStructureIterator {
        
        // Dizi boyunca baştan itibaren adım atmaya başla
        private int nextIndex = 0;
        
        public boolean hasNext() {
            
            // Geçerli öğenin dizideki son öğe olup olmadığını kontrol et
            return (nextIndex <= SIZE - 1);
        }        
        
        public Integer next() {
            
            // Dizinin çift indeksinin değerini kaydet
            Integer retValue = Integer.valueOf(arrayOfInts[nextIndex]);
            
            // Bir sonraki çift öğeyi al
            nextIndex += 2;
            return retValue;
        }
    }
    
    public static void main(String s[]) {
        
        // Diziyi tamsayı değerleriyle doldur ve yalnızca
        // çift indekslerin değerlerini yazdır
        DataStructure ds = new DataStructure();
        ds.printEven();
    }
}
```

Çıktı şudur:

```text
0 2 4 6 8 10 12 14 
```

`EvenIterator` sınıfının doğrudan `DataStructure` nesnesinin `arrayOfInts` instance variable'ına (örnek değişkenine) başvurduğuna dikkat edin.

Bu örnekte gösterilene benzer helper class'ları (yardımcı sınıfları) implement etmek için inner class'ları kullanabilirsiniz. Kullanıcı arayüzü event'lerini (UI events / olayları) handle etmek (işlemek) için inner class'ların nasıl kullanılacağını bilmelisiniz; çünkü event-handling mekanizması inner class'lardan kapsamlı şekilde yararlanır.

## Yerel ve Anonim Sınıflar (Local and Anonymous Classes)

İki ek inner class türü daha vardır. Bir method'un gövdesi içinde bir inner class declare edebilirsiniz (bildirebilirsiniz). Bu sınıflar [local classes (yerel sınıflar)](java/3-siniflar-ve-nesneler/yerel-siniflar.md) olarak bilinir. Ayrıca bir method'un gövdesi içinde sınıfa bir ad vermeden de bir inner class declare edebilirsiniz. Bu sınıflar [anonymous classes (anonim sınıflar)](java/3-siniflar-ve-nesneler/anonim-siniflar.md) olarak bilinir.

## Niteleyiciler (Modifiers)

Outer class'ın diğer üyeleri için kullandığınız modifier'ları (niteleyicileri) inner class'lar için de kullanabilirsiniz. Örneğin diğer sınıf üyelerine erişimi kısıtlamak için kullandığınız gibi, inner class'lara erişimi kısıtlamak için de `private`, `public` ve `protected` access specifier'larını (erişim belirteçlerini) kullanabilirsiniz.
