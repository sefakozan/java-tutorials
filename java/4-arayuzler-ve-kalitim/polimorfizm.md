# Ders: Polimorfizm (Polymorphism)

Sözlük anlamıyla **polimorfizm (çok biçimlilik)**, biyolojide bir organizmanın veya türün birçok farklı biçime veya evreye sahip olabilmesi ilkesidir. Bu ilke nesne yönelimli programlamaya da doğrudan uygulanabilir: Bir sınıfın alt sınıfları kendi benzersiz davranışlarını tanımlayabilir ve aynı zamanda üst sınıfın bazı işlevlerini paylaşabilirler.

1. [**Polimorfizm Kavramı ve Örneği**](#1-polimorfizm-kavramı-ve-örneği)
2. [**Dinamik Metot Bağlama (Dynamic Method Dispatch)**](#2-dinamik-metot-bağlama-dynamic-method-dispatch)
---

# 1. Polimorfizm Kavramı ve Örneği

`Bicycle` sınıfını ve onun iki alt sınıfı olan `MountainBike` ve `RoadBike` sınıflarını ele alalım. Üst sınıf `Bicycle`, bisikletin durumunu yazdıran bir `printDescription` metodu tanımlar:

```java
public class Bicycle {
    private int cadence;
    private int gear;
    private int speed;

    public Bicycle(int startCadence, int startSpeed, int startGear) {
        this.cadence = startCadence;
        this.speed = startSpeed;
        this.gear = startGear;
    }

    public void printDescription(){
        System.out.println("\nBike is " + "in gear " + this.gear
            + " with a cadence of " + this.cadence +
            " and travelling at a speed of " + this.speed + ". ");
    }
}
```

`MountainBike` alt sınıfı, dağ bisikletine özgü amortisör (*suspension*) bilgisini eklemek için `printDescription` metodunu geçersiz kılar (*override* eder):

```java
public class MountainBike extends Bicycle {
    private String suspension;

    public MountainBike(int startCadence, int startSpeed, int startGear, String suspensionType){
        super(startCadence, startSpeed, startGear);
        this.setSuspension(suspensionType);
    }

    public String getSuspension(){
      return this.suspension;
    }

    public void setSuspension(String suspensionType) {
      this.suspension = suspensionType;
    }

    @Override
    public void printDescription() {
        super.printDescription();
        System.out.println("The MountainBike has a " +
            getSuspension() + " suspension.");
    }
}
```

`RoadBike` alt sınıfı da yol bisikletinin lastik genişliği (*tire width*) bilgisini eklemek için aynı metodu geçersiz kılar:

```java
public class RoadBike extends Bicycle {
    private int tireWidth;

    public RoadBike(int startCadence, int startSpeed, int startGear, int newTireWidth){
        super(startCadence, startSpeed, startGear);
        this.setTireWidth(newTireWidth);
    }

    public int getTireWidth(){
      return this.tireWidth;
    }

    public void setTireWidth(int newTireWidth){
      this.tireWidth = newTireWidth;
    }

    @Override
    public void printDescription(){
        super.printDescription();
        System.out.println("The RoadBike has " + getTireWidth() +
            " MM tires.");
    }
}
```

---

# 2. Dinamik Metot Bağlama (Dynamic Method Dispatch)

Şimdi bu üç farklı bisiklet türünü oluşturan `TestBikes` programına bakalım:

```java
public class TestBikes {
  public static void main(String[] args){
    Bicycle bike01, bike02, bike03;

    bike01 = new Bicycle(20, 10, 1);
    bike02 = new MountainBike(20, 10, 5, "Dual");
    bike03 = new RoadBike(40, 20, 8, 23);

    bike01.printDescription();
    bike02.printDescription();
    bike03.printDescription();
  }
}
```

Programın çıktısı şöyledir:

```text
Bike is in gear 1 with a cadence of 20 and travelling at a speed of 10. 

Bike is in gear 5 with a cadence of 20 and travelling at a speed of 10. 
The MountainBike has a Dual suspension.

Bike is in gear 8 with a cadence of 40 and travelling at a speed of 20. 
The RoadBike has 23 MM tires.
```

`bike01`, `bike02` ve `bike03` değişkenlerinin tümü `Bicycle` türünde bildirilmiş olmasına rağmen, Java Sanal Makinesi (JVM) **çalışma zamanında değişkenin işaret ettiği gerçek nesnenin türüne uygun olan metodu** dinamik olarak çağırır. Bu mekanizmaya **dinamik metot bağlama (dynamic method dispatch)** denir ve Java'da polimorfizmin temelini oluşturur.
