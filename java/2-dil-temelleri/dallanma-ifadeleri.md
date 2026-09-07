# Dallanma İfadeleri (Branching Statements)

## `break` İfadesi

`break` ifadesinin (*break statement*) iki biçimi vardır: etiketli (*labeled*) ve etiketsiz (*unlabeled*). Etiketsiz biçimini `switch` ifadesinin önceki anlatımında gördünüz. Etiketsiz bir `break` ifadesini, aşağıdaki `BreakDemo` programında gösterildiği gibi, bir `for`, `while` veya `do-while` döngüsünü sonlandırmak için de kullanabilirsiniz:

```java
class BreakDemo {
    public static void main(String[] args) {

        int[] arrayOfInts = {32, 87, 3, 589, 12, 1076, 2000, 8, 622, 127};
        int searchfor = 12;

        int i;
        boolean foundIt = false;

        for (i = 0; i < arrayOfInts.length; i++) {
            if (arrayOfInts[i] == searchfor) {
                foundIt = true;
                <b>break;</b>
            }
        }

        if (foundIt) {
            System.out.println("Found " + searchfor + " at index " + i);
        } else {
            System.out.println(searchfor + " not in the array");
        }
    }
}
```

Bu program bir dizi içinde 12 sayısını arar. Kodda kalın harflerle gösterilen `break` ifadesi, bu değer bulunduğunda `for` döngüsünü sonlandırır. Kontrol akışı daha sonra `for` döngüsünden sonraki ifadeye geçer. Bu programın çıktısı şöyledir:

```text
Found 12 at index 4
```

Etiketsiz (*unlabeled*) bir `break` ifadesi en içteki `switch`, `for`, `while` veya `do-while` ifadesini sonlandırır; ancak etiketli (*labeled*) bir `break` dıştaki bir ifadeyi sonlandırır. Aşağıdaki `BreakWithLabelDemo` programı önceki programa benzer, ancak iki boyutlu bir dizi (*two-dimensional array*) içinde bir değeri aramak için iç içe (*nested*) `for` döngüleri kullanır. Değer bulunduğunda, etiketli bir `break` dıştaki `for` döngüsünü ("search" olarak etiketlenmiş) sonlandırır:

```java
class BreakWithLabelDemo {
    public static void main(String[] args) {

        int[][] arrayOfInts = { {32, 87, 3, 589}, {12, 1076, 2000, 8}, {622, 127, 77, 955} };
        int searchfor = 12;

        int i;
        int j = 0;
        boolean foundIt = false;

    search:
        for (i = 0; i < arrayOfInts.length; i++) {
            for (j = 0; j < arrayOfInts[i].length; j++) {
                if (arrayOfInts[i][j] == searchfor) {
                    foundIt = true;
                    <b>break search;</b>
                }
            }
        }

        if (foundIt) {
            System.out.println("Found " + searchfor + " at " + i + ", " + j);
        } else {
            System.out.println(searchfor + " not in the array");
        }
    }
}
```

Programın çıktısı şöyledir:

```text
Found 12 at 1, 0
```

`break` ifadesi etiketli ifadeyi (burada en dıştaki for döngüsü) sonlandırır; kontrol akışını etikete aktarmaz. Kontrol akışı, etiketlenmiş (sonlandırılmış) ifadenin hemen ardından gelen ifadeye aktarılır.

---

## `continue` İfadesi

`continue` ifadesi (*continue statement*), bir `for`, `while` veya `do-while` döngüsünün geçerli yinelemesini atlar. Etiketsiz (*unlabeled*) biçim, en içteki döngü gövdesinin sonuna atlar ve döngüyü kontrol eden `boolean` ifadeyi değerlendirir. Aşağıdaki `ContinueDemo` programı, bir `String` üzerinde adım adım ilerleyerek "p" harfinin geçiş sayısını sayar. Geçerli karakter bir p değilse, `continue` ifadesi döngünün geri kalanını atlar ve bir sonraki karaktere geçer. Eğer bir "p" ise, program harf sayısını artırır.

