# Alanları Başlatma (Initializing Fields)

Gördüğünüz gibi genellikle bir alana bildiriminde bir başlangıç değeri sağlayabilirsiniz:

```java
public class BedAndBreakfast {

    // 10 olarak başlat
    public static int capacity = 10;

    // false olarak başlat
    private boolean full = false;
}
```

Bu, başlatma değeri mevcut olduğunda ve başlatma tek bir satıra sığabildiğinde iyi çalışır. Ancak basitliği nedeniyle bu başlatma biçiminin sınırlamaları vardır. Başlatma mantık gerektiriyorsa (örneğin hata işleme veya karmaşık bir diziyi doldurmak için bir `for` döngüsü), basit atama yetersiz kalır. Örnek değişkenleri, hata işlemenin veya diğer mantıkların kullanılabileceği yapıcılarda başlatılabilir. Sınıf değişkenleri için aynı yeteneği sağlamak amacıyla Java programlama dili *statik başlatma bloklarını (static initialization blocks)* içerir.

> **Not:** En yaygın uygulama bu olsa da, alanları sınıf tanımının başında bildirmek zorunlu değildir. Yalnızca kullanılmadan önce bildirilmiş ve başlatılmış olmaları gerekir.

## Statik Başlatma Blokları (Static Initialization Blocks)

Bir *statik başlatma bloğu*, süslü parantez içine alınmış `{}` ve başında `static` anahtar sözcüğü bulunan normal bir kod bloğudur. İşte bir örnek:

```java
static {
    // başlatma için gereken kod her ne ise buraya gelir
}
```

Bir sınıf herhangi bir sayıda statik başlatma bloğuna sahip olabilir ve bunlar sınıf gövdesinde herhangi bir yerde görünebilir. Çalışma zamanı sistemi, statik başlatma bloklarının kaynak kodda göründükleri sırayla çağrılmasını garanti eder.

Statik bloklara bir alternatif vardır — özel bir statik metot (`private static method`) yazabilirsiniz:

```java
class Whatever {
    public static varType myVar = initializeClassVariable();
        
    private static varType initializeClassVariable() {

        // başlatma kodu buraya gelir
    }
}
```

Özel statik metotların avantajı, sınıf değişkenini daha sonra yeniden başlatmanız gerekirse yeniden kullanılabilmeleridir.

## Örnek Üyelerini Başlatma (Initializing Instance Members)

Normalde bir örnek değişkenini başlatmak için gereken kodu bir yapıcıya koyarsınız. Örnek değişkenlerini başlatmak için bir yapıcı kullanmanın iki alternatifi vardır: başlatıcı bloklar (initializer blocks) ve final metotlar.

Örnek değişkenleri için başlatıcı bloklar tıpkı statik başlatıcı bloklara benzer, ancak `static` anahtar kelimesi yoktur:

```java
{
    // başlatma için gereken kod her ne ise buraya gelir
}
```

Java derleyicisi, başlatıcı blokları her yapıcının içine kopyalar. Bu nedenle bu yaklaşım, birden fazla yapıcı arasında bir kod bloğunu paylaşmak için kullanılabilir.

Bir *final metot* bir alt sınıfta geçersiz kılınamaz (override edilemez). Bu konu arayüzler ve kalıtım dersinde ele alınmaktadır. İşte bir örnek değişkenini başlatmak için final bir metot kullanma örneği:

```java
class Whatever {
    private varType myVar = initializeInstanceVariable();
        
    protected final varType initializeInstanceVariable() {

        // başlatma kodu buraya gelir
    }
}
```

Bu, özellikle alt sınıfların başlatma metodunu yeniden kullanmak isteyebileceği durumlarda yararlıdır. Metot final'dir çünkü örnek başlatma sırasında final olmayan metotları çağırmak sorunlara yol açabilir.
