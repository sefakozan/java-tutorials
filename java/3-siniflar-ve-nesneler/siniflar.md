# Sınıfları Tanımlama (Declaring Classes)

Java'da bir sınıf bildirimi en azından `class` anahtar sözcüğünü ve sınıfın adını içerir:

```java
class MyClass {
    // alan, yapıcı ve metot bildirimleri
}
```

Daha kapsamlı bir sınıf bildirimi şunları içerebilir:
1. **Erişim Belirleyiciler (Access Modifiers):** `public`, varsayılan (package-private).
2. **`class` Anahtar Sözcüğü.**
3. **Sınıf Adı:** İlk harfi büyük harfle başlar.
4. **Üst Sınıf Adı:** Varsa `extends SuperClass` ile belirtilir.
5. **Uygulanan Arayüzler:** Varsa `implements Interface1, Interface2` ile belirtilir.
6. **Sınıf Gövdesi:** `{}` süslü parantezler içindeki kod blokları.

---

## Üye Değişkenleri Bildirme (Member Variables)

Bir sınıfın alanları (fields) şu bileşenlerden oluşur:

- Sıfır veya daha fazla erişim niteleyicisi (`public`, `private`, `protected`).
- Alanın türü (`int`, `String`, `Bicycle` vb.).
- Alanın adı.

```java
public class Bicycle {
    private int cadence;
    private int gear;
    private int speed;
}
```

---

## Yapıcılar (Constructors)

Bir sınıftan `new` işleci ile yeni bir nesne oluşturulduğunda **yapıcı metot (constructor)** çağrılır. Yapıcıların adı sınıf adıyla birebir aynıdır ve herhangi bir dönüş türü (`void` dahil) belirtilmez:

```java
public class Bicycle {
    private int cadence;
    private int gear;
    private int speed;

    // Yapıcı metot
    public Bicycle(int startCadence, int startSpeed, int startGear) {
        cadence = startCadence;
        speed = startSpeed;
        gear = startGear;
    }
}
```

Bir sınıf birden fazla yapıcı tanımlayabilir (**Constructor Overloading**). Eğer sınıfa hiçbir yapıcı yazılmazsa derleyici otomatik olarak parametresiz varsayılan bir yapıcı (`default constructor`) sağlar.

---

## Metotları Tanımlama (Defining Methods)

Bir metot bildirimi şunları içerir:
- Erişim belirteci (`public`, `private` vb.)
- Dönüş türü (Değer döndürmüyorsa `void`)
- Metot adı (küçük harfle başlar, fiil tercih edilir)
- Parantez içinde parametre listesi `(paramType1 paramName1, ...)`
- Metot gövdesi `{ ... }`

```java
public int getSpeed() {
    return speed;
}

public void applyBrakes(int decrement) {
    speed -= decrement;
}
```
