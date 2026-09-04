# if-then ve if-then-else İfadeleri (The if-then and if-then-else Statements)

## `if-then` İfadesi

`if-then` ifadesi, tüm kontrol akışı ifadelerinin en temelidir. Programınıza, belirli bir testin sonucu *true* olduğunda yalnızca belirli bir kod bölümünü çalıştırmasını söyler. Örneğin, `Bicycle` sınıfı, frenlerin bisikletin hızını yalnızca bisiklet zaten hareket hâlindeyse azaltmasına izin verebilir. `applyBrakes` yönteminin olası bir uygulaması aşağıdaki gibi olabilir:

```java
void applyBrakes() {
    // "if" koşulu: bisiklet hareket ediyor olmalı
    if (isMoving) {
        // "then": mevcut hızı azaltır
        currentSpeed--;
    }
}
```

Bu test false olarak değerlendirilirse (yani bisiklet hareket halinde değilse), kontrol if-then ifadesinin sonuna atlar.

Ek olarak, "then" yan tümcesi yalnızca bir ifade içeriyorsa, açılış ve kapanış süslü parantezleri isteğe bağlıdır:

```java
void applyBrakes() {
    // yukarıdakiyle aynı, ancak süslü parantezler olmadan
    if (isMoving)
        currentSpeed--;
}
```

Süslü parantezlerin ne zaman atlanacağına karar vermek kişisel bir zevk meselesidir. Bunları atlamak kodu daha kırılgan hale getirebilir. Daha sonra "then" yan tümcesine ikinci bir ifade eklenirse, yaygın bir hata yeni eklenen süslü parantezleri eklemeyi unutmaktır. Derleyici bu tür bir hatayı yakalayamaz; yalnızca yanlış sonuçları elde edersiniz.

## `if-then-else` İfadesi
`if-then-else` ifadesi, bir "if" koşulu *false* olarak değerlendirildiğinde ikincil bir yürütme yolu sağlar. Bisiklet hareket halinde değilken frenlere basılması durumunda bir işlem gerçekleştirmek için `applyBrakes` metodunda bir `if-then-else` ifadesi kullanabilirsiniz. Bu durumda yapılacak işlem, bisikletin zaten durmuş olduğunu belirten bir hata mesajını yazdırmaktır.

```java
void applyBrakes() {
    if (isMoving) {
        currentSpeed--;
    } else {
        System.err.println("The bicycle has already stopped!");
    } 
}
```

Aşağıdaki `IfElseDemo` programı, bir sınav puanının değerine göre not atar: 90% veya üzeri bir puan için A, 80% veya üzeri bir puan için B ve bu şekilde devam eder.

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

Programın çıktısı:

```text
Grade = C
```

`testscore` değerinin bileşik ifadede birden fazla ifadeyi karşılayabildiğini fark etmiş olabilirsiniz: 76 >= 70 and 76 >= 60. Ancak bir koşul karşılandığında, uygun ifadeler yürütülür (*grade = 'C';*) ve kalan koşullar değerlendirilmez.