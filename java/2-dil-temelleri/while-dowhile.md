# while ve do-while İfadeleri (The while and do-while Statements)

`while` ifadesi, belirli bir koşul *doğru (true)* olduğu sürece bir ifade bloğunu sürekli olarak yineler. Sözdizimi şu şekilde ifade edilebilir:

```java
while (expression) {
     statement(s)
}
```

while ifadesi, bir boolean değer döndürmesi gereken expression'ı (ifadeyi) değerlendirir. Expression true olarak değerlendirilirse, while ifadesi while bloğundaki statement(lar)ı yürütür. while ifadesi, expression false olarak değerlendirilene kadar expression'ı test etmeye ve bloğunu yürütmeye devam eder. 1'den 10'a kadar olan değerleri yazdırmak için while ifadesini kullanmak, aşağıdaki `WhileDemo` programında olduğu gibi gerçekleştirilebilir:

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
while ifadesini aşağıdaki gibi kullanarak sonsuz bir döngü uygulayabilirsiniz:

```java
while (true){
    // your code goes here
}
```

Java programlama dili ayrıca şu şekilde ifade edilebilen bir `do-while` deyimi de sağlar:

```java
do {
     statement(s) // deyimler
} while (expression); // ifade
```

`do-while` ile `while` arasındaki fark, do-while'ın ifadesini döngünün başında değil, sonunda değerlendirmesidir. Bu nedenle, aşağıdaki `DoWhileDemo` programında gösterildiği gibi, do bloğu içindeki ifadeler her zaman en az bir kez yürütülür:

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