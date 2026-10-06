# Lambda İfadeleri (Lambda Expressions)

Anonim sınıflarla (anonymous classes) ilgili bir sorun, uygulamasının yalnızca tek bir metot içeren bir arayüz (interface) gibi çok basit olması durumunda, anonim sınıfların sözdiziminin hantal ve belirsiz görünebilmesidir. Bu durumlarda genellikle bir butona tıklandığında hangi eylemin gerçekleştirilmesi gerektiği gibi, işlevselliği başka bir metoda bir argüman olarak geçirmeye çalışırsınız. **Lambda ifadeleri (lambda expressions)** bunu yapmanıza, işlevselliği bir metot argümanı veya kodu veri olarak ele almanıza olanak tanır.

Önceki bölüm olan [Anonim Sınıflar](java/3-siniflar-ve-nesneler/anonim-siniflar.md), bir temel sınıfı ona bir ad vermeden nasıl uygulayacağınızı gösterir. Bu genellikle adlandırılmış bir sınıftan daha özlü olsa da, yalnızca tek bir metoda sahip sınıflar için anonim bir sınıf bile biraz aşırı ve hantal görünür. Lambda ifadeleri, tek metotlu sınıfların örneklerini (instances) daha derli toplu ifade etmenizi sağlar.

Bu bölüm şu konuları kapsar:

