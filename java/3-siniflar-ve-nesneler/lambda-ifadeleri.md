# Lambda İfadeleri (Lambda Expressions)

Anonim sınıflarla ilgili bir sorun, anonim sınıfınızın uygulamasının yalnızca tek bir metot içeren bir arayüz gibi çok basit olması durumunda, anonim sınıfların sözdiziminin hantal ve belirsiz görünebilmesidir. Bu durumlarda genellikle bir düğmeye tıklandığında hangi eylemin gerçekleştirilmesi gerektiği gibi, işlevselliği başka bir metoda bir bağımsız değişken (argüman) olarak aktarmaya çalışırsınız. Lambda ifadeleri bunu yapmanıza, işlevselliği bir metot argümanı veya kodu veri olarak ele almanıza olanak tanır.

Önceki bölüm olan [Anonim Sınıflar](java/3-siniflar-ve-nesneler/anonim-siniflar.md), bir temel sınıfı ona bir ad vermeden nasıl uygulayacağınızı gösterir. Bu genellikle adlandırılmış bir sınıftan daha özlü olsa da, yalnızca tek bir metoda sahip sınıflar için anonim bir sınıf bile biraz aşırı ve hantal görünür. Lambda ifadeleri, tek metotlu sınıfların örneklerini daha derli toplu ifade etmenizi sağlar.

Bu bölüm şu konuları kapsar:

* Lambda İfadeleri İçin İdeal Kullanım Durumu (Ideal Use Case for Lambda Expressions)
  * Yaklaşım 1: Tek Bir Özellikle Eşleşen Üyeleri Arayan Metotlar Oluşturma
  * Yaklaşım 2: Daha Genelleştirilmiş Arama Metotları Oluşturma
  * Yaklaşım 3: Arama Ölçütü Kodunu Bir Yerel Sınıfta Belirtme
  * Yaklaşım 4: Arama Ölçütü Kodunu Bir Anonim Sınıfta Belirtme
  * Yaklaşım 5: Arama Ölçütü Kodunu Bir Lambda İfadesi ile Belirtme
  * Yaklaşım 6: Lambda İfadeleriyle Standart Fonksiyonel Arayüzleri Kullanma
  * Yaklaşım 7: Uygulamanız Genelinde Lambda İfadelerini Kullanma
  * Yaklaşım 8: Generics (Genel Türler) Yapısını Daha Kapsamlı Kullanma
  * Yaklaşım 9: Lambda İfadelerini Parametre Olarak Kabul Eden Toplu İşlemleri Kullanma
* GUI Uygulamalarında Lambda İfadeleri (Lambda Expressions in GUI Applications)
* Lambda İfadelerinin Sözdizimi (Syntax of Lambda Expressions)
* Çevreleyen Kapsamın Yerel Değişkenlerine Erişme (Accessing Local Variables of the Enclosing Scope)
* Hedef Türleme (Target Typing)
  * Hedef Türler ve Metot Argümanları (Target Types and Method Arguments)
* Serileştirme (Serialization)

## Lambda İfadeleri İçin İdeal Kullanım Durumu (Ideal Use Case for Lambda Expressions)

Bir sosyal ağ uygulaması oluşturduğunuzu varsayalım. Bir yöneticinin belirli kriterleri karşılayan üyeler üzerinde, örneğin bir mesaj göndermek gibi herhangi bir tür eylemi gerçekleştirmesini sağlayan bir özellik oluşturmak istiyorsunuz. Aşağıdaki tablo bu kullanım durumunu ayrıntılı olarak açıklamaktadır:

| Alan (Field) | Açıklama (Description) |
| :--- | :--- |
| Ad (Name) | Seçilen üyeler üzerinde işlem gerçekleştirme |
| Birincil Aktör (Primary Actor) | Yönetici (Administrator) |
| Ön Koşullar (Preconditions) | Yönetici sisteme giriş yapmıştır. |
| Son Koşullar (Postconditions) | Eylem yalnızca belirtilen kriterlere uyan üyeler üzerinde gerçekleştirilir. |

