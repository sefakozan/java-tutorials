# Sınıf Üyelerini Anlama (Understanding Class Members)

Bu bölümde, sınıfın bir örneğine (instance) ait olmak yerine sınıfa ait alanlar ve metotlar oluşturmak için `static` anahtar kelimesinin kullanımını ele alıyoruz.

## Sınıf Değişkenleri (Class Variables)

Aynı sınıf taslağından birden fazla nesne oluşturulduğunda, her birinin *örnek değişkenlerinin (instance variables)* kendi ayrı kopyaları vardır. `Bicycle` sınıfı örneğinde örnek değişkenler `cadence`, `gear` ve `speed`'dir. Her `Bicycle` nesnesi, farklı bellek konumlarında saklanan bu değişkenler için kendi değerlerine sahiptir.

Bazen tüm nesneler için ortak olan değişkenlere sahip olmak istersiniz. Bu, `static` niteleyicisi ile gerçekleştirilir. Bildirimlerinde `static` niteleyicisine sahip olan alanlara *statik alanlar (static fields)* veya *sınıf değişkenleri (class variables)* denir. Bunlar herhangi bir nesneyle değil, sınıfla ilişkilidir. Sınıfın her örneği, bellekte sabit bir konumda bulunan bir sınıf değişkenini paylaşır. Herhangi bir nesne bir sınıf değişkeninin değerini değiştirebilir, ancak sınıf değişkenleri sınıfın bir örneği oluşturulmadan da işlenebilir.

Örneğin bir dizi `Bicycle` nesnesi oluşturmak ve ilk nesne için 1'den başlayarak her birine bir seri numarası atamak istediğinizi varsayalım. Bu kimlik numarası her nesneye özgüdür ve bu nedenle bir örnek değişkenidir. Aynı zamanda, bir sonrakine hangi kimliği atayacağınızı bilmek için kaç tane `Bicycle` nesnesi oluşturulduğunu takip edecek bir alana ihtiyacınız vardır. Böyle bir alan herhangi bir tekil nesneyle değil, bir bütün olarak sınıfla ilişkilidir. Bunun için aşağıdaki gibi bir sınıf değişkenine, `numberOfBicycles`'a ihtiyacınız vardır:

```java
public class Bicycle {
        
    private int cadence;
    private int gear;
    private int speed;
        
    // nesne kimliği için bir örnek değişkeni ekleyin
    private int id;
    
    // örneklendirilen Bicycle nesnelerinin sayısı için
    // bir sınıf değişkeni ekleyin
    private static int numberOfBicycles = 0;
        ...
}
```

Sınıf değişkenlerine, sınıfın kendi adıyla başvurulur, örneğin:

```java
Bicycle.numberOfBicycles
```

Bu, bunların sınıf değişkeni olduğunu açıkça ortaya koyar.

> **Not:** Statik alanlara şu şekilde bir nesne referansıyla da başvurabilirsiniz:
> ```java
> myBike.numberOfBicycles
> ```
> ancak bu önerilmez çünkü bunların sınıf değişkeni olduğunu açıkça ortaya koymaz.

`id` örnek değişkenini ayarlamak ve `numberOfBicycles` sınıf değişkenini artırmak için `Bicycle` yapıcısını kullanabilirsiniz:

```java
public class Bicycle {
        
    private int cadence;
    private int gear;
    private int speed;
    private int id;
    private static int numberOfBicycles = 0;
        
    public Bicycle(int startCadence, int startSpeed, int startGear){
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;

        // Bicycle sayısını artırın
        // ve kimlik numarası atayın
        id = ++numberOfBicycles;
    }

    // ID örnek değişkenini döndüren yeni metot
    public int getID() {
        return id;
    }
        ...
}
```

## Sınıf Metotları (Class Methods)

Java programlama dili, statik değişkenlerin yanı sıra statik metotları da destekler. Bildirimlerinde `static` niteleyicisi bulunan statik metotlar, sınıfın bir örneğini oluşturmaya gerek kalmadan, sınıf adıyla çağrılmalıdır, örneğin:

