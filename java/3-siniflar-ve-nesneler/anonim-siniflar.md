# Anonim Sınıflar (Anonymous Classes)

Anonim sınıflar (anonymous classes), kodunuzu daha özlü hale getirmenizi sağlar. Bir sınıfı aynı anda hem bildirmenize hem de örneklendirmenize olanak tanırlar. Bir ada sahip olmamaları dışında yerel sınıflara (local classes) benzerler. Yerel bir sınıfı yalnızca bir kez kullanmanız gerekiyorsa bunları kullanın.

Bu bölüm şu konuları kapsar:

* [Anonim Sınıfları Bildirme (Declaring Anonymous Classes)](#anonim-sınıfları-bildirme-declaring-anonymous-classes)
* [Anonim Sınıfların Sözdizimi (Syntax of Anonymous Classes)](#anonim-sınıfların-sözdizimi-syntax-of-anonymous-classes)
* [Çevreleyen Kapsamın Yerel Değişkenlerine Erişme ve Anonim Sınıfın Üyelerini Bildirme ve Erişme (Accessing Local Variables of the Enclosing Scope, and Declaring and Accessing Members of the Anonymous Class)](#çevreleyen-kapsamın-yerel-değişkenlerine-erişme-ve-anonim-sınıfın-üyelerini-bildirme-ve-erişme-accessing-local-variables-of-the-enclosing-scope-and-declaring-and-accessing-members-of-the-anonymous-class)
* [Anonim Sınıf Örnekleri (Examples of Anonymous Classes)](#anonim-sınıf-örnekleri-examples-of-anonymous-classes)

## Anonim Sınıfları Bildirme (Declaring Anonymous Classes)

Yerel sınıflar sınıf bildirimleri iken, anonim sınıflar ifadelerdir (expressions); bu da sınıfı başka bir ifade içinde tanımladığınız anlamına gelir. Aşağıdaki `HelloWorldAnonymousClasses` örneği, `frenchGreeting` ve `spanishGreeting` yerel değişkenlerinin başlatma ifadelerinde anonim sınıfları kullanır, ancak `englishGreeting` değişkeninin başlatılması için bir yerel sınıf kullanır:

```java
public class HelloWorldAnonymousClasses {
  
    interface HelloWorld {
        public void greet();
        public void greetSomeone(String someone);
    }
  
    public void sayHello() {
        
        class EnglishGreeting implements HelloWorld {
            String name = "world";

            public void greet() {
                greetSomeone("world");
            }

            public void greetSomeone(String someone) {
                name = someone;
                System.out.println("Hello " + name);
            }
        }
      
        HelloWorld englishGreeting = new EnglishGreeting();
        
        HelloWorld frenchGreeting = new HelloWorld() {
            String name = "tout le monde";

            public void greet() {
                greetSomeone("tout le monde");
            }

            public void greetSomeone(String someone) {
                name = someone;
                System.out.println("Salut " + name);
            }
        };
        
        HelloWorld spanishGreeting = new HelloWorld() {
            String name = "mundo";

            public void greet() {
                greetSomeone("mundo");
            }

            public void greetSomeone(String someone) {
                name = someone;
                System.out.println("Hola, " + name);
            }
        };

        englishGreeting.greet();
        frenchGreeting.greetSomeone("Fred");
        spanishGreeting.greet();
    }

    public static void main(String... args) {
        HelloWorldAnonymousClasses myApp = new HelloWorldAnonymousClasses();
        myApp.sayHello();
    }            
}
```

## Anonim Sınıfların Sözdizimi (Syntax of Anonymous Classes)

Daha önce belirtildiği gibi, bir anonim sınıf bir ifadedir. Bir anonim sınıf ifadesinin sözdizimi, bir kod bloğu içinde yer alan bir sınıf tanımının bulunması dışında, bir constructor çağrısına benzer.

`frenchGreeting` nesnesinin örneklendirilmesini göz önünde bulundurun:

```java
        HelloWorld frenchGreeting = new HelloWorld() {
            String name = "tout le monde";

            public void greet() {
                greetSomeone("tout le monde");
            }

            public void greetSomeone(String someone) {
                name = someone;
                System.out.println("Salut " + name);
            }
        };
```

Anonim sınıf ifadesi şunlardan oluşur:

* `new` operatörü
* Uygulanacak (implement edilecek) bir arayüzün (interface) veya genişletilecek (extend edilecek) bir sınıfın adı. Bu örnekte anonim sınıf, `HelloWorld` arayüzünü uygulamaktadır.
* Normal bir sınıf örneği oluşturma ifadesinde olduğu gibi, bir constructor'a iletilecek argümanları (arguments) içeren parantezler. **Not**: Bir arayüzü uyguladığınızda hiçbir constructor bulunmaz, bu nedenle bu örnekte olduğu gibi boş bir parantez çifti kullanırsınız.
* Bir gövde (body); bu bir sınıf bildirimi gövdesidir. Daha belirgin olarak, gövdede metot bildirimlerine izin verilir ancak ifadelere (statements) izin verilmez.

Bir anonim sınıf tanımı bir ifade (expression) olduğundan, bir deyimin (statement) parçası olmalıdır. Bu örnekte anonim sınıf ifadesi, `frenchGreeting` nesnesini örneklendiren deyimin bir parçasıdır. (Bu, kapanış süslü parantezinden sonra neden noktalı virgül olduğunu açıklar.)

## Çevreleyen Kapsamın Yerel Değişkenlerine Erişme ve Anonim Sınıfın Üyelerini Bildirme ve Erişme (Accessing Local Variables of the Enclosing Scope, and Declaring and Accessing Members of the Anonymous Class)

Yerel sınıflar gibi, anonim sınıflar da [değişkenleri yakalayabilir (capture variables)](java/3-siniflar-ve-nesneler/yerel-siniflar.md#çevreleyen-bir-sınıfın-üyelerine-erişme-accessing-members-of-an-enclosing-class); çevreleyen kapsamın (enclosing scope) yerel değişkenlerine aynı erişime sahiptirler:

* Bir anonim sınıf, kendisini çevreleyen sınıfın üyelerine erişebilir.
* Bir anonim sınıf, çevreleyen kapsamındaki `final` veya etkin olarak sabit (effectively final) olarak bildirilmemiş yerel değişkenlere erişemez.
* Bir yuvalanmış sınıf gibi, bir anonim sınıf içindeki bir türün (örneğin bir değişkenin) bildirimi, çevreleyen kapsamdaki aynı ada sahip diğer tüm bildirimleri gölgeler (shadows). Daha fazla bilgi için [Gölgeleme (Shadowing)](java/3-siniflar-ve-nesneler/yuvalanmis-siniflar.md#gölgeleme-shadowing) bölümüne bakın.

Anonim sınıflar, üyeleri açısından da yerel sınıflarla aynı kısıtlamalara sahiptir:

* Bir anonim sınıf içinde statik başlatıcılar (static initializers) veya üye arayüzler bildiremezsiniz.
* Bir anonim sınıf, sabit değişken (constant variable) olmaları koşuluyla statik üyelere sahip olabilir.

Anonim sınıflarda aşağıdakileri bildirebileceğinizi unutmayın:

* Alanlar (Fields)
* Ekstra metotlar (üst türün herhangi bir metodunu uygulamasalar bile)
* Örnek başlatıcılar (Instance initializers)
* Yerel sınıflar (Local classes)

Ancak, bir anonim sınıf içinde constructor bildiremezsiniz.

## Anonim Sınıf Örnekleri (Examples of Anonymous Classes)

**Anonim sınıflar sıklıkla grafik kullanıcı arayüzü (GUI) uygulamalarında kullanılır.**

`HelloWorld.java` JavaFX örneğini ele alalım. Bu örnek, bir **Say 'Hello World'** butonu içeren bir pencere (frame) oluşturur. Anonim sınıf ifadesi vurgulanmıştır:

```java
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;
 
public class HelloWorld extends Application {
    public static void main(String[] args) {
        launch(args);
    }
    
    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Hello World!");
        
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
        primaryStage.setScene(new Scene(root, 300, 250));
        primaryStage.show();
    }
}
```

Bu örnekte `btn.setOnAction` metot çağrısı, **Say 'Hello World'** butonunu seçtiğinizde ne olacağını belirtir. Bu metot `EventHandler<ActionEvent>` türünde bir nesne gerektirir. `EventHandler<ActionEvent>` arayüzü yalnızca tek bir metot içerir: `handle`. Bu metodu yeni bir sınıf ile uygulamak yerine, örnek bir anonim sınıf ifadesi kullanır. Bu ifadenin `btn.setOnAction` metoduna iletilen argüman olduğuna dikkat edin.

`EventHandler<ActionEvent>` arayüzü yalnızca tek bir metot içerdiğinden, bir anonim sınıf ifadesi yerine bir lambda ifadesi (lambda expression) kullanabilirsiniz. Daha fazla bilgi için [Lambda İfadeleri (Lambda Expressions)](java/3-siniflar-ve-nesneler/lambda-ifadeleri.md) bölümüne bakın.

Anonim sınıflar, iki veya daha fazla metot içeren bir arayüzü uygulamak için idealdir. Aşağıdaki JavaFX örneği yalnızca sayısal değerleri kabul eden bir metin alanı (text field) oluşturur. `TextInputControl` sınıfından miras alınan `replaceText` ve `replaceSelection` metotlarını geçersiz kılarak (override ederek) `TextField` sınıfının varsayılan uygulamasını bir anonim sınıf ile yeniden tanımlar:

```java
import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.geometry.Insets;
import javafx.scene.Group;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.GridPane;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

public class CustomTextFieldSample extends Application {
    
    final static Label label = new Label();
 
    @Override
    public void start(Stage stage) {
        Group root = new Group();
        Scene scene = new Scene(root, 300, 150);
        stage.setScene(scene);
        stage.setTitle("Text Field Sample");
 
        GridPane grid = new GridPane();
        grid.setPadding(new Insets(10, 10, 10, 10));
        grid.setVgap(5);
        grid.setHgap(5);
 
        scene.setRoot(grid);
        final Label dollar = new Label("$");
        GridPane.setConstraints(dollar, 0, 0);
        grid.getChildren().add(dollar);
        
        final TextField sum = new TextField() {
            @Override
            public void replaceText(int start, int end, String text) {
                if (!text.matches("[a-z, A-Z]")) {
                    super.replaceText(start, end, text);                     
                }
                label.setText("Enter a numeric value");
            }
 
            @Override
            public void replaceSelection(String text) {
                if (!text.matches("[a-z, A-Z]")) {
                    super.replaceSelection(text);
                }
            }
        };
 
        sum.setPromptText("Enter the total");
        sum.setPrefColumnCount(10);
        GridPane.setConstraints(sum, 1, 0);
        grid.getChildren().add(sum);
        
        Button submit = new Button("Submit");
        GridPane.setConstraints(submit, 2, 0);
        grid.getChildren().add(submit);
        
        submit.setOnAction(new EventHandler<ActionEvent>() {
            @Override
            public void handle(ActionEvent e) {
                label.setText(null);
            }
        });
        
        GridPane.setConstraints(label, 0, 1);
        GridPane.setColumnSpan(label, 3);
        grid.getChildren().add(label);
        
        scene.setRoot(grid);
        stage.show();
    }
 
    public static void main(String[] args) {
        launch(args);
    }
}
```
