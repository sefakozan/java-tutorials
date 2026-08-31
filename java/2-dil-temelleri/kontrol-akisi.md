# Ders: Kontrol Akış İfadeleri (Control Flow Statements)

Bir kaynak dosyadaki ifadeler genellikle yukarıdan aşağıya doğru, göründükleri sırayla yürütülür. Ancak **kontrol akış ifadeleri (control flow statements)**, programın yürütülme akışını koşullara göre dallandırarak, döngüye sokarak veya belirli kod bloklarını atlayarak kesintiye uğratır.

1. [**Karar Verme İfadeleri (`if-then` ve `if-then-else`)**](#1-karar-verme-ifadeleri-if-then-ve-if-then-else)
2. [**`switch` İfadesi**](#2-switch-ifadesi)
3. [**Döngü İfadeleri (`while`, `do-while`, `for`)**](#3-döngü-ifadeleri-while-do-while-for)
4. [**Dallanma İfadeleri (`break`, `continue`, `return`)**](#4-dallanma-ifadeleri-break-continue-return)
---

# 1. Karar Verme İfadeleri (`if-then` ve `if-then-else`)

### `if-then` İfadesi
`if-then` ifadesi, tüm kontrol akış ifadelerinin en temelidir. Programınıza yalnızca belirli bir koşul `true` olarak değerlendirildiğinde belirli bir kod bölümünü yürütmesini söyler:

```java
void applyBrakes(int decrement) {
    // Bisiklet zaten hareket halinde mi?
    if (isMoving) {
        // Bisiklet hareket halindeyse hızı azalt
        currentSpeed -= decrement;
    }
}
```

### `if-then-else` İfadesi
`if-then-else` ifadesi, "if" koşulu `false` olarak değerlendirildiğinde alternatif bir yürütme yolu sunar:

```java
class IfElseDemo {
    public static void main(String[] args) {
        int testscore = 76;
        char grade;

        if (testscore >= 90) {
            grade = 'A';
        } else if (testscore >= 80) {
            grade = 'B';
        } else if (testscore >= 70) {
            grade = 'C';
        } else if (testscore >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        System.out.println("Grade = " + grade);
    }
}
```

---

# 2. `switch` İfadesi

`if-then` ve `if-then-else` ifadelerinin aksine, `switch` ifadesinin birçok olası yürütme yolu olabilir. `switch`, ilkel veri tipleri `byte`, `short`, `char` ve `int` ile çalışır. Ayrıca numaralandırılmış türler (*Enumerated Types*), `String` sınıfı ve ilkel türleri saran bazı özel sınıflarla (`Character`, `Byte`, `Short`, `Integer`) da çalışır.

```java
public class SwitchDemo {
    public static void main(String[] args) {
        int month = 8;
        String monthString;
        switch (month) {
            case 1:  monthString = "Ocak";
                     break;
            case 2:  monthString = "Şubat";
                     break;
            case 3:  monthString = "Mart";
                     break;
            case 4:  monthString = "Nisan";
                     break;
            case 5:  monthString = "Mayıs";
                     break;
            case 6:  monthString = "Haziran";
                     break;
            case 7:  monthString = "Temmuz";
                     break;
            case 8:  monthString = "Ağustos";
                     break;
            case 9:  monthString = "Eylül";
                     break;
            case 10: monthString = "Ekim";
                     break;
            case 11: monthString = "Kasım";
                     break;
            case 12: monthString = "Aralık";
                     break;
            default: monthString = "Geçersiz ay";
                     break;
        }
        System.out.println(monthString);
    }
}
```

> **Not:** Her `case` bloğunun sonundaki `break` ifadesi önemlidir. `break` yazılmazsa program bir sonraki `case` bloğuna düşer (*fall-through*).

### `switch` İfadelerinde String Kullanımı (Java SE 7+)
Java SE 7 ve sonrasında `switch` ifadesinin ifadesinde `String` nesneleri kullanılabilir:

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
            default: 
                monthNumber = 0;
                break;
        }
        return monthNumber;
    }
}
```

---

# 3. Döngü İfadeleri (`while`, `do-while`, `for`)

### `while` İfadesi
`while` ifadesi, belirli bir koşul `true` kaldığı sürece bir ifade bloğunu sürekli olarak yürütür:

```java
class WhileDemo {
    public static void main(String[] args){
        int count = 1;
        while (count < 11) {
            System.out.println("Count is: " + count);
            count++;
        }
    }
}
```

### `do-while` İfadesi
`do-while` ifadesi, koşulu döngünün başında değil sonunda değerlendirir; bu nedenle döngü gövdesi **en az bir kez** mutlaka çalıştırılır:

```java
class DoWhileDemo {
    public static void main(String[] args){
        int count = 1;
        do {
            System.out.println("Count is: " + count);
            count++;
        } while (count < 11);
    }
}
```

### `for` İfadesi
`for` ifadesi, belirli bir aralıktaki değerler üzerinde yineleme yapmak için kompakt bir yol sağlar:

```java
class ForDemo {
    public static void main(String[] args){
         for(int i = 1; i < 11; i++){
              System.out.println("Count is: " + i);
         }
    }
}
```

### Gelişmiş `for` Döngüsü (Enhanced for / For-Each)
Diziler ve koleksiyonlar üzerinde gezinmek için kullanılır:

```java
class EnhancedForDemo {
    public static void main(String[] args){
         int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
         for (int item : numbers) {
             System.out.println("Count is: " + item);
         }
    }
}
```

---

# 4. Dallanma İfadeleri (`break`, `continue`, `return`)

### `break` İfadesi
- **Etiketsiz `break`:** İçinde bulunduğu `switch`, `for`, `while` veya `do-while` döngüsünü anında sonlandırır.
- **Etiketli `break`:** Belirtilen etiketli (*labeled*) dış döngüyü sonlandırır:

```java
search:
    for (i = 0; i < arrayOfInts.length; i++) {
        for (j = 0; j < arrayOfInts[i].length; j++) {
            if (arrayOfInts[i][j] == searchfor) {
                foundIt = true;
                break search;
            }
        }
    }
```

### `continue` İfadesi
- **Etiketsiz `continue`:** Mevcut döngü adımının geri kalanını atlar ve bir sonraki yinelemeye geçer.
- **Etiketli `continue`:** Belirtilen etiketli döngünün bir sonraki yinelemesine geçer.

### `return` İfadesi
`return` ifadesi geçerli metodun yürütülmesini sonlandırır ve kontrolü metodun çağrıldığı yere geri verir. Geri dönüş türü `void` olmayan metotlarda bir değer döndürmelidir:

```java
return ++count;
```
