# Sınıf ve Nesne Oluşturma ve Kullanma Özeti (Summary of Creating and Using Classes and Objects)

Bir sınıf bildirimi sınıfı adlandırır ve sınıf gövdesini süslü parantezler arasına alır. Sınıf adının önüne niteleyiciler gelebilir. Sınıf gövdesi sınıf için alanları, metotları ve yapıcıları içerir. Bir sınıf, durum bilgisini tutmak için alanları kullanır ve davranışı uygulamak için metotları kullanır. Bir sınıfın yeni bir örneğini başlatan yapıcılar, sınıfın adını kullanır ve dönüş türü olmayan metotlara benzerler.

Sınıflara ve üyelere erişimi aynı şekilde kontrol edersiniz: bildirimlerinde `public` gibi bir erişim niteleyicisi kullanarak.

Üyenin bildiriminde `static` anahtar sözcüğünü kullanarak bir sınıf değişkeni veya bir sınıf metodu belirlersiniz. `static` olarak bildirilmeyen bir üye, örtük olarak bir örnek üyesidir. Sınıf değişkenleri bir sınıfın tüm örnekleri tarafından paylaşılır ve bir örnek referansının yanı sıra sınıf adı aracılığıyla da erişilebilir. Bir sınıfın örnekleri, her bir örnek değişkeninin kendi kopyasını alır ve bunlara bir örnek referansı aracılığıyla erişilmelidir.

`new` operatörünü ve bir yapıcıyı kullanarak bir sınıftan bir nesne oluşturursunuz. `new` operatörü, oluşturulan nesneye bir referans döndürür. Referansı bir değişkene atayabilir veya doğrudan kullanabilirsiniz.

Bildirildikleri sınıfın dışındaki kodlar tarafından erişilebilen örnek değişkenlerine ve metotlarına nitelikli bir ad (qualified name) kullanılarak başvurulabilir. Bir örnek değişkeninin nitelikli adı şöyle görünür:

```java
objectReference.variableName
```

Bir metodun nitelikli adı şöyle görünür:

```java
objectReference.methodName(argumentList)
```

veya:

```java
objectReference.methodName()
```

Çöp toplayıcı (garbage collector), kullanılmayan nesneleri otomatik olarak temizler. Program artık bir nesneye başvuran hiçbir referans tutmuyorsa o nesne kullanılmıyor demektir. Referansı tutan değişkeni `null` olarak ayarlayarak bir referansı açıkça bırakabilirsiniz.
