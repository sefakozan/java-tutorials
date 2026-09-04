# Atama, Aritmetik ve Birli Operatörler (Assignment, Arithmetic, and Unary Operators)

## Basit Atama Operatörü (=)

En sık karşılaşacağınız operatörlerden biri basit atama operatörüdür (**=**). Sağındaki değeri solundaki değişkene atar:

```java
int cadence = 0;
int speed = 0;
int gear = 1;
```
Bu operatör, [Nesneler Oluşturma](java/3-siniflar-ve-nesneler/nesneler.md) bölümünde ele alındığı gibi, nesne referansları atamak için nesneler üzerinde de kullanılabilir.

---

## Aritmetik Operatörler (Arithmetic Operators)

Java programlama dili, toplama, çıkarma, çarpma ve bölme işlemlerini gerçekleştiren operatörler sağlar. Bunları temel matematikteki karşılıklarından tanıma ihtimaliniz oldukça yüksek. Size yeni görünebilecek tek sembol '**%**', bir işleneni diğerine böler ve sonuç olarak kalanı döndürür.

&ensp;&thinsp; **+** : Toplama operatörü (*Additive operator*) — Ayrıca dizeleri birleştirmek (*String concatenation*) için kullanılır.  
&emsp; **-** : Çıkarma operatörü (*Subtraction operator*)  
&emsp; **\*** : Çarpma operatörü (*Multiplication operator*)  
&emsp; **/** : Bölme operatörü (*Division operator*)  
&ensp; **%** : Kalan / Mod operatörü (*Remainder operator*)

Aşağıdaki program, ArithmeticDemo, aritmetik operatörleri test eder.

```java
class ArithmeticDemo {
    public static void main (String[] args) {

        int result = 1 + 2;
        // sonuç şimdi 3
        System.out.println("1 + 2 = " + result);
        int original_result = result;

        result = result - 1;
        // sonuç şimdi 2
        System.out.println(original_result + " - 1 = " + result);
        original_result = result;

        result = result * 2;
        // sonuç şimdi 4
        System.out.println(original_result + " * 2 = " + result);
        original_result = result;

        result = result / 2;
        // sonuç şimdi 2
        System.out.println(original_result + " / 2 = " + result);
        original_result = result;

        result = result + 8;
        // sonuç şimdi 10
        System.out.println(original_result + " + 8 = " + result);
        original_result = result;

        result = result % 7;
        // sonuç şimdi 3
        System.out.println(original_result + " % 7 = " + result);
    }
}
```

Bu programın çıktısı:

```text
1 + 2 = 3
3 - 1 = 2
2 * 2 = 4
4 / 2 = 2
2 + 8 = 10
10 % 7 = 3
```

Aritmetik operatörleri basit atama operatörüyle birleştirerek bileşik atamalar da oluşturabilirsiniz. Örneğin, *x+=1;* ve *x=x+1;* ifadelerinin her ikisi de x değerini 1 artırır.

**+** operatörü, aşağıdaki ConcatDemo programında gösterildiği gibi iki dizeyi birleştirmek (bir araya getirmek) için de kullanılabilir:

```java
class ConcatDemo {
    public static void main(String[] args){
        String firstString = "This is";
        String secondString = " a concatenated string.";
        String thirdString = firstString + secondString;
        System.out.println(thirdString);
    }
}
```

Bu programın sonunda, *thirdString* değişkeni "This is a concatenated string." ifadesini içerir ve bu ifade standart çıktıya yazdırılır.

---

## Birli Operatörler (Unary Operators)

Tekli operatörler yalnızca bir işlenen gerektirir; bir değeri bir artırma/bir azaltma, bir ifadeyi olumsuzlama veya bir boolean'ın değerini tersine çevirme gibi çeşitli işlemler gerçekleştirir.

&ensp;&thinsp; **+** : Birli artı operatörü (*Unary plus operator*); pozitif bir değeri belirtir (ancak sayılar bu olmadan da pozitiftir).  
&emsp; **-** : Birli eksi operatörü (*Unary minus operator*); bir ifadenin işaretini tersine çevirir.  
&nbsp;&thinsp;**++** : Artırma operatörü (*Increment operator*); değeri 1 artırır.  
&ensp;&thinsp;&thinsp;**--** : Azaltma operatörü (*Decrement operator*); değeri 1 azaltır.  
&emsp;&ensp;**!** : Mantıksal tümleme / DEĞİL operatörü (*Logical complement operator*); bir `boolean` değerini tersine çevirir.

Aşağıdaki program, UnaryDemo, birli operatörleri test eder:

```java
class UnaryDemo {
    public static void main(String[] args) {

        int result = +1;
        // sonuç şimdi 1
        System.out.println(result);

        result--;
        // sonuç şimdi 0
        System.out.println(result);

        result++;
        // sonuç şimdi 1
        System.out.println(result);

        result = -result;
        // sonuç şimdi -1
        System.out.println(result);

        boolean success = false;
        // false
        System.out.println(success);
        // true
        System.out.println(!success);
    }
}
```

Artırma/azaltma operatörleri işlenenden önce (önek) veya sonra (sonek) uygulanabilir. *result++;* ve *++result;* kodlarının her ikisi de result değerinin bir artırılmasıyla sonuçlanır. Tek fark, **önek sürümünün (++result) artırılmış değeri döndürmesi, sonek sürümünün (result++) ise özgün değeri (arttırılmadan önceki değeri) döndürmesidir**. Yalnızca basit bir artırma/azaltma işlemi gerçekleştiriyorsanız, hangi sürümü seçtiğiniz gerçekten önemli değildir. Ancak bu operatörü daha büyük bir ifadenin parçası olarak kullanıyorsanız, seçtiğiniz sürüm önemli bir fark yaratabilir.

Aşağıdaki program, PrePostDemo, önek/sonek tekli artırma operatörünü gösterir:

```java
class PrePostDemo {
    public static void main(String[] args){
        int i = 3;
        i++;
        // 4 yazdırır
        System.out.println(i);
        ++i;			   
        // 5 yazdırır
        System.out.println(i);
        // 6 yazdırır
        System.out.println(++i);
        // 6 yazdırır
        System.out.println(i++);
        // 7 yazdırır
        System.out.println(i);
    }
}
```