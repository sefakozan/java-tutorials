# Ders: Graphics2D ile Çizim İşlemleri (Rendering with Graphics2D)

`Graphics2D` sınıfı, temel `Graphics` sınıfını genişleterek gelişmiş çizim özelliklerini yönetir.

---

## 1. Çizim Nitelikleri (Rendering Attributes)

- **Stroke:** Çizgi kalınlığı ve desenini belirler (`new BasicStroke(3.0f)`).
- **Paint:** Şekillerin dolgu veya çizgi rengini belirler (`Color`, `GradientPaint`, `TexturePaint`).
- **RenderingHints:** Antialiasing ve render kalitesini yapılandırır.
- **Transform:** Öteleme, döndürme ve ölçekleme uygular (`AffineTransform`).

```java
Graphics2D g2 = (Graphics2D) g;
g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING, RenderingHints.VALUE_ANTIALIAS_ON);
g2.setPaint(new GradientPaint(0, 0, Color.RED, 100, 100, Color.YELLOW));
g2.fill(new Rectangle(0, 0, 100, 100));
```
