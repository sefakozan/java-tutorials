# Ders: Görseller ve BufferedImage (Images)

`BufferedImage` sınıfı, doğrudan piksel verilerine erişilebilen ve bellek üzerinde manipüle edilebilen bir görüntü arabelleği sağlar.

---

## 1. Bellekte Resim Oluşturma ve Kaydetme

```java
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import javax.imageio.ImageIO;

public class SaveImageDemo {
    public static void main(String[] args) throws Exception {
        int width = 300;
        int height = 150;

        BufferedImage bi = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
        Graphics2D ig2 = bi.createGraphics();

        ig2.setBackground(Color.WHITE);
        ig2.clearRect(0, 0, width, height);

        ig2.setColor(Color.BLUE);
        ig2.drawString("Java 2D Render", 80, 75);

        ImageIO.write(bi, "PNG", new File("image.png"));
    }
}
```
