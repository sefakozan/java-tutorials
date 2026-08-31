# Kılavuz: JavaFX ile Grafiksel Kullanıcı Arayüzü Oluşturma

**JavaFX**, modern zengin istemci (*Rich Client*) masaüstü ve gömülü sistem uygulamaları geliştirmek için tasarlanmış yeni nesil Java GUI platformudur. Donanım hızlandırmalı grafik desteği, modern CSS tabanlı stil yönetimi, FXML bildirimsel arayüz dili ve animasyon motoru sunar.

1. [**JavaFX Mimarisi (Stage ve Scene)**](#1-javafx-mimarisi-stage-ve-scene)
2. [**İlk JavaFX Uygulaması (HelloWorld)**](#2-i̇lk-javafx-uygulaması-helloworld)
3. [**Sahne Grafiği (Scene Graph) ve Düğümler**](#3-sahne-grafiği-scene-graph-ve-düğümler)
4. [**FXML ve CSS ile Görsel Tasarım**](#4-fxml-ve-css-ile-görsel-tasarım)
---

# 1. JavaFX Mimarisi (Stage ve Scene)

JavaFX tiyatro metaforunu kullanır:

- **`Stage` (Sahne / Pencere):** Ana uygulama penceresidir (işletim sistemi pencere çerçevesi).
- **`Scene` (Dekor / İçerik):** Bir pencerenin içindeki görsel sahnedir. Bir `Stage` aynı anda tek bir `Scene` içerir.
- **`Scene Graph` (Sahne Grafiği):** Sahne içindeki tüm GUI öğelerini (düğmeler, metinler, düzenler) temsil eden hiyerarşik bir ağaç yapısıdır. Ağaçtaki her eleman bir **`Node` (Düğüm)** nesnesidir.

---

# 2. İlk JavaFX Uygulaması (HelloWorld)

Tüm JavaFX uygulamaları `javafx.application.Application` sınıfından türer ve `start` metodunu geçersiz kılar:

```java
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class HelloWorld extends Application {
    @Override
    public void start(Stage primaryStage) {
        Button btn = new Button();
        btn.setText("Say 'Hello World'");
        btn.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent event) {
                System.out.println("Hello World!");
            }
        });
        
        StackPane root = new StackPane();
        root.getChildren().add(btn);

        Scene scene = new Scene(root, 300, 250);

        primaryStage.setTitle("Hello World!");
        primaryStage.setScene(scene);
        primaryStage.show();
    }
    
    public static void main(String[] args) {
        launch(args);
    }
}
```

---

# 3. Sahne Grafiği (Scene Graph) ve Düğümler

Sahne grafiği üç tür düğümden oluşur:
- **Kök Düğüm (*Root Node*):** Sahnenin en üstündeki ilk düğümdür (`StackPane`, `BorderPane`, `VBox`, `HBox` gibi bir yerleşim düzeni).
- **Dal Düğümleri (*Branch / Parent Nodes*):** İçinde başka düğümleri barındıran ara düzenler (`Group`, `Pane`).
- **Yaprak Düğümleri (*Leaf Nodes*):** Çocuk düğümü olmayan son elemanlar (`Button`, `Label`, `TextField`, `ImageView`, `Circle`, `Rectangle`).

---

# 4. FXML ve CSS ile Görsel Tasarım

JavaFX, kullanıcı arayüzü tasarımını Java kodundan ayırmak için iki güçlü teknoloji sunar:

### 1. FXML
XML tabanlı bildirimsel bir işaretleme dilidir. **SceneBuilder** görsel tasarım aracı ile sürükle-bırak yöntemiyle FXML dosyaları oluşturulabilir.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<?import javafx.scene.control.*?>
<?import javafx.scene.layout.*?>

<VBox xmlns="http://javafx.com/javafx" xmlns:fx="http://javafx.com/fxml"
      fx:controller="com.example.SampleController" alignment="CENTER" spacing="10">
    <Label fx:id="myLabel" text="JavaFX Hoş Geldiniz"/>
    <Button text="Tıkla" onAction="#handleButtonClick"/>
</VBox>
```

### 2. CSS ile Stil Verme
JavaFX arayüzleri standart web CSS'ine benzer bir sözdizimiyle (`-fx-` önekli kurallarla) stillendirilebilir:

```css
.button {
    -fx-background-color: #007bff;
    -fx-text-fill: white;
    -fx-font-size: 14px;
    -fx-background-radius: 5px;
}
```
