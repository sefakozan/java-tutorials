# this Anahtar Kelimesini Kullanma (Using the this Keyword)

Bir örnek metodu (instance method) veya yapıcı (constructor) içinde `this`, *mevcut nesneye (current object)* — metodu veya yapıcısı çağrılan nesneye — bir referanstır. Bir örnek metodu veya yapıcısı içinden geçerli nesnenin herhangi bir üyesine `this` kullanarak başvurabilirsiniz.

## Bir Alanla `this` Kullanma (Using `this` with a Field)

`this` anahtar sözcüğünü kullanmanın en yaygın nedeni, bir alanın bir metot veya yapıcı parametresi tarafından gölgelenmesidir (shadowed).

Örneğin `Point` sınıfı şu şekilde yazılmıştı:

```java
public class Point {
    public int x = 0;
    public int y = 0;
        
    // yapıcı (constructor)
    public Point(int a, int b) {
        x = a;
        y = b;
    }
}
```

ancak şu şekilde de yazılabilirdi:

```java
public class Point {
    public int x = 0;
    public int y = 0;
        
    // yapıcı (constructor)
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

Yapıcıya verilen her argüman, nesnenin alanlarından birini gölgeler — yapıcı içinde `x`, yapıcının ilk argümanının yerel bir kopyasıdır. `Point` alanına (`x`) başvurmak için, yapıcının `this.x` ifadesini kullanması gerekir.

## Bir Yapıcı ile `this` Kullanma (Using `this` with a Constructor)

Bir yapıcının içinden, aynı sınıftaki başka bir yapıcıyı çağırmak için de `this` anahtar kelimesini kullanabilirsiniz. Bunu yapmaya *açık yapıcı çağrısı (explicit constructor invocation)* denir. İşte Nesneler bölümündekinden farklı bir implementasyona sahip başka bir `Rectangle` sınıfı:

```java
public class Rectangle {
    private int x, y;
    private int width, height;
        
    public Rectangle() {
        this(0, 0, 1, 1);
    }
    public Rectangle(int width, int height) {
        this(0, 0, width, height);
    }
    public Rectangle(int x, int y, int width, int height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    ...
}
```

Bu sınıf bir dizi yapıcı içerir. Her yapıcı, dikdörtgenin üye değişkenlerinin bir kısmını veya tamamını başlatır. Yapıcılar, başlangıç değeri bir argüman tarafından sağlanmayan herhangi bir üye değişkeni için varsayılan bir değer sağlar. Örneğin, bağımsız değişkensiz yapıcı 0,0 koordinatlarında 1x1'lik bir `Rectangle` oluşturur. İki bağımsız değişkenli yapıcı, genişlik ve yüksekliği ileterek ancak her zaman 0,0 koordinatlarını kullanarak dört bağımsız değişkenli yapıcıyı çağırır. Daha önce olduğu gibi derleyici, bağımsız değişkenlerin sayısına ve türüne göre hangi yapıcının çağrılacağını belirler.

Varsa, başka bir yapıcının çağrılması yapıcının ilk satırı olmalıdır.
