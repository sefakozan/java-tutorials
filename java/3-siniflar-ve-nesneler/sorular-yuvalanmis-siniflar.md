# Sorular ve Alıştırmalar: Yuvalanmış Sınıflar (Nested Classes)

## Sorular

1. `Problem.java` programı derlenmiyor. Derlenmesini sağlamak için ne yapmanız gerekir? Neden?

```java
public class Problem {
    String s;
    static class Inner {
        void testMethod() {
            s = "Set from Inner";
        }
    }
}
```

2. Aşağıdaki soruları yanıtlamanıza yardımcı olması için `javax.swing` paketindeki `Box` sınıfının Java API belgelerini kullanın:

a. `Box` hangi statik yuvalanmış sınıfı tanımlar?  
b. `Box` hangi iç sınıfı tanımlar?  
c. `Box`'ın iç sınıfının üst sınıfı nedir?  
d. `Box`'ın hangi yuvalanmış sınıfını herhangi bir sınıftan kullanabilirsiniz?  
e. `Box`'ın `Filler` sınıfının bir örneğini nasıl oluşturursunuz?

---

## Alıştırmalar

1. `Class1.java` dosyasını derleyin ve çalıştırın. Çıktı nedir?

```java
public class Class1 {
    protected InnerClass1 ic;

    public Class1() {
        ic = new InnerClass1();
    }

    public void displayStrings() {
        System.out.println(ic.getString() + ".");
        System.out.println(ic.getAnotherString() + ".");
    }

    static public void main(String[] args) {
        Class1 c1 = new Class1();
        c1.displayStrings();
    }

    protected class InnerClass1 {
        public String getString() {
            return "InnerClass1: getString invoked";
        }

        public String getAnotherString() {
            return "InnerClass1: getAnotherString invoked";
        }
    }
}
```

2. Aşağıdaki alıştırmalar, [İç Sınıf Örneği](java/3-siniflar-ve-nesneler/ic-siniflar.md) bölümünde tartışılan `DataStructure.java` sınıfının değiştirilmesini içerir:

a. `print(DataStructureIterator iterator)` adında bir metot tanımlayın. `printEven` metoduyla aynı işlevi gerçekleştirmesi için bu metodu `EvenIterator` sınıfının bir örneğiyle çağırın.

b. `print(DataStructureIterator iterator)` metodunu tek indeks değerine sahip öğeleri yazdıracak şekilde çağırın. Metodun argümanı olarak `DataStructureIterator` arayüzünün bir örneği yerine bir anonim sınıf kullanın.

c. `print(DataStructureIterator iterator)` ile aynı işlevi gören `print(java.util.function.Function<Integer, Boolean> iterator)` adında bir metot tanımlayın. Çift indeks değerine sahip öğeleri yazdırmak için bu metodu bir lambda ifadesi ile çağırın. Tek indeks değerine sahip öğeleri yazdırmak için bu metodu bir kez daha lambda ifadesi ile çağırın.

d. Aşağıdaki iki ifadenin çift indeks değerine sahip öğeleri ve ardından tek indeks değerine sahip öğeleri yazdırmasını sağlayacak iki metot tanımlayın:

```java
DataStructure ds = new DataStructure();
// ...
ds.print(DataStructure::isEvenIndex);
ds.print(DataStructure::isOddIndex);
```

---

## Yanıtlar

### Soruların Yanıtları

1. **Soru**: `Problem.java` programı derlenmiyor. Derlenmesini sağlamak için ne yapmanız gerekir? Neden?  
**Cevap**: `Inner` sınıfının bildiriminin önündeki `static` anahtar sözcüğünü silin. Statik bir iç sınıf, dış sınıfın örnek alanlarına (`s`) erişemez.

Düzeltilmiş kod (`ProblemSolved.java`):

```java
public class ProblemSolved {
    String s;
    class Inner {
        void testMethod() {
            s = "Set from Inner";
        }
    }
}
```

2.
a. **Soru**: `Box` hangi statik yuvalanmış sınıfı tanımlar?  
**Cevap**: `Box.Filler`

b. **Soru**: `Box` hangi iç sınıfı tanımlar?  
**Cevap**: `Box.AccessibleBox`

c. **Soru**: `Box`'ın iç sınıfının üst sınıfı nedir?  
**Cevap**: `java.awt.Container.AccessibleAWTContainer`

d. **Soru**: `Box`'ın hangi yuvalanmış sınıfını herhangi bir sınıftan kullanabilirsiniz?  
**Cevap**: `Box.Filler`

e. **Soru**: `Box`'ın `Filler` sınıfının bir örneğini nasıl oluşturursunuz?  
**Cevap**: `new Box.Filler(minDimension, prefDimension, maxDimension)`

---

### Alıştırmaların Yanıtları

1. **Soru**: `Class1` derlenip çalıştırıldığında çıktı nedir?  
**Cevap**:
```text
InnerClass1: getString invoked.
InnerClass1: getAnotherString invoked.
```

2. **`DataStructure.java` Alıştırma Çözümleri**:

```java
public class DataStructure {
    
    private final static int SIZE = 15;
    private int[] arrayOfInts = new int[SIZE];
    
    public DataStructure() {
        for (int i = 0; i < SIZE; i++) {
            arrayOfInts[i] = i;
        }
    }
    
    public void printEven() {
        DataStructureIterator iterator = this.new EvenIterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();
    }
    
    // Alıştırma 2(a)
    public void print(DataStructureIterator iterator) {
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();
    }
    
    // Alıştırma 2(c) ve 2(d)
    public void print(java.util.function.Function<Integer, Boolean> function) {
        for (int i = 0; i < SIZE; i++) {
            if (function.apply(i)) {
                System.out.print(arrayOfInts[i] + " ");
            }
        }
        System.out.println();
    }
    
    // Alıştırma 2(d) için metot referansları
    public static Boolean isEvenIndex(Integer index) {
        return (index % 2 == 0);
    }
    
    public static Boolean isOddIndex(Integer index) {
        return (index % 2 != 0);
    }
    
    interface DataStructureIterator extends java.util.Iterator<Integer> { } 

    private class EvenIterator implements DataStructureIterator {
        private int nextIndex = 0;
        
        public boolean hasNext() {
            return (nextIndex <= SIZE - 1);
        }        
        
        public Integer next() {
            Integer retValue = Integer.valueOf(arrayOfInts[nextIndex]);
            nextIndex += 2;
            return retValue;
        }
    }
    
    public static void main(String s[]) {
        DataStructure ds = new DataStructure();
        
        System.out.println("printEven():");
        ds.printEven();
        
        System.out.println("print(DataStructureIterator) ile EvenIterator:");
        ds.print(ds.new EvenIterator());
        
        System.out.println("print(DataStructureIterator) ile anonim sınıf (tek indeksler):");
        ds.print(new DataStructureIterator() {
            private int nextIndex = 1;
            public boolean hasNext() {
                return (nextIndex <= SIZE - 1);
            }
            public Integer next() {
                Integer retValue = Integer.valueOf(ds.arrayOfInts[nextIndex]);
                nextIndex += 2;
                return retValue;
            }
        });
        
        System.out.println("print(Function) ile lambda (çift indeksler):");
        ds.print(index -> index % 2 == 0);
        
        System.out.println("print(Function) ile lambda (tek indeksler):");
        ds.print(index -> index % 2 != 0);
        
        System.out.println("print(Function) ile metot referansı:");
        ds.print(DataStructure::isEvenIndex);
        ds.print(DataStructure::isOddIndex);
    }
}
```
