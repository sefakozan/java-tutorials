# Nesne Oluşturma (Creating Objects)

Bildiğiniz gibi bir sınıf, nesneler için bir taslak (blueprint) sağlar; bir sınıftan bir nesne oluşturursunuz. `CreateObjectDemo` programından alınan aşağıdaki ifadelerin her biri bir nesne oluşturur ve bunu bir değişkene atar:

```java
Point originOne = new Point(23, 94);
Rectangle rectOne = new Rectangle(originOne, 100, 200);
Rectangle rectTwo = new Rectangle(50, 100);
```

İlk satır `Point` sınıfının bir nesnesini oluşturur; ikinci ve üçüncü satırlar ise `Rectangle` sınıfının birer nesnesini oluşturur.

Bu ifadelerin her biri üç bölümden oluşur (aşağıda ayrıntılı olarak tartışılmaktadır):

1. **Bildirim (Declaration)**: Kalın harflerle yazılan kodların tümü (`Point originOne`, `Rectangle rectOne`, `Rectangle rectTwo`), bir değişken adını bir nesne türüyle ilişkilendiren değişken bildirimleridir.
2. **Örneklendirme (Instantiation)**: `new` anahtar sözcüğü, nesneyi oluşturan bir Java operatörüdür.
3. **Başlatma (Initialization)**: `new` operatörünü, yeni nesneyi başlatan bir yapıcı (constructor) çağrısı izler.

## Bir Nesneye Başvurmak İçin Değişken Bildirme (Declaring a Variable to Refer to an Object)

Daha önce, bir değişken bildirmek için şunu yazdığınızı öğrenmiştiniz:

```java
type name;
```

Bu, derleyiciye türü *type* olan verilere başvurmak için *name* adını kullanacağınızı bildirir. İlkel bir değişkenle bu bildirim, değişken için uygun miktarda bellek de ayırır.

Bir referans değişkenini kendi satırında da bildirebilirsiniz. Örneğin:

```java
Point originOne;
```

`originOne` değişkenini bu şekilde bildirirseniz, gerçekte bir nesne oluşturulup ona atanana kadar değeri belirsiz (undetermined) olacaktır. Yalnızca bir referans değişkeni bildirmek bir nesne oluşturmaz. Bunun için bir sonraki bölümde açıklandığı gibi `new` operatörünü kullanmanız gerekir. Kodunuzda kullanmadan önce `originOne` değişkenine bir nesne atamalısınız. Aksi takdirde bir derleyici hatası alırsınız.

Şu anda hiçbir nesneye başvurmayan bu durumdaki bir değişken şu şekilde gösterilebilir (değişken adı, `originOne`, artı hiçbir şeyi işaret etmeyen bir referans):

<figure style="text-align: center;">
  <img src="_media/figures/objects-null.gif" alt="originOne null değerine sahiptir." style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">originOne null değerine sahiptir.</figcaption>
</figure>

## Bir Sınıfı Örneklendirme (Instantiating a Class)

`new` operatörü, yeni bir nesne için bellek ayırarak ve bu belleğe bir referans döndürerek bir sınıfı somutlaştırır / örneklendirir (instantiates). `new` operatörü ayrıca nesne yapıcısını (constructor) çağırır.

> **Not:** "Bir sınıfı örneklendirmek (instantiating a class)" ifadesi, "bir nesne oluşturmak (creating an object)" ile aynı anlama gelir. Bir nesne oluşturduğunuzda, bir sınıfın bir "örneğini (instance)" oluşturursunuz, dolayısıyla bir sınıfı "örneklendirmiş" olursunuz.

`new` operatörü tek bir sonek bağımsız değişkeni gerektirir: bir yapıcı çağrısı. Yapıcının adı, örneklendirilecek sınıfın adını sağlar.

`new` operatörü, oluşturduğu nesneye bir referans döndürür. Bu referans genellikle uygun türdeki bir değişkene atanır, örneğin:

```java
Point originOne = new Point(23, 94);
```

`new` operatörü tarafından döndürülen referansın bir değişkene atanması zorunlu değildir. Doğrudan bir ifade içinde de kullanılabilir. Örneğin:

```java
int height = new Rectangle().height;
```

Bu ifade bir sonraki bölümde ele alınacaktır.

## Bir Nesneyi Başlatma (Initializing an Object)

İşte `Point` sınıfının kodu:

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