* [Lambda İfadeleri İçin İdeal Kullanım Durumu (Ideal Use Case for Lambda Expressions)](#lambda-i̇fadeleri-i̇çin-i̇deal-kullanım-durumu-ideal-use-case-for-lambda-expressions)
  * [Yaklaşım 1: Tek Bir Özellikle Eşleşen Üyeleri Arayan Metotlar Oluşturma](#yaklaşım-1-tek-bir-özellikle-eşleşen-üyeleri-arayan-metotlar-oluşturma)
  * [Yaklaşım 2: Daha Genelleştirilmiş Arama Metotları Oluşturma](#yaklaşım-2-daha-genelleştirilmiş-arama-metotları-oluşturma)
  * [Yaklaşım 3: Arama Kriteri Kodunu Bir Yerel Sınıfta Belirtme](#yaklaşım-3-arama-kriteri-kodunu-bir-yerel-sınıfta-belirtme)
  * [Yaklaşım 4: Arama Kriteri Kodunu Bir Anonim Sınıfta Belirtme](#yaklaşım-4-arama-kriteri-kodunu-bir-anonim-sınıfta-belirtme)
  * [Yaklaşım 5: Arama Kriteri Kodunu Bir Lambda İfadesi ile Belirtme](#yaklaşım-5-arama-kriteri-kodunu-bir-lambda-ifadesi-ile-belirtme)
  * [Yaklaşım 6: Lambda İfadeleriyle Standart Fonksiyonel Arayüzleri Kullanma](#yaklaşım-6-lambda-ifadeleriyle-standart-fonksiyonel-arayüzleri-kullanma)
  * [Yaklaşım 7: Uygulamanız Genelinde Lambda İfadelerini Kullanma](#yaklaşım-7-uygulamanız-genelinde-lambda-ifadelerini-kullanma)
  * [Yaklaşım 8: Generics Yapısını Daha Kapsamlı Kullanma](#yaklaşım-8-generics-yapısını-daha-kapsamlı-kullanma)
  * [Yaklaşım 9: Lambda İfadelerini Parametre Olarak Kabul Eden Toplu İşlemleri Kullanma](#yaklaşım-9-lambda-ifadelerini-parametre-olarak-kabul-eden-toplu-işlemleri-kullanma)
* [GUI Uygulamalarında Lambda İfadeleri (Lambda Expressions in GUI Applications)](#gui-uygulamalarında-lambda-ifadeleri-lambda-expressions-in-gui-applications)
* [Lambda İfadelerinin Sözdizimi (Syntax of Lambda Expressions)](#lambda-i̇fadelerinin-sözdizimi-syntax-of-lambda-expressions)
* [Çevreleyen Kapsamın Yerel Değişkenlerine Erişme (Accessing Local Variables of the Enclosing Scope)](#çevreleyen-kapsamın-yerel-değişkenlerine-erişme-accessing-local-variables-of-the-enclosing-scope)
* [Hedef Türleme (Target Typing)](#hedef-türleme-target-typing)
  * [Hedef Türler ve Metot Argümanları (Target Types and Method Arguments)](#hedef-türler-ve-metot-argümanları-target-types-and-method-arguments)
* [Serileştirme (Serialization)](#serileştirme-serialization)

## Lambda İfadeleri İçin İdeal Kullanım Durumu (Ideal Use Case for Lambda Expressions)

Bir sosyal ağ uygulaması oluşturduğunuzu varsayalım. Bir yöneticinin belirli kriterleri karşılayan sosyal ağ uygulaması üyeleri üzerinde, örneğin bir mesaj göndermek gibi herhangi bir tür eylemi gerçekleştirmesini sağlayan bir özellik oluşturmak istiyorsunuz. Aşağıdaki tablo bu kullanım durumunu ayrıntılı olarak açıklamaktadır:

| Alan (Field) | Açıklama (Description) |
| :--- | :--- |
| Ad (Name) | Seçilen üyeler üzerinde işlem gerçekleştirme |
| Birincil Aktör (Primary Actor) | Yönetici (Administrator) |
| Ön Koşullar (Preconditions) | Yönetici sisteme giriş yapmıştır. |
| Son Koşullar (Postconditions) | Eylem yalnızca belirtilen kriterlere uyan üyeler üzerinde gerçekleştirilir. |
| Ana Başarı Senaryosu (Main Success Scenario) | 1. Yönetici, üzerinde belirli bir eylemin gerçekleştirileceği üyelerin kriterlerini belirtir.<br>2. Yönetici, seçilen bu üyeler üzerinde gerçekleştirilecek eylemi belirtir.<br>3. Yönetici **Submit (Gönder)** butonunu seçer.<br>4. Sistem, belirtilen kriterlerle eşleşen tüm üyeleri bulur.<br>5. Sistem, eşleşen tüm üyeler üzerinde belirtilen eylemi gerçekleştirir. |
| Uzantılar (Extensions) | 1a. Yöneticinin, gerçekleştirilecek eylemi belirtmeden önce veya **Submit (Gönder)** butonunu seçmeden önce belirtilen kriterlerle eşleşen üyeleri önizleme seçeneği vardır. |
| Gerçekleşme Sıklığı (Frequency of Occurrence) | Gün içinde birçok kez. |

Bu sosyal ağ uygulamasının üyelerinin aşağıdaki `Person` sınıfı tarafından temsil edildiğini varsayalım:

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

Bu bölüm, bu kullanım durumuna yönelik naif (basit) bir yaklaşımla başlar. Yerel ve anonim sınıflarla bu yaklaşımı geliştirir ve ardından lambda ifadelerini kullanan verimli ve özlü bir yaklaşımla tamamlar. Bu bölümde açıklanan kod alıntılarını `RosterTest` örneğinde bulabilirsiniz.

### Yaklaşım 1: Tek Bir Özellikle Eşleşen Üyeleri Arayan Metotlar Oluşturma

Basit bir yaklaşım, birkaç metot oluşturmaktır; her metot cinsiyet veya yaş gibi tek bir özellikle eşleşen üyeleri arar. Aşağıdaki metot, belirtilen yaştan daha büyük olan üyeleri yazdırır:

```java
public static void printPersonsOlderThan(List<Person> roster, int age) {
    for (Person p : roster) {
        if (p.getAge() >= age) {
            p.printPerson();
        }
    }
}
```

> **Not**: Bir `List`, sıralı bir koleksiyondur (ordered Collection). Bir **koleksiyon (collection)**, birden çok öğeyi tek bir birimde gruplayan bir nesnedir. Koleksiyonlar; toplu verileri depolamak, almak, işlemek ve iletmek için kullanılır. Koleksiyonlar hakkında daha fazla bilgi için [Collections](collections/index.md) patikasına bakın.

Bu yaklaşım potansiyel olarak uygulamanızı **kırılgan (brittle)** hale getirebilir; bu, güncellemelerin (daha yeni veri türleri gibi) tanıtılması nedeniyle bir uygulamanın çalışmama olasılığıdır. Uygulamanızı yükselttiğinizi ve `Person` sınıfının yapısını farklı üye değişkenleri içerecek şekilde değiştirdiğinizi varsayalım; belki de sınıf yaşları farklı bir veri türü veya algoritma ile kaydedip ölçüyordur. Bu değişikliğe uyum sağlamak için API'nizin çoğunu yeniden yazmanız gerekir. Ek olarak, bu yaklaşım gereksiz yere kısıtlayıcıdır; örneğin, belirli bir yaştan daha genç üyeleri yazdırmak isterseniz ne olur?

### Yaklaşım 2: Daha Genelleştirilmiş Arama Metotları Oluşturma

Aşağıdaki metot `printPersonsOlderThan` metodundan daha geneldir; belirtilen yaş aralığındaki üyeleri yazdırır:

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

Belirli bir cinsiyetteki üyeleri veya belirli bir cinsiyet ile yaş aralığının bir kombinasyonunu yazdırmak isterseniz ne olur? `Person` sınıfını değiştirmeye ve ilişki durumu veya coğrafi konum gibi başka nitelikler eklemeye karar verirseniz ne olur? Bu metot `printPersonsOlderThan` metodundan daha genel olsa da, olası her arama sorgusu için ayrı bir metot oluşturmaya çalışmak yine de kırılgan koda yol açabilir. Bunun yerine, aramak istediğiniz kriterleri belirten kodu farklı bir sınıfa ayırabilirsiniz.

### Yaklaşım 3: Arama Kriteri Kodunu Bir Yerel Sınıfta Belirtme

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

Bu metot, `tester.test` metodunu çağırarak `List` parametresi `roster`'da bulunan her bir `Person` örneğinin, `CheckPerson` parametresi `tester`'da belirtilen arama kriterlerini karşılayıp karşılamadığını kontrol eder. `tester.test` metodu bir `true` değeri döndürürse, `Person` örneği üzerinde `printPersons` metodu çağrılır.

Arama kriterlerini belirtmek için `CheckPerson` arayüzünü uygularsınız:

```java
interface CheckPerson {
    boolean test(Person p);
}
```

Aşağıdaki sınıf, `test` metodu için bir uygulama belirterek `CheckPerson` arayüzünü uygular. Bu metot, Amerika Birleşik Devletleri'ndeki Askerlik Hizmeti (Selective Service) için uygun olan üyeleri filtreler: `Person` parametresi erkek ve 18 ile 25 yaşları arasında ise bir `true` değeri döndürür:

```java
class CheckPersonEligibleForSelectiveService implements CheckPerson {
    public boolean test(Person p) {
        return p.gender == Person.Sex.MALE && p.getAge() >= 18 && p.getAge() <= 25;
    }
}
```

Bu sınıfı kullanmak için yeni bir örneğini oluşturur ve `printPersons` metodunu çağırırsınız:

```java
printPersons(roster, new CheckPersonEligibleForSelectiveService());
```

Bu yaklaşım daha az kırılgan olsa da —`Person` yapısını değiştirirseniz metotları yeniden yazmanız gerekmez— uygulamanızda gerçekleştirmeyi planladığınız her arama için yine de ek bir koda sahip olursunuz: yeni bir arayüz ve bir yerel sınıf (local class). `CheckPersonEligibleForSelectiveService` bir arayüzü uyguladığından, bir yerel sınıf yerine bir anonim sınıf (anonymous class) kullanabilir ve her arama için yeni bir sınıf bildirme ihtiyacını atlayabilirsiniz.

### Yaklaşım 4: Arama Kriteri Kodunu Bir Anonim Sınıfta Belirtme

Aşağıdaki `printPersons` metot çağrısının argümanlarından biri, Amerika Birleşik Devletleri'ndeki Seçici Hizmet için uygun olan üyeleri filtreleyen bir anonim sınıftır: erkek olan ve 18 ile 25 yaşları arasında olanlar:

```java
printPersons(
    roster,
    new CheckPerson() {
        public boolean test(Person p) {
            return p.getGender() == Person.Sex.MALE
                && p.getAge() >= 18
                && p.getAge() <= 25;
        }
    }
);
```

Bu yaklaşım gerekli kod miktarını azaltır çünkü gerçekleştirmek istediğiniz her arama için yeni bir sınıf oluşturmanız gerekmez. Ancak `CheckPerson` arayüzünün yalnızca tek bir metot içerdiği düşünüldüğünde, anonim sınıfların sözdizimi hantaldır. Bu durumda bir sonraki bölümde açıklandığı gibi, bir anonim sınıf yerine bir lambda ifadesi kullanabilirsiniz.

### Yaklaşım 5: Arama Kriteri Kodunu Bir Lambda İfadesi ile Belirtme

`CheckPerson` arayüzü bir **fonksiyonel arayüzdür (functional interface)**. Bir fonksiyonel arayüz, yalnızca tek bir [soyut metot (abstract method)](java/5-arayuzler-ve-kalitim/soyut-siniflar.md) içeren herhangi bir arayüzdür. (Bir fonksiyonel arayüz bir veya daha fazla [varsayılan metot (default method)](java/5-arayuzler-ve-kalitim/arayuzler.md) veya [statik metot (static method)](java/5-arayuzler-ve-kalitim/arayuzler.md) içerebilir.) Bir fonksiyonel arayüz yalnızca tek bir soyut metot içerdiğinden, o metodu uygularken adını atlayabilirsiniz. Bunu yapmak için bir anonim sınıf ifadesi kullanmak yerine, aşağıdaki metot çağrısında vurgulanan bir **lambda ifadesi (lambda expression)** kullanırsınız:

```java
printPersons(
    roster,
    (Person p) -> p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25
);
```

Lambda ifadelerinin nasıl tanımlanacağı hakkında bilgi için [Lambda İfadelerinin Sözdizimi](#lambda-i̇fadelerinin-sözdizimi-syntax-of-lambda-expressions) bölümüne bakın.

`CheckPerson` arayüzü yerine standart bir fonksiyonel arayüz kullanabilirsiniz; bu, gereken kod miktarını daha da azaltır.

### Yaklaşım 6: Lambda İfadeleriyle Standart Fonksiyonel Arayüzleri Kullanma

`CheckPerson` arayüzünü tekrar düşünün:

```java
interface CheckPerson {
    boolean test(Person p);
}
```

Bu çok basit bir arayüzdür. Yalnızca tek bir soyut metot içerdiğinden bir fonksiyonel arayüzdür. Bu metot tek bir parametre alır ve bir `boolean` değeri döndürür. Metot o kadar basittir ki uygulamanızda bir tane tanımlamaya değmeyebilir. Sonuç olarak JDK, `java.util.function` paketinde bulabileceğiniz birkaç standart fonksiyonel arayüz tanımlar.

Örneğin, `CheckPerson` yerine `Predicate<T>` arayüzünü kullanabilirsiniz. Bu arayüz `boolean test(T t)` metodunu içerir:

```java
interface Predicate<T> {
    boolean test(T t);
}
```

`Predicate<T>` arayüzü bir genel arayüz (generic interface) örneğidir. (Generics hakkında daha fazla bilgi için [Generics (Updated)](java/7-generics/index.md) dersine bakın.) Genel türler, açılı ayraçlar (`<>`) içinde bir veya daha fazla tür parametresi (type parameter) belirtir. Bu arayüz yalnızca tek bir tür parametresi olan `T`'yi içerir. Gerçek tür argümanları ile bir genel tür bildirdiğinizde veya başlattığınızda, parametreli bir türe (parameterized type) sahip olursunuz. Örneğin parametreli tür `Predicate<Person>` şöyledir:

```java
interface Predicate<Person> {
    boolean test(Person t);
}
```

Bu parametreli tür, `CheckPerson.boolean test(Person p)` ile aynı dönüş türüne ve parametrelere sahip bir metot içerir. Sonuç olarak aşağıdaki metodun gösterdiği gibi `CheckPerson` yerine `Predicate<T>` kullanabilirsiniz:

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

Sonuç olarak aşağıdaki metot çağrısı, Seçici Hizmet için uygun olan üyeleri elde etmek üzere [Yaklaşım 3: Arama Kriteri Kodunu Bir Yerel Sınıfta Belirtme](#yaklaşım-3-arama-kriteri-kodunu-bir-yerel-sınıfta-belirtme) bölümünde `printPersons` metodunu çağırdığınız zamankiyle tamamen aynıdır:

```java
printPersonsWithPredicate(
    roster,
    p -> p.getGender() == Person.Sex.MALE
        && p.getAge() >= 18
        && p.getAge() <= 25
);
```

Bu metotta lambda ifadesinin kullanılabileceği tek olası yer burası değildir. Aşağıdaki yaklaşım lambda ifadelerini kullanmanın diğer yollarını önerir.

### Yaklaşım 7: Uygulamanız Genelinde Lambda İfadelerini Kullanma

Lambda ifadelerini başka nerede kullanabileceğinizi görmek için `printPersonsWithPredicate` metodunu tekrar düşünün:

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

Bu metot, `tester` parametresi olan `Predicate`'te belirtilen kriterleri karşılayıp karşılamadığını `roster` parametresi olan `List`'te bulunan her bir `Person` örneği için kontrol eder. `Person` örneği `tester` tarafından belirtilen kriterleri karşılıyorsa, `Person` örneği üzerinde `printPerson` metodu çağrılır.

`printPerson` metodunu çağırmak yerine, `tester` tarafından belirtilen kriterleri karşılayan bu `Person` örnekleri üzerinde gerçekleştirilecek farklı bir eylem belirtebilirsiniz. Bu eylemi bir lambda ifadesi ile belirtebilirsiniz. `printPerson`'a benzer, tek bir argüman (bir `Person` nesnesi) alan ve void döndüren bir lambda ifadesi istediğinizi varsayalım. Unutmayın, bir lambda ifadesi kullanmak için bir fonksiyonel arayüz uygulamanız gerekir. Bu durumda, `Person` türünde bir argüman alabilen ve void döndüren bir soyut metot içeren bir fonksiyonel arayüze ihtiyacınız vardır. `Consumer<T>` arayüzü bu özelliklere sahip olan `void accept(T t)` metodunu içerir. Aşağıdaki metot, `p.printPerson()` çağrısını `accept` metodunu çağıran bir `Consumer<Person>` örneği ile değiştirir:

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

Sonuç olarak aşağıdaki metot çağrısı, Seçici Hizmet için uygun olan üyeleri elde etmek üzere [Yaklaşım 3: Arama Kriteri Kodunu Bir Yerel Sınıfta Belirtme](#yaklaşım-3-arama-kriteri-kodunu-bir-yerel-sınıfta-belirtme) bölümünde `printPersons` çağırdığınız zamankiyle aynıdır. Üyeleri yazdırmak için kullanılan lambda ifadesi vurgulanmıştır:

```java
processPersons(
     roster,
     p -> p.getGender() == Person.Sex.MALE
         && p.getAge() >= 18
         && p.getAge() <= 25,
     p -> p.printPerson()
);
```

Üyelerinizin profillerini yazdırmaktan daha fazlasını yapmak isterseniz ne olur? Üyelerin profillerini doğrulamak veya iletişim bilgilerini almak istediğinizi varsayalım. Bu durumda, bir değer döndüren soyut bir metot içeren bir fonksiyonel arayüze ihtiyacınız vardır. `Function<T,R>` arayüzü `R apply(T t)` metodunu içerir. Aşağıdaki metot, `mapper` parametresi tarafından belirtilen verileri alır ve ardından `block` parametresi tarafından belirtilen bir eylemi bu veriler üzerinde gerçekleştirir:

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

Aşağıdaki metot, `roster`'da bulunan ve Seçici Hizmet için uygun olan her bir üyeden e-posta adresini alır ve ardından yazdırır:

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

### Yaklaşım 8: Generics Yapısını Daha Kapsamlı Kullanma

`processPersonsWithFunction` metodunu tekrar düşünün. Aşağıdaki, herhangi bir veri türündeki öğeleri içeren bir koleksiyonu parametre olarak kabul eden genel (generic) bir sürümdür:

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

Seçici Hizmet için uygun olan üyelerin e-posta adreslerini yazdırmak için `processElements` metodunu şu şekilde çağırın:

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

Bu metot çağrısı aşağıdaki eylemleri gerçekleştirir:

1. `source` koleksiyonundan bir nesne kaynağı elde eder. Bu örnekte `roster` koleksiyonundan bir `Person` nesneleri kaynağı elde eder. `List` türünde bir koleksiyon olan `roster` koleksiyonunun aynı zamanda `Iterable` türünde bir nesne olduğuna dikkat edin.
2. `tester` olan `Predicate` nesnesiyle eşleşen nesneleri filtreler. Bu örnekte `Predicate` nesnesi, hangi üyelerin Seçici Hizmet için uygun olacağını belirten bir lambda ifadesidir.
3. Filtrelenen her bir nesneyi `mapper` olan `Function` nesnesi tarafından belirtildiği şekilde bir değere eşler. Bu örnekte `Function` nesnesi, bir üyenin e-posta adresini döndüren bir lambda ifadesidir.
4. Eşlenen her bir nesne üzerinde `block` olan `Consumer` nesnesi tarafından belirtildiği şekilde bir eylem gerçekleştirir. Bu örnekte `Consumer` nesnesi, `Function` nesnesi tarafından döndürülen e-posta adresi olan bir dizeyi yazdıran bir lambda ifadesidir.

Bu eylemlerin her birini bir toplu işlemle değiştirebilirsiniz.

### Yaklaşım 9: Lambda İfadelerini Parametre Olarak Kabul Eden Toplu İşlemleri Kullanma

Aşağıdaki örnek, `roster` koleksiyonunda bulunan ve Seçici Hizmet için uygun olan üyelerin e-posta adreslerini yazdırmak için toplu işlemleri kullanır:

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

Aşağıdaki tablo, `processElements` metodunun gerçekleştirdiği işlemlerin her birini karşılık gelen toplu işlemle eşleştirir:

| `processElements` Eylemi | Toplu İşlem (Aggregate Operation) |
| :--- | :--- |
| Bir nesne kaynağı elde etme | `Stream<E> stream()` |
| Bir `Predicate` nesnesiyle eşleşen nesneleri filtreleme | `Stream<T> filter(Predicate<? super T> predicate)` |
| Nesneleri bir `Function` nesnesi tarafından belirtildiği şekilde başka bir değere eşleme | `<R> Stream<R> map(Function<? super T,? extends R> mapper)` |
| Bir `Consumer` nesnesi tarafından belirtildiği şekilde bir eylem gerçekleştirme | `void forEach(Consumer<? super T> action)` |

`filter`, `map` ve `forEach` işlemleri **toplu işlemlerdir (aggregate operations)**. Toplu işlemler öğeleri doğrudan bir koleksiyondan değil, bir **akıştan (stream)** işler (bu örnekte çağrılan ilk metodun `stream` olmasının nedeni budur). Bir akış, bir öğeler dizisidir. Bir koleksiyonun aksine verileri depolayan bir veri yapısı değildir. Bunun yerine bir akış, bir koleksiyon gibi bir kaynaktan değerleri bir **işlem hattı (pipeline)** boyunca taşır. Bir işlem hattı bir akış işlemleri dizisidir; bu örnekte `filter`-`map`-`forEach`'tir. Ek olarak, toplu işlemler genellikle nasıl davranacaklarını özelleştirmenize olanak tanıyan lambda ifadelerini parametre olarak kabul eder.

Toplu işlemlerin daha kapsamlı bir tartışması için [Toplu İşlemler (Aggregate Operations)](https://docs.oracle.com/javase/tutorial/collections/streams/index.html) dersine bakın.

## GUI Uygulamalarında Lambda İfadeleri (Lambda Expressions in GUI Applications)

Grafik kullanıcı arayüzü (GUI) uygulamasında klavye eylemleri, fare eylemleri ve kaydırma eylemleri gibi olayları işlemek için genellikle belirli bir arayüzü uygulamayı içeren olay işleyicileri (event handlers) oluşturursunuz. Çoğunlukla olay işleyici arayüzleri fonksiyonel arayüzlerdir; yalnızca tek bir metoda sahip olma eğilimindedirler.

Önceki bölüm olan [Anonim Sınıflar](java/3-siniflar-ve-nesneler/anonim-siniflar.md) konusunda ele alınan `HelloWorld.java` JavaFX örneğinde, bu ifadedeki vurgulanan anonim sınıfı bir lambda ifadesi ile değiştirebilirsiniz:

```java
        btn.setOnAction(new EventHandler<ActionEvent>() {

            @Override
            public void handle(ActionEvent event) {
                System.out.println("Hello World!");
            }
        });
```

`btn.setOnAction` metot çağrısı, `btn` nesnesi tarafından temsil edilen butonu seçtiğinizde ne olacağını belirtir. Bu metot `EventHandler<ActionEvent>` türünde bir nesne gerektirir. `EventHandler<ActionEvent>` arayüzü yalnızca tek bir metot içerir: `void handle(T event)`. Bu arayüz bir fonksiyonel arayüz olduğundan, onu değiştirmek için aşağıdaki vurgulanan lambda ifadesini kullanabilirsiniz:

```java
        btn.setOnAction(
          event -> System.out.println("Hello World!")
        );
```

## Lambda İfadelerinin Sözdizimi (Syntax of Lambda Expressions)

Bir lambda ifadesi şunlardan oluşur:

* Parantez içine alınmış, virgülle ayrılmış formal parametre listesi. `CheckPerson.test` metodu, `Person` sınıfının bir örneğini temsil eden tek bir `p` parametresi içerir.

  > **Not**: Bir lambda ifadesinde parametrelerin veri türünü atlayabilirsiniz. Ayrıca, yalnızca tek bir parametre varsa parantezleri de atlayabilirsiniz. Örneğin aşağıdaki lambda ifadesi de geçerlidir:
  >
  > ```java
  > p -> p.getGender() == Person.Sex.MALE 
  >     && p.getAge() >= 18
  >     && p.getAge() <= 25
  > ```

* Ok işleci, `->` (arrow token)

* Tek bir ifadeden veya bir ifade bloğundan oluşan bir gövde (body). Bu örnek aşağıdaki ifadeyi kullanır:

  ```java
  p.getGender() == Person.Sex.MALE 
      && p.getAge() >= 18
      && p.getAge() <= 25
  ```

  Tek bir ifade belirtirseniz Java çalışma zamanı ortamı ifadeyi değerlendirir ve ardından değerini döndürür. Alternatif olarak bir `return` ifadesi kullanabilirsiniz:

  ```java
  p -> {
      return p.getGender() == Person.Sex.MALE
          && p.getAge() >= 18
          && p.getAge() <= 25;
  }
  ```

  Bir return ifadesi bir ifade (expression) değil deyimdir (statement); bir lambda ifadesinde deyimleri süslü parantezler (`{}`) içine almanız gerekir. Ancak, void döndüren bir metot çağrısını süslü parantez içine almak zorunda değilsiniz. Örneğin aşağıdakiler geçerli bir lambda ifadesidir:

  ```java
  email -> System.out.println(email)
  ```

Bir lambda ifadesinin bir metot bildirimine çok benzediğine dikkat edin; lambda ifadelerini anonim metotlar (anonymous methods — adı olmayan metotlar) olarak düşünebilirsiniz.

Aşağıdaki `Calculator` örneği, birden fazla formal parametre alan lambda ifadeleri örneğidir:

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
        System.out.println("40 + 2 = " + myApp.operateBinary(40, 2, addition));
        System.out.println("20 - 10 = " + myApp.operateBinary(20, 10, subtraction));    
    }
}
```

`operateBinary` metodu iki tamsayı işlenen (operand) üzerinde matematiksel bir işlem gerçekleştirir. İşlemin kendisi `IntegerMath`'in bir örneği tarafından belirtilir. Örnek, lambda ifadeleri ile `addition` ve `subtraction` olmak üzere iki işlem tanımlar. Örnek aşağıdakileri yazdırır:

```text
40 + 2 = 42
20 - 10 = 10
```

## Çevreleyen Kapsamın Yerel Değişkenlerine Erişme (Accessing Local Variables of the Enclosing Scope)

Yerel ve anonim sınıflar gibi, lambda ifadeleri de [değişkenleri yakalayabilir (capture variables)](java/3-siniflar-ve-nesneler/yerel-siniflar.md#çevreleyen-bir-sınıfın-üyelerine-erişme-accessing-members-of-an-enclosing-class); çevreleyen kapsamın yerel değişkenlerine aynı erişime sahiptirler. Ancak yerel ve anonim sınıfların aksine, lambda ifadelerinin herhangi bir gölgeleme sorunu yoktur (daha fazla bilgi için [Gölgeleme (Shadowing)](java/3-siniflar-ve-nesneler/yuvalanmis-siniflar.md#gölgeleme-shadowing) konusuna bakın). Lambda ifadeleri **sözcüksel kapsamlıdır (lexically scoped)**. Bu, bir üst türden herhangi bir ad miras almadıkları veya yeni bir kapsam düzeyi getirmedikleri anlamına gelir. Bir lambda ifadesindeki bildirimler, tıpkı çevreleyen ortamda oldukları gibi yorumlanır. Aşağıdaki `LambdaScopeTest` örneği bunu göstermektedir:

```java
import java.util.function.Consumer;
 
public class LambdaScopeTest {
    public int x = 0;
 
    class FirstLevel {
        public int x = 1;
        
        void methodInFirstLevel(int x) {
            int z = 2;
             
            Consumer<Integer> myConsumer = (y) -> 
            {
                // Aşağıdaki ifade, derleyicinin şu hatayı üretmesine neden olur:
                // "Local variable z defined in an enclosing scope
                // must be final or effectively final" 
                //
                // z = 99;
                
                System.out.println("x = " + x); 
                System.out.println("y = " + y);
                System.out.println("z = " + z);
                System.out.println("this.x = " + this.x);
                System.out.println("LambdaScopeTest.this.x = " + LambdaScopeTest.this.x);
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

Bu örnek aşağıdaki çıktıyı üretir:

```text
x = 23
y = 23
z = 2
this.x = 1
LambdaScopeTest.this.x = 0
```

`myConsumer` lambda ifadesinin bildiriminde `y` yerine `x` parametresini koyarsanız, derleyici bir hata üretir:

```java
Consumer<Integer> myConsumer = (x) -> {
    // ...
}
```

Derleyici, "***Lambda expression's parameter x cannot redeclare another local variable defined in an enclosing scope***" (Lambda ifadesinin parametresi x, çevreleyen bir kapsamda tanımlanmış başka bir yerel değişkeni yeniden bildiremez) hatasını üretir çünkü lambda ifadesi yeni bir kapsam düzeyi getirmez. Sonuç olarak, çevreleyen kapsamın alanlarına, metotlarına ve yerel değişkenlerine doğrudan erişebilirsiniz. Örneğin lambda ifadesi, `methodInFirstLevel` metodunun `x` parametresine doğrudan erişir. Çevreleyen sınıftaki değişkenlere erişmek için `this` anahtar kelimesini kullanın. Bu örnekte `this.x`, `FirstLevel.x` üye değişkenine başvurur.

Bununla birlikte, yerel ve anonim sınıflar gibi bir lambda ifadesi de yalnızca çevreleyen bloğun `final` veya etkin olarak sabit (effectively final) olan yerel değişkenlerine ve parametrelerine erişebilir. Bu örnekte `z` değişkeni etkin olarak sabittir; değeri başlatıldıktan sonra asla değiştirilmez. Ancak `myConsumer` lambda ifadesine aşağıdaki atama ifadesini eklediğinizi varsayalım:

```java
Consumer<Integer> myConsumer = (y) -> {
    z = 99;
    // ...
}
```

Bu atama ifadesi nedeniyle `z` değişkeni artık etkin olarak sabit değildir. Sonuç olarak Java derleyicisi, "***Local variable z defined in an enclosing scope must be final or effectively final***" (Çevreleyen bir kapsamda tanımlanan yerel değişken z, final veya etkin olarak sabit olmalıdır) mesajına benzer bir hata mesajı üretir.

## Hedef Türleme (Target Typing)

Bir lambda ifadesinin türünü nasıl belirlersiniz? Erkek ve 18 ile 25 yaşları arasındaki üyeleri seçen lambda ifadesini hatırlayın:

```java
p -> p.getGender() == Person.Sex.MALE
    && p.getAge() >= 18
    && p.getAge() <= 25
```

Bu lambda ifadesi aşağıdaki iki metotta kullanılmıştır:

* [Yaklaşım 3: Arama Kriteri Kodunu Bir Yerel Sınıfta Belirtme](#yaklaşım-3-arama-kriteri-kodunu-bir-yerel-sınıfta-belirtme) bölümünde `public static void printPersons(List<Person> roster, CheckPerson tester)`
* [Yaklaşım 6: Lambda İfadeleriyle Standart Fonksiyonel Arayüzleri Kullanma](#yaklaşım-6-lambda-ifadeleriyle-standart-fonksiyonel-arayüzleri-kullanma) bölümünde `public void printPersonsWithPredicate(List<Person> roster, Predicate<Person> tester)`

Java çalışma zamanı ortamı `printPersons` metodunu çağırdığında `CheckPerson` veri türünü bekler, bu nedenle lambda ifadesi bu türdendir. Ancak Java çalışma zamanı ortamı `printPersonsWithPredicate` metodunu çağırdığında `Predicate<Person>` veri türünü bekler, bu nedenle lambda ifadesi bu türdendir. Bu metotların beklediği veri türüne **hedef tür (target type)** denir. Bir lambda ifadesinin türünü belirlemek için Java derleyicisi, lambda ifadesinin bulunduğu bağlamın veya durumun hedef türünü kullanır. Bundan, yalnızca Java derleyicisinin bir hedef türü belirleyebildiği durumlarda lambda ifadelerini kullanabileceğiniz sonucu çıkar:

* Değişken bildirimleri (Variable declarations)
* Atamalar (Assignments)
* Return ifadeleri (Return statements)
* Dizi başlatıcıları (Array initializers)
* Metot veya constructor argümanları (Method or constructor arguments)
* Lambda ifadesi gövdeleri (Lambda expression bodies)
* Koşullu ifadeler, `?:` (Conditional expressions)
* Tür dönüştürme ifadeleri (Cast expressions)

### Hedef Türler ve Metot Argümanları (Target Types and Method Arguments)

Metot argümanları için Java derleyicisi hedef türü diğer iki dil özelliğiyle belirler: aşırı yükleme çözümlemesi (overload resolution) ve tür argümanı çıkarımı (type argument inference).

Aşağıdaki iki fonksiyonel arayüzü (`java.lang.Runnable` ve `java.util.concurrent.Callable<V>`) göz önünde bulundurun:

```java
public interface Runnable {
    void run();
}

public interface Callable<V> {
    V call();
}
```

`Runnable.run` metodu bir değer döndürmez, oysa `Callable<V>.call` döndürür.

`invoke` metodunu aşağıdaki gibi aşırı yüklediğinizi (overload ettiğinizi) varsayalım (metotları aşırı yükleme hakkında daha fazla bilgi için [Metotları Tanımlama (Defining Methods)](java/3-siniflar-ve-nesneler/metotlar.md) bölümüne bakın):

```java
void invoke(Runnable r) {
    r.run();
}

<T> T invoke(Callable<T> c) {
    return c.call();
}
```

Aşağıdaki ifadede hangi metot çağrılacaktır?

```java
String s = invoke(() -> "done");
```

`invoke(Callable<T>)` metodu çağrılacaktır çünkü bu metot bir değer döndürür; `invoke(Runnable)` metodu ise döndürmez. Bu durumda `() -> "done"` lambda ifadesinin türü `Callable<T>`'dir.

## Serileştirme (Serialization)

Hedef türü ve yakalanan argümanları (captured arguments) serileştirilebilirse, bir lambda ifadesini [serileştirebilirsiniz (serialize edebilirsiniz)](https://docs.oracle.com/javase/tutorial/jndi/objects/serial.html). Ancak [iç sınıflar](java/3-siniflar-ve-nesneler/yuvalanmis-siniflar.md#serileştirme-serialization) gibi lambda ifadelerinin de serileştirilmesi kesinlikle önerilmez.
