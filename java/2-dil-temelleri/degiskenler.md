# Değişkenler (Variables)

Önceki derste öğrendiğiniz gibi, bir nesne durumunu **alanlarda (fields)** saklar.

```java
int cadence = 0;
int speed = 0;
int gear = 1;
```

[Nesne Nedir?](../1-oop-kavramlari/nesne-nedir.md) tartışması sizi alanlarla tanıştırdı, ancak muhtemelen hala birkaç sorunuz var, örneğin: Bir alanı adlandırmanın kuralları ve kurallara uygun kullanımları nelerdir? int dışında başka hangi veri türleri vardır? Alanlar bildirildiklerinde başlatılmak zorunda mıdır? Açıkça başlatılmamışlarsa alanlara varsayılan bir değer atanır mı? Bu derste bu tür soruların yanıtlarını inceleyeceğiz, ancak bunu yapmadan önce, öncelikle farkında olmanız gereken birkaç teknik ayrım var. Java programlama dilinde "alan (field)" ve "değişken (variable)" terimlerinin her ikisi de kullanılır; bu, yeni geliştiriciler arasında yaygın bir kafa karışıklığı kaynağıdır, çünkü her ikisi de çoğu zaman aynı şeyi ifade ediyor gibi görünür.

Java programlama dili aşağıdaki değişken türlerini tanımlar:

### 1. Örnek Değişkenleri (Statik Olmayan Alanlar - Instance Variables / Non-Static Fields)
Teknik olarak konuşursak, **nesneler kendi durumlarını "statik olmayan alanlarda / non-static fields", yani `static` anahtar sözcüğü olmadan tanımlanan alanlarda saklar**. Statik olmayan alanlar, değerleri bir sınıfın her örneğine (başka bir deyişle, her nesneye) özgü olduğu için örnek değişkenleri olarak da bilinir; bir bisikletin *currentSpeed* değeri başka bir bisikletin *currentSpeed* değerinden bağımsızdır.

### 2. Sınıf Değişkenleri (Statik Alanlar - Class Variables / Static Fields)
Bir **sınıf değişkeni (class variable)**, `static` niteleyicisiyle (*modifier*) bildirilen herhangi bir alandır; bu, sınıfın kaç kez örneklendirildiğinden (nesne oluşturulduğundan) bağımsız olarak bu değişkenin bellekte tam olarak bir kopyasının bulunduğunu derleyiciye bildirir. Belirli bir bisiklet türünün vites sayısını tanımlayan bir alan, kavramsal olarak aynı vites sayısı tüm örnekler (nesneler) için geçerli olacağından `static` olarak işaretlenebilir. *static int numGears = 6;* kodu böyle bir static alan oluşturur. Ayrıca, vites sayısının asla değişmeyeceğini belirtmek için `final` anahtar sözcüğü eklenebilir (*static final int NUM_GEARS = 6;*). 

### 3. Yerel Değişkenler (Local Variables)
Bir nesnenin durumunu alanlarda saklamasına benzer şekilde, bir metot da geçici durumunu genellikle **yerel değişkenlerde saklar (local variables)**. Bir yerel değişken tanımlamanın sözdizimi, bir alan tanımlamaya benzer (örneğin, *int count = 0;*). Bir değişkeni yerel olarak belirten özel bir anahtar sözcük yoktur; bu belirleme tamamen değişkenin tanımlandığı konumdan kaynaklanır — yani bir metodun açılış ve kapanış süslü parantezleri arasından. Bu nedenle, yerel değişkenler yalnızca tanımlandıkları metotlar tarafından görülebilir; sınıfın geri kalanından erişilemezler.

