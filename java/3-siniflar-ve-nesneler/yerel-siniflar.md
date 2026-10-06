# Yerel Sınıflar (Local Classes)

Yerel sınıflar, dengeli süslü parantezler arasındaki sıfır veya daha fazla ifadeden (statement) oluşan bir grup olan bir blok (block) içinde tanımlanan sınıflardır. Tipik olarak yerel sınıfları bir metodun gövdesinde tanımlanmış olarak bulursunuz.

Bu bölüm şu konuları kapsar:

* [Yerel Sınıfları Bildirme (Declaring Local Classes)](#yerel-sınıfları-bildirme-declaring-local-classes)
* [Çevreleyen Bir Sınıfın Üyelerine Erişme (Accessing Members of an Enclosing Class)](#çevreleyen-bir-sınıfın-üyelerine-erişme-accessing-members-of-an-enclosing-class)
  * [Gölgeleme ve Yerel Sınıflar (Shadowing and Local Classes)](#gölgeleme-ve-yerel-sınıflar-shadowing-and-local-classes)
* [Yerel Sınıflar İç Sınıflara Benzerdir (Local Classes Are Similar To Inner Classes)](#yerel-sınıflar-iç-sınıflara-benzerdir-local-classes-are-similar-to-inner-classes)

## Yerel Sınıfları Bildirme (Declaring Local Classes)

Herhangi bir blok içinde bir yerel sınıf tanımlayabilirsiniz (daha fazla bilgi için [İfadeler, Deyimler ve Bloklar (Expressions, Statements, and Blocks)](java/2-dil-temelleri/ifadeler-deyimler-bloklar.md) bölümüne bakın). Örneğin bir metot gövdesinde, bir `for` döngüsünde veya bir `if` cümlesinde bir yerel sınıf tanımlayabilirsiniz.

Aşağıdaki `LocalClassExample` örneği iki telefon numarasını doğrular. `validatePhoneNumber` metodunda `PhoneNumber` yerel sınıfını tanımlar:

```java
public class LocalClassExample {
  
    static String regularExpression = "[^0-9]";
  
    public static void validatePhoneNumber(
        String phoneNumber1, String phoneNumber2) {
      
        final int numberLength = 10;
        
        // JDK 8 ve sonrasında geçerlidir:
       
        // int numberLength = 10;
       
        class PhoneNumber {
            
            String formattedPhoneNumber = null;

            PhoneNumber(String phoneNumber){
                // numberLength = 7;
                String currentNumber = phoneNumber.replaceAll(
                  regularExpression, "");
                if (currentNumber.length() == numberLength)
                    formattedPhoneNumber = currentNumber;
                else
                    formattedPhoneNumber = null;
            }

            public String getNumber() {
                return formattedPhoneNumber;
            }
            
            // JDK 8 ve sonrasında geçerlidir:

//          public void printOriginalNumbers() {
//                System.out.println("Original numbers are " + phoneNumber1 + " and " + phoneNumber2);
//          }
        }

        PhoneNumber myNumber1 = new PhoneNumber(phoneNumber1);
        PhoneNumber myNumber2 = new PhoneNumber(phoneNumber2);
        
        // JDK 8 ve sonrasında geçerlidir:

//      myNumber1.printOriginalNumbers();

        if (myNumber1.getNumber() == null) 
            System.out.println("First number is invalid");
        else
            System.out.println("First number is " + myNumber1.getNumber());
        if (myNumber2.getNumber() == null)
            System.out.println("Second number is invalid");
        else
            System.out.println("Second number is " + myNumber2.getNumber());

    }

    public static void main(String... args) {
        validatePhoneNumber("123-456-7890", "456-7890");
    }
}
```

Örnek önce telefon numarasından 0 ile 9 arasındaki rakamlar dışındaki tüm karakterleri kaldırarak bir telefon numarasını doğrular. Ardından, telefon numarasının tam olarak on rakam (Kuzey Amerika'daki bir telefon numarasının uzunluğu) içerip içermediğini kontrol eder. Bu örnek aşağıdaki çıktıyı yazdırır:

```text
First number is 1234567890
Second number is invalid
```

## Çevreleyen Bir Sınıfın Üyelerine Erişme (Accessing Members of an Enclosing Class)

Bir yerel sınıf, kendisini çevreleyen sınıfın (enclosing class) üyelerine erişebilir. Önceki örnekte, `PhoneNumber` constructor'ı `LocalClassExample.regularExpression` üyesine erişir.

Buna ek olarak, bir yerel sınıf yerel değişkenlere (local variables) erişebilir. Ancak bir yerel sınıf yalnızca `final` olarak bildirilen yerel değişkenlere erişebilir. Bir yerel sınıf, çevreleyen bloğun bir yerel değişkenine veya parametresine eriştiğinde, o değişkeni veya parametreyi yakalar (captures). Örneğin `PhoneNumber` constructor'ı `numberLength` yerel değişkenine erişebilir çünkü bu değişken `final` olarak bildirilmiştir; `numberLength` bir **yakalanan değişkendir (captured variable)**.

Bununla birlikte, Java SE 8'den itibaren bir yerel sınıf, çevreleyen bloğun `final` veya etkin olarak sabit (effectively final) olan yerel değişkenlerine ve parametrelerine erişebilir. Değeri başlatıldıktan sonra hiçbir zaman değiştirilmeyen bir değişken veya parametre etkin olarak sabittir. Örneğin `numberLength` değişkeninin `final` olarak bildirilmediğini varsayalım ve geçerli bir telefon numarasının uzunluğunu 7 basamağa değiştirmek için `PhoneNumber` constructor'ına vurgulanan atama ifadesini ekleyin:

```java
PhoneNumber(String phoneNumber) {
    numberLength = 7;
    String currentNumber = phoneNumber.replaceAll(
        regularExpression, "");
    if (currentNumber.length() == numberLength)
        formattedPhoneNumber = currentNumber;
    else
        formattedPhoneNumber = null;
}
```

Bu atama ifadesi nedeniyle, `numberLength` değişkeni artık etkin olarak sabit değildir. Sonuç olarak, `PhoneNumber` iç sınıfının `numberLength` değişkenine erişmeye çalıştığı yerde Java derleyicisi, "***local variables referenced from an inner class must be final or effectively final***" (iç sınıftan başvurulan yerel değişkenler final veya etkin olarak sabit olmalıdır) mesajına benzer bir hata mesajı üretir:

```java
if (currentNumber.length() == numberLength)
```

Java SE 8'den itibaren, yerel sınıfı bir metot içinde bildirirseniz, metodun parametrelerine erişebilir. Örneğin `PhoneNumber` yerel sınıfında aşağıdaki metodu tanımlayabilirsiniz:

```java
public void printOriginalNumbers() {
    System.out.println("Original numbers are " + phoneNumber1 + " and " + phoneNumber2);
}
```

`printOriginalNumbers` metodu, `validatePhoneNumber` metodunun `phoneNumber1` ve `phoneNumber2` parametrelerine erişir.

### Gölgeleme ve Yerel Sınıflar (Shadowing and Local Classes)

Bir yerel sınıf içindeki bir türün (örneğin bir değişkenin) bildirimleri, çevreleyen kapsamdaki aynı ada sahip bildirimleri **gölgeler (shadows)**. Daha fazla bilgi için [Gölgeleme (Shadowing)](java/3-siniflar-ve-nesneler/yuvalanmis-siniflar.md#gölgeleme-shadowing) bölümüne bakın.

## Yerel Sınıflar İç Sınıflara Benzerdir (Local Classes Are Similar To Inner Classes)

Yerel sınıflar, herhangi bir statik üye tanımlayamadıkları veya bildiremedikleri için iç sınıflara benzerler. `validatePhoneNumber` statik metodunda tanımlanan `PhoneNumber` sınıfı gibi statik metotlardaki yerel sınıflar, yalnızca çevreleyen sınıfın statik üyelerine başvurabilir. Örneğin `regularExpression` üye değişkenini statik olarak tanımlamazsanız, Java derleyicisi "***non-static variable regularExpression cannot be referenced from a static context***" (statik olmayan regularExpression değişkenine statik bir bağlamdan başvurulamaz) uyarısına benzer bir hata üretir.

Yerel sınıflar statik değildir çünkü çevreleyen bloğun örnek üyelerine erişimleri vardır. Sonuç olarak, çoğu türde statik bildirimi içeremezler.

Bir blok içinde bir arayüz (interface) bildiremezsiniz; arayüzler doğası gereği statiktir. Örneğin aşağıdaki kod parçası derlenmez çünkü `HelloThere` arayüzü `greetInEnglish` metodunun gövdesi içinde tanımlanmıştır:

```java
    public void greetInEnglish() {
        interface HelloThere {
           public void greet();
        }

        class EnglishHelloThere implements HelloThere {
            public void greet() {
                System.out.println("Hello " + name);
            }
        }

        HelloThere myGreeting = new EnglishHelloThere();
        myGreeting.greet();
    }
```

Bir yerel sınıf içinde statik başlatıcılar (static initializers) veya üye arayüzler bildiremezsiniz. Aşağıdaki kod parçası derlenmez çünkü `EnglishGoodbye.sayGoodbye` metodu `static` olarak bildirilmiştir. Derleyici, bu metot tanımıyla karşılaştığında "***modifier 'static' is only allowed in constant variable declaration***" (static niteleyicisine yalnızca sabit değişken bildiriminde izin verilir) mesajına benzer bir hata üretir:

```java
    public void sayGoodbyeInEnglish() {
        class EnglishGoodbye {
            public static void sayGoodbye() {
                System.out.println("Bye bye");
            }
        }

        EnglishGoodbye.sayGoodbye();
    }
```

Bir yerel sınıf, sabit değişken (constant variable) olmaları koşuluyla statik üyelere sahip olabilir. (Bir **sabit değişken**, `final` olarak bildirilen ve bir derleme zamanı sabit ifadesi [compile-time constant expression] ile başlatılan ilkel türde veya `String` türünde bir değişkendir. Bir derleme zamanı sabit ifadesi, genellikle derleme zamanında değerlendirilebilen bir dize veya aritmetik ifadedir. Daha fazla bilgi için [Sınıf Üyelerini Anlama (Understanding Class Members)](java/3-siniflar-ve-nesneler/sinif-uyeleri.md) bölümüne bakın.) Aşağıdaki kod parçası derlenir çünkü `EnglishGoodbye.farewell` statik üyesi bir sabit değişkendir:

```java
    public void sayGoodbyeInEnglish() {
        class EnglishGoodbye {
            public static final String farewell = "Bye bye";
            public void sayGoodbye() {
                System.out.println(farewell);
            }
        }
        
        EnglishGoodbye myEnglishGoodbye = new EnglishGoodbye();
        myEnglishGoodbye.sayGoodbye();
    }
```
