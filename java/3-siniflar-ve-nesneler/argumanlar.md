# Bir Metoda veya Constructor'a Bilgi Aktarma (Passing Information to a Method or a Constructor)

Bir metot veya constructor bildirimi, o metot veya constructor için argüman sayısını ve türünü bildirir. Örneğin, aşağıdaki faiz oranı, anapara tutarı ve kredi süresine göre ev kredisinin aylık ödemelerini hesaplayan bir metottur:

```java
public double computePayment(double <b>loanAmt</b>, double <b>rate</b>, double <b>futureValue</b>, int <b>numPeriods</b>) {
    double interest = <b>rate</b> / 100.0;
    double partial1 = Math.pow((1 + interest), -<b>numPeriods</b>);
    double denominator = (1 - partial1) / interest;
    double answer = (-<b>loanAmt</b> / denominator) - ((<b>futureValue</b> * partial1) / denominator);
    return answer;
}
```

Bu metodun dört parametresi vardır: **kredi tutarı (*loanAmt, loan amount*)**, **faiz oranı (*rate, interest rate*)**, **gelecek değer (*futureValue, future value*)** ve **dönem sayısı (*numPeriods, number of periods*)**. İlk üçü çift duyarlıklı double sayılardır, dördüncüsü ise bir int (tamsayı). Parametreler metot gövdesinde kullanılır ve çalışma zamanında iletilen argümanların değerlerini alır.

> **Not:** *Parametreler (Parameters)*, bir metot bildirimindeki değişken listesini ifade eder. *Bağımsız Değişkenler / Argümanlar (Arguments)* ise metot çağrıldığında içeri aktarılan gerçek değerlerdir. Bir metodu çağırdığınızda, kullanılan argümanlar tür ve sıra bakımından bildirimin parametreleriyle eşleşmelidir.

## Parametre Türleri (Parameter Types)

Bir metodun veya constructor parametresi için herhangi bir veri türünü kullanabilirsiniz. Buna `computePayment` metodunda gördüğünüz gibi double'lar, float'lar ve tamsayılar gibi ilkel veri türleri (primitive data types) ile nesneler ve diziler gibi referans veri türleri (reference data types) dahildir.

Aşağıda, argüman olarak bir dizi kabul eden bir metot örneği verilmiştir. Bu örnekte metot, yeni bir `Polygon` nesnesi oluşturur ve bunu bir `Point` nesneleri dizisinden başlatır (`Point` sınıfının bir x, y koordinatını temsil eden bir sınıf olduğunu varsayın):

```java
public Polygon polygonFrom(Point[] corners) {
    // metot gövdesi buraya gelir
}
```

> **Not:** Bir metodu başka bir metoda aktarmak istiyorsanız, bir [lambda ifadesi (lambda expression)](java/3-siniflar-ve-nesneler/lambda-ifadeleri.md) veya bir [metot referansı (method reference)](java/3-siniflar-ve-nesneler/metot-referanslari.md) kullanın.

## Değişken Sayıda Argüman (Arbitrary Number of Arguments - Varargs)

Bir metoda rastgele sayıda değer aktarmak için `varargs` adı verilen bir yapıyı kullanabilirsiniz. Metoda belirli bir türden kaç tane argüman iletileceğini bilmediğiniz durumlarda `varargs` kullanırsınız. Bu, manuel olarak bir dizi oluşturmanın kısa yoludur (önceki metot bir dizi yerine `varargs` kullanabilirdi).

`varargs` kullanmak için son parametrenin türünün ardından üç nokta (`...`), bir boşluk ve parametre adı yazarsınız. Metot daha sonra o parametreden hiç olmaması da dahil olmak üzere herhangi bir sayıda çağrılabilir.

```java
public Polygon polygonFrom(Point... corners) {
    int numberOfSides = corners.length;
    double squareOfSide1, lengthOfSide1;
    squareOfSide1 = (corners[1].x - corners[0].x)
                     * (corners[1].x - corners[0].x) 
                     + (corners[1].y - corners[0].y)
                     * (corners[1].y - corners[0].y);
    lengthOfSide1 = Math.sqrt(squareOfSide1);

    // Noktaları birleştiren bir çokgen oluşturan 
    // ve döndüren metot gövdesi kodu burada devam eder
}
```

Metodun içinde `corners` değişkeninin bir dizi gibi ele alındığını görebilirsiniz. Metot bir diziyle veya argüman listesiyle çağrılabilir. Metot gövdesindeki kod, her iki durumda da parametreyi bir dizi olarak ele alacaktır.

Varargs yapısını en yaygın olarak yazdırma metotlarında görürsünüz; örneğin şu `printf` metodu:

```java
public PrintStream printf(String format, Object... args)
```

rastgele sayıda nesne yazdırmanıza olanak tanır. Şu şekilde çağrılabilir:

```java
System.out.printf("%s: %d, %s%n", name, idnum, address);
```

veya şu şekilde:

```java
System.out.printf("%s: %d, %s, %s, %s%n", name, idnum, address, phone, email);
```

