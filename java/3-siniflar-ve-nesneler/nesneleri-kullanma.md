# Nesneleri Kullanma (Using Objects)

Bir nesne oluşturduktan sonra, muhtemelen onu bir amaç için kullanmak istersiniz. Alanlarından birinin değerini kullanmanız, alanlarından birini değiştirmeniz veya bir eylemi gerçekleştirmek için metotlarından birini çağırmanız gerekebilir.

## Bir Nesnenin Alanlarına Başvurma (Referencing an Object's Fields)

Nesne alanlarına adlarıyla erişilir. Belirsiz olmayan bir ad kullanmanız gerekir.

Kendi sınıfı içinde bir alan için basit bir ad (simple name) kullanabilirsiniz. Örneğin `Rectangle` sınıfı *içine* `width` ve `height` değerlerini yazdıran bir ifade ekleyebiliriz:

```java
System.out.println("Width and height are: " + width + ", " + height);
```

Bu durumda `width` ve `height` basit adlardır.

Nesnenin sınıfının dışındaki kod, bir nesne referansı veya ifadesi, ardından nokta (`.`) operatörü ve ardından basit bir alan adı kullanmalıdır, örneğin:

```java
objectReference.fieldName
```

Örneğin `CreateObjectDemo` sınıfındaki kod, `Rectangle` sınıfının kodunun dışındadır. Bu nedenle `rectOne` adlı `Rectangle` nesnesi içindeki `origin`, `width` ve `height` alanlarına başvurmak için `CreateObjectDemo` sınıfı sırasıyla `rectOne.origin`, `rectOne.width` ve `rectOne.height` adlarını kullanmalıdır. Program, `rectOne`'ın `width` ve `height` değerlerini görüntülemek için bu adlardan ikisini kullanır:

```java
System.out.println("Width of rectOne: "  + rectOne.width);
System.out.println("Height of rectOne: " + rectOne.height);
```

`CreateObjectDemo` sınıfındaki koddan `width` ve `height` basit adlarını kullanmaya çalışmak anlamsızdır — bu alanlar yalnızca bir nesne içinde bulunur — ve bir derleyici hatasıyla sonuçlanır.

Daha sonra program, `rectTwo` hakkındaki bilgileri görüntülemek için benzer bir kod kullanır. Aynı türdeki nesneler, aynı örnek alanlarının (instance fields) kendi kopyalarına sahiptir. Bu nedenle her `Rectangle` nesnesi `origin`, `width` ve `height` adlı alanlara sahiptir. Bir örnek alanına bir nesne referansı aracılığıyla eriştiğinizde, o belirli nesnenin alanına başvurursunuz. `CreateObjectDemo` programındaki `rectOne` ve `rectTwo` nesneleri farklı `origin`, `width` ve `height` alanlarına sahiptir.

Bir alana erişmek için önceki örneklerde olduğu gibi bir nesneye adlandırılmış bir referans kullanabilir veya bir nesne referansı döndüren herhangi bir ifadeyi kullanabilirsiniz. `new` operatörünün bir nesneye referans döndürdüğünü hatırlayın. Dolayısıyla yeni bir nesnenin alanlarına erişmek için new'den döndürülen değeri kullanabilirsiniz:

```java
int height = new Rectangle().height;
```

Bu ifade yeni bir `Rectangle` nesnesi oluşturur ve hemen yüksekliğini alır. Özünde bu ifade, bir `Rectangle` nesnesinin varsayılan yüksekliğini hesaplar. Bu ifade yürütüldükten sonra programın oluşturulan `Rectangle` nesnesine artık bir referansı kalmadığını unutmayın, çünkü program referansı hiçbir yerde saklamamıştır. Nesneye artık başvurulmamaktadır (unreferenced) ve kaynakları Java Sanal Makinesi (JVM) tarafından geri dönüştürülmekte serbesttir.

## Bir Nesnenin Metotlarını Çağırma (Calling an Object's Methods)

Bir nesnenin metodunu çağırmak için de bir nesne referansı kullanırsınız. Nesne referansına araya nokta operatörü (`.`) koyarak metodun basit adını eklersiniz. Ayrıca parantezler içine metoda iletilecek herhangi bir bağımsız değişkeni eklersiniz. Metot herhangi bir bağımsız değişken gerektirmiyorsa, boş parantez kullanın.

