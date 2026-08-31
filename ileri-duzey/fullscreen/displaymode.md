# Ders: Ekran Çözünürlüğü ve Modunu Değiştirme (Display Mode)

Bir `GraphicsDevice`, monitörün desteklediği çözünürlükleri, renk derinliklerini ve yenileme hızlarını `DisplayMode` nesneleri olarak bildirir.

---

## 1. Desteklenen Ekran Modlarını Listeleme

```java
import java.awt.*;

public class DisplayModeList {
    public static void main(String[] args) {
        GraphicsEnvironment env = GraphicsEnvironment.getLocalGraphicsEnvironment();
        GraphicsDevice device = env.getDefaultScreenDevice();

        DisplayMode[] modes = device.getDisplayModes();
        for (DisplayMode mode : modes) {
            System.out.printf("%d x %d, %d bit, %d Hz%n",
                mode.getWidth(), mode.getHeight(), mode.getBitDepth(), mode.getRefreshRate());
        }
    }
}
```

---

## 2. Çalışma Zamanında Mod Değiştirme

```java
if (device.isDisplayChangeSupported()) {
    DisplayMode targetMode = new DisplayMode(1280, 720, 32, 60);
    try {
        device.setDisplayMode(targetMode);
    } catch (IllegalArgumentException e) {
        System.err.println("İstenen ekran modu bu donanım tarafından desteklenmiyor.");
    }
}
```
