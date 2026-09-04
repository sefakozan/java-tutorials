# İfadeler, Deyimler ve Bloklar (Expressions, Statements, and Blocks)

Artık değişkenleri (*variables*) ve operatörleri (*operators*) anladığınıza göre, **ifadeler** (*expressions*), **deyimler** (*statements*) ve **bloklar** (*blocks*) hakkında bilgi edinmenin zamanı geldi. Operatörler, değerleri hesaplayan ifadeler (*expressions*) oluşturmak için kullanılabilir; ifadeler deyimlerin (*statements*) temel bileşenleridir; deyimler ise bloklar (*blocks*) halinde gruplandırılabilir.

---

## İfadeler (Expressions)

Bir ifade; dilin sözdizimine (*syntax*) uygun olarak oluşturulan ve tek bir değere indirgenen; değişkenler, operatörler ve metot çağrılarından (*method invocations*) meydana gelen bir yapıdır.

Daha önce görmüş olduğunuz ifadelerden bazı örnekler aşağıda **kalın** olarak vurgulanmıştır:

```java
int <b>cadence = 0</b>;
<b>anArray[0] = 100</b>;
System.out.println(<b>"Element 1 at index 0: " + anArray[0]</b>);

int <b>result = 1 + 2</b>; // result artık 3'tür
if (<b>value1 == value2</b>) 
    System.out.println(<b>"value1 == value2"</b>);
```

Bir ifadenin döndürdüğü değerin veri türü, ifadede kullanılan öğelere bağlıdır. *cadence = 0* ifadesi bir int döndürür çünkü **atama operatörü, sol tarafındaki işlenenle aynı veri türünde bir değer döndürür**; bu durumda *cadence* bir int'tir. Diğer ifadelerden de görebileceğiniz gibi, bir ifade boolean veya String gibi başka türlerde değerler de döndürebilir.

Java programlama dili, ifadenin bir bölümünün gerektirdiği veri türü diğerinin veri türüyle eşleştiği sürece, çeşitli daha küçük ifadelerden bileşik ifadeler oluşturmanıza olanak tanır. İşte bir bileşik ifade örneği:

```java
1 * 2 * 3
```

Bu özel örnekte, ifadenin değerlendirilme sırası önemsizdir çünkü çarpmanın sonucu sıradan bağımsızdır; çarpma işlemlerini hangi sırayla uygularsanız uygulayın sonuç her zaman aynıdır. Ancak bu, tüm ifadeler için geçerli değildir. Örneğin, aşağıdaki ifade, önce toplama mı yoksa bölme işlemini mi yaptığınıza bağlı olarak farklı sonuçlar verir:

```java
x + y / 100    // belirsiz (ambiguous)
```

Dengeli parantezleri kullanarak bir ifadenin tam olarak nasıl değerlendirileceğini belirtebilirsiniz: ( ve ). Örneğin, önceki ifadeyi belirsiz olmaktan çıkarmak için aşağıdakini yazabilirsiniz:

```java
(x + y) / 100  // belirsizliğe yer bırakmayan, önerilen
```

Gerçekleştirilecek işlemlerin sırasını açıkça belirtmezseniz, sıra ifade içinde kullanılan operatörlere atanmış önceliğe göre belirlenir. Daha yüksek önceliğe sahip operatörler önce değerlendirilir. Örneğin, bölme operatörünün önceliği toplama operatöründen daha yüksektir. Bu nedenle, aşağıdaki iki ifade eşdeğerdir:

```java
x + y / 100 
x + (y / 100) // belirsizliğe yer bırakmayan, önerilen
```

Bileşik ifadeler yazarken açık olun ve hangi operatörlerin önce değerlendirilmesi gerektiğini parantezlerle belirtin. Bu uygulama, kodun okunmasını ve bakımını kolaylaştırır.

---

## Deyimler (Statements)

Deyimler, doğal dillerdeki cümlelere kabaca eşdeğerdir. Bir deyim, eksiksiz bir yürütme birimi (*complete unit of execution*) oluşturur. Aşağıdaki ifade türleri, ifadenin sonuna bir noktalı virgül (;) konularak birer deyim haline getirilebilir:

* Atama ifadeleri (*Assignment expressions*)
* **++** veya **--** operatörlerinin herhangi bir kullanımı
* Metot çağrıları (*Method invocations*)
* Nesne oluşturma ifadeleri (*Object creation expressions*)

Bu tür deyimlere **ifade deyimleri** (*expression statements*) denir. İşte ifade deyimlerine dair bazı örnekler:

```java
// atama deyimi (statement)
aValue = 8933.234;

// artırma deyimi
aValue++;

// metot çağırma deyimi
System.out.println("Hello World!");

// nesne oluşturma deyimi
Bicycle myBike = new Bicycle();
```

İfade deyimlerine ek olarak, iki tür deyim daha vardır: **bildirim deyimleri** (*declaration statements*) ve **kontrol akış deyimleri** (*control flow statements*).

Bir **bildirim deyimi** (*declaration statement*), bir değişken bildirir (*declares a variable*). Zaten bildirim deyimlerine dair birçok örnek gördünüz:

```java
// bildirim deyimi
double aValue = 8933.234;
```

Son olarak, **kontrol akış deyimleri** (*control flow statements*) deyimlerin yürütülme sırasını düzenler. Kontrol akış deyimlerini bir sonraki bölümde öğreneceksiniz: [Kontrol Akış Deyimleri (Control Flow Statements)](java/2-dil-temelleri/kontrol-akisi.md).

---

## Bloklar (Blocks)

Bir blok, dengeli süslü parantezler (**{** ve **}**) arasında yer alan sıfır veya daha fazla deyimden oluşan bir gruptur ve tek bir deyimin kullanılmasına izin verilen her yerde kullanılabilir. Aşağıdaki `BlockDemo` örneği, blokların kullanımını göstermektedir:

```java
class BlockDemo {
     public static void main(String[] args) {
          boolean condition = true;
          if (condition) { // 1. bloğun başlangıcı
               System.out.println("Condition is true.");
          } // 1. bloğun sonu
          else { // 2. bloğun başlangıcı
               System.out.println("Condition is false.");
          } // 2. bloğun sonu
     }
}
```