```java
objectReference.methodName(argumentList);
```

veya:

```java
objectReference.methodName();
```

`Rectangle` sınıfının iki metodu vardır: dikdörtgenin alanını hesaplamak için `getArea()` ve dikdörtgenin başlangıç noktasını değiştirmek için `move()`. İşte bu iki metodu çağıran `CreateObjectDemo` kodu:

```java
System.out.println("Area of rectOne: " + rectOne.getArea());
...
rectTwo.move(40, 72);
```

İlk ifade `rectOne`'ın `getArea()` metodunu çağırır ve sonuçları görüntüler. İkinci satır `rectTwo`'yu taşır çünkü `move()` metodu nesnenin `origin.x` ve `origin.y` alanlarına yeni değerler atar.

Örnek alanlarında olduğu gibi, *objectReference* bir nesneye referans olmalıdır. Bir değişken adı kullanabileceğiniz gibi, bir nesne referansı döndüren herhangi bir ifadeyi de kullanabilirsiniz. `new` operatörü bir nesne referansı döndürür, bu nedenle yeni bir nesnenin metotlarını çağırmak için new'den döndürülen değeri kullanabilirsiniz:

```java
new Rectangle(100, 50).getArea()
```

`new Rectangle(100, 50)` ifadesi, bir `Rectangle` nesnesine başvuran bir nesne referansı döndürür. Gösterildiği gibi, yeni dikdörtgenin alanını hesaplamak amacıyla yeni `Rectangle`'ın `getArea()` metodunu çağırmak için nokta gösterimini kullanabilirsiniz.

`getArea()` gibi bazı metotlar bir değer döndürür. Bir değer döndüren metotlar için, metot çağrısını ifadeler içinde kullanabilirsiniz. Dönüş değerini bir değişkene atayabilir, karar vermek için kullanabilir veya bir döngüyü kontrol edebilirsiniz. Bu kod, `getArea()` tarafından döndürülen değeri `areaOfRectangle` değişkenine atar:

```java
int areaOfRectangle = new Rectangle(100, 50).getArea();
```

Unutmayın, belirli bir nesne üzerinde bir metot çağırmak, o nesneye bir mesaj göndermekle aynı şeydir. Bu durumda, `getArea()` metodunun üzerinde çağrıldığı nesne, yapıcı tarafından döndürülen dikdörtgendir.

## Çöp Toplayıcı (The Garbage Collector)

Bazı nesne yönelimli diller, oluşturduğunuz tüm nesneleri takip etmenizi ve artık ihtiyaç duyulmadığında bunları açıkça yok etmenizi (destroy) gerektirir. Belleği açıkça yönetmek yorucu ve hataya açıktır. Java platformu istediğiniz kadar nesne oluşturmanıza izin verir (elbette sisteminizin kaldırabileceği ölçüde sınırlıdır) ve bunları yok etme konusunda endişelenmenize gerek kalmaz. Java çalışma zamanı ortamı (runtime environment), artık kullanılmadıklarını belirlediğinde nesneleri siler. Bu işleme **çöp toplama (garbage collection)** adı verilir.

Bir nesne, artık o nesneye başvuran hiçbir referans kalmadığında çöp toplama için uygun hale gelir. Bir değişkende tutulan referanslar, değişken kapsam dışına çıktığında (goes out of scope) genellikle düşer. Ya da değişkene özel `null` değerini atayarak bir nesne referansını açıkça bırakabilirsiniz. Bir programın aynı nesneye birden fazla referansı olabileceğini unutmayın; bir nesne çöp toplama için uygun hale gelmeden önce o nesneye olan tüm referansların bırakılmış olması gerekir.

Java çalışma zamanı ortamı, artık başvurulmayan nesneler tarafından kullanılan belleği periyodik olarak boşaltan bir çöp toplayıcıya (garbage collector) sahiptir. Çöp toplayıcı, zamanın uygun olduğunu belirlediğinde işini otomatik olarak yapar.
