# switch İfadesi (The switch Statement)

`if-then` ve `if-then-else` ifadelerinin aksine, `switch` ifadesinin birçok olası yürütme yolu olabilir. 

`switch`, ilkel veri tipleri `byte`, `short`, `char`, `int`, numaralandırılmış türler (*Enumerated Types*), `String` sınıfı ve ilkel türleri saran sarmalayıcı sınıflarla (`Character`, `Byte`, `Short`, `Integer`) çalışır.

```java
public class SwitchDemo {
    public static void main(String[] args) {
        int month = 8;
        String monthString;
        switch (month) {
            case 1:  monthString = "Ocak"; break;
            case 2:  monthString = "Şubat"; break;
            case 3:  monthString = "Mart"; break;
            case 4:  monthString = "Nisan"; break;
            case 5:  monthString = "Mayıs"; break;
            case 6:  monthString = "Haziran"; break;
            case 7:  monthString = "Temmuz"; break;
            case 8:  monthString = "Ağustos"; break;
            case 9:  monthString = "Eylül"; break;
            case 10: monthString = "Ekim"; break;
            case 11: monthString = "Kasım"; break;
            case 12: monthString = "Aralık"; break;
            default: monthString = "Geçersiz ay"; break;
        }
        System.out.println(monthString); // Ağustos
    }
}
```

> **Önemli:** Her `case` bloğunun sonundaki `break` deyimi switch gövdesinden çıkışı sağlar. `break` konulmazsa kod bir sonraki `case` bloğuna doğru akmaya (*fall-through*) devam eder.
