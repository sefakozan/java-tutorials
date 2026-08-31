# Ders: Swing ile GUI Oluşturma (Creating a GUI with Swing)

**Swing**, Java platformu için zengin ve platformlar arası grafiksel kullanıcı arayüzleri (GUI) oluşturmayı sağlayan kapsamlı bir GUI araç takımıdır (`javax.swing` paketi).

1. [**İlk Swing Uygulaması (HelloWorldSwing)**](#1.-i̇lk-swing-uygulaması-(helloworldswing))
2. [**NetBeans GUI Oluşturucu (GUI Builder)**](#2.-netbeans-gui-oluşturucu-(gui-builder))
3. [**Temel Swing Bileşenleri**](#3.-temel-swing-bileşenleri)
---

# 1. İlk Swing Uygulaması (HelloWorldSwing)

```java
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingUtilities;

public class HelloWorldSwing {
    private static void createAndShowGUI() {
        // Pencereyi oluşturma ve ayarlama
        JFrame frame = new JFrame("HelloWorldSwing");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // "Hello World" etiketi ekleme
        JLabel label = new JLabel("Hello World");
        frame.getContentPane().add(label);

        // Pencereyi görüntüleme
        frame.pack();
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        // Olay gönderme iş parçacığı için işi zamanlama
        SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createAndShowGUI();
            }
        });
    }
}
```

---

# 2. NetBeans GUI Oluşturucu (GUI Builder)

NetBeans IDE içerisindeki GUI Builder (Matisse), bileşenleri görsel olarak sürükleyip bırakarak formlar tasarlamanızı sağlar:

<figure style="text-align: center;">
  <img src="_media/figures/nb-swing-1.png" alt="NetBeans GUI Builder" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">NetBeans IDE GUI Builder tasarım alanı ve bileşen paleti.</figcaption>
</figure>

---

# 3. Temel Swing Bileşenleri

- **Pencereler (Top-Level Containers):** `JFrame`, `JDialog`.
- **Temel Bileşenler (Atomic Components):** `JButton`, `JLabel`, `JTextField`, `JCheckBox`, `JComboBox`.
- **Düzen Yöneticileri (Layout Managers):** `BorderLayout`, `FlowLayout`, `GridLayout`, `GridBagLayout`.
