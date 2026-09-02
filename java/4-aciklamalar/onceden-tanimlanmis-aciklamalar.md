# Önceden Tanımlanmış Açıklama Türleri (Predefined Annotation Types)

Java SE API'sinde önceden tanımlanmış bir dizi açıklama türü bulunur. Bazı açıklama türleri doğrudan Java derleyicisi tarafından kullanılırken, bazıları ise diğer açıklamalara uygulanır.

---

## Java Dili Tarafından Kullanılan Açıklama Türleri

`java.lang` paketinde tanımlanan standart açıklama türleri `@Deprecated`, `@Override` ve `@SuppressWarnings`'dır.

### 1. `@Deprecated`

`@Deprecated` açıklaması, işaretlenen öğenin **kullanımdan kaldırıldığını (*deprecated*)** ve artık kullanılmaması gerektiğini belirtir. Bir program `@Deprecated` açıklamasına sahip bir metodu, sınıfı veya alanı kullandığında derleyici bir uyarı (*warning*) üretir.

Bir öğe kullanımdan kaldırıldığında, aşağıdaki örnekte gösterildiği gibi Javadoc `@deprecated` etiketi kullanılarak da belgelenmelidir. Hem Javadoc yorumlarında hem de açıklamalarda et işaretinin (`@`) kullanılması tesadüf değildir; kavramsal olarak birbirleriyle ilişkilidirler. Ayrıca, Javadoc etiketinin küçük harfle (`@deprecated`), Java açıklamasının ise büyük harfle (`@Deprecated`) başladığına dikkat edin:

```java
// Javadoc yorumu:
/**
 * @deprecated
 * Bu metodun neden kullanımdan kaldırıldığına ve yerine ne kullanılması gerektiğine dair açıklama
 */
@Deprecated
static void deprecatedMethod() { }
```

### 2. `@Override`

`@Override` açıklaması, derleyiciye bu öğenin bir üst sınıfta (*superclass*) bildirilen bir öğeyi geçersiz kılmak (*override etmek*) amacıyla yazıldığını bildirir.

```java
// Metodu, üst sınıftan ezilen/geçersiz kılınan 
// bir metot olarak işaretleyin
@Override 
int overriddenMethod() { }
```

Bir metodu geçersiz kılarken bu açıklamayı kullanmak zorunlu olmasa da, olası yazım hatalarını önlemeye yardımcı olur. `@Override` ile işaretlenmiş bir metot üst sınıflarındaki bir metodu doğru şekilde geçersiz kılamazsa (örneğin parametre türü veya adı yanlış yazılmışsa), derleyici bir hata üretir.

### 3. `@SuppressWarnings`

`@SuppressWarnings` açıklaması, derleyiciye normalde üreteceği belirli uyarıları bastırmasını (*suppress*) söyler. Aşağıdaki örnekte kullanımdan kaldırılmış bir metot çağrılmaktadır ve derleyici normal şartlarda bir uyarı verir; ancak bu açıklama sayesinde uyarı bastırılır:

```java
// Kullanımdan kaldırılmış bir metodu kullanın ve 
// derleyiciye uyarı üretmemesini söyleyin
@SuppressWarnings("deprecation")
void useDeprecatedMethod() {
    // deprecation uyarısı bastırılır
    objectOne.deprecatedMethod();
}
```

Her derleyici uyarısı bir kategoriye aittir. Java Dil Belirtimi (*Java Language Specification*) iki temel kategoriyi listeler: `"deprecation"` ve `"unchecked"`. `"unchecked"` uyarısı, genel türlerin (*generics*) ortaya çıkışından önce yazılmış eski kodlarla çalışırken meydana gelebilir.

Birden çok uyarı kategorisini aynı anda bastırmak için dizi sözdizimi kullanılır:

```java
@SuppressWarnings({"unchecked", "deprecation"})
```

### 4. `@SafeVarargs`

`@SafeVarargs` açıklaması bir metoda veya yapıcıya (*constructor*) uygulandığında, kodun değişken sayıda bağımsız değişken (`varargs`) parametresi üzerinde potansiyel olarak güvenli olmayan işlemler gerçekleştirmediğini garanti eder. Bu açıklama kullanıldığında, `varargs` kullanımıyla ilgili `unchecked` uyarıları bastırılır.