### 4. Parametreler (Parameters)
Hem Bicycle sınıfında hem de "Hello World!" uygulamasının main metodunda parametre örneklerini zaten gördünüz. main metodunun imzasının *public static void main(String[] args)* olduğunu hatırlayın. Burada args değişkeni bu metodun parametresidir. Hatırlanması gereken önemli nokta, **parametrelerin her zaman "değişkenler" olarak sınıflandırılması, "alanlar" olarak sınıflandırılmamasıdır**. Bu, öğreticinin ilerleyen bölümlerinde öğreneceğiniz, parametre kabul eden diğer yapılar (yapıcılar ve istisna işleyicileri gibi) için de geçerlidir.

Bununla birlikte, bu eğitimin geri kalanında alanlar ve değişkenlerden bahsederken aşağıdaki genel yönergeler kullanılacaktır. "Genel olarak alanlardan" (yerel değişkenler ve parametreler hariç) bahsediyorsak, basitçe "alanlar" diyebiliriz. Tartışma "yukarıdakilerin tümü" için geçerliyse, basitçe "değişkenler" diyebiliriz. Bağlam bir ayrım gerektiriyorsa, uygun şekilde belirli terimleri (statik alan, yerel değişkenler vb.) kullanacağız. Ayrıca zaman zaman "member (üye)" teriminin de kullanıldığını görebilirsiniz. Bir türün alanları, metotları ve iç içe türleri topluca üyeleri olarak adlandırılır.

---

<span id="isimlendirme-naming"></span>

## İsimlendirme (Naming)

Her programlama dilinin, kullanmanıza izin verilen ad türleri için kendine özgü bir dizi kuralı ve geleneği vardır ve Java programlama dili de bundan farklı değildir. Değişkenlerinizi adlandırmaya ilişkin kural ve gelenekler şu şekilde özetlenebilir:

* Değişken adları büyük/küçük harfe duyarlıdır. Bir değişkenin adı, herhangi bir geçerli tanımlayıcı olabilir — bir harfle, dolar işareti “$” ile veya alt çizgi karakteri “\_” ile başlayan, uzunluğu sınırsız bir Unicode harf ve rakam dizisi olabilir. Ancak kural olarak, değişken adlarını her zaman "$" veya "\_" yerine bir harfle başlatmak gerekir. Ayrıca, kural gereği dolar işareti karakteri hiçbir zaman kullanılmaz. Otomatik olarak oluşturulan adların dolar işareti içerebildiği bazı durumlarla karşılaşabilirsiniz, ancak değişken adlarınızda bunu kullanmaktan her zaman kaçınmalısınız. Alt çizgi karakteri için de benzer bir kural vardır; değişkeninizin adını "\_" ile başlatmak teknik olarak geçerli olsa da, bu uygulama önerilmez. Boşluk kullanımına izin verilmez.

*  Sonraki karakterler harfler, rakamlar, dolar işaretleri veya alt çizgi karakterleri olabilir. Kurallar (ve sağduyu) bu kural için de geçerlidir. Değişkenleriniz için bir ad seçerken, anlaşılması güç kısaltmalar yerine tam sözcükler kullanın. Bunu yapmak kodunuzun okunmasını ve anlaşılmasını kolaylaştıracaktır. Çoğu durumda kodunuzu kendi kendini açıklayan hale de getirecektir; örneğin cadence, speed ve gear adlarına sahip alanlar, s, c ve g gibi kısaltılmış sürümlerden çok daha sezgiseldir. Ayrıca seçtiğiniz adın bir **[anahtar sözcük veya ayrılmış sözcük](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html)** olmaması gerektiğini unutmayın.

* Seçtiğiniz ad yalnızca bir kelimeden oluşuyorsa, o kelimeyi tamamen küçük harflerle yazın. Birden fazla kelimeden oluşuyorsa, sonraki her kelimenin ilk harfini büyük yazın. *gearRatio* ve *currentGear* adları bu kuralın başlıca örnekleridir. Değişkeniniz *static final int NUM_GEARS = 6* gibi sabit bir değer saklıyorsa, kural biraz değişir; her harf büyük yazılır ve sonraki kelimeler alt çizgi karakteriyle ayrılır. Kural gereği, alt çizgi karakteri başka hiçbir yerde kullanılmaz.
