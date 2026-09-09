# Sınıflar (Classes)

[Nesne Yönelimli Programlama Kavramları](../1-oop-kavramlari/index.md) başlıklı dersteki nesne yönelimli kavramlara giriş, yarış bisikletleri (racing bikes), dağ bisikletleri (mountain bikes) ve tandem bisikletleri (tandem bikes) alt sınıflar olarak içeren bir bisiklet sınıfını örnek olarak kullanmıştı. İşte bir `Bicycle` sınıfının olası bir implementasyonunun örnek kodu:

```java
public class Bicycle {
    // Bicycle sınıfının üç alanı (field) vardır
    public int cadence;
    public int gear;
    public int speed;
        
    // Bicycle sınıfının bir yapıcısı (constructor) vardır
    public Bicycle(int startCadence, int startSpeed, int startGear) {
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;
    }
        
    // Bicycle sınıfının dört metodu vardır
    public void setCadence(int newValue) {
        cadence = newValue;
    }
        
    public void setGear(int newValue) {
        gear = newValue;
    }
        
    public void applyBrake(int decrement) {
        speed -= decrement;
    }
        
    public void speedUp(int increment) {
        speed += increment;
    }
        
}
```

`Bicycle` sınıfının bir **alt sınıfı (subclass)** olan `MountainBike` sınıfı için bir sınıf bildirimi şöyle görünebilir:

```java
public class MountainBike extends Bicycle {
        
    // MountainBike alt sınıfının bir alanı (field) vardır
    public int seatHeight;

    // MountainBike alt sınıfının bir yapıcısı (constructor) vardır
    public MountainBike(int startHeight, int startCadence, int startSpeed, int startGear) {
        super(startCadence, startSpeed, startGear);
        seatHeight = startHeight;
    }   
        
    // MountainBike alt sınıfının bir metodu vardır
    public void setHeight(int newValue) {
        seatHeight = newValue;
    }   

}
```

`MountainBike`, `Bicycle` sınıfının **tüm alanlarını ve metotlarını miras alır (inherits)** ve `seatHeight` alanını ve bunu ayarlamak için bir metot ekler (dağ bisikletleri, arazinin gerektirdiği şekilde yukarı ve aşağı hareket ettirilebilen koltuklara sahiptir).
