# Üye Değişkenleri Bildirme (Declaring Member Variables)

Çeşitli türde değişkenler vardır:

* Bir **sınıftaki üye değişkenler** — bunlara **alanlar (fields)** denir.
* Bir **metot veya kod bloğundaki değişkenler** — bunlara **yerel değişkenler (local variables)** denir.
* Metot **bildirimlerindeki değişkenler** — bunlara **parametreler (parameters)** denir.

`Bicycle` sınıfı, alanlarını tanımlamak için aşağıdaki kod satırlarını kullanır:

```java
public int cadence;
public int gear;
public int speed;
```

Alan bildirimleri sırasıyla üç bileşenden oluşur:

1. `public` veya `private` gibi sıfır veya daha fazla **niteleyici (modifiers)**.
2. **Alanın türü (field's type)**.
3. **Alanın adı (field's name)**.

`Bicycle` sınıfının alanları `cadence`, `gear` ve `speed` olarak adlandırılmıştır ve hepsi tamsayı (`int`) veri türündedir. `public` anahtar sözcüğü, bu alanları **sınıfa erişebilen herhangi bir nesne tarafından erişilebilir** genel üyeler (public members) olarak tanımlar.

## Erişim Niteleyicileri (Access Modifiers)

Kullanılan ilk (en soldaki) niteleyici, diğer sınıfların bir üye alanına ne düzeyde erişimi olduğunu kontrol etmenizi sağlar. Şimdilik yalnızca `public` ve `private` niteleyicilerini göz önünde bulundurun. Diğer erişim niteleyicileri daha sonra tartışılacaktır.

* `public` niteleyicisi — alana tüm sınıflardan erişilebilir.
* `private` niteleyicisi — alana yalnızca kendi sınıfı içinden erişilebilir.

**Kapsülleme (encapsulation)** ***ilkesi gereğince, alanları `private` yapmak yaygın bir uygulamadır***. Bu, alanlara yalnızca `Bicycle` sınıfından *doğrudan* erişilebileceği anlamına gelir. Ancak yine de bu değerlere erişmemiz gerekir. Bu, bizim için sınıf içinden alan değerlerine erişebilen public metotlar ekleyerek dolaylı olarak yapılabilir:

```java
public class Bicycle {
    private int cadence;
    private int gear;
    private int speed;
        
    public Bicycle(int startCadence, int startSpeed, int startGear) {
        gear = startGear;
        cadence = startCadence;
        speed = startSpeed;
    }
        
    public int getCadence() {
        return cadence;
    }
        
    public void setCadence(int newValue) {
        cadence = newValue;
    }
        
    public int getGear() {
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

## Türler (Types)

Tüm değişkenlerin bir türü olmalıdır. `int`, `float`, `boolean` gibi **ilkel türleri (primitive types)** kullanabilirsiniz. Ya da `dizgiler (strings)`, `diziler (arrays)` veya `nesneler (objects)` gibi **referans türlerini (reference types)** kullanabilirsiniz.

## Değişken İsimleri (Variable Names)

İster alanlar, ister yerel değişkenler, isterse parametreler olsun tüm değişkenler, Dil Temelleri dersindeki [Değişkenler — İsimlendirme](../java/2-dil-temelleri/degiskenler.md#isimlendirme-naming) bölümünde ele alınan kurallara ve geleneklere uyar.

Bu derste, metot ve sınıf adları için de aynı adlandırma kurallarının ve geleneklerinin kullanıldığını, ancak şu farkların bulunduğunu unutmayın:

* bir sınıf adının ilk harfi büyük olmalıdır, ve
* bir metot adındaki ilk (veya tek) sözcük bir fiil olmalıdır.  
  Örnek: ***calculateTotalPrice()***, ***getUserById()***, ***deleteFile()***, ***isValid()***, ***hasPermission()***.