Sosyal ağ uygulamasının üyelerinin aşağıdaki `Person` sınıfı tarafından temsil edildiğini varsayalım:

```java
public class Person {

    public enum Sex {
        MALE, FEMALE
    }

    String name;
    LocalDate birthday;
    Sex gender;
    String emailAddress;

    public int getAge() {
        // ...
    }

    public void printPerson() {
        // ...
    }
}
```

Sosyal ağ uygulamanızın üyelerinin bir `List<Person>` örneğinde saklandığını varsayalım.

Bu bölüm, belirli kriterlerle eşleşen üyeleri arayan metotlarla başlayan saf bir yaklaşımla başlar. Kodu yerel ve anonim sınıflarla genelleştirir ve ardından bir lambda ifadesi kullanarak verimli ve özlü bir yaklaşımla tamamlar.

### Yaklaşım 1: Tek Bir Özellikle Eşleşen Üyeleri Arayan Metotlar Oluşturma

Basit bir yaklaşım birkaç metot oluşturmaktır; her metot yaş veya cinsiyet gibi tek bir özellikle eşleşen üyeleri arar. Aşağıdaki metot, belirtilen bir yaştan daha büyük olan üyeleri yazdırır:

```java
public static void printPersonsOlderThan(List<Person> roster, int age) {
    for (Person p : roster) {
        if (p.getAge() >= age) {
            p.printPerson();
        }
    }
}
```

Bu yaklaşım uygulamanızı *kırılgan (brittle)* hale getirebilir; bu, bir güncellemenin (örneğin daha yeni veri türleri) uygulamanın çalışmamasına neden olma olasılığıdır. `Person` sınıfını değiştirir ve farklı üye değişkenleri içerecek şekilde güncellerseniz veya yaşı kaydetmek ve ölçmek için farklı bir veri türü ya da algoritma kullanırsa, birçok API'yi yeniden yazmanız gerekir. Ayrıca bu yaklaşım gereksiz yere kısıtlayıcıdır; örneğin belirli bir yaştan *küçük* olan üyeleri yazdırmak isterseniz ne olur?

### Yaklaşım 2: Daha Genelleştirilmiş Arama Metotları Oluşturma

Aşağıdaki metot `printPersonsOlderThan` metodundan daha geneldir; belirtilen bir yaş aralığındaki üyeleri yazdırır:

```java
public static void printPersonsWithinAgeRange(
    List<Person> roster, int low, int high) {
    for (Person p : roster) {
        if (low <= p.getAge() && p.getAge() < high) {
            p.printPerson();
        }
    }
}
```

Belirli bir cinsiyetteki üyeleri veya belirli bir cinsiyet ve yaş aralığının birleşimini yazdırmak isterseniz ne olur? `Person` sınıfını değiştirip medeni durum veya ikamet yeri gibi başka nitelikler eklerseniz ne olur? Bu metot `printPersonsOlderThan`'dan daha genel olsa da, her olası arama sorgusu için ayrı bir metot yazmaya çalışmak yine de kırılgan koda yol açabilir. Bunun yerine, arama kriterlerini belirten kodu farklı bir sınıfa ayırabilirsiniz.

### Yaklaşım 3: Arama Ölçütü Kodunu Bir Yerel Sınıfta Belirtme

Aşağıdaki metot, belirttiğiniz arama kriterleriyle eşleşen üyeleri yazdırır:

```java
public static void printPersons(
    List<Person> roster, CheckPerson tester) {
    for (Person p : roster) {
        if (tester.test(p)) {
            p.printPerson();
        }
    }
}
```

