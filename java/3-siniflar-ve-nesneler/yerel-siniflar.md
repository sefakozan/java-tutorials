# Yerel Sınıflar (Local Classes)

Yerel sınıflar, dengeli süslü parantezler arasındaki sıfır veya daha fazla ifadeden oluşan bir grup olan bir *blok (block)* içinde tanımlanan sınıflardır. Yerel sınıfları tipik olarak bir metodun gövdesinde tanımlanmış olarak bulursunuz.

Bu bölüm şu konuları kapsar:

* Yerel Sınıfları Bildirme (Declaring Local Classes)
* Çevreleyen Bir Sınıfın Üyelerine Erişme (Accessing Members of an Enclosing Class)
  * Gölgeleme ve Yerel Sınıflar (Shadowing and Local Classes)
* Yerel Sınıflar İç Sınıflara Benzerdir (Local Classes Are Similar To Inner Classes)

## Yerel Sınıfları Bildirme (Declaring Local Classes)

Herhangi bir blok içinde bir yerel sınıf tanımlayabilirsiniz (daha fazla bilgi için İfadeler, Deyimler ve Bloklar bölümüne bakın). Örneğin bir metot gövdesinde, bir `for` döngüsünde veya bir `if` yan tümcesinde yerel bir sınıf tanımlayabilirsiniz.

Aşağıdaki `LocalClassExample` örneği iki telefon numarasını doğrular. `validatePhoneNumber` metodunda `PhoneNumber` yerel sınıfını tanımlar:

```java
public class LocalClassExample {
  
    static String regularExpression = "[^0-9]";
  
    public static void validatePhoneNumber(
        String phoneNumber1, String phoneNumber2) {
      
        final int numberLength = 10;
        
        // JDK 8 ve sonraki sürümlerde geçerlidir:
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
            
            // JDK 8 ve sonraki sürümlerde geçerlidir:
//            public void printOriginalNumbers() {
//                System.out.println("Original numbers are " + phoneNumber1 +
//                    " and " + phoneNumber2);
//            }
        }

        PhoneNumber myNumber1 = new PhoneNumber(phoneNumber1);
        PhoneNumber myNumber2 = new PhoneNumber(phoneNumber2);
        
        // JDK 8 ve sonraki sürümlerde geçerlidir:
//        myNumber1.printOriginalNumbers();

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

Örnek önce telefon numaralarından 0 ile 9 arasındaki rakamlar dışındaki tüm karakterleri çıkararak telefon numaralarını doğrular. Daha sonra telefon numarasının tam olarak on rakam (Kuzey Amerika'daki bir telefon numarasının uzunluğu) içerip içermediğini kontrol eder. Bu örnek aşağıdakileri yazdırır:

```text
First number is 1234567890
Second number is invalid
```

## Çevreleyen Bir Sınıfın Üyelerine Erişme (Accessing Members of an Enclosing Class)

Bir yerel sınıf, kendisini çevreleyen sınıfın üyelerine erişebilir. Önceki örnekte `PhoneNumber` yapıcısı, `LocalClassExample.regularExpression` üyesine erişir.

Buna ek olarak bir yerel sınıf yerel değişkenlere de erişebilir. Ancak yerel bir sınıf yalnızca `final` olarak bildirilen yerel değişkenlere erişebilir. Bir yerel sınıf, kendisini çevreleyen bloğun bir yerel değişkenine veya parametresine eriştiğinde, o değişkeni veya parametreyi *yakalar (captures)*. Örneğin `PhoneNumber` yapıcısı, `numberLength` yerel değişkenine erişebilir çünkü bu değişken `final` olarak bildirilmiştir; `numberLength` bir *yakalanan değişkendir (captured variable)*.

Bununla birlikte, Java SE 8'den itibaren yerel bir sınıf, `final` veya *etkin olarak son (effectively final)* olan çevreleyen bloğun yerel değişkenlerine ve parametrelerine erişebilir. Değeri başlatıldıktan sonra asla değişmeyen bir değişken veya parametre etkin olarak son'dur (effectively final). Örneğin `numberLength` değişkeninin `final` olarak bildirilmediğini ve `PhoneNumber` yapıcısına numara uzunluğunu 7 olarak değiştirmek için yorum satırına alınmış bir atama ifadesi eklediğinizi varsayalım:

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

Bu atama ifadesi nedeniyle `numberLength` değişkeni artık etkin olarak son değildir. Sonuç olarak Java derleyicisi, `PhoneNumber` iç sınıfının `numberLength` değişkenine erişmeye çalıştığı satırda bir hata mesajı üretir.

Java SE 8'den başlayarak, bir metotta bir yerel sınıf bildirirseniz metodun parametrelerine erişebilir.

### Gölgeleme ve Yerel Sınıflar (Shadowing and Local Classes)

Bir yerel sınıfta bir türün (örneğin bir değişkenin) bildirimleri, çevreleyen kapsamdaki aynı ada sahip bildirimleri gölgeler.

## Yerel Sınıflar İç Sınıflara Benzerdir (Local Classes Are Similar To Inner Classes)

Yerel sınıflar, statik üyeleri tanımlayamadıkları veya bildiremedikleri için iç sınıflara benzerler. `validatePhoneNumber` metodunda statik bir üye olan `regularExpression` bildirildiğinde derleyici bir hata üretir.

Yerel sınıflar statik değildir çünkü çevreleyen sınıfın örnek üyelerine erişimleri vardır. Sonuç olarak çoğu statik bildirim türünü içeremezler.

Bir blok içinde bir arayüz bildiremezsiniz; arayüzler doğası gereği statiktir. Örneğin aşağıdaki kod parçası derlenmez çünkü `HelloThere` arayüzü `canDrink` metodunun gövdesi içinde tanımlanmıştır:

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

Sabit değişkenler olmadıkları sürece bir yerel sınıfta statik metotlar bildiremezsiniz. Aşağıdaki kod parçası derlenmez çünkü `EnglishGreeting.sayGoodbye` metodu `static` olarak bildirilmiştir:

```java
public void sayGoodbyeInEnglish() {
    class EnglishGreeting {
        public static void sayGoodbye() {
            System.out.println("Bye bye");
        }
    }
    EnglishGreeting.sayGoodbye();
}
```

Ancak yerel bir sınıf, sabit değişkenler olan statik üyelere sahip olabilir (`static final` ilkel veya dize türü).