### 5. `@FunctionalInterface`

Java SE 8 ile sunulan `@FunctionalInterface` açıklaması, ilgili tür bildiriminin Java Dil Belirtimi tarafından tanımlandığı şekilde bir **fonksiyonel arayüz (*functional interface*)** olmasının amaçlandığını belirtir. Fonksiyonel arayüzler tam olarak tek bir soyut metoda (*single abstract method*) sahip arayüzlerdir.

---

## Diğer Açıklamalara Uygulanan Açıklamalar (Üst Açıklamalar / Meta-Annotations)

Diğer açıklamalara uygulanan açıklamalara **üst açıklamalar (*meta-annotations*)** denir. `java.lang.annotation` paketinde tanımlanmış birkaç meta-açıklama türü vardır:

### 1. `@Retention`

`@Retention` açıklaması, işaretlenen açıklamanın nasıl ve nerede saklanacağını (*retention policy*) belirler:

- `RetentionPolicy.SOURCE`: İşaretlenen açıklama yalnızca kaynak kod düzeyinde tutulur ve derleyici tarafından bayt koduna (`.class`) yazılmaz, yok sayılır.
- `RetentionPolicy.CLASS`: İşaretlenen açıklama derleyici tarafından derleme zamanında `.class` dosyasına kaydedilir, ancak Java Sanal Makinesi (JVM) tarafından çalışma zamanında belleğe yüklenmez.
- `RetentionPolicy.RUNTIME`: İşaretlenen açıklama JVM tarafından çalışma zamanında saklanır; böylece çalışma zamanı ortamında yansıma (*reflection*) ile okunabilir.

### 2. `@Documented`

`@Documented` açıklaması, belirtilen açıklama her kullanıldığında bu öğelerin Javadoc aracı kullanılarak belgelenmesi gerektiğini gösterir (varsayılan olarak açıklamalar Javadoc çıktısına dahil edilmez).

### 3. `@Target`

`@Target` açıklaması, bir açıklamanın hangi tür Java öğelerine uygulanabileceğini kısıtlamak için kullanılır. Hedef öğe türü olarak `java.lang.annotation.ElementType` enum değerlerinden biri veya birkaçı belirtilir:

- `ElementType.ANNOTATION_TYPE`: Bir açıklama türüne uygulanabilir.
- `ElementType.CONSTRUCTOR`: Bir yapıcı metoda uygulanabilir.
- `ElementType.FIELD`: Bir alana veya özelliğe uygulanabilir.
- `ElementType.LOCAL_VARIABLE`: Bir yerel değişkene uygulanabilir.
- `ElementType.METHOD`: Metot düzeyinde bir açıklamaya uygulanabilir.
- `ElementType.PACKAGE`: Bir paket bildirimine uygulanabilir.
- `ElementType.PARAMETER`: Bir metodun parametrelerine uygulanabilir.
- `ElementType.TYPE`: Bir sınıfın, arayüzün (açıklama türleri dahil) veya enum'ın herhangi bir öğesine uygulanabilir.
- `ElementType.TYPE_PARAMETER`: Tip parametresi bildirimlerine uygulanabilir (Java SE 8+).
- `ElementType.TYPE_USE`: Herhangi bir tür kullanımına uygulanabilir (Java SE 8+).

### 4. `@Inherited`

`@Inherited` açıklaması, açıklama türünün üst sınıftan miras alınabileceğini gösterir (bu varsayılan olarak geçerli değildir). Kullanıcı bir sınıfta bu açıklama türünü sorguladığında ve sınıfta bu türde bir açıklama bulunmadığında, sınıfın üst sınıfı taranır. Bu açıklama yalnızca sınıf bildirimlerine uygulanır.

### 5. `@Repeatable`

Java SE 8 ile sunulan `@Repeatable` açıklaması, işaretlenen açıklamanın aynı bildirime veya tür kullanımına birden çok kez uygulanabileceğini gösterir. Daha fazla bilgi için [Yinelenen Açıklamalar](java/4-aciklamalar/yinelenen-aciklamalar.md) konusuna bakın.
