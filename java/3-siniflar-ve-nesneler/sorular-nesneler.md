# Sorular ve Alıştırmalar: Nesneler (Objects)

## Sorular

1. Aşağıdaki programdaki sorun nedir?

```java
public class SomethingIsWrong {
    public static void main(String[] args) {
        Rectangle myRect;
        myRect.width = 40;
        myRect.height = 50;
        System.out.println("myRect's area is " + myRect.area());
    }
}
```

2. Aşağıdaki kod bir dizi ve bir dize nesnesi oluşturur. Kod yürütüldükten sonra bu nesnelere kaç referans bulunur? Nesnelerden herhangi biri çöp toplama (garbage collection) için uygun mudur?

```java
...
String[] students = new String[10];
String studentName = "Peter Parker";
students[0] = studentName;
studentName = null;
...
```

3. Bir program oluşturduğu bir nesneyi nasıl yok eder?

---

## Alıştırmalar

1. Soru 1'de gösterilen `SomethingIsWrong` adlı programı düzeltin.

2. Aşağıdaki `NumberHolder` adlı sınıf verildiğinde; sınıfın bir örneğini oluşturan, iki üye değişkenini başlatan ve ardından her bir üye değişkeninin değerini görüntüleyen bir kod yazın.

```java
public class NumberHolder {
    public int anInt;
    public float aFloat;
}
```

---

## Yanıtlar

### Soruların Yanıtları

1. **Soru**: Aşağıdaki programdaki sorun nedir?  
**Cevap**: Kod hiçbir zaman bir `Rectangle` nesnesi oluşturmaz. Bu basit programda derleyici bir hata üretir. Ancak daha gerçekçi bir durumda `myRect`, örneğin bir yapıcıda bir yerde `null` olarak başlatılabilir ve daha sonra kullanılabilir. Bu durumda program sorunsuz bir şekilde derlenecek, ancak çalışma zamanında bir `NullPointerException` üretecektir.

2. **Soru**: Aşağıdaki kod yürütüldükten sonra nesnelere kaç referans bulunur? Nesnelerden herhangi biri çöp toplama için uygun mudur?  
**Cevap**: `students` dizisine bir referans vardır ve bu dizinin `Peter Parker` dizesine bir referansı vardır. Nesnelerin hiçbiri çöp toplama için uygun değildir. `students` dizisi çöp toplama için uygun değildir çünkü `studentName` nesnesine bir referansı vardır (bu nesneye `null` değeri atanmış olsa bile). `studentName` nesnesi de uygun değildir çünkü `students[0]` hala ona başvurmaktadır.

3. **Soru**: Bir program oluşturduğu bir nesneyi nasıl yok eder?  
**Cevap**: Bir program nesneleri açıkça yok etmez. Bir program, bir nesneye olan tüm referansları çöp toplama için uygun hale gelecek şekilde `null` olarak ayarlayabilir. Ancak program nesneleri gerçekte doğrudan yok etmez.

---

### Alıştırmaların Yanıtları

1. `SomethingIsWrong` programının düzeltilmiş hali (`SomethingIsRight.java`):

```java
public class SomethingIsRight {
    public static void main(String[] args) {
        Rectangle myRect = new Rectangle();
        myRect.width = 40;
        myRect.height = 50;
        System.out.println("myRect's area is " + myRect.getArea());
    }
}
```

2. `NumberHolderDisplay.java`:

```java
public class NumberHolderDisplay {
    public static void main(String[] args) {
        NumberHolder aNumberHolder = new NumberHolder();
        aNumberHolder.anInt = 1;
        aNumberHolder.aFloat = 2.3f;
        System.out.println(aNumberHolder.anInt);
        System.out.println(aNumberHolder.aFloat);
    }
}
```