Bu metot, `tester.test` metodunu çağırarak `roster` Listesindeki her bir `Person` örneğinin `CheckPerson` parametresinde belirtilen arama kriterlerini karşılayıp karşılamadığını kontrol eder. `tester.test` metodu `true` değerini döndürürse, `Person` örneğinde `printPerson` metodu çağrılır.

Arama kriterlerini belirtmek için `CheckPerson` arayüzünü uygularsınız:

```java
interface CheckPerson {
    boolean test(Person p);
}
```

Aşağıdaki sınıf, `test` metodunun bir uygulamasını belirterek `CheckPerson` arayüzünü uygular. Bu metot, Amerika Birleşik Devletleri'nde zorunlu askerlik hizmetine uygun üyeleri filtreler: `gender` alanı `Person.Sex.MALE` ise ve `getAge` değeri 18 ile 25 arasındaysa `true` değerini döndürür:

```java
class CheckPersonEligibleForSelectiveService implements CheckPerson {
    public boolean test(Person p) {
        return p.gender == Person.Sex.MALE &&
            p.getAge() >= 18 &&
            p.getAge() <= 25;
    }
}
```

Bu sınıfı kullanmak için yeni bir örneğini oluşturur ve `printPersons` metodunu çağırırsınız:

```java
printPersons(
    roster, new CheckPersonEligibleForSelectiveService());
```

Bu yaklaşım daha az kırılgandır — `Person` yapısını değiştirirseniz metotları yeniden yazmanız gerekmez — ancak yine de ekstra kod gerektirir: uygulamanızda gerçekleştirmeyi planladığınız her arama için yeni bir arayüz ve yerel bir sınıf. `CheckPersonEligibleForSelectiveService` bir arayüz uyguladığı için, yerel bir sınıf yerine anonim bir sınıf kullanabilir ve her arama için yeni bir sınıf bildirme gereksinimini ortadan kaldırabilirsiniz.

### Yaklaşım 4: Arama Ölçütü Kodunu Bir Anonim Sınıfta Belirtme

Aşağıdaki `printPersons` metodu çağrısının argümanlarından biri, Amerika Birleşik Devletleri'nde zorunlu askerlik hizmetine uygun üyeleri filtreleyen anonim bir sınıftır:

```java
printPersons(
    roster,
    new CheckPerson() {
        public boolean test(Person p) {
            return p.gender == Person.Sex.MALE
                && p.getAge() >= 18
                && p.getAge() <= 25;
        }
    }
);
```

Bu yaklaşım gereken kod miktarını azaltır çünkü planladığınız her arama için yeni bir sınıf oluşturmanız gerekmez. Ancak `CheckPerson` arayüzünün yalnızca tek bir metot içerdiği düşünüldüğünde, anonim sınıfların sözdizimi hala hacimli kalmaktadır. Bu durumda, bir sonraki bölümde açıklandığı gibi anonim bir sınıf yerine bir lambda ifadesi kullanabilirsiniz.

### Yaklaşım 5: Arama Ölçütü Kodunu Bir Lambda İfadesi ile Belirtme

`CheckPerson` arayüzü bir *fonksiyonel arayüzdür (functional interface)*. Fonksiyonel arayüz, yalnızca tek bir [soyut metot (abstract method)](java/5-arayuzler-ve-kalitim/soyut-siniflar.md) içeren herhangi bir arayüzdür. (Bir fonksiyonel arayüz, bir veya daha fazla [varsayılan metot (default methods)](java/5-arayuzler-ve-kalitim/arayuzler.md) veya [statik metot (static methods)](java/5-arayuzler-ve-kalitim/arayuzler.md) içerebilir.) Bir fonksiyonel arayüz yalnızca bir soyut metot içerdiğinden, o metodu uygularken adını atlayabilirsiniz. Bunu yapmak için anonim bir sınıf ifadesi kullanmak yerine bir *lambda ifadesi* kullanırsınız:

```java
printPersons(
    roster,
    (Person p) -> p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25
);
```

Parametre türünü de atlayabilirsiniz (derleyici bunu bağlamdan çıkarır):

