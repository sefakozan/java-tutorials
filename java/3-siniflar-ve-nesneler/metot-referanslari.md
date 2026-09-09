# Metot Referansları (Method References)

Anonim metotlar oluşturmak için [lambda ifadelerini](java/3-siniflar-ve-nesneler/lambda-ifadeleri.md) kullanırsınız. Ancak bazen bir lambda ifadesi mevcut bir metodu çağırmaktan başka bir şey yapmaz. Bu durumlarda, mevcut metoda adıyla başvurmak genellikle daha açıktır. Metot referansları bunu yapmanıza olanak tanır; zaten bir adı olan metotlar için kompakt, okunması kolay lambda ifadeleridir.

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

Sosyal ağ uygulamanızın üyelerinin bir dizide bulunduğunu ve diziyi yaşa göre sıralamak istediğinizi varsayalım. Aşağıdaki kodu kullanabilirsiniz:

```java
Person[] rosterAsArray = roster.toArray(new Person[roster.size()]);

class PersonAgeComparator implements Comparator<Person> {
    public int compare(Person a, Person b) {
        return a.getBirthday().compareTo(b.getBirthday());
    }
}
        
Arrays.sort(rosterAsArray, new PersonAgeComparator());
```

`Arrays.sort` metodunun imzası şöyledir:

```java
static <T> void sort(T[] a, Comparator<? super T> c)
```

`Comparator` arayüzünün bir fonksiyonel arayüz olduğuna dikkat edin. Bu nedenle bir lambda ifadesi kullanabilirsiniz:

```java
Arrays.sort(rosterAsArray,
    (Person a, Person b) -> {
        return a.getBirthday().compareTo(b.getBirthday());
    }
);
```

Ancak iki `Person` nesnesinin doğum günlerini karşılaştırma yöntemi `Person.compareByAge` olarak zaten mevcuttur. Bunun yerine lambda ifadesinin gövdesinde bu yöntemi çağırabilirsiniz:

```java
Arrays.sort(rosterAsArray,
    (a, b) -> Person.compareByAge(a, b)
);
```

Bu lambda ifadesi var olan bir metodu çağırdığından, lambda ifadesi yerine bir metot referansı kullanabilirsiniz:

```java
Arrays.sort(rosterAsArray, Person::compareByAge);
```

`Person::compareByAge` metot referansı anlamsal olarak `(a, b) -> Person.compareByAge(a, b)` lambda ifadesiyle tamamen aynıdır.

## Metot Referansı Türleri (Kinds of Method References)

Dört tür metot referansı vardır:

| Tür (Kind) | Sözdizimi (Syntax) | Örnekler (Examples) |
| :--- | :--- | :--- |
| Statik bir metoda referans (Reference to a static method) | `ContainingClass::staticMethodName` | `Person::compareByAge`<br>`MethodReferencesExamples::appendStrings` |
| Belirli bir nesnenin örnek metoduna referans (Reference to an instance method of a particular object) | `containingObject::instanceMethodName` | `myComparisonProvider::compareByName`<br>`myApp::appendStrings2` |
| Belirli bir türdeki rastgele bir nesnenin örnek metoduna referans (Reference to an instance method of an arbitrary object of a particular type) | `ContainingType::methodName` | `String::compareToIgnoreCase`<br>`Person::compareTo` |
| Bir yapıcıya referans (Reference to a constructor) | `ClassName::new` | `HashSet::new` |

### Statik Bir Metoda Referans (Reference to a Static Method)

`Person::compareByAge` metot referansı, statik bir metoda yapılan bir referanstır.

### Belirli Bir Nesnenin Örnek Metoduna Referans (Reference to an Instance Method of a Particular Object)

Aşağıdaki örnek, belirli bir nesnenin bir örnek metoduna yapılan bir referanstır:

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

`myComparisonProvider::compareByName` metot referansı, `myComparisonProvider` nesnesinin bir parçası olan `compareByName` metodunu çağırır.

### Belirli Bir Türdeki Rastgele Bir Nesnenin Örnek Metoduna Referans (Reference to an Instance Method of an Arbitrary Object of a Particular Type)

Aşağıdaki örnek, belirli bir türdeki rastgele bir nesnenin bir örnek metoduna yapılan bir referanstır:

```java
String[] stringArray = { "Barbara", "James", "Mary", "John",
    "Patricia", "Robert", "Michael", "Linda" };
Arrays.sort(stringArray, String::compareToIgnoreCase);
```

Bu metot referansının karşılık gelen lambda ifadesi `(String a, String b) -> a.compareToIgnoreCase(b)` parametre listesine sahip olacaktır.

### Bir Yapıcıya Referans (Reference to a Constructor)

Tıpkı statik bir metoda başvurur gibi, `new` adını kullanarak bir yapıcıya başvurabilirsiniz. Aşağıdaki metot, öğeleri bir koleksiyondan diğerine kopyalar:

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

`Supplier<DEST>` fonksiyonel arayüzü, bağımsız değişken almayan ve bir nesne döndüren bir `get` metodu içerir. Bir yapıcı referansı ile `transferElements` metodunu şu şekilde çağırabilirsiniz:

```java
Set<Person> rosterSet = transferElements(
    roster, HashSet::new);
```

Java derleyicisi, `Person` türündeki öğeleri içeren bir `HashSet` koleksiyonu oluşturmak istediğinizi çıkarır. Alternatif olarak bunu açıkça belirtebilirsiniz:

```java
Set<Person> rosterSet = transferElements(
    roster, HashSet<Person>::new);
```
