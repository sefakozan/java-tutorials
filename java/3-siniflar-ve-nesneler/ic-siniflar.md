# Ders: Yuvalanmış ve İç Sınıflar (Nested and Inner Classes)

Java programlama dili, bir sınıfı başka bir sınıfın içinde tanımlamanıza olanak tanır. Bu tür sınıflara **yuvalanmış sınıflar (nested classes)** denir:

```java
class OuterClass {
    ...
    class NestedClass {
        ...
    }
}
```

1. [**Terminoloji ve Neden Yuvalanmış Sınıf Kullanılır?**](#1-terminoloji-ve-neden-yuvalanmış-sınıf-kullanılır)
2. [**Statik Yuvalanmış Sınıflar (Static Nested Classes)**](#2-statik-yuvalanmış-sınıflar-static-nested-classes)
3. [**İç Sınıflar (Inner Classes)**](#3-i̇ç-sınıflar-inner-classes)
4. [**Yerel Sınıflar (Local Classes)**](#4-yerel-sınıflar-local-classes)
5. [**Anonim Sınıflar (Anonymous Classes)**](#5-anonim-sınıflar-anonymous-classes)
6. [**Lambda İfadelerine Genel Bakış (Lambda Expressions)**](#6-lambda-i̇fadelerine-genel-bakış-lambda-expressions)
---

# 1. Terminoloji ve Neden Yuvalanmış Sınıf Kullanılır?

Yuvalanmış sınıflar iki kategoriye ayrılır:
- **Statik yuvalanmış sınıflar (*static nested classes*):** `static` olarak bildirilen sınıflardır.
- **İç sınıflar (*inner classes*):** `static` olmayan yuvalanmış sınıflardır.

### Neden Yuvalanmış Sınıf Kullanılır?
1. **Mantıksal Gruplandırma:** Yalnızca tek bir yerde kullanılan sınıfları mantıksal olarak bir arada tutar.
2. **Kapsüllemeyi (Encapsulation) Artırır:** İki üst düzey sınıf düşünün, A ve B; B'nin A'nın `private` üyelerine erişmesi gerekiyorsa, B'yi A'nın içine yerleştirerek bu erişim sağlanabilir ve B dış dünyadan gizlenir.
3. **Daha Okunabilir ve Bakımı Kolay Kod Sağlar.**

---

# 2. Statik Yuvalanmış Sınıflar (Static Nested Classes)

Statik bir yuvalanmış sınıf, kapsayan sınıfının (*enclosing class*) örnek değişkenlerine veya metotlarına doğrudan erişemez; bunlara yalnızca bir nesne referansı üzerinden erişebilir.

Statik yuvalanmış bir sınıfın örneğini oluşturma sözdizimi:

```java
OuterClass.StaticNestedClass nestedObject =
     new OuterClass.StaticNestedClass();
```

---

# 3. İç Sınıflar (Inner Classes)

Örnek değişkenleri ve metotlarında olduğu gibi, statik olmayan bir yuvalanmış sınıf (*inner class*), kendisini kapsayan sınıfın bir örneğiyle ilişkilidir ve o nesnenin tüm alanlarına ve metotlarına (`private` olanlar dahil) doğrudan erişebilir.

Bir iç sınıf nesnesi oluşturmak için önce dış sınıfın bir örneğinin bulunması gerekir:

```java
OuterClass outerObject = new OuterClass();
OuterClass.InnerClass innerObject = outerObject.new InnerClass();
```

### Gölgeleme (Shadowing)
Bir iç sınıftaki bir alan bildirimi, dış sınıftaki aynı adlı alanı gölgelerse, dış sınıfın alanına başvurmak için `OuterClass.this.alanAdi` sözdizimi kullanılır.

---

# 4. Yerel Sınıflar (Local Classes)

Yerel sınıflar, herhangi bir blok (`{ }`) içinde (tipik olarak bir metot gövdesinde) tanımlanan sınıflardır. Yalnızca tanımlandıkları metodun içinde görünürler ve metodun `final` veya etkin olarak son (*effectively final*) yerel değişkenlerine erişebilirler.

```java
public class LocalClassExample {
    public static void validatePhoneNumber(String phoneNumber1) {
        final int numberLength = 10;
        
        class PhoneNumber {
            String formattedPhoneNumber = null;
            PhoneNumber(String rawNumber){
                if (rawNumber.length() == numberLength)
                    formattedPhoneNumber = rawNumber;
            }
        }
        
        PhoneNumber myNumber = new PhoneNumber(phoneNumber1);
    }
}
```

---

# 5. Anonim Sınıflar (Anonymous Classes)

Anonim sınıflar, bir sınıfı aynı anda hem bildirmenize hem de örneğini oluşturmanıza (*instantiate*) olanak tanır. Bir sınıfı yalnızca bir kez kullanmanız gerektiğinde kodunuzu daha öz hale getirirler (isimleri yoktur):

```java
public class AnonymousDemo {
    interface HelloWorld {
        public void greet();
    }
  
    public void sayHello() {
        HelloWorld spanishGreeting = new HelloWorld() {
            public void greet() {
                System.out.println("Hola, mundo!");
            }
        };
        spanishGreeting.greet();
    }
}
```

---

# 6. Lambda İfadelerine Genel Bakış (Lambda Expressions)

Java SE 8 ile eklenen lambda ifadeleri, anonim sınıfların tek metotlu arayüzler (*fonksiyonel arayüzler / functional interfaces*) için oluşturduğu kod karmaşasını ortadan kaldıran kompakt ifadelerdir:

```java
// Anonim sınıf yerine lambda ifadesi:
btn.setOnAction(event -> System.out.println("Hello World!"));
```
