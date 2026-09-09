# Sınıflarınız İçin Constructor'lar Ekleme (Providing Constructors for Your Classes)

Bir sınıf, sınıf taslağından (blueprint) nesneler oluşturmak için çağrılan constructors (yapıcıları) içerir. Constructor bildirimleri metot bildirimlerine benzer — ancak **sınıfın adını kullanırlar** ve **bir dönüş türleri (return type) yoktur**. Örneğin `Bicycle` sınıfının bir constructor'ı vardır:

```java
public Bicycle(int startCadence, int startSpeed, int startGear) {
    gear = startGear;
    cadence = startCadence;
    speed = startSpeed;
}
```

`myBike` adında yeni bir **`Bicycle` nesnesi oluşturmak için**, **`new` operatörü tarafından bir constructor çağrılır**:

```java
Bicycle myBike = new Bicycle(30, 0, 8);
```

**`new Bicycle(30, 0, 8)` nesne için bellekte yer ayırır ve alanlarını başlatır (initializes)**.

`Bicycle` yalnızca bir constructor'a sahip olsa da, argümansız bir constructor da dahil olmak üzere başkalarına da sahip olabilir:

```java
public Bicycle() {
    gear = 1;
    cadence = 10;
    speed = 0;
}
```

`Bicycle yourBike = new Bicycle();` ifadesi, `yourBike` adında yeni bir `Bicycle` nesnesi oluşturmak için argümansız (bağımsız değişkensiz) constructor'ı çağırır.

Her iki constructor da `Bicycle` sınıfında bildirilebilirdi çünkü farklı argüman listelerine sahiptirler. Metotlarda olduğu gibi Java platformu, constructorlar'ı listedeki argümanların sayısına ve türlerine göre ayırt eder. Aynı sınıf için aynı sayıda ve türde argümana sahip iki constructor yazamazsınız, çünkü platform bunları birbirinden ayıramaz. Bunu yapmak bir derleme zamanı hatasına (compile-time error) neden olur.

Sınıfınız için herhangi bir constructor sağlamak zorunda değilsiniz, ancak bunu yaparken dikkatli olmalısınız. **Derleyici, constructor'ı olmayan herhangi bir sınıf için otomatik olarak argümansız, varsayılan bir constructor sağlar**. **Bu varsayılan constructor, üst sınıfın (superclass) argümansız constructor'ını çağıracaktır**. Bu durumda, üst sınıfın argümansız bir constructor'ı yoksa derleyici şikayet edecektir, bu nedenle üst sınıfın böyle bir constructor'a sahip olduğunu doğrulamanız gerekir. **Sınıfınızın belirtilen bir üst sınıfı yoksa, varsayılan olarak bir argümansız constructor'a sahip olan `Object` üst sınıfına sahiptir**.

Bir üst sınıf constructor'ını kendiniz de kullanabilirsiniz. Bu dersin başındaki `MountainBike` sınıfı tam olarak bunu yaptı. Bu konu daha sonra arayüzler ve kalıtım dersinde ele alınacaktır.

**Hangi diğer sınıfların constructor'u çağırabileceğini kontrol etmek için bir constructor'un bildiriminde erişim niteleyicilerini (access modifiers) kullanabilirsiniz**.

> **Not:** Başka bir sınıf bir `MyClass` constructor'unu çağıramıyorsa, doğrudan `MyClass` nesneleri oluşturamaz.
