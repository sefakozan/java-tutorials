# Bir Metottan Değer Döndürme (Returning a Value from a Method)

Bir metot, kendisini çağıran koda şu durumlarda geri döner:

* metottaki tüm ifadeleri tamamladığında,
* bir `return` ifadesine ulaştığında, veya
* bir istisna fırlattığında (daha sonra ele alınacaktır),

hangisi önce gerçekleşirse.

Bir metodun dönüş türünü (return type) metot bildiriminde bildirirsiniz. Metot gövdesi içinde değeri döndürmek için `return` ifadesini kullanırsınız.

`void` olarak bildirilen herhangi bir metot bir değer döndürmez. Bir `return` ifadesi içermesi gerekmez, ancak içerebilir. Böyle bir durumda bir kontrol akış bloğundan çıkıp metodu sonlandırmak için bir `return` ifadesi kullanılabilir ve basitçe şu şekilde kullanılır:

```java
return;
```

`void` olarak bildirilen bir metottan bir değer döndürmeye çalışırsanız, derleyici hatası alırsınız.

`void` olarak bildirilmeyen herhangi bir metot, karşılık gelen bir dönüş değerine sahip bir `return` ifadesi içermelidir, örneğin:

```java
return returnValue;
```

Dönüş değerinin veri türü, metodun bildirilen dönüş türüyle eşleşmelidir; boolean döndüreceği bildirilen bir metottan tamsayı (integer) bir değer döndüremezsiniz.

Nesneler hakkındaki bölümlerde tartışılan `Rectangle` sınıfındaki `getArea()` metodu bir tamsayı döndürür:

```java
    // dikdörtgenin alanını hesaplamak için bir metot
    public int getArea() {
        return width * height;
    }
```

Bu metot, `width*height` ifadesinin değerlendirildiği tamsayıyı döndürür.

`getArea` metodu ilkel bir tür (primitive type) döndürür. Bir metot aynı zamanda bir referans türü (reference type) de döndürebilir. Örneğin `Bicycle` nesnelerini işleyen bir programda şöyle bir metodumuz olabilir:

```java
public Bicycle seeWhosFastest(Bicycle myBike, Bicycle yourBike,
                              Environment env) {
    Bicycle fastest;
    // her bisikletin vitesi ve kadansı ile 
    // çevre koşulları (arazi ve rüzgar) dikkate 
    // alınarak hangi bisikletin daha hızlı olduğunu 
    // hesaplayacak kod
    return fastest;
}
```

## Bir Sınıf veya Arayüz Döndürme (Returning a Class or Interface)

Bu bölüm kafanızı karıştırırsa, atlayın ve arayüzler ve kalıtım dersini bitirdikten sonra tekrar dönün.

Bir metot `whosFastest` metodunun yaptığı gibi bir sınıf adını dönüş türü olarak kullandığında, döndürülen nesnenin türünün sınıfı, dönüş türünün ya bir alt sınıfı (subclass) ya da tam olarak kendisi olmalıdır. Aşağıdaki şekilde gösterildiği gibi, `ImaginaryNumber`'ın `java.lang.Number`'ın bir alt sınıfı olduğu ve onun da `Object`'in bir alt sınıfı olduğu bir sınıf hiyerarşisine sahip olduğunuzu varsayalım.

<figure style="text-align: center;">
  <img src="_media/figures/classes-hierarchy.gif" alt="ImaginaryNumber için sınıf hiyerarşisi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">ImaginaryNumber için sınıf hiyerarşisi</figcaption>
</figure>

Şimdi bir `Number` döndürdüğü bildirilen bir metodunuz olduğunu varsayalım:

```java
public Number returnANumber() {
    ...
}
```

`returnANumber` metodu bir `ImaginaryNumber` döndürebilir, ancak bir `Object` döndüremez. `ImaginaryNumber` bir `Number`'dır çünkü `Number`'ın bir alt sınıfıdır. Ancak bir `Object` mutlaka bir `Number` değildir — bir `String` veya başka bir tür olabilir.

Bir metodu geçersiz kılabilir (override edebilir) ve onu orijinal metodun bir alt sınıfını döndürecek şekilde tanımlayabilirsiniz, örneğin:

```java
public ImaginaryNumber returnANumber() {
    ...
}
```

*Eşdeğişkin dönüş türü (covariant return type)* olarak adlandırılan bu teknik, dönüş türünün alt sınıfla aynı yönde değişmesine izin verildiği anlamına gelir.

> **Not:** Arayüz (interface) adlarını da dönüş türü olarak kullanabilirsiniz. Bu durumda döndürülen nesne, belirtilen arayüzü uygulamalıdır (`implements`).
