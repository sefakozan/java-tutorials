# Polimorfizm (Polymorphism / Çok Biçimlilik)

Sözlük anlamı olarak **polimorfizm**, bir şeyin birden çok biçimde var olabilme yeteneğidir. Nesne yönelimli programlamada ise, farklı alt sınıfların aynı arayüz veya üst sınıf metot çağrısına kendi özgü davranışlarıyla yanıt verebilmesidir.

---

## Polimorfizm Örneği

Aşağıdaki sınıf hiyerarşisini ele alalım:

```java
public class Bicycle {
    public void printDescription() {
        System.out.println("Standart bir bisiklet.");
    }
}

public class MountainBike extends Bicycle {
    @Override
    public void printDescription() {
        System.out.println("Dağ bisikleti: Arazi sürüşü için süspansiyonlu.");
    }
}

public class RoadBike extends Bicycle {
    @Override
    public void printDescription() {
        System.out.println("Yol bisikleti: İnce tekerlekli ve yarış gidonlu.");
    }
}
```

Java Sanal Makinesi (JVM), çalışma zamanında (runtime) bir referans değişkeninin işaret ettiği gerçek nesnenin türüne bakar ve o nesneye ait ezilmiş metodu çalıştırır (**Dynamic Method Dispatch**):

```java
public class TestBikes {
    public static void main(String[] args) {
        Bicycle bike1, bike2, bike3;

        bike1 = new Bicycle();
        bike2 = new MountainBike();
        bike3 = new RoadBike();

        bike1.printDescription(); // "Standart bir bisiklet."
        bike2.printDescription(); // "Dağ bisikleti: Arazi sürüşü için süspansiyonlu."
        bike3.printDescription(); // "Yol bisikleti: İnce tekerlekli ve yarış gidonlu."
    }
}
```

Bu sayede kodunuz daha esnek ve genişletilebilir hale gelir. Gelecekte sisteme `ElectricBike` gibi yeni bir sınıf eklendiğinde, `Bicycle` türüyle çalışan mevcut kodları değiştirmeden sistemi genişletebilirsiniz.