```java
class ContinueDemo {
    public static void main(String[] args) {

        String searchMe = "peter piper picked a " + "peck of pickled peppers";
        int max = searchMe.length();
        int numPs = 0;

        for (int i = 0; i < max; i++) {
            // yalnızca p'leri arıyor
            if (searchMe.charAt(i) != 'p')
                continue;

            // bulunan p sayısını artırıyor
            numPs++;
        }
        System.out.println("Found " + numPs + " p's in the string.");
    }
}
```

Bu programın çıktısı şöyledir:

```text
Found 9 p's in the string.
```

Bu etkiyi daha net görmek için `continue` ifadesini kaldırmayı ve kodu tekrar derlemeyi deneyin. Programı tekrar çalıştırdığınızda sayım yanlış olacak ve 9 yerine 35 adet p bulduğunu söyleyecektir.

Etiketli (*labeled*) bir `continue` ifadesi, belirtilen etiketle işaretlenmiş bir dış döngünün geçerli yinelemesini atlar. Aşağıdaki örnek program olan `ContinueWithLabelDemo`, başka bir string içinde bir alt dize (*substring*) aramak için iç içe döngüler (*nested loops*) kullanır. İki iç içe döngü gereklidir: biri alt dize (*substring*) üzerinde yineleme yapmak için, diğeri ise aranan string üzerinde yineleme yapmak için. Aşağıdaki `ContinueWithLabelDemo` programı, dış döngüdeki bir yinelemeyi atlamak için continue'nun etiketli biçimini kullanır:

```java
class ContinueWithLabelDemo {
    public static void main(String[] args) {

        String searchMe = "Look for a substring in me";
        String substring = "sub";
        boolean foundIt = false;

        int max = searchMe.length() - 
                  substring.length();

    test:
        for (int i = 0; i <= max; i++) {
            int n = substring.length();
            int j = i;
            int k = 0;
            while (n-- != 0) {
                if (searchMe.charAt(j++) != substring.charAt(k++)) {
                    continue test;
                }
            }
            foundIt = true;
            break test;
        }
        System.out.println(foundIt ? "Found it" : "Didn't find it");
    }
}
```

Bu programın çıktısı şöyledir:

```text
Found it
```

---

## `return` İfadesi

Dallanma ifadelerinin sonuncusu `return` ifadesidir (*return statement*). `return` ifadesi içinde olduğu metottan çıkar ve kontrol akışı metodun çağrıldığı yere geri döner. `return` ifadesinin iki biçimi vardır: bir değer döndüren ve döndürmeyen. Bir değer döndürmek için, `return` anahtar sözcüğünden sonra değeri (veya değeri hesaplayan bir ifadeyi / *expression*) koymanız yeterlidir.

```java
return ++count;
```

Döndürülen değerin veri tipi (*data type*), metodun bildirilen dönüş değeri türüyle (*return value type*) eşleşmelidir. Bir metot `void` olarak bildirildiğinde, bir değer döndürmeyen `return` biçimini kullanın.

```java
return;
```

[Sınıflar ve Nesneler (*Classes and Objects*)](../java/3-siniflar-ve-nesneler/siniflar.md) dersi, metot yazma hakkında bilmeniz gereken her şeyi kapsayacaktır.

---

### Kontrol Akışı Şeması (Control Flow Diagrams)

```text
Etiketsiz break (Unlabeled break):
for (...) {
    if (koşul) {
        break; ───────► (Döngü sonlanır, döngü dışına çıkar)
    }
}
◄─────────────────────── (Buradan devam eder)

Etiketli break (Labeled break):
search:
for (...) {
    for (...) {
        if (koşul) {
            break search; ───► (search etiketli dış döngü tamamen sonlanır)
        }
    }
}
◄───────────────────────────── (search döngüsünün bittiği yerden devam eder)

Etiketsiz continue (Unlabeled continue):
for (...) {
    if (koşul) {
        continue; ────► (Döngünün kalanını atlar, sonraki yinelemeye geçer)
    }
    // bu satırlar atlanır
}

Etiketli continue (Labeled continue):
test:
for (...) {
    for (...) {
        if (koşul) {
            continue test; ──► (test etiketli dış döngünün sonraki yinelemesine geçer)
        }
    }
}
```
