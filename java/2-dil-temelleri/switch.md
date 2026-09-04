# switch İfadesi (The switch Statement)
`if-then` ve `if-then-else` ifadelerinden farklı olarak, `switch` ifadesinin birden fazla olası yürütme yolu olabilir. switch ifadesi; `byte`, `short`, `char` ve `int` ilkel veri türleriyle çalışır. Ayrıca numaralandırılmış türlerle (enumerated types - [Enum Türleri](../3-siniflar-ve-nesneler/enum-turleri.md) bölümünde ele alınmıştır), `String` sınıfıyla ve belirli ilkel türleri içeren birkaç özel sınıfla da çalışır: `Character`, `Byte`, `Short` ve `Integer` ([Sayılar ve Metinler](../6-sayilar-ve-metinler/sayilar.md) bölümünde ele alınmıştır).

Aşağıdaki kod örneği olan `SwitchDemo`, değeri bir ayı temsil eden *month* adlı bir *int* tanımlar. Kod, `switch` deyimini kullanarak *month* değerine göre ayın adını görüntüler.


```java
public class SwitchDemo {
    public static void main(String[] args) {

        int month = 8;
        String monthString;
        switch (month) {
            case 1:  monthString = "January";
                     break;
            case 2:  monthString = "February";
                     break;
            case 3:  monthString = "March";
                     break;
            case 4:  monthString = "April";
                     break;
            case 5:  monthString = "May";
                     break;
            case 6:  monthString = "June";
                     break;
            case 7:  monthString = "July";
                     break;
            case 8:  monthString = "August";
                     break;
            case 9:  monthString = "September";
                     break;
            case 10: monthString = "October";
                     break;
            case 11: monthString = "November";
                     break;
            case 12: monthString = "December";
                     break;
            default: monthString = "Invalid month";
                     break;
        }
        System.out.println(monthString);
    }
}
```

Bu durumda, **August** standart çıktıya yazdırılır.

Bir switch ifadesinin gövdesi switch bloğu olarak bilinir. `switch` bloğundaki bir ifade, bir veya daha fazla `case` veya `default` etiketiyle etiketlenebilir. switch ifadesi kendi ifadesini değerlendirir, ardından eşleşen `case` etiketini takip eden tüm ifadeleri yürütür.

Ayın adını `if-then-else` ifadeleriyle de görüntüleyebilirsiniz:

```java
int month = 8;
if (month == 1) {
    System.out.println("January");
} else if (month == 2) {
    System.out.println("February");
}
...  // ve bu şekilde devam eder
```

`if-then-else` ifadelerini mi yoksa `switch` ifadesini mi kullanacağınıza karar vermek, okunabilirliğe ve ifadenin test ettiği şeye bağlıdır. Bir `if-then-else ifadesi`, **değer aralıklarına veya koşullara dayalı ifadeleri test edebilirken**, bir `switch` ifadesi **yalnızca tek bir tamsayı, numaralandırılmış değer veya String nesnesine dayalı ifadeleri test eder**.

Bir diğer ilgi çekici nokta `break` ifadesidir. Her `break` ifadesi, kendisini çevreleyen `switch` ifadesini sonlandırır. Kontrol akışı, `switch` bloğundan sonraki ilk ifadeyle devam eder. `break` ifadeleri gereklidir çünkü bunlar olmadan `switch` bloklarındaki ifadeler birbirinin devamı olarak çalışır (*fall through*): Eşleşen `case` etiketinden sonraki tüm ifadeler, sonraki `case` etiketlerinin ifadelerinden bağımsız olarak, bir `break` ifadesiyle karşılaşılıncaya kadar sırayla yürütülür. `SwitchDemoFallThrough` programı, bir `switch` bloğundaki ifadelerin birbirinin devamı olarak çalışmasını (*fall through*) gösterir. Program, tamsayı ay değerine karşılık gelen ayı ve yıl içinde onu takip eden ayları görüntüler:

