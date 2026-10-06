# Metot Referansları (Method References)

Anonim metotlar (anonymous methods) oluşturmak için [lambda ifadelerini (lambda expressions)](java/3-siniflar-ve-nesneler/lambda-ifadeleri.md) kullanırsınız. Ancak bazen bir lambda ifadesi mevcut bir metodu çağırmaktan başka bir şey yapmaz. Bu durumlarda, mevcut metoda adıyla başvurmak genellikle daha açıktır. **Metot referansları (method references)** bunu yapmanıza olanak tanır; zaten bir adı olan metotlar için kompakt, okunması kolay lambda ifadeleridir.

[Lambda İfadeleri](java/3-siniflar-ve-nesneler/lambda-ifadeleri.md) bölümünde ele alınan `Person` sınıfını tekrar düşünün:

```java
public class Person {

    // ...
    
    LocalDate birthday;
    
    public int getAge() {
        // ...
    }
    
    public LocalDate getBirthday() {
        return birthday;
    }   

    public static int compareByAge(Person a, Person b) {
        return a.birthday.compareTo(b.birthday);
    }
    
    // ...
}
```

Sosyal ağ uygulamanızın üyelerinin bir dizide (array) bulunduğunu ve diziyi yaşa göre sıralamak istediğinizi varsayalım. Aşağıdaki kodu kullanabilirsiniz (bu bölümde açıklanan kod alıntılarını `MethodReferencesTest` örneğinde bulabilirsiniz):

```java
Person[] rosterAsArray = roster.toArray(new Person[roster.size()]);

class PersonAgeComparator implements Comparator<Person> {
    public int compare(Person a, Person b) {
        return a.getBirthday().compareTo(b.getBirthday());
    }
}
        
Arrays.sort(rosterAsArray, new PersonAgeComparator());
```

Bu `sort` çağrısının metot imzası (method signature) şöyledir:

```java
static <T> void sort(T[] a, Comparator<? super T> c)
```

`Comparator` arayüzünün bir fonksiyonel arayüz (functional interface) olduğuna dikkat edin. Bu nedenle, `Comparator`'ı uygulayan bir sınıfı tanımlayıp ardından yeni bir örneğini oluşturmak yerine bir lambda ifadesi kullanabilirsiniz:

```java
Arrays.sort(rosterAsArray,
    (Person a, Person b) -> {
        return a.getBirthday().compareTo(b.getBirthday());
    }
);
```

Ancak iki `Person` örneğinin doğum tarihlerini karşılaştıran bu metot, `Person.compareByAge` olarak zaten mevcuttur. Bunun yerine lambda ifadesinin gövdesinde bu metodu çağırabilirsiniz:

```java
Arrays.sort(rosterAsArray,
    (a, b) -> Person.compareByAge(a, b)
);
```

Bu lambda ifadesi var olan bir metodu çağırdığından, lambda ifadesi yerine bir metot referansı kullanabilirsiniz:

```java
Arrays.sort(rosterAsArray, Person::compareByAge);
```

`Person::compareByAge` metot referansı anlamsal olarak `(a, b) -> Person.compareByAge(a, b)` lambda ifadesiyle tamamen aynıdır. Her biri aşağıdaki özelliklere sahiptir:

* Formal parametre listesi `Comparator<Person>.compare`'den kopyalanmıştır; bu `(Person, Person)`'dır.
* Gövdesi `Person.compareByAge` metodunu çağırır.

## Metot Referansı Türleri (Kinds of Method References)

Dört tür metot referansı vardır:

| Tür (Kind) | Sözdizimi (Syntax) | Örnekler (Examples) |
| :--- | :--- | :--- |
| Statik bir metoda referans (Reference to a static method) | `ContainingClass::staticMethodName` | `Person::compareByAge`<br>`MethodReferencesExamples::appendStrings` |
| Belirli bir nesnenin örnek metoduna referans (Reference to an instance method of a particular object) | `containingObject::instanceMethodName` | `myComparisonProvider::compareByName`<br>`myApp::appendStrings2` |
| Belirli bir türdeki rastgele bir nesnenin örnek metoduna referans (Reference to an instance method of an arbitrary object of a particular type) | `ContainingType::methodName` | `String::compareToIgnoreCase`<br>`String::concat` |
| Bir constructor'a referans (Reference to a constructor) | `ClassName::new` | `HashSet::new` |

Aşağıdaki `MethodReferencesExamples` örneği, ilk üç tür metot referansının örneklerini içerir:

```java
import java.util.function.BiFunction;

public class MethodReferencesExamples {
    
    public static <T> T mergeThings(T a, T b, BiFunction<T, T, T> merger) {
        return merger.apply(a, b);
    }
    
    public static String appendStrings(String a, String b) {
        return a + b;
    }
    
    public String appendStrings2(String a, String b) {
        return a + b;
    }

    public static void main(String[] args) {
        
        MethodReferencesExamples myApp = new MethodReferencesExamples();

        // mergeThings metodunu bir lambda ifadesi ile çağırma
        System.out.println(MethodReferencesExamples.
            mergeThings("Hello ", "World!", (a, b) -> a + b));
        
        // Statik bir metoda referans
        System.out.println(MethodReferencesExamples.
            mergeThings("Hello ", "World!", MethodReferencesExamples::appendStrings));

        // Belirli bir nesnenin örnek metoduna referans        
        System.out.println(MethodReferencesExamples.
            mergeThings("Hello ", "World!", myApp::appendStrings2));
        
        // Belirli bir türdeki rastgele bir nesnenin
        // örnek metoduna referans
        System.out.println(MethodReferencesExamples.
            mergeThings("Hello ", "World!", String::concat));
    }
}
```

Tüm `System.out.println()` ifadeleri aynı şeyi yazdırır: `Hello World!`

`BiFunction`, `java.util.function` paketindeki birçok fonksiyonel arayüzden biridir. `BiFunction` fonksiyonel arayüzü, iki argüman kabul eden ve bir sonuç üreten bir lambda ifadesini veya metot referansını temsil edebilir.

### Statik Bir Metoda Referans (Reference to a Static Method)

`Person::compareByAge` ve `MethodReferencesExamples::appendStrings` metot referansları, statik bir metoda yapılan referanslardır.

### Belirli Bir Nesnenin Örnek Metoduna Referans (Reference to an Instance Method of a Particular Object)

Aşağıdaki, belirli bir nesnenin örnek metoduna (instance method) yapılan bir referans örneğidir:

```java
class ComparisonProvider {
    public int compareByName(Person a, Person b) {
        return a.getName().compareTo(b.getName());
    }
        
    public int compareByAge(Person a, Person b) {
        return a.getBirthday().compareTo(b.getBirthday());
    }
}
ComparisonProvider myComparisonProvider = new ComparisonProvider();
Arrays.sort(rosterAsArray, myComparisonProvider::compareByName);
```

`myComparisonProvider::compareByName` metot referansı, `myComparisonProvider` nesnesinin bir parçası olan `compareByName` metodunu çağırır. JRE, bu durumda `(Person, Person)` olan metot türü argümanlarını (method type arguments) çıkarır.

Benzer şekilde, `myApp::appendStrings2` metot referansı da `myApp` nesnesinin bir parçası olan `appendStrings2` metodunu çağırır. JRE, bu durumda `(String, String)` olan metot türü argümanlarını çıkarır.

### Belirli Bir Türdeki Rastgele Bir Nesnenin Örnek Metoduna Referans (Reference to an Instance Method of an Arbitrary Object of a Particular Type)

Aşağıdaki, belirli bir türdeki rastgele bir nesnenin örnek metoduna yapılan bir referans örneğidir:

```java
String[] stringArray = { "Barbara", "James", "Mary", "John",
    "Patricia", "Robert", "Michael", "Linda" };
Arrays.sort(stringArray, String::compareToIgnoreCase);
```

`String::compareToIgnoreCase` metot referansının eşdeğer lambda ifadesi, `a` ve `b`'nin bu örneği daha iyi açıklamak için kullanılan rastgele adlar olduğu `(String a, String b)` formal parametre listesine sahip olacaktır. Metot referansı `a.compareToIgnoreCase(b)` metodunu çağıracaktır.

Benzer şekilde, `String::concat` metot referansı da `a.concat(b)` metodunu çağıracaktır.

### Bir Constructor'a Referans (Reference to a Constructor)

`new` adını kullanarak, tıpkı statik bir metoda başvurur gibi bir constructor'a başvurabilirsiniz. Aşağıdaki metot öğeleri bir koleksiyondan diğerine kopyalar:

```java
public static <T, SOURCE extends Collection<T>, DEST extends Collection<T>>
    DEST transferElements(
        SOURCE sourceCollection,
        Supplier<DEST> collectionFactory) {
        
    DEST result = collectionFactory.get();
    for (T t : sourceCollection) {
        result.add(t);
    }
    return result;
}
```

`Supplier` fonksiyonel arayüzü, hiçbir argüman almayan ve bir nesne döndüren tek bir `get` metodu içerir. Sonuç olarak, `transferElements` metodunu bir lambda ifadesi ile aşağıdaki gibi çağırabilirsiniz:

```java
Set<Person> rosterSetLambda =
    transferElements(roster, () -> { return new HashSet<>(); });
```

Lambda ifadesi yerine bir constructor referansı (constructor reference) şu şekilde kullanabilirsiniz:

```java
Set<Person> rosterSet = transferElements(roster, HashSet::new);
```

Java derleyicisi, `Person` türündeki öğeleri içeren bir `HashSet` koleksiyonu oluşturmak istediğinizi çıkarır. Alternatif olarak bunu açıkça şu şekilde belirtebilirsiniz:

```java
Set<Person> rosterSet = transferElements(roster, HashSet<Person>::new);
```
