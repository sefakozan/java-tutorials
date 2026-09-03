# Dallanma İfadeleri (Branching Statements: break, continue, return)

## 1. `break` İfadesi

- **Etiketsiz (*Unlabeled*) `break`:** İçinde bulunduğu en içteki döngüyü (`for`, `while`, `do-while`) veya `switch` ifadesini derhal sonlandırır.
- **Etiketli (*Labeled*) `break`:** Belirli bir etiketle (*label*) işaretlenmiş dış döngüyü sonlandırır.

```java
class BreakWithLabelDemo {
    public static void main(String[] args) {
        int[][] arrayOfInts = {
            { 32, 87, 3, 589 },
            { 12, 1076, 2000, 8 },
            { 622, 127, 77, 955 }
        };
        int searchfor = 12;
        boolean foundIt = false;

        search:
        for (int i = 0; i < arrayOfInts.length; i++) {
            for (int j = 0; j < arrayOfInts[i].length; j++) {
                if (arrayOfInts[i][j] == searchfor) {
                    foundIt = true;
                    break search; // search etiketli dış döngüyü kırar
                }
            }
        }
    }
}
```

---

## 2. `continue` İfadesi

`continue` ifadesi, döngünün mevcut yinelemesini atlar ve bir sonraki yinelemeye geçer:

```java
class ContinueDemo {
    public static void main(String[] args) {
        String searchMe = "peter piper picked a peck of pickled peppers";
        int max = searchMe.length();
        int numPs = 0;

        for (int i = 0; i < max; i++) {
            if (searchMe.charAt(i) != 'p')
                continue; // 'p' değilse sonraki karaktere geç
            numPs++;
        }
        System.out.println("Toplam 'p' sayısı = " + numPs);
    }
}
```

---

## 3. `return` İfadesi

`return` ifadesi geçerli metottan çıkar ve yürütme akışını metodun çağrıldığı yere geri döndürür. İsteğe bağlı olarak bir dönüş değeri dönebilir:

```java
return ++count; // Değer döndürür
return;         // void metotlarda çıkar
```
