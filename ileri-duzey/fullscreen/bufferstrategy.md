# Ders: Tampon Stratejisi ve Sayfa Çevirme (BufferStrategy and Page Flipping)

**`BufferStrategy`**, karmaşık çizimlerin doğrudan ekranda titreme (flickering) yapmadan görüntülenmesi için çift (double) veya üçlü (triple) arka tamponlama mekanizması sunar.

---

## 1. Sayfa Çevirme (Page Flipping) Mantığı

Sayfa çevirmede, video belleğindeki işaretçi arka tampon ile ön tampon arasında değiştirilir. Veri bellekte kopyalanmaz, sadece işaretçi değiştiği için işlem sıfır gecikmeyle tamamlanır.

---

## 2. BufferStrategy Kullanım Döngüsü

```java
import java.awt.*;
import java.awt.image.BufferStrategy;
import javax.swing.JFrame;

public class GameLoopDemo {
    public static void renderFrame(JFrame frame, BufferStrategy strategy) {
        do {
            do {
                Graphics2D g = (Graphics2D) strategy.getDrawGraphics();
                try {
                    // Çizim işlemleri
                    g.setColor(Color.BLACK);
                    g.fillRect(0, 0, frame.getWidth(), frame.getHeight());
                    g.setColor(Color.WHITE);
                    g.drawString("FPS Render Testi", 50, 50);
                } finally {
                    g.dispose();
                }
            } while (strategy.contentsRestored());

            // Tamponu ekrana yansıt
            strategy.show();
        } while (strategy.contentsLost());
    }
}
```
