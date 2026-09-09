# Anonim Sınıflar (Anonymous Classes)

Anonim sınıflar, kodunuzu daha özlü hale getirmenizi sağlar. Bir sınıfı aynı anda hem bildirmenize hem de örneklendirmenize olanak tanırlar. Bir ada sahip olmamaları dışında yerel sınıflara benzerler. Yerel bir sınıfı yalnızca bir kez kullanmanız gerekiyorsa bunları kullanın.

Bu bölüm şu konuları kapsar:

* Anonim Sınıfları Bildirme (Declaring Anonymous Classes)
* Anonim Sınıfların Sözdizimi (Syntax of Anonymous Classes)
* Çevreleyen Kapsamın Yerel Değişkenlerine Erişme ve Anonim Sınıfın Üyelerini Bildirme ve Erişme (Accessing Local Variables of the Enclosing Scope, and Declaring and Accessing Members of the Anonymous Class)
* Anonim Sınıf Örnekleri (Examples of Anonymous Classes)

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
        HelloWorldAnonymousClasses myApp =
            new HelloWorldAnonymousClasses();
        myApp.sayHello();
    }            
}
```

## Anonim Sınıfların Sözdizimi (Syntax of Anonymous Classes)

Daha önce belirtildiği gibi bir anonim sınıf bir ifadedir. Bir anonim sınıf ifadesinin sözdizimi, bir kod bloğu içeren bir sınıf tanımının olması dışında bir yapıcının çağrılmasına benzer.

`frenchGreeting` nesnesinin örneklendirilmesini düşünün:

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

* `new` işleci (operatörü).
* Uygulanacak bir arayüzün veya genişletilecek bir sınıfın adı. Bu örnekte anonim sınıf `HelloWorld` arayüzünü uygulamaktadır.
* Normal bir sınıf örneği oluşturma ifadesinde olduğu gibi, bir yapıcının bağımsız değişkenlerini içeren parantezler. **Not**: Bir arayüzü uyguladığınızda bir yapıcı yoktur, bu nedenle bu örnekte olduğu gibi boş bir parantez çifti kullanırsınız.
* Bir gövde; bu bir sınıf bildirimi gövdesidir. Daha spesifik olarak gövdede metot bildirimlerine izin verilir ancak ifadelere (statements) izin verilmez.

Bir anonim sınıf tanımı bir ifade olduğundan, bir ifadenin (statement) parçası olmalıdır. Bu örnekte anonim sınıf ifadesi, `frenchGreeting` nesnesini somutlaştıran cümlenin parçasıdır. (Bu, kapanış süslü parantezinden sonra neden noktalı virgül olduğunu açıklar.)

## Çevreleyen Kapsamın Yerel Değişkenlerine Erişme ve Anonim Sınıfın Üyelerini Bildirme ve Erişme

Yerel sınıflar gibi, anonim sınıflar da değişkenleri yakalayabilir; çevreleyen kapsamın yerel değişkenlerine aynı erişime sahiptirler:

* Anonim bir sınıf, kendisini çevreleyen sınıfın üyelerine erişebilir.
* Anonim bir sınıf, çevreleyen kapsamındaki `final` veya etkin olarak son (effectively final) olarak bildirilmemiş yerel değişkenlere erişemez.
* Yuvalanmış bir sınıf gibi, anonim bir sınıftaki bir türün (örneğin bir değişkenin) bildirimi, çevreleyen kapsamdaki aynı ada sahip diğer bildirimleri gölgeler.

Anonim sınıflar, üyeleri açısından yerel sınıflarla aynı kısıtlamalara sahiptir:

* Anonim bir sınıfta statik başlatıcılar veya üye arayüzleri bildiremezsiniz.
* Sabit değişkenler olmaları koşuluyla anonim bir sınıf statik üyelere sahip olabilir.

Anonim sınıflarda aşağıdakileri bildirebileceğinizi unutmayın:

* Alanlar (Fields)
* Ek metotlar (üst türün herhangi bir metodunu uygulamasalar bile)
* Örnek başlatıcılar (Instance initializers)
* Yerel sınıflar (Local classes)

Ancak anonim bir sınıfta yapıcılar (constructors) bildiremezsiniz.

## Anonim Sınıf Örnekleri (Examples of Anonymous Classes)

Anonim sınıflar genellikle grafik kullanıcı arayüzü (GUI) uygulamalarında kullanılır.

Aşağıdaki JavaFX örneğini düşünün (`HelloWorld.java`). Bu örnek, bir **Say 'Hello World'** düğmesi içeren bir çerçeve oluşturur. Anonim sınıf ifadesi vurgulanmıştır:

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

Bu örnekte `btn.setOnAction` metot çağrısı, **Say 'Hello World'** düğmesini seçtiğinizde ne olacağını belirtir. Bu metot `EventHandler<ActionEvent>` türünde bir nesne gerektirir. `EventHandler<ActionEvent>` arayüzü yalnızca tek bir metot içerir: `handle`. Bu metodu yeni bir sınıfla uygulamak yerine örnek bir anonim sınıf ifadesi kullanır. Bu ifadenin `btn.setOnAction` metoduna iletilen argüman olduğuna dikkat edin.

`EventHandler<ActionEvent>` arayüzü yalnızca tek bir metot içerdiğinden, anonim bir sınıf ifadesi yerine bir lambda ifadesi kullanabilirsiniz. Daha fazla bilgi için [Lambda İfadeleri](java/3-siniflar-ve-nesneler/lambda-ifadeleri.md) bölümüne bakın.

Anonim sınıflar, iki veya daha fazla metot içeren bir arayüzü uygulamak için idealdir. Aşağıdaki JavaFX örneği yalnızca sayısal değerleri kabul eden bir metin alanı oluşturur. `TextInputControl` sınıfından miras alınan `replaceText` ve `replaceSelection` yöntemlerini geçersiz kılarak (override ederek) `TextField` sınıfının varsayılan uygulamasını anonim bir sınıfla yeniden tanımlar:

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
