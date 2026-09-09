# Sınıfları Bildirme (Declaring Classes)

Sınıfların şu şekilde tanımlandığını gördünüz:

```java
class MyClass {
    // alan (field), yapıcı (constructor) ve 
    // metot (method) bildirimleri
}
```

Bu bir ***sınıf bildirimidir (class declaration)***. ***Sınıf gövdesi (class body)*** (süslü parantezler arasındaki alan), sınıftan oluşturulan nesnelerin yaşam döngüsünü sağlayan tüm kodu içerir: yeni nesneleri başlatmak için yapıcılar (constructors), sınıfın ve nesnelerinin durumunu sağlayan alanlar (fields) için bildirimler ve sınıfın ve nesnelerinin davranışını uygulayan metotlar.

Yukarıdaki sınıf bildirimi en temel (minimal) olandır. Bir sınıf bildiriminin yalnızca gerekli olan bileşenlerini içerir. Sınıf bildiriminin başlangıcında üst sınıfının (superclass) adı, herhangi bir arayüzü uygulayıp uygulamadığı (implements interfaces) gibi sınıf hakkında daha fazla bilgi sağlayabilirsiniz. Örneğin:

```java
class MyClass extends MySuperClass implements YourInterface {
    // alan, yapıcı ve
    // metot bildirimleri
}
```

Bu ifade, `MyClass`'ın `MySuperClass`'ın bir **alt sınıfı (subclass)** olduğu ve `YourInterface` **arayüzünü uyguladığı** anlamına gelir.

En başa `public` veya `private` gibi **niteleyiciler (modifiers)** de ekleyebilirsiniz; böylece bir sınıf bildiriminin açılış satırının oldukça karmaşık hale gelebileceğini görebilirsiniz. Diğer sınıfların `MyClass`'a nasıl erişebileceğini belirleyen `public` ve `private` niteleyicileri bu dersin ilerleyen bölümlerinde ele alınmaktadır. Arayüzler ve kalıtım hakkındaki ders, bir sınıf bildiriminde `extends` ve `implements` anahtar kelimelerini nasıl ve neden kullanacağınızı açıklayacaktır. Şimdilik bu ekstra karmaşıklıklar için endişelenmenize gerek yoktur.

Genel olarak sınıf bildirimleri, sırasıyla şu bileşenleri içerebilir:

1. `public`, `private` ve daha sonra karşılaşacağınız bir dizi diğer **niteleyiciler (modifiers)**. (Ancak, `private` niteleyicisinin yalnızca [Yuvalanmış Sınıflara (Nested Classes)](java/3-siniflar-ve-nesneler/yuvalanmis-siniflar.md) uygulanabileceğine dikkat edin.)
2. Kural olarak ilk harfi büyük yazılan sınıf adı.
3. Varsa, başında `extends` anahtar sözcüğü bulunan sınıfın **üst sınıfının (superclass / parent) adı**. Bir sınıf yalnızca tek bir üst sınıfı genişletebilir (`extend` edebilir).
4. Varsa, başında `implements` anahtar sözcüğü bulunan, sınıf tarafından uygulanan **virgülle ayrılmış arayüzler (interfaces) listesi**. Bir sınıf birden fazla arayüzü uygulayabilir (`implement` edebilir).
5. Sınıf gövdesi süslü parantezlerle çevrilidir.