```java
printPersons(
    roster,
    p -> p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25
);
```

### Yaklaşım 6: Lambda İfadeleriyle Standart Fonksiyonel Arayüzleri Kullanma

`CheckPerson` arayüzünü tekrar düşünün:

```java
interface CheckPerson {
    boolean test(Person p);
}
```

Bu oldukça basit bir arayüzdür. Tek bir soyut metot içerdiği için fonksiyonel bir arayüzdür. Bu metot bir parametre alır ve bir boolean değer döndürür. Metot o kadar basittir ki uygulamanızda tanımlamaya değmeyebilir. Bu nedenle JDK, `java.util.function` paketinde bulabileceğiniz birkaç standart fonksiyonel arayüz tanımlar.

Örneğin, `CheckPerson` yerine `Predicate<T>` arayüzünü kullanabilirsiniz. Bu arayüz `boolean test(T t)` metodunu içerir:

```java
interface Predicate<T> {
    boolean test(T t);
}
```

`Predicate<T>` arayüzü genel bir arayüz (generic interface) örneğidir. Genel türler (generics), açılı parantezler (`<>`) içinde bir veya daha fazla tür parametresi belirtir. Bu arayüz yalnızca bir tür parametresi `T` içerir. Bir genel türü somut tür argümanlarıyla bildirdiğinizde veya somutlaştırdığınızda parametrize edilmiş bir türe sahip olursunuz. Örneğin `Predicate<Person>` parametrize edilmiş bir türdür:

```java
public static void printPersonsWithPredicate(
    List<Person> roster, Predicate<Person> tester) {
    for (Person p : roster) {
        if (tester.test(p)) {
            p.printPerson();
        }
    }
}
```

Sonuç olarak aşağıdaki metot çağrısı, Yaklaşım 3'te `printPersons` çağrısıyla aynıdır:

```java
printPersonsWithPredicate(
    roster,
    p -> p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25
);
```

### Yaklaşım 7: Uygulamanız Genelinde Lambda İfadelerini Kullanma

`printPersonsWithPredicate` metodunu tekrar inceleyin:

```java
public static void printPersonsWithPredicate(
    List<Person> roster, Predicate<Person> tester) {
    for (Person p : roster) {
        if (tester.test(p)) {
            p.printPerson();
        }
    }
}
```

Bu metot, `tester` parametresinde belirtilen kriterleri karşılayıp karşılamadığını kontrol eder. Kriterleri karşılıyorsa `Person` örneğinde `printPerson` metodunu çağırır.

`printPerson` metodunu çağırmak yerine, kriterleri karşılayan `Person` örnekleri üzerinde gerçekleştirilecek farklı bir eylem belirtebilirsiniz. Bu eylemi bir lambda ifadesi ile belirtebilirsiniz. Bir argüman alan ve hiçbir şey döndürmeyen (void dönüş türü) bir eylem için bir fonksiyona ihtiyacınız vardır. Bunun için `java.util.function.Consumer<T>` fonksiyonel arayüzünü kullanabilirsiniz; bu arayüz `void accept(T t)` metodunu içerir. Aşağıdaki metot, `p.printPerson()` çağrısını `accept` metodunu çağıran bir `Consumer<Person>` örneğiyle değiştirir:

```java
public static void processPersons(
    List<Person> roster,
    Predicate<Person> tester,
    Consumer<Person> block) {
    for (Person p : roster) {
        if (tester.test(p)) {
            block.accept(p);
        }
    }
}
```

Aşağıdaki metot çağrısı, zorunlu askerlik hizmetine uygun üyeleri yazdırır:

```java
processPersons(
     roster,
     p -> p.getGender() == Person.Sex.MALE
         && p.getAge() >= 18
         && p.getAge() <= 25,
     p -> p.printPerson()
);
```

