# for İfadesi (The for Statement)

`for` ifadesi, bir değer aralığı üzerinde yineleme yapmak için kısa ve öz bir yol sağlar. Programcılar, belirli bir koşul sağlanana kadar tekrar tekrar döngüye girmesi nedeniyle buna genellikle "**for döngüsü**" adını verir. for ifadesinin genel biçimi aşağıdaki gibi ifade edilebilir:

```java
for (initialization; termination; increment) {
    statement(s)
}
```

for ifadesinin bu sürümünü kullanırken şunları aklınızda bulundurun:

`for` döngüsünün üç ana bileşeni vardır:
* **Başlatma (*Initialization*)** ifadesi döngüyü başlatır; döngü başlarken bir kez çalıştırılır.
* **Sonlandırma (*Termination*):** ifadesi false olarak değerlendirildiğinde döngü sonlanır.
* **Artırma/Güncelleme (*Increment*):** ifadesi, döngüdeki her yinelemeden sonra çağrılır; bu ifadenin bir değeri artırması veya azaltması tamamen kabul edilebilirdir.

Aşağıdaki `ForDemo` programı, 1'den 10'a kadar olan sayıları standart çıktıya yazdırmak için for ifadesinin genel biçimini kullanır:

```java
class ForDemo {
    public static void main(String[] args){
         for(int i=1; i<11; i++){
              System.out.println("Count is: " + i);
         }
    }
}
```

Bu programın çıktısı:

```text
Count is: 1
Count is: 2
Count is: 3
Count is: 4
Count is: 5
Count is: 6
Count is: 7
Count is: 8
Count is: 9
Count is: 10
```

Kodun, başlatma (*initialization*) ifadesi içinde bir değişken tanımladığına dikkat edin. Bu değişkenin kapsamı, tanımlandığı yerden for ifadesinin yönettiği bloğun sonuna kadar uzanır; dolayısıyla sonlandırma (*termination*) ve artırma (*increment*) ifadelerinde de kullanılabilir. Bir for ifadesini kontrol eden değişkene döngünün dışında ihtiyaç duyulmuyorsa, değişkeni başlatma ifadesi içinde tanımlamak en iyisidir. `i`, `j` ve `k` adları genellikle for döngülerini kontrol etmek için kullanılır; bunları başlatma ifadesi içinde tanımlamak yaşam sürelerini sınırlar ve hataları azaltır.

for döngüsünün üç ifadesi de isteğe bağlıdır; sonsuz bir döngü (infinite loop) şu şekilde oluşturulabilir:

```java
// sonsuz döngü
for ( ; ; ) {
    
    // kodunuz buraya gelir
}
```

`for` ifadesinin ayrıca [Koleksiyonlar (Collections)](../collections/index.md) ve [Diziler](../arrays/index.md) üzerinde yineleme yapmak için tasarlanmış başka bir biçimi de vardır Bu biçim bazen geliştirilmiş for (*enhanced for*) ifadesi olarak adlandırılır ve döngülerinizi daha kısa ve okunması daha kolay hale getirmek için kullanılabilir. Bunu göstermek için, 1'den 10'a kadar olan sayıları içeren aşağıdaki diziyi ele alalım:

```java
int[] numbers = {1,2,3,4,5,6,7,8,9,10};
```

Aşağıdaki program, `EnhancedForDemo`, dizi üzerinde döngü yapmak için `geliştirilmiş for (enhanced for)` döngüsünü kullanır:

```java
class EnhancedForDemo {
    public static void main(String[] args){
         int[] numbers = {1,2,3,4,5,6,7,8,9,10};

         for (int item : numbers) {
             System.out.println("Count is: " + item);
         }
    }
}
```

Bu örnekte, `item` değişkeni numbers dizisindeki mevcut değeri tutar. Bu programın çıktısı öncekiyle aynıdır:

```text
Count is: 1
Count is: 2
Count is: 3
Count is: 4
Count is: 5
Count is: 6
Count is: 7
Count is: 8
Count is: 9
Count is: 10
```

Mümkün olduğunda for ifadesinin genel biçimi yerine bu biçimini kullanmanızı öneririz.