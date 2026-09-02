# Yinelenen Açıklamalar (Repeating Annotations)

Bazı durumlarda aynı açıklamayı bir bildirime veya tür kullanımına birden fazla kez uygulamak istersiniz. Java SE 8 sürümünden itibaren sunulan **yinelenen açıklamalar (*repeating annotations*)** bunu yapmanıza olanak tanır.

Örneğin, UNIX `cron` hizmetine benzer şekilde belirli bir zamanda veya belirli bir takvime göre bir metodu çalıştırmanızı sağlayan bir zamanlayıcı servisi kullanıyorsunuz. `doPeriodicCleanup` metodunu hem ayın son gününde hem de her Cuma saat 23:00'da çalışacak şekilde ayarlamak istiyorsunuz. Bir `@Schedule` açıklaması oluşturup bunu metoda iki kez uygulayabilirsiniz:

```java
@Schedule(dayOfMonth="last")
@Schedule(dayOfWeek="Fri", hour="23")
public void doPeriodicCleanup() { ... }
```

Yukarıdaki örnek bir metoda açıklama uygulamaktadır. Yinelenen bir açıklamayı standart bir açıklamayı kullanabileceğiniz her yerde kullanabilirsiniz. Örneğin yetkisiz erişim istisnalarını işleyen bir sınıfa yöneticiler ve adminler için iki ayrı `@Alert` açıklaması ekleyebilirsiniz:

```java
@Alert(role="Manager")
@Alert(role="Administrator")
public class UnauthorizedAccessException extends SecurityException { ... }
```

Geriye dönük uyumluluk nedenleriyle, yinelenen açıklamalar Java derleyicisi tarafından otomatik olarak oluşturulan bir **kapsayıcı açıklama (*container annotation*)** içinde saklanır. Derleyicinin bunu yapabilmesi için kodunuzda iki bildirimin tanımlanması gerekir.

---

## 1. Adım: Yinelenebilir Açıklama Türünü Bildirin

Açıklama türü `@Repeatable` meta-açıklaması ile işaretlenmelidir. Aşağıdaki örnek özel bir `@Schedule` yinelenebilir açıklama türü tanımlar:

```java
import java.lang.annotation.Repeatable;

@Repeatable(Schedules.class)
public @interface Schedule {
  String dayOfMonth() default "first";
  String dayOfWeek() default "Mon";
  int hour() default 12;
}
```

Parantez içindeki `@Repeatable` meta-açıklamasının değeri (`Schedules.class`), Java derleyicisinin yinelenen açıklamaları saklamak için üreteceği kapsayıcı açıklamanın türüdür.

> **Önemli:** Bir açıklamayı önce yinelenebilir (`@Repeatable`) olarak bildirmeden aynı bildirime birden çok kez uygulamak derleme zamanı hatasına neden olur.

---

## 2. Adım: Kapsayıcı Açıklama Türünü Bildirin

Kapsayıcı açıklama türü, dizi türünde bir `value` öğesine sahip olmalıdır. Bu dizinin bileşen türü, yinelenebilir açıklama türü olmalıdır:

```java
public @interface Schedules {
    Schedule[] value();
}
```

---

## Açıklamaları Okuma ve Alma (Reflection)

Açıklamaları çalışma zamanında okumak için Reflection API'sinde çeşitli metotlar bulunur.

Tek bir açıklama döndüren geleneksel metotlar (örneğin `AnnotatedElement.getAnnotation(Class<T>)`), istenen türde yalnızca *tek bir* açıklama varsa o açıklamayı döndürür. İstenen türde birden fazla açıklama varsa, önce kapsayıcı açıklama alınarak bunlara erişilebilir. Böylece eski kodlar sorunsuz çalışmaya devam eder.

Java SE 8 ile birlikte, kapsayıcı açıklamayı otomatik olarak tarayıp yinelenen tüm açıklamaları doğrudan bir dizi halinde döndüren yeni metotlar eklenmiştir:

- `AnnotatedElement.getAnnotationsByType(Class<T>)`
- `AnnotatedElement.getDeclaredAnnotationsByType(Class<T>)`

---

## Tasarım Konuları

Bir açıklama türü tasarlarken, o türdeki açıklamaların kullanım sıklığını (*cardinality*) göz önünde bulundurmalısınız. Artık bir açıklamanın sıfır kez, bir kez veya türü `@Repeatable` ile işaretlenmişse birden çok kez kullanılması mümkündür. Ayrıca `@Target` meta-açıklamasını kullanarak bir açıklama türünün nerelerde kullanılabileceğini kısıtlayabilirsiniz (örneğin yalnızca metotlar ve alanlar).
