# Nesneler (Objects)

Tipik bir Java programı, bildiğiniz gibi metotları çağırarak etkileşime giren birçok nesne oluşturur. Bu nesne etkileşimleri sayesinde bir program; bir grafik kullanıcı arayüzü (GUI) uygulamak, bir animasyon çalıştırmak veya bir ağ üzerinden bilgi gönderip almak gibi çeşitli görevleri yerine getirebilir. Bir nesne oluşturulduğu amacı tamamladığında, kaynakları diğer nesneler tarafından kullanılmak üzere geri dönüştürülür.

İşte üç nesne oluşturan `CreateObjectDemo` adlı küçük bir program: bir `Point` nesnesi ve iki `Rectangle` nesnesi. Bu programı derlemek için her üç kaynak dosyaya da ihtiyacınız olacaktır.

```java
public class CreateObjectDemo {
    public static void main(String[] args) {
		
        // Bir point nesnesi ve iki rectangle nesnesi bildirin ve oluşturun.
        Point originOne = new Point(23, 94);
        Rectangle rectOne = new Rectangle(originOne, 100, 200);
        Rectangle rectTwo = new Rectangle(50, 100);
		
        // rectOne'ın genişliğini, yüksekliğini ve alanını görüntüleyin
        System.out.println("Width of rectOne: " + rectOne.width);
        System.out.println("Height of rectOne: " + rectOne.height);
        System.out.println("Area of rectOne: " + rectOne.getArea());
		
        // rectTwo'nun konumunu ayarlayın
        rectTwo.origin = originOne;
		
        // rectTwo'nun konumunu görüntüleyin
        System.out.println("X Position of rectTwo: " + rectTwo.origin.x);
        System.out.println("Y Position of rectTwo: " + rectTwo.origin.y);
		
        // rectTwo'yu taşıyın ve yeni konumunu görüntüleyin
        rectTwo.move(40, 72);
        System.out.println("X Position of rectTwo: " + rectTwo.origin.x);
        System.out.println("Y Position of rectTwo: " + rectTwo.origin.y);
    }
}
```

Bu program çeşitli nesneler hakkında bilgi oluşturur, bunları işler ve görüntüler. İşte programın çıktısı:

```text
Width of rectOne: 100
Height of rectOne: 200
Area of rectOne: 20000
X Position of rectTwo: 23
Y Position of rectTwo: 94
X Position of rectTwo: 40
Y Position of rectTwo: 72
```

Aşağıdaki üç bölüm, bir program içindeki bir nesnenin yaşam döngüsünü açıklamak için yukarıdaki örneği kullanır. Bunlardan, kendi programlarınızda nesneler oluşturan ve kullanan kodları nasıl yazacağınızı öğreneceksiniz. Ayrıca bir nesnenin ömrü sona erdiğinde sistemin onu nasıl temizlediğini de öğreneceksiniz.
