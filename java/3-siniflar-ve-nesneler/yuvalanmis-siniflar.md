# Yuvalanmış Sınıflar (Nested Classes)

Java programlama dili, bir sınıfı başka bir sınıfın içinde tanımlamanıza olanak tanır. Böyle bir sınıfa *yuvalanmış sınıf (nested class)* denir ve burada gösterilmiştir:

```java
class OuterClass {
    ...
    class NestedClass {
        ...
    }
}
```

> **Terminoloji:** Yuvalanmış sınıflar iki kategoriye ayrılır: statik olmayan (non-static) ve statik (static). Statik olmayan yuvalanmış sınıflara **iç sınıflar (inner classes)** denir. `static` olarak bildirilen yuvalanmış sınıflara ise **statik yuvalanmış sınıflar (static nested classes)** denir.

```java
class OuterClass {
    ...
    class InnerClass {
        ...
    }
    static class StaticNestedClass {
        ...
    }
}
```

Bir yuvalanmış sınıf, kendisini çevreleyen sınıfın (enclosing class) bir üyesidir. Statik olmayan yuvalanmış sınıflar (iç sınıflar), `private` olarak bildirilmiş olsalar bile, kendilerini çevreleyen sınıfın diğer üyelerine erişebilirler. Statik yuvalanmış sınıflar ise kendilerini çevreleyen sınıfın diğer üyelerine doğrudan erişemezler. `OuterClass`'ın bir üyesi olarak bir yuvalanmış sınıf; `private`, `public`, `protected` veya *paket-özel (package private)* olarak bildirilebilir. (Dış sınıfların yalnızca `public` veya *package private* olarak bildirilebileceğini hatırlayın.)

## Neden Yuvalanmış Sınıflar Kullanılır? (Why Use Nested Classes?)

Yuvalanmış sınıfları kullanmanın ikna edici nedenleri şunlardır:

* **Yalnızca tek bir yerde kullanılan sınıfları mantıksal olarak gruplandırmanın bir yoludur**: Bir sınıf yalnızca başka bir sınıf için yararlıysa, onu mantıksal olarak o sınıfa yerleştirmek ve ikisini bir arada tutmak mantıklıdır. Bu tür "yardımcı sınıfları" (helper classes) yuvalamak, paketlerini daha düzenli hale getirir.
* **Kapsüllemeyi (encapsulation) artırır**: B sınıfının A sınıfının `private` olarak tanımlanan üyelerine erişmesi gerektiğini varsayalım. B sınıfını A sınıfının içine gizleyerek, A'nın üyeleri `private` olarak kalabilir ve B bunlara erişebilir. Ayrıca B'nin kendisi de dış dünyadan gizlenebilir.
* **Daha okunabilir ve bakımı kolay kod sağlar**: Küçük sınıfları üst düzey sınıfların içine yerleştirmek, kodu kullanıldığı yere daha yakın kılar.

## İç Sınıflar (Inner Classes)

Örnek alanlarında (instance fields) ve metotlarında olduğu gibi, bir iç sınıf (inner class) kendisini kapsayan sınıfın bir örneğiyle ilişkilendirilir ve o nesnenin alanlarına ve metotlarına doğrudan erişebilir. Ayrıca bir iç sınıf bir örnekle ilişkili olduğundan, kendisi herhangi bir statik üye tanımlayamaz.

Bir `InnerClass` örneği olan nesneler, bir `OuterClass` örneği içinde var olur. Aşağıdaki sınıfları göz önünde bulundurun:

```java
class OuterClass {
    ...
    class InnerClass {
        ...
    }
}
```

Bir `InnerClass` örneği yalnızca bir `OuterClass` örneği içinde var olabilir ve kapsayıcı örneğinin yöntemlerine ve alanlarına doğrudan erişime sahiptir.

Bir iç sınıfı örneklendirmek için önce dış sınıfı örneklendirmeniz gerekir. Ardından, dış nesne içinde şu sözdizimi ile iç nesneyi oluşturursunuz:

```java
OuterClass outerObject = new OuterClass();
OuterClass.InnerClass innerObject = outerObject.new InnerClass();
```

İki özel tür iç sınıf vardır: [yerel sınıflar (local classes)](java/3-siniflar-ve-nesneler/yerel-siniflar.md) ve [anonim sınıflar (anonymous classes)](java/3-siniflar-ve-nesneler/anonim-siniflar.md).

## Statik Yuvalanmış Sınıflar (Static Nested Classes)

Sınıf metotlarında ve alanlarında olduğu gibi, statik bir yuvalanmış sınıf kendisini çevreleyen sınıfla ilişkilidir. Ve statik sınıf yöntemleri gibi statik bir yuvalanmış sınıf da, kendisini çevreleyen sınıfta tanımlanan örnek değişkenlerine veya metotlarına doğrudan başvuramaz: bunları yalnızca bir nesne referansı aracılığıyla kullanabilir.

> **Not:** Statik bir yuvalanmış sınıf, diğer herhangi bir üst düzey sınıf gibi, dış sınıfının (ve diğer sınıfların) örnek üyeleriyle etkileşime girer. Aslında statik bir yuvalanmış sınıf, paketleme kolaylığı açısından başka bir üst düzey sınıfa yerleştirilmiş bir üst düzey sınıftır.

Statik yuvalanmış sınıflar, diğer üst düzey sınıflar gibi örneklendirilir:

```java
StaticNestedClass staticNestedObject = new StaticNestedClass();
```

## İç Sınıf ve Statik Yuvalanmış Sınıf Örneği (Inner Class and Nested Static Class Example)

Aşağıdaki örnek, bir iç sınıfın (`InnerClass`), statik bir yuvalanmış sınıfın (`StaticNestedClass`) ve bir üst düzey sınıfın (`TopLevelClass`), `OuterClass`'ın hangi sınıf üyelerine erişebildiğini göstermektedir:

### OuterClass.java

```java
public class OuterClass {

    String outerField = "Outer field";
    static String staticOuterField = "Static outer field";

    class InnerClass {
        void accessMembers() {
            System.out.println(outerField);
            System.out.println(staticOuterField);
        }
    }

    static class StaticNestedClass {
        void accessMembers(OuterClass outer) {
            // Derleyici hatası: Statik olmayan outerField alanına
            // statik bir başvuru yapılamaz
            // System.out.println(outerField);
            System.out.println(outer.outerField);
            System.out.println(staticOuterField);
        }
    }

    public static void main(String[] args) {
        System.out.println("Inner class:");
        System.out.println("------------");
        OuterClass outerObject = new OuterClass();
        OuterClass.InnerClass innerObject = outerObject.new InnerClass();
        innerObject.accessMembers();

        System.out.println("
Static nested class:");
        System.out.println("--------------------");
        StaticNestedClass staticNestedObject = new StaticNestedClass();        
        staticNestedObject.accessMembers(outerObject);
        
        System.out.println("
Top-level class:");
        System.out.println("--------------------");
        TopLevelClass topLevelObject = new TopLevelClass();        
        topLevelObject.accessMembers(outerObject);                
    }
}
```

### TopLevelClass.java

```java
public class TopLevelClass {

    void accessMembers(OuterClass outer) {     
        // Derleyici hatası: Statik olmayan OuterClass.outerField alanına
        // statik bir başvuru yapılamaz
        // System.out.println(OuterClass.outerField);
        System.out.println(outer.outerField);
        System.out.println(OuterClass.staticOuterField);
    }  
}
```

Bu örnek şu çıktıyı yazdırır:

```text
Inner class:
------------
Outer field
Static outer field

Static nested class:
--------------------
Outer field
Static outer field

Top-level class:
--------------------
Outer field
Static outer field
```

Statik bir yuvalanmış sınıfın, tıpkı diğer herhangi bir üst düzey sınıf gibi, dış sınıfının örnek üyeleriyle etkileşime girdiğine dikkat edin. `StaticNestedClass` statik yuvalanmış sınıfı, `outerField` alanına doğrudan erişemez çünkü bu, çevreleyen sınıf olan `OuterClass`'ın bir örnek değişkenidir. Vurgulanan ifadede Java derleyicisi bir hata üretir:

```java
static class StaticNestedClass {
    void accessMembers(OuterClass outer) {
       // Derleyici hatası: Statik olmayan outerField alanına
       // statik bir başvuru yapılamaz
       System.out.println(outerField);
    }
}
```

Bu hatayı düzeltmek için bir nesne referansı aracılığıyla `outerField`'a erişin:

```java
System.out.println(outer.outerField);
```

Benzer şekilde `TopLevelClass` üst düzey sınıfı da `outerField`'a doğrudan erişemez.

## Gölgeleme (Shadowing)

Belirli bir kapsamdaki (örneğin bir iç sınıf veya bir metot tanımı) bir tür bildirimi (üye değişkeni veya parametre adı gibi), çevreleyen kapsamdaki başka bir bildirimle aynı ada sahipse, bu bildirim çevreleyen kapsamın bildirimini *gölgeler (shadows)*. Yalnızca adıyla gölgelenmiş bir bildirime başvuramazsınız. Aşağıdaki `ShadowTest` örneği bunu göstermektedir:

```java
public class ShadowTest {

    public int x = 0;

    class FirstLevel {

        public int x = 1;

        void methodInFirstLevel(int x) {
            System.out.println("x = " + x);
            System.out.println("this.x = " + this.x);
            System.out.println("ShadowTest.this.x = " + ShadowTest.this.x);
        }
    }

    public static void main(String... args) {
        ShadowTest st = new ShadowTest();
        ShadowTest.FirstLevel fl = st.new FirstLevel();
        fl.methodInFirstLevel(23);
    }
}
```

Aşağıdaki bu örneğin çıktısıdır:

```text
x = 23
this.x = 1
ShadowTest.this.x = 0
```

Bu örnek `x` adlı üç değişken tanımlar: `ShadowTest` sınıfının üye değişkeni, `FirstLevel` iç sınıfının üye değişkeni ve `methodInFirstLevel` metodundaki parametre. `methodInFirstLevel` metodunun bir parametresi olarak tanımlanan `x` değişkeni, `FirstLevel` iç sınıfının değişkenini gölgeler. Sonuç olarak, `methodInFirstLevel` metodunda `x` değişkenini kullandığınızda, metot parametresine başvurur. `FirstLevel` iç sınıfının üye değişkenine başvurmak için, kapsayıcı kapsamı temsil etmek üzere `this` anahtar sözcüğünü kullanın:

```java
System.out.println("this.x = " + this.x);
```

Daha büyük kapsamları çevreleyen üye değişkenlerine ait oldukları sınıf adıyla başvurun. Örneğin aşağıdaki ifade, `methodInFirstLevel` metodundan `ShadowTest` sınıfının üye değişkenine erişir:

```java
System.out.println("ShadowTest.this.x = " + ShadowTest.this.x);
```

## Serileştirme (Serialization)

[Yerel](java/3-siniflar-ve-nesneler/yerel-siniflar.md) ve [anonim](java/3-siniflar-ve-nesneler/anonim-siniflar.md) sınıflar da dahil olmak üzere iç sınıfların serileştirilmesi (serialization) kesinlikle önerilmez. Java derleyicisi iç sınıflar gibi belirli yapıları derlediğinde *sentetik yapılar (synthetic constructs)* oluşturur; bunlar kaynak kodda karşılık gelen bir yapısı olmayan sınıflar, yöntemler, alanlar ve diğer yapılardır. Sentetik yapılar, Java derleyicilerinin JVM'de değişiklik yapmadan yeni Java dili özelliklerini uygulamasına olanak tanır. Ancak sentetik yapılar farklı Java derleyici uygulamaları arasında farklılık gösterebilir; bu da `.class` dosyalarının farklı uygulamalar arasında da farklılık gösterebileceği anlamına gelir. Sonuç olarak bir iç sınıfı serileştirir ve ardından farklı bir JRE uygulamasıyla seri durumdan çıkarırsanız (deserialize) uyumluluk sorunları yaşayabilirsiniz.
