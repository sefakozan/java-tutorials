# Ders: Arayüz (Interface) Nedir?

Daha önce öğrendiğiniz gibi, nesneler dış dünyayla olan etkileşimlerini dışa açtıkları metotlar aracılığıyla tanımlarlar. Metotlar, nesnenin dış dünyayla olan **arayüzünü (interface)** oluşturur; örneğin televizyonunuzun ön tarafındaki düğmeler, sizinle plastik kasanın diğer tarafındaki elektrik devreleri arasındaki arayüzdür. Televizyonu açıp kapatmak için "güç" düğmesine basarsınız.

En yaygın biçimiyle bir arayüz (***interface***), gövdesi boş olan ilişkili metotlar grubudur. Bir bisikletin davranışı bir arayüz olarak belirtilirse şu şekilde görünebilir:

```java
interface Bicycle {

    // Dakikadaki tekerlek devir sayısı (kadans)
    void changeCadence(int newValue); // Başında gizli "public abstract" erişim belirteci vardır.

    void changeGear(int newValue);

    void speedUp(int increment);

    void applyBrakes(int decrement);
}
```

Bu arayüzü uygulamak (***implement etmek***) için sınıfınızın adı değişir (örneğin belirli bir bisiklet markası olan `ACMEBicycle` gibi) ve sınıf bildiriminde `implements` anahtar sözcüğünü kullanırsınız:

```java
class ACMEBicycle implements Bicycle {

    int cadence = 0;
    int speed = 0;
    int gear = 1;

   // Derleyici artık changeCadence, changeGear, speedUp ve applyBrakes
   // metotlarının tümünün uygulanmasını zorunlu kılacaktır.
   // Bu metotlar bu sınıfta eksikse derleme başarısız olur.

    void changeCadence(int newValue) { // Derlenmesi için "public" erişim belirteci yazılması gerekli.
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

Bir arayüzü uygulamak, bir sınıfın sağlamayı vaat ettiği davranış konusunda daha resmi hale gelmesine olanak tanır. Arayüzler sınıf ile dış dünya arasında bir sözleşme (***contract***) oluşturur ve bu sözleşme derleme zamanında derleyici tarafından zorunlu kılınır. Sınıfınız bir arayüzü uyguladığını iddia ediyorsa, sınıf başarıyla derlenmeden önce o arayüz tarafından tanımlanan tüm metotların kaynak kodunda bulunması gerekir.

> **Not:** `ACMEBicycle` sınıfını gerçekte derlemek için, uygulanan arayüz metotlarının başına `public` anahtar sözcüğünü eklemeniz gerekir. Bunun nedenlerini ilerleyen [Sınıflar ve Nesneler](java/3-siniflar-ve-nesneler/index.md) ile [Arayüzler ve Kalıtım](java/5-arayuzler-ve-kalitim/index.md) derslerinde öğreneceksiniz.