veya henüz daha farklı sayıda bağımsız değişkenle.

## Parametre İsimleri (Parameter Names)

Bir metoda veya constructor'a bir parametre bildirdiğinizde, o parametre için bir ad belirlersiniz. Bu ad, iletilen argümana başvurmak için metot gövdesi içinde kullanılır.

Bir parametrenin adı kendi etki alanında (scope) benzersiz olmalıdır. Aynı metot veya constructor için başka bir parametrenin adıyla aynı olamaz ve metot veya constructor içindeki bir yerel değişkenin adı olamaz.

Bir parametre, sınıfın alanlarından biriyle aynı ada sahip olabilir. Bu durum söz konusu olduğunda, parametrenin alanı *gölgelediği (shadows)* söylenir. Alanları gölgelemek kodunuzun okunmasını zorlaştırabilir ve geleneksel olarak yalnızca belirli bir alanı ayarlayan constructor'lar ve metotlar içinde kullanılır. Örneğin, aşağıdaki `Circle` sınıfını ve onun `setOrigin` metodunu ele alalım:

```java
public class Circle {
    private int x, y, radius;
    public void setOrigin(int x, int y) {
        ...
    }
}
```

`Circle` sınıfının üç alanı vardır: `x`, `y` ve `radius`. `setOrigin` metodunun iki parametresi vardır ve bunların her biri alanlardan biriyle aynı ada sahiptir. Her bir metot parametresi, adını paylaştığı alanı gölgeler. Dolayısıyla metot gövdesi içinde `x` veya `y` basit adlarını kullanmak parametreye atıfta bulunur, alana *değil*. Alana erişmek için nitelikli bir ad (qualified name) kullanmanız gerekir. Bu konu daha sonra bu derste "`this` Anahtar Kelimesini Kullanma" başlıklı bölümde ele alınacaktır.

## İlkel Veri Türü Argümanlarını Aktarma (Passing Primitive Data Type Arguments)

`int` veya `double` gibi ilkel veri türü argümanları metotlara **değere göre (*by value*)** aktarılır. Bu, parametrelerin değerlerindeki herhangi bir değişikliğin yalnızca **metodun etki alanı (scope)** içinde geçerli olduğu anlamına gelir. Metot döndüğünde, parametreler kaybolur ve bunlarda yapılan tüm değişiklikler yok olur. İşte bir örnek:

```java
public class PassPrimitiveByValue {

    public static void main(String[] args) {
           
        int x = 3;
           
        // passMethod()'u argüman olarak x ile çağır
        passMethod(x);
           
        // değerinin değişip değişmediğini 
        // görmek için x'i yazdır
        System.out.println("After invoking passMethod, x = " + x);
           
    }
        
    // passMethod()'daki parametreyi değiştir
    public static void passMethod(int p) {
        p = 10;
    }
}
```

Bu programı çalıştırdığınızda çıktı şudur:

```text
After invoking passMethod, x = 3
```

## Referans Veri Türü Argümanlarını Aktarma (Passing Reference Data Type Arguments)

Nesneler gibi referans veri türü parametreleri de metotlara **değere göre (*by value*)** aktarılır. Bu, metot döndüğünde, iletilen referansın hala daha öncekiyle aynı nesneye başvurduğu anlamına gelir. *Ancak*, uygun erişim düzeyine sahiplerse, nesnenin alanlarının değerleri metot içinde **değiştirilebilir**.

Örneğin rastgele bir sınıfta `Circle` nesnelerini hareket ettiren bir metodu ele alalım:

```java
public void moveCircle(Circle circle, int deltaX, int deltaY) {
    // dairenin merkezini x+deltaX, y+deltaY'ye taşıyacak kod
    circle.setX(circle.getX() + deltaX);
    circle.setY(circle.getY() + deltaY);
        
    // circle'a yeni bir referans atayacak kod
    circle = new Circle(0, 0);
}
```

Metodun şu argümanlarla çağrıldığını varsayalım:

```java
moveCircle(myCircle, 23, 56)
```

Metot gövdesinde `circle` parametresi, başlangıçta `myCircle` nesnesini referans alır. Metot, `circle`'ın işaret ettiği nesnenin (yani `myCircle`'ın) x ve y koordinatlarını sırasıyla 23 ve 56 artırarak değiştirir. Yapılan bu değişiklikler metot tamamlandığında da **kalıcı olacaktır**. Ardından `circle` parametresine `x = y = 0` olan yeni bir `Circle` nesnesinin referansı atanır. Ancak bu yeni atamanın metot dışında hiçbir **kalıcılığı yoktur**; çünkü referans metoda **değere göre (*by value*)** aktarılmıştır ve orijinal referansın kendisi değiştirilemez. Metot içerisinde `circle` değişkeninin işaret ettiği nesne değişmiş olsa da, metot sona erdiğinde `myCircle` hala metot çağrılmadan önce işaret ettiği aynı `Circle` nesnesini referans almaya devam eder.