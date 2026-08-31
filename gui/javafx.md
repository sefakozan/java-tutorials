# Kılavuz: JavaFX ile Modern GUI Oluşturma

**JavaFX**, modern, zengin istemci uygulamaları geliştirmek için Java platformunun yeni nesil kullanıcı arayüzü çerçevesidir. Donanım hızlandırmalı grafik desteği, FXML bildirimsel arayüz tasarımı ve CSS ile stil verme yetenekleri sunar.

---

## İlk JavaFX Uygulaması

```java
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class HelloWorldJavaFX extends Application {
    
    @Override
    public void start(Stage primaryStage) {
        Button btn = new Button();
        btn.setText("Merhaba JavaFX'");
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

## JavaFX Mimarisinin Temelleri

- **`Stage` (Sahne/Pencere):** Uygulamanın ana penceresidir.
- **`Scene` (Görünüm):** Sahne içinde yer alan görsel öğelerin çizildiği kapsayıcıdır.
- **Scene Graph (Sahne Grafiği):** Düğümlerden (`Node`) oluşan hiyerarşik bir ağaç yapısıdır.
- **FXML:** Kullanıcı arayüzünü XML tabanlı olarak Java kodundan ayrı tasarlamaya olanak tanır.
- **CSS:** Arayüz bileşenlerinin stillerini özelleştirmeyi sağlar.
