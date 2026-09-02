# Açıklama Türü Tanımlama (Declaring an Annotation Type)

Birçok açıklama, koddaki geleneksel yorum satırlarının yerini alır.

Bir yazılım ekibinin geleneksel olarak her sınıfın gövdesine önemli bilgiler sağlayan yorum satırlarıyla başladığını varsayalım:

```java
public class Generation3List extends Generation2List {

   // Yazar: John Doe
   // Tarih: 17/3/2002
   // Geçerli revizyon: 6
   // Son değişiklik: 12/4/2004
   // Değiştiren: Jane Doe
   // İnceleyenler: Alice, Bill, Cindy

   // sınıf kodları buraya gelir

}
```

Aynı üstveriyi (*metadata*) bir açıklama ile eklemek için öncelikle bir **açıklama türü (*annotation type*)** tanımlamanız gerekir. Bunun sözdizimi şöyledir:

```java
@interface ClassPreamble {
   String author();
   String date();
   int currentRevision() default 1;
   String lastModified() default "N/A";
   String lastModifiedBy() default "N/A";
   // Dizi kullanımına dikkat edin
   String[] reviewers();
}
```

Açıklama türü tanımı, `interface` anahtar sözcüğünün önüne et işaretinin (`@`) geldiği bir arayüz tanımına benzer (`@` = AT, *annotation type* kısaltması gibi). Açıklama türleri bir tür **arayüzdür (*interface*)**; arayüzler sonraki derslerde ayrıntılı olarak ele alınacaktır.

Önceki açıklama tanımının gövdesi, metotlara benzeyen **açıklama türü öğesi (*annotation type element*)** bildirimleri içerir. Bu öğelerin isteğe bağlı varsayılan değerler (`default`) tanımlayabileceğine dikkat edin.

Açıklama türü tanımlandıktan sonra, değerleri doldurarak bu türdeki açıklamaları aşağıdaki gibi kullanabilirsiniz:

```java
@ClassPreamble (
   author = "John Doe",
   date = "17/3/2002",
   currentRevision = 6,
   lastModified = "12/4/2004",
   lastModifiedBy = "Jane Doe",
   // Dizi gösterimine dikkat edin
   reviewers = {"Alice", "Bob", "Cindy"}
)
public class Generation3List extends Generation2List {

   // sınıf kodları buraya gelir

}
```

> **Not:** `@ClassPreamble` içindeki bilgilerin Javadoc tarafından üretilen dokümantasyonda görünmesini sağlamak için, `@ClassPreamble` tanımını `@Documented` açıklaması ile nitelemeniz gerekir:
>
> ```java
> // @Documented kullanmak için bunu içe aktarın
> import java.lang.annotation.*;
> 
> @Documented
> @interface ClassPreamble {
> 
>    // Açıklama öğesi tanımları
>    
> }
> ```
