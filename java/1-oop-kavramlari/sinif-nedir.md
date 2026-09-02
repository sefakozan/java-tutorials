# Ders: Sınıf (Class) Nedir?

Gerçek dünyada genellikle aynı türden birçok bireysel nesne bulursunuz. Aynı marka ve modele sahip binlerce başka bisiklet var olabilir. Her bisiklet aynı tasarım şemasından (*blueprint*) üretilmiştir ve bu nedenle aynı bileşenleri içerir. Nesne yönelimli terimlerle, bisikletinizin **bisiklet olarak bilinen nesneler sınıfının bir örneği (instance)** olduğunu söyleriz. Bir sınıf (*class*), bireysel nesnelerin kendisinden oluşturulduğu bir plandır.

Aşağıdaki `Bicycle` sınıfı, bir bisikletin olası bir uygulamasıdır:

```java
class Bicycle {

    int cadence = 0;
    int speed = 0;
    int gear = 1;

    void changeCadence(int newValue) {
         cadence = newValue;
    }

    void changeGear(int newValue) {
         gear = newValue;
    }

    void speedUp(int increment) {
         speed = speed + increment;   
    }

    void applyBrakes(int decrement) {
         speed = speed - decrement;
    }

    void printStates() {
         System.out.println("cadence:" +
             cadence + " speed:" + 
             speed + " gear:" + gear);
    }
}
```

Java programlama dilinin sözdizimi size yeni gelebilir, ancak bu sınıfın tasarımı daha önce tartışılan bisiklet nesnelerine dayanmaktadır. `cadence`, `speed` ve `gear` **alanları** ***nesnenin durumunu temsil ederken***; `changeCadence`, `changeGear`, `speedUp` vb. **metotlar** ise ***nesnenin dış dünyayla olan etkileşimini*** tanımlar.

Fark etmiş olabileceğiniz gibi, `Bicycle` sınıfı bir `main` metodu içermez. Bunun nedeni tam bir uygulama olmamasıdır; yalnızca uygulamalarda kullanılabilecek bisikletler için bir taslaktır (***blueprint***). Yeni `Bicycle` nesneleri oluşturma ve kullanma sorumluluğu uygulamanızdaki başka bir sınıfa aittir.

Aşağıda, iki ayrı `Bicycle` nesnesi oluşturan ve bunların metotlarını çağıran bir `BicycleDemo` sınıfı yer almaktadır:

```java
class BicycleDemo {
    public static void main(String[] args) {

        // İki farklı Bicycle nesnesi oluştur
        Bicycle bike1 = new Bicycle();
        Bicycle bike2 = new Bicycle();

        // Bu nesneler üzerindeki metotları çağır
        bike1.changeCadence(50);
        bike1.speedUp(10);
        bike1.changeGear(2);
        bike1.printStates();

        bike2.changeCadence(50);
        bike2.speedUp(10);
        bike2.changeGear(2);
        bike2.changeCadence(40);
        bike2.speedUp(10);
        bike2.changeGear(3);
        bike2.printStates();
    }
}
```

Bu testin çıktısı, iki bisikletin son durumları için tekerlek devir hızını (kadansını), hızını ve mevcut vitesini yazdırır:

```text
cadence:50 speed:10 gear:2
cadence:40 speed:20 gear:3
```
