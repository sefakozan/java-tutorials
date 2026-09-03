## Grafiksel Kullanıcı Arayüzleri Oluşturma (Creating Graphical User Interfaces)

- **[Swing ile GUI Oluşturma (Creating a GUI with Swing)](gui/swing.md)** — Java platformunda GUI oluşturmaya kapsamlı bir giriş.
- **[JavaFX ile GUI Oluşturma (Creating a JavaFX GUI)](gui/javafx.md)** — JavaFX öğreticileri koleksiyonu.

# Kılavuz: Swing ile Grafiksel Kullanıcı Arayüzü (GUI) Oluşturma

**Swing**, Java platformunda zengin masaüstü grafiksel kullanıcı arayüzleri (GUI) geliştirmek için tasarlanmış kapsamlı bir GUI araç takımıdır (*toolkit*). Tamamen Java ile yazılmış olup platformdan bağımsız, özelleştirilebilir bileşenler sunar.

<figure style="text-align: center;">
  <img src="_media/figures/nb-swing-1.png" alt="NetBeans Swing GUI Builder" style="max-width: 100%; height: auto;">
  <figcaption style="margin-top: 10px;">Swing GUI bileşenleri ve görsel tasarım.</figcaption>
</figure>

1. [**İlk Swing Uygulaması (HelloWorldSwing)**](#1-i̇lk-swing-uygulaması-helloworldswing)
2. [**Üst Düzey Kapsayıcılar (Top-Level Containers)**](#2-üst-düzey-kapsayıcılar-top-level-containers)
3. [**Temel GUI Bileşenleri (Components)**](#3-temel-gui-bileşenleri-components)
4. [**Düzen Yöneticileri (Layout Managers)**](#4-düzen-yöneticileri-layout-managers)
5. [**Olay Yönetimi (Event Handling) ve İş Parçacığı Güvenliği**](#5-olay-yönetimi-event-handling-ve-i̇ş-parçacığı-güvenliği)
---

# 1. İlk Swing Uygulaması (HelloWorldSwing)

Aşağıda standart bir pencere açan ve ekranda bir selamlama mesajı gösteren eksiksiz `HelloWorldSwing` uygulaması yer almaktadır:

```java
import javax.swing.*;        

public class HelloWorldSwing {
    private static void createAndShowGUI() {
        // Pencere süslemelerini ayarla
        JFrame.setDefaultLookAndFeelDecorated(true);

        // Pencereyi (JFrame) oluştur ve yapılandır
        JFrame frame = new JFrame("HelloWorldSwing");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // "Hello World" etiketini ekle
        JLabel label = new JLabel("Hello World");
        frame.getContentPane().add(label);

        // Pencereyi boyutlandır ve göster
        frame.pack();
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        // GUI kodunu Olay Dağıtım İş Parçacığı üzerinde planla
        javax.swing.SwingUtilities.invokeLater(new Runnable() {
            public void run() {
                createAndShowGUI();
            }
        });
    }
}
```

---

# 2. Üst Düzey Kapsayıcılar (Top-Level Containers)

Her Swing GUI'sinin temelinde en az bir üst düzey kapsayıcı yer alır:

- **`JFrame`:** Başlık çubuğuna, simge durumuna küçültme/büyütme/kapatma butonlarına ve bir kenarlığa sahip standart bir ana uygulama penceresidir.
- **`JDialog`:** Ana pencereden bağımsız veya ona bağlı açılan ikincil diyalog/açılır penceredir (örneğin dosya açma veya onay kutuları).
- **`JPanel`:** Diğer bileşenleri gruplamak ve düzenlemek için kullanılan görünmez ara kapsayıcıdır.

---

# 3. Temel GUI Bileşenleri (Components)

Swing çok çeşitli etkileşimli bileşenler sağlar:

- **Düğmeler (*Buttons*):** `JButton`, `JRadioButton`, `JCheckBox`, `JToggleButton`.
- **Metin Giriş Bileşenleri:** `JTextField`, `JPasswordField`, `JTextArea`.
- **Listeleme ve Seçim:** `JComboBox` (açılır liste), `JList`.
- **Gelişmiş Veri Gösterimi:** `JTable` (tablolar), `JTree` (ağaç görünümleri).
- **Menüler:** `JMenuBar`, `JMenu`, `JMenuItem`.

---

# 4. Düzen Yöneticileri (Layout Managers)

Swing bileşenlerin kapsayıcı içindeki konumlarını ve boyutlarını piksellerle sabit belirlemek yerine **düzen yöneticileri (layout managers)** kullanır:

- **`BorderLayout`:** Kapsayıcıyı 5 bölgeye ayırır: `NORTH`, `SOUTH`, `EAST`, `WEST`, `CENTER`. (`JFrame` varsayılanıdır).
- **`FlowLayout`:** Bileşenleri satır boyunca soldan sağa akıtır; satır dolduğunda alt satıra geçer. (`JPanel` varsayılanıdır).
- **`GridLayout`:** Bileşenleri eşit boyutlu satır ve sütunlardan oluşan bir ızgaraya yerleştirir.
- **`BoxLayout`:** Bileşenleri tek bir satırda (yatay) veya tek bir sütunda (dikey) dizer.
- **`GridBagLayout`:** En esnek ve karmaşık ızgara düzen yöneticisidir.

---

# 5. Olay Yönetimi (Event Handling) ve İş Parçacığı Güvenliği

### Dinleyiciler (Listeners)
Kullanıcı bir butona tıkladığında veya klavyeden bir tuşa bastığında Swing bir olay üretir:

```java
button.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        label.setText("Butona tıklandı!");
    }
});
```

### Olay Dağıtım İş Parçacığı (Event Dispatch Thread - EDT)
Swing bileşenleri **iş parçacığı güvenli değildir (*not thread-safe*)**. Tüm GUI oluşturma, güncelleme ve çizim işlemleri tek bir iş parçacığı olan **EDT** üzerinde yürütülmelidir. Bu nedenle Swing uygulamaları başlatılırken `SwingUtilities.invokeLater()` kullanılır.