Üyelerin profillerini yazdırmak yerine daha fazlasını yapmak isterseniz, örneğin üye profillerini doğrulamak veya iletişim bilgilerini almak gibi? Bu durumda bir değer döndüren bir fonksiyona ihtiyacınız vardır. `java.util.function.Function<T, R>` arayüzü `R apply(T t)` metodunu içerir. Aşağıdaki metot, `mapper` parametresi tarafından belirtilen verileri alır ve ardından `block` parametresi tarafından belirtilen eylemi gerçekleştirir:

```java
public static void processPersonsWithFunction(
    List<Person> roster,
    Predicate<Person> tester,
    Function<Person, String> mapper,
    Consumer<String> block) {
    for (Person p : roster) {
        if (tester.test(p)) {
            String data = mapper.apply(p);
            block.accept(data);
        }
    }
}
```

Aşağıdaki çağrı, zorunlu askerlik hizmetine uygun her üyenin e-posta adresini alır ve yazdırır:

```java
processPersonsWithFunction(
    roster,
    p -> p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25,
    p -> p.getEmailAddress(),
    email -> System.out.println(email)
);
```

### Yaklaşım 8: Generics (Genel Türler) Yapısını Daha Kapsamlı Kullanma

`processPersonsWithFunction` metodunu tekrar inceleyin. Aşağıda, herhangi bir veri türündeki öğeleri içeren bir koleksiyonu kabul eden genel bir sürümü verilmiştir:

```java
public static <X, Y> void processElements(
    Iterable<X> source,
    Predicate<X> tester,
    Function <X, Y> mapper,
    Consumer<Y> block) {
    for (X p : source) {
        if (tester.test(p)) {
            Y data = mapper.apply(p);
            block.accept(data);
        }
    }
}
```

Zorunlu askerlik hizmetine uygun üyelerin e-posta adreslerini yazdırmak için `processElements` metodunu şu şekilde çağırabilirsiniz:

```java
processElements(
    roster,
    p -> p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25,
    p -> p.getEmailAddress(),
    email -> System.out.println(email)
);
```

### Yaklaşım 9: Lambda İfadelerini Parametre Olarak Kabul Eden Toplu İşlemleri Kullanma

Aşağıdaki örnek, `roster` koleksiyonundaki zorunlu askerlik hizmetine uygun üyelerin e-posta adreslerini yazdırmak için toplu işlemleri (aggregate operations) kullanır:

```java
roster
    .stream()
    .filter(
        p -> p.getGender() == Person.Sex.MALE
            && p.getAge() >= 18
            && p.getAge() <= 25)
    .map(p -> p.getEmailAddress())
    .forEach(email -> System.out.println(email));
```

Aşağıdaki tablo, `processElements` metodunun gerçekleştirdiği her bir eylemi karşılık gelen toplu işlemle eşleştirir:

| `processElements` Eylemi (`processElements` Action) | Toplu İşlem (Aggregate Operation) |
| :--- | :--- |
| Bir nesne kaynağı elde etme (Obtain a source of objects) | `Stream<E> stream()` |
| Bir `Predicate` nesnesiyle eşleşen nesneleri filtreleme (Filter objects that match a `Predicate` object) | `Stream<T> filter(Predicate<? super T> predicate)` |
| Nesneleri başka bir değere eşleme (Map objects to another value) | `Stream<R> map(Function<? super T, ? extends R> mapper)` |
| Bir `Consumer` nesnesi tarafından belirtilen bir eylemi gerçekleştirme (Perform an action specified by a `Consumer` object) | `void forEach(Consumer<? super T> action)` |

`filter`, `map` ve `forEach` işlemleri *toplu işlemlerdir (aggregate operations)*. Toplu işlemler öğeleri doğrudan bir koleksiyondan değil, bir akıştan (stream) işler. Bir akış bir dizi öğedir. Bir koleksiyonun aksine, verileri depolayan bir veri yapısı değildir; bunun yerine bir kaynak (örneğin bir koleksiyon) üzerinden öğeleri bir işlem hattı (pipeline) boyunca taşır.