```java
public class SwitchDemoFallThrough {
    public static void main(String[] args) {
        java.util.ArrayList<String> futureMonths =
            new java.util.ArrayList<String>();

        int month = 8;

        switch (month) {
            case 1:  futureMonths.add("January");
            case 2:  futureMonths.add("February");
            case 3:  futureMonths.add("March");
            case 4:  futureMonths.add("April");
            case 5:  futureMonths.add("May");
            case 6:  futureMonths.add("June");
            case 7:  futureMonths.add("July");
            case 8:  futureMonths.add("August");
            case 9:  futureMonths.add("September");
            case 10: futureMonths.add("October");
            case 11: futureMonths.add("November");
            case 12: futureMonths.add("December");
                     break; // gerekli değil
            default: break;
        }

        if (futureMonths.isEmpty()) {
            System.out.println("Invalid month number");
        } else {
            for (String monthName : futureMonths) {
               System.out.println(monthName);
            }
        }
    }
}
```

Kodun çıktısı şu şekildedir:

```text
August
September
October
November
December
```

Teknik olarak, sondaki `break` gerekli değildir çünkü akış zaten `switch` ifadesinin dışına çıkar . Kodun değiştirilmesini daha kolay ve daha az hataya açık hale getirmek için bir `break` kullanılması önerilir. `default` satırı, `case` durumlarından hiçbirine girmeyip çalışan durumdur.

Aşağıdaki kod örneği olan `SwitchDemo2`, bir ifadenin birden fazla `case` etiketine nasıl sahip olabileceğini gösterir. Bu kod örneği, belirli bir aydaki gün sayısını hesaplar:

```java
class SwitchDemo2 {
    public static void main(String[] args) {

        int month = 2;
        int year = 2000;
        int numDays = 0;

        switch (month) {
            case 1: case 3: case 5:
            case 7: case 8: case 10:
            case 12:
                numDays = 31;
                break;
            case 4: case 6:
            case 9: case 11:
                numDays = 30;
                break;
            case 2:
                if (((year % 4 == 0) && !(year % 100 == 0)) || (year % 400 == 0))
                    numDays = 29;
                else
                    numDays = 28;
                break;
            default:
                System.out.println("Invalid month.");
                break;
        }
        System.out.println("Number of Days = " + numDays);
    }
}
```

Kodun çıktısı şu şekildedir:

```text
Number of Days = 29
```

---

## switch İfadelerinde String Kullanımı (Using Strings in switch Statements)

Java SE 7 ve sonraki sürümlerde, switch deyiminin ifadesinde bir `String` nesnesi kullanabilirsiniz. Aşağıdaki kod örneği olan `StringSwitchDemo`, *month* adlı String'in değerine göre ayın numarasını görüntüler:

```java
public class StringSwitchDemo {
    public static int getMonthNumber(String month) {

        int monthNumber = 0;

        if (month == null) {
            return monthNumber;
        }

        switch (month.toLowerCase()) {
            case "january":
                monthNumber = 1;
                break;
            case "february":
                monthNumber = 2;
                break;
            case "march":
                monthNumber = 3;
                break;
            case "april":
                monthNumber = 4;
                break;
            case "may":
                monthNumber = 5;
                break;
            case "june":
                monthNumber = 6;
                break;
            case "july":
                monthNumber = 7;
                break;
            case "august":
                monthNumber = 8;
                break;
            case "september":
                monthNumber = 9;
                break;
            case "october":
                monthNumber = 10;
                break;
            case "november":
                monthNumber = 11;
                break;
            case "december":
                monthNumber = 12;
                break;
            default: 
                monthNumber = 0;
                break;
        }

        return monthNumber;
    }

    public static void main(String[] args) {

        String month = "August";

        int returnedMonthNumber =
            StringSwitchDemo.getMonthNumber(month);

        if (returnedMonthNumber == 0) {
            System.out.println("Invalid month");
        } else {
            System.out.println(returnedMonthNumber);
        }
    }
}
```

Çıktı:

```text
8
```

`switch` ifadesindeki `String`, her `case` etiketiyle ilişkilendirilmiş ifadelerle [String.equals](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#equals-java.lang.Object-) yöntemi kullanılıyormuş gibi karşılaştırılır. `StringSwitchDemo` örneğinin büyük/küçük harf fark etmeksizin herhangi bir ayı kabul etmesi için month, [toLowerCase](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html#toLowerCase--) yöntemiyle küçük harfe dönüştürülür ve case etiketleriyle ilişkilendirilmiş tüm dizeler küçük harftedir.

> **Not**: Bu örnek, `switch` ifadesindeki ifadenin `null` olup olmadığını kontrol eder. **`NullPointerException` oluşmasını önlemek için herhangi bir switch ifadesindeki ifadenin `null` olmadığından emin olun**.