```java
ClassName.methodName(args)
```

> **Not:** Statik metotlara şu şekilde bir nesne referansıyla da başvurabilirsiniz:
> ```java
> instanceName.methodName(args)
> ```
> ancak bu önerilmez çünkü bunların sınıf metodu olduğunu açıkça ortaya koymaz.

Statik metotların yaygın bir kullanımı, statik alanlara erişmektir. Örneğin `numberOfBicycles` statik alanına erişmek için `Bicycle` sınıfına statik bir metot ekleyebiliriz:

```java
public static int getNumberOfBicycles() {
    return numberOfBicycles;
}
```

Örnek ve sınıf değişkenleri ile metotlarının tüm kombinasyonlarına izin verilmez:

* Örnek metotları (instance methods), örnek değişkenlerine ve örnek metotlarına doğrudan erişebilir.
* Örnek metotları, sınıf değişkenlerine ve sınıf metotlarına doğrudan erişebilir.
* Sınıf metotları (class methods), sınıf değişkenlerine ve sınıf metotlarına doğrudan erişebilir.
* Sınıf metotları, örnek değişkenlerine veya örnek metotlarına doğrudan **erişemez** — bir nesne referansı kullanmalıdırlar. Ayrıca sınıf metotları, başvurulacak bir örnek olmadığından `this` anahtar kelimesini kullanamaz.

## Sabitler (Constants)

`static` niteleyicisi, `final` niteleyicisi ile birlikte sabitleri (constants) tanımlamak için de kullanılır. `final` niteleyicisi, bu alanın değerinin değişemeyeceğini belirtir.

Örneğin aşağıdaki değişken bildirimi, değeri pi'nin yaklaşık bir değeri olan (bir dairenin çevresinin çapına oranı) `PI` adlı bir sabiti tanımlar:

```java
static final double PI = 3.141592653589793;
```

Bu şekilde tanımlanan sabitlere yeniden değer atanamaz ve programınız bunu yapmaya çalışırsa bir derleme zamanı hatası oluşur. Kural gereği sabit değerlerin adları büyük harflerle yazılır. Ad birden fazla kelimeden oluşuyorsa kelimeler alt çizgi (`_`) ile ayrılır.

> **Not:** Bir ilkel tür veya bir dize bir sabit olarak tanımlanırsa ve değer derleme zamanında biliniyorsa, derleyici kodun her yerinde sabit adını kendi değeriyle değiştirir. Buna bir *derleme zamanı sabiti (compile-time constant)* denir. Dış dünyadaki sabitin değeri değişirse (örneğin, pi'nin gerçekte 3.975 olması gerektiği yasalaşırsa), geçerli değeri elde etmek için bu sabiti kullanan tüm sınıfları yeniden derlemeniz gerekecektir.

## `Bicycle` Sınıfı (The `Bicycle` Class)

Bu bölümde yapılan tüm değişikliklerden sonra `Bicycle` sınıfı artık şu şekildedir:

```java
public class Bicycle {
        
    private int cadence;
    private int gear;
    private int speed;
        
    private int id;
    
    private static int numberOfBicycles = 0;

        
    public Bicycle(int startCadence,
                   int startSpeed,
                   int startGear) {
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;

        id = ++numberOfBicycles;
    }

    public int getID() {
        return id;
    }

    public static int getNumberOfBicycles() {
        return numberOfBicycles;
    }

    public int getCadence() {
        return cadence;
    }
        
    public void setCadence(int newValue) {
        cadence = newValue;
    }
        
    public int getGear(){
        return gear;
    }
        
    public void setGear(int newValue) {
        gear = newValue;
    }
        
    public int getSpeed() {
        return speed;
    }
        
    public void applyBrake(int decrement) {
        speed -= decrement;
    }
        
    public void speedUp(int increment) {
        speed += increment;
    }
}
```