## GUI Uygulamalarında Lambda İfadeleri (Lambda Expressions in GUI Applications)

Grafik kullanıcı arayüzü (GUI) uygulamalarında olayları işlemek için genellikle anonim sınıflar kullanılır. Örneğin JavaFX'te bir düğmenin tıklanmasını işlemek için:

```java
btn.setOnAction(new EventHandler<ActionEvent>() {
    @Override
    public void handle(ActionEvent event) {
        System.out.println("Hello World!");
    }
});
```

`EventHandler<ActionEvent>` arayüzü yalnızca tek bir metot içerdiğinden, bir lambda ifadesi kullanabilirsiniz:

```java
btn.setOnAction(
    event -> System.out.println("Hello World!")
);
```

## Lambda İfadelerinin Sözdizimi (Syntax of Lambda Expressions)

Bir lambda ifadesi şunlardan oluşur:

* Parantez içine alınmış, virgülle ayrılmış biçimsel parametreler listesi. `CheckPerson.test` metodunda `Person p` parametresini temsil eden `(Person p)` gibi. Parametrelerin veri türünü atlayabilirsiniz. Ayrıca yalnızca bir parametre varsa parantezleri de atlayabilirsiniz; örneğin `p -> ...`.
* Ok belirteci: `->`
* Tek bir ifadeden veya bir ifade bloğundan oluşan bir gövde. Tek bir ifade belirtirseniz, Java çalışma zamanı ifadeyi değerlendirir ve değerini döndürür. Alternatif olarak bir `return` ifadesi kullanabilirsiniz:

```java
p -> p.getGender() == Person.Sex.MALE 
    && p.getAge() >= 18 
    && p.getAge() <= 25
```

veya:

```java
p -> {
    return p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25;
}
```

Bir `return` ifadesi tek başına bir ifade değildir; süslü parantezler `{}` içine alınmalıdır.

Aşağıdaki `Calculator` örneği, birden fazla parametre alan lambda ifadelerini gösterir:

```java
public class Calculator {
  
    interface IntegerMath {
        int operation(int a, int b);   
    }
  
    public int operateBinary(int a, int b, IntegerMath op) {
        return op.operation(a, b);
    }
 
    public static void main(String... args) {
    
        Calculator myApp = new Calculator();
        IntegerMath addition = (a, b) -> a + b;
        IntegerMath subtraction = (a, b) -> a - b;
        System.out.println("40 + 2 = " +
            myApp.operateBinary(40, 2, addition));
        System.out.println("20 - 10 = " +
            myApp.operateBinary(20, 10, subtraction));    
    }
}
```

## Çevreleyen Kapsamın Yerel Değişkenlerine Erişme (Accessing Local Variables of the Enclosing Scope)