Bu sınıf tek bir yapıcı içerir. Bir yapıcıyı tanıyabilirsiniz çünkü bildirimi sınıfla aynı adı kullanır ve dönüş türü yoktur. `Point` sınıfındaki yapıcı, `(int a, int b)` kodu tarafından bildirildiği gibi iki tamsayı bağımsız değişkeni alır. Aşağıdaki ifade bu bağımsız değişkenler için 23 ve 94 değerlerini sağlar:

```java
Point originOne = new Point(23, 94);
```

Bu ifadenin yürütülmesinin sonucu aşağıdaki şekilde gösterilebilir:

<figure style="text-align: center;">
  <img src="_media/figures/objects-oneRef.gif" alt="originOne artık bir Point nesnesini işaret eder." style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">originOne artık bir Point nesnesini işaret eder.</figcaption>
</figure>

İşte dört yapıcı içeren `Rectangle` sınıfının kodu:

```java
public class Rectangle {
    public int width = 0;
    public int height = 0;
    public Point origin;

    // dört yapıcı
    public Rectangle() {
        origin = new Point(0, 0);
    }
    public Rectangle(Point p) {
        origin = p;
    }
    public Rectangle(int w, int h) {
        origin = new Point(0, 0);
        width = w;
        height = h;
    }
    public Rectangle(Point p, int w, int h) {
        origin = p;
        width = w;
        height = h;
    }

    // dikdörtgeni taşımak için bir metot
    public void move(int x, int y) {
        origin.x = x;
        origin.y = y;
    }

    // dikdörtgenin alanını hesaplamak için bir metot
    public int getArea() {
        return width * height;
    }
}
```

Her yapıcı, hem ilkel hem de referans türlerini kullanarak dikdörtgenin orijini (origin), genişliği (width) ve yüksekliği (height) için başlangıç değerleri sağlamanıza olanak tanır. Bir sınıfın birden fazla yapıcısı varsa, bunların farklı imzaları olmalıdır. Java derleyicisi, bağımsız değişkenlerin sayısına ve türüne göre yapıcıları ayırt eder. Java derleyicisi aşağıdaki kodla karşılaştığında, `Rectangle` sınıfında bir `Point` bağımsız değişkeni ve ardından iki tamsayı bağımsız değişkeni gerektiren yapıcıyı çağıracağını bilir:

```java
Rectangle rectOne = new Rectangle(originOne, 100, 200);
```

Bu, `Rectangle`'ın `origin` alanını `originOne` olarak başlatan yapıcılarından birini çağırır. Ayrıca yapıcı, `width` değerini 100 ve `height` değerini 200 olarak ayarlar. Artık aynı `Point` nesnesine iki referans vardır — aşağıdaki şekilde gösterildiği gibi, bir nesneye birden fazla referans bulunabilir:

<figure style="text-align: center;">
  <img src="_media/figures/objects-multipleRefs.gif" alt="Artık dikdörtgenin origin değişkeni de Point nesnesini işaret eder." style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Artık dikdörtgenin origin değişkeni de Point nesnesini işaret eder.</figcaption>
</figure>

Aşağıdaki kod satırı, `width` ve `height` için başlangıç değerlerini sağlayan iki tamsayı bağımsız değişkeni gerektiren `Rectangle` yapıcısını çağırır. Yapıcı içindeki kodu incelerseniz, `x` ve `y` değerleri 0 olarak başlatılan yeni bir `Point` nesnesi oluşturduğunu göreceksiniz:

```java
Rectangle rectTwo = new Rectangle(50, 100);
```

Aşağıdaki ifadede kullanılan `Rectangle` yapıcısı herhangi bir bağımsız değişken almaz, bu nedenle buna *bağımsız değişkensiz yapıcı (no-argument constructor)* denir:

```java
Rectangle rect = new Rectangle();
```

Tüm sınıfların en az bir yapıcısı vardır. Bir sınıf açıkça herhangi bir yapıcı bildirmezse, Java derleyicisi otomatik olarak *varsayılan yapıcı (default constructor)* adı verilen bağımsız değişkensiz bir yapıcı sağlar. Bu varsayılan yapıcı, sınıfın üst sınıfının bağımsız değişkensiz yapıcısını veya sınıfın başka bir üst sınıfı yoksa `Object` yapıcısını çağırır. Üst sınıfın bir yapıcısı yoksa (`Object` bir yapıcıya sahiptir), derleyici programı reddedecektir.
