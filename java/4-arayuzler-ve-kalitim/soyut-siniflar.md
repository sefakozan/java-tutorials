# Ders: Soyut Sınıflar ve Metotlar (Abstract Classes)

Bir **soyut sınıf (abstract class)**, `abstract` olarak bildirilen bir sınıftır; doğrudan `new` işleci ile örneği oluşturulamaz. Diğer sınıflar için ortak bir taban şablon oluşturmak amacıyla kullanılır.

1. [**Soyut Sınıf ve Soyut Metot Bildirimi**](#1.-soyut-sınıf-ve-soyut-metot-bildirimi)
2. [**GraphicObject Sınıf Hiyerarşisi**](#2.-graphicobject-sınıf-hiyerarşisi)
3. [**Soyut Sınıfları Türetme**](#3.-soyut-sınıfları-türetme)
4. [**Soyut Sınıf mı, Arayüz mü?**](#4.-soyut-sınıf-mı,-arayüz-mü?)
---

# 1. Soyut Sınıf ve Soyut Metot Bildirimi

Bir **soyut metot**, gövdesi olmayan ve noktalı virgül ile sonlandırılan bir metot bildirimidir:

```java
public abstract class GraphicObject {
    int x, y;

    void moveTo(int newX, int newY) {
        this.x = newX;
        this.y = newY;
    }

    public abstract void draw();
    public abstract void resize();
}
```

---

# 2. GraphicObject Sınıf Hiyerarşisi

<figure style="text-align: center;">
  <img src="_media/figures/classes-graphicObject.gif" alt="GraphicObject Soyut Sınıf Hiyerarşisi" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">GraphicObject soyut sınıfı ve ondan türeyen Circle, Rectangle ve Line sınıfları.</figcaption>
</figure>

---

# 3. Soyut Sınıfları Türetme

```java
public class Circle extends GraphicObject {
    @Override
    public void draw() {
        System.out.println("Daire çiziliyor.");
    }

    @Override
    public void resize() {
        System.out.println("Daire yeniden boyutlandırılıyor.");
    }
}
```

---

# 4. Soyut Sınıf mı, Arayüz mü?

| Özellik | Soyut Sınıf (Abstract Class) | Arayüz (Interface) |
|---|---|---|
| **Çoklu Kalıtım** | Tek bir sınıf genişletilebilir (`extends`). | Birden çok arayüz uygulanabilir (`implements`). |
| **Durum (Alanlar)** | Statik ve dinamik alanlar tutabilir. | Alanlar varsayılan olarak `public static final` dir. |
| **Kullanım Amacı** | İlişkili sınıflar arası kod paylaşımı. | Ortak davranış sözleşmesi. |
