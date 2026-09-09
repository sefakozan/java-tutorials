# İç Sınıf Örneği (Inner Class Example)

Bir iç sınıfın kullanımını görmek için önce bir diziyi düşünün. Aşağıdaki örnekte bir dizi oluşturur, onu tamsayı değerlerle doldurur ve ardından yalnızca dizinin çift indeksli değerlerini artan sırada çıktılarsınız.

Aşağıdaki `DataStructure.java` örneği şunlardan oluşur:

* Sıralı tamsayı değerleriyle (0, 1, 2, 3 vb.) doldurulmuş bir dizi içeren bir `DataStructure` örneği oluşturan bir yapıcı ve dizinin çift indeks değerine sahip öğelerini yazdıran bir yöntem içeren `DataStructure` dış sınıfı.
* `Iterator<Integer>` arayüzünü genişleten `DataStructureIterator` arayüzünü uygulayan `EvenIterator` iç sınıfı. Yineleyiciler (iterators) bir veri yapısı boyunca adım adım ilerlemek için kullanılır ve genellikle son öğeyi test etme, geçerli öğeyi alma ve bir sonraki öğeye geçme metotlarına sahiptir.
* Bir `DataStructure` nesnesi (`ds`) başlatan, ardından `arrayOfInts` dizisinin çift indeks değerine sahip öğelerini yazdırmak için `printEven` metodunu çağıran bir `main` metodu.

```java
public class DataStructure {
    // Bir dizi oluştur
    private final static int SIZE = 15;
    private int[] arrayOfInts = new int[SIZE];
    
    public DataStructure() {
        // diziyi artan tamsayı değerleriyle doldur
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

    // İç sınıf, Iterator<Integer> arayüzünü genişleten 
    // DataStructureIterator arayüzünü uygular
    
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

`EvenIterator` sınıfının doğrudan `DataStructure` nesnesinin `arrayOfInts` örnek değişkenine başvurduğuna dikkat edin.

Bu örnekte gösterilenler gibi yardımcı sınıfları uygulamak için iç sınıfları kullanabilirsiniz. Kullanıcı arayüzü olaylarını (UI events) işlemek için iç sınıfların nasıl kullanılacağını bilmelisiniz, çünkü olay işleme mekanizması bunlardan kapsamlı şekilde yararlanır.

## Yerel ve Anonim Sınıflar (Local and Anonymous Classes)

İki ek iç sınıf türü daha vardır. Bir metodun gövdesi içinde bir iç sınıf bildirebilirsiniz. Bu sınıflar [yerel sınıflar (local classes)](java/3-siniflar-ve-nesneler/yerel-siniflar.md) olarak bilinir. Ayrıca bir metodun gövdesi içinde sınıfa bir ad vermeden de bir iç sınıf bildirebilirsiniz. Bu sınıflar [anonim sınıflar (anonymous classes)](java/3-siniflar-ve-nesneler/anonim-siniflar.md) olarak bilinir.

## Niteleyiciler (Modifiers)

Dış sınıfın diğer üyeleri için kullandığınız niteleyicileri iç sınıflar için de kullanabilirsiniz. Örneğin diğer sınıf üyelerine erişimi kısıtlamak için kullandığınız gibi, iç sınıflara erişimi kısıtlamak için `private`, `public` ve `protected` erişim belirteçlerini kullanabilirsiniz.
