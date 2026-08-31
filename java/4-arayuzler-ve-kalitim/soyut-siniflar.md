# Ders: Soyut Sınıflar ve Metotlar (Abstract Methods and Classes)

Bir **soyut sınıf (abstract class)**, `abstract` anahtar sözcüğü ile bildirilen bir sınıftır; soyut metotlar içerebilir veya içermeyebilir. Soyut sınıfların doğrudan örneği (`new` ile nesnesi) **oluşturulamaz**, ancak alt sınıfları türetilebilir (*subclassed*).

1. [**Soyut Metotlar (Abstract Methods)**](#1-soyut-metotlar-abstract-methods)
2. [**Soyut Sınıf Örneği (GraphicObject)**](#2-soyut-sınıf-örneği-graphicobject)
3. [**Soyut Sınıflar ve Arayüzlerin Karşılaştırılması**](#3-soyut-sınıflar-ve-arayüzlerin-karşılaştırılması)
---

# 1. Soyut Metotlar (Abstract Methods)

Bir **soyut metot (abstract method)**, gövdesi olmadan (süslü parantezler yerine noktalı virgül ile) bildirilen bir metottur:

```java
abstract void moveTo(double deltaX, double deltaY);
```

Bir sınıf bir veya daha fazla soyut metot içeriyorsa, sınıfın kendisi de mutlaka `abstract` olarak bildirilmelidir:

```java
public abstract class GraphicObject {
   // Alanlar ve metotlar
   abstract void draw();
}
```

Bir soyut sınıfın alt sınıfı, üst sınıfın tüm soyut metotlarını somut (*concrete*) olarak uygulamalıdır. Aksi takdirde alt sınıf da `abstract` olarak bildirilmek zorundadır.

---

# 2. Soyut Sınıf Örneği (GraphicObject)

Bir grafik çizim uygulamasında dikdörtgenler, çizgiler, eğriler ve daireler gibi çeşitli grafik nesneleri bulunur. Bu nesnelerin tümü ortak durumlara (konum, çizim alanı) ve davranışlara (taşıma, yeniden boyutlandırma, çizim) sahiptir:

<figure style="text-align: center;">
  <img src="_media/figures/classes-graphicObject.gif" alt="GraphicObject Hiyerarşisi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">GraphicObject sınıf hiyerarşisi.</figcaption>
</figure>

```java
public abstract class GraphicObject {
    int x, y;
    
    void moveTo(int newX, int newY) {
        this.x = newX;
        this.y = newY;
    }
    
    abstract void draw();
    abstract void resize();
}
```

Her somut alt sınıf (`Circle`, `Rectangle` vb.) `draw` ve `resize` metotlarını kendi şekline uygun olarak uygulamak zorundadır:

```java
class Circle extends GraphicObject {
    void draw() {
        // Daire çizim mantığı
    }
    void resize() {
        // Daire boyutlandırma mantığı
    }
}

class Rectangle extends GraphicObject {
    void draw() {
        // Dikdörtgen çizim mantığı
    }
    void resize() {
        // Dikdörtgen boyutlandırma mantığı
    }
}
```

---

# 3. Soyut Sınıflar ve Arayüzlerin Karşılaştırılması

Hangi durumda soyut sınıf, hangi durumda arayüz kullanmalısınız?

### Aşağıdaki durumlarda **Soyut Sınıf** kullanın:
- Yakından ilişkili birkaç sınıf arasında kod paylaşmak istediğinizde.
- Soyut sınıfınızı genişleten sınıfların birçok ortak alana veya metoda (`public` dışındaki `protected` ve `private` alanlar dahil) sahip olmasını beklediğinizde.
- `static` ve `final` olmayan alanlar bildirmek (yani nesne durumunu değiştirebilen alanlar tanımlamak) istediğinizde.

### Aşağıdaki durumlarda **Arayüz (Interface)** kullanın:
- Birbiriyle ilgisiz sınıfların arayüzünüzü uygulamasını beklediğinizde (örneğin `Comparable` ve `Cloneable` arayüzleri birçok ilgisiz sınıf tarafından uygulanır).
- Belirli bir veri türünün davranışını belirtmek istediğinizde, ancak o davranışı kimin nasıl uygulayacağını önemsemediğinizde.
- Türlerin çoklu kalıtımından (*multiple inheritance of type*) yararlanmak istediğinizde.