Yerel ve anonim sınıflar gibi, lambda ifadeleri de değişkenleri [yakalayabilir (capture)](java/3-siniflar-ve-nesneler/yerel-siniflar.md#cevreleyen-bir-sinifin-uyelerine-erisme-accessing-members-of-an-enclosing-class); çevreleyen kapsamın yerel değişkenlerine aynı erişime sahiptirler. Ancak yerel ve anonim sınıfların aksine, lambda ifadeleri herhangi bir gölgeleme (shadowing) sorununa yol açmaz. Lambda ifadeleri *sözcüksel olarak kapsamlandırılmıştır (lexically scoped)*. Bu, üst türlerinden herhangi bir adı miras almadıkları veya yeni bir kapsam düzeyi getirmedikleri anlamına gelir. Bir lambda ifadesindeki bildirimler, çevreleyen ortamda olduğu gibi yorumlanır.

```java
import java.util.function.Consumer;

public class LambdaScopeTest {

    public int x = 0;

    class FirstLevel {

        public int x = 1;

        void methodInFirstLevel(int x) {
            
            // Aşağıdaki ifade bir derleyici hatası üretir: 
            // Lambda ifadesinin x parametresi, 
            // çevreleyen kapsamda tanımlanan methodInFirstLevel 
            // metodunun x parametresiyle aynı adı taşıyamaz.
            // 
            // Consumer<Integer> myConsumer = (x) -> 
            //     System.out.println("x = " + x);

            Consumer<Integer> myConsumer = (y) -> 
            {
                System.out.println("x = " + x); // methodInFirstLevel parametresine başvurur
                System.out.println("y = " + y);
                System.out.println("this.x = " + this.x); // FirstLevel.x alanına başvurur
                System.out.println("LambdaScopeTest.this.x = " +
                    LambdaScopeTest.this.x);
            };

            myConsumer.accept(x);

        }
    }

    public static void main(String... args) {
        LambdaScopeTest st = new LambdaScopeTest();
        LambdaScopeTest.FirstLevel fl = st.new FirstLevel();
        fl.methodInFirstLevel(23);
    }
}
```

Bu örnek şu çıktıyı üretir:

```text
x = 23
y = 23
this.x = 1
LambdaScopeTest.this.x = 0
```

Lambda ifadeleri, çevreleyen bloğun yalnızca `final` veya etkin olarak son (effectively final) olan yerel değişkenlerine ve parametrelerine erişebilir.

## Hedef Türleme (Target Typing)

Bir lambda ifadesinin türünü nasıl belirlersiniz? Örneğin aşağıdaki lambda ifadesinin türü nedir:

```java
p -> p.getGender() == Person.Sex.MALE
    && p.getAge() >= 18
    && p.getAge() <= 25
```

Bu lambda ifadesi iki farklı arayüz için kullanılmıştır:

1. `CheckPerson tester` parametresi için (`printPersons` metodunda)
2. `Predicate<Person> tester` parametresi için (`printPersonsWithPredicate` metodunda)

Java derleyicisinin ihtiyaç duyduğu veri türüne *hedef tür (target type)* denir. Bir lambda ifadesi yalnızca Java derleyicisinin hedef türü belirleyebildiği bağlamlarda kullanılabilir:

* Değişken bildirimleri
* Atamalar
* Dönüş ifadeleri (Return statements)
* Dizi başlatıcılar
* Metot veya yapıcı argümanları
* Lambda ifadesi gövdeleri
* Koşul ifadeleri (`? :`)
* Tür dönüştürme (Cast) ifadeleri

### Hedef Türler ve Metot Argümanları (Target Types and Method Arguments)

Metot argümanları için Java derleyicisi aşırı yükleme çözümlemesi (overload resolution) ve tür argümanı çıkarımı (type argument inference) kullanarak hedef türü belirler.

Aşağıdaki iki fonksiyonel arayüzü düşünün:

```java
public interface Runnable {
    void run();
}

public interface Callable<V> {
    V call();
}
```

Aşağıdaki aşırı yüklenmiş metotları düşünün:

```java
void invoke(Runnable r) {
    r.run();
}

<T> T invoke(Callable<T> c) {
    return c.call();
}
```

Aşağıdaki ifadede hangi metot çağrılacaktır:

```java
String s = invoke(() -> "done");
```

`Callable<V>` bir değer döndürdüğü, ancak `Runnable` döndürmediği için `invoke(Callable<T>)` çağrılacaktır. Bu durumda lambda ifadesinin hedef türü `Callable<String>`'dir.

## Serileştirme (Serialization)

Bir lambda ifadesini, hedef türü ve yakalanan argümanları serileştirilebilirse [serileştirebilirsiniz (serialize)](java/3-siniflar-ve-nesneler/yuvalanmis-siniflar.md#serilestirme-serialization). Ancak iç sınıflarda olduğu gibi, lambda ifadelerinin serileştirilmesi kesinlikle önerilmez.
