# Ders: Şekiller ve Metin Render Etme (Shapes & Text)

Java 2D, `java.awt.geom` paketi altında yüksek hassasiyetli (float/double) geometrik nesneler sunar.

---

## 1. Geometrik Şekiller (`Shape`)

```java
import java.awt.geom.*;

// Elips ve yuvarlatılmış dikdörtgen tanımlama
Shape ellipse = new Ellipse2D.Double(10, 10, 80, 50);
Shape roundRect = new RoundRectangle2D.Double(100, 10, 120, 80, 20, 20);

g2.draw(ellipse);
g2.fill(roundRect);
```

---

## 2. Yazı Tipleri ve Metin Render Etme (`Font`)

```java
Font font = new Font("Serif", Font.BOLD, 24);
g2.setFont(font);
g2.drawString("Java 2D Metin Çizimi", 50, 150);
```
