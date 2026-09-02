# Sorular ve Alıştırmalar: Açıklamalar (Annotations)

## Sorular

1. Aşağıdaki arayüz tanımındaki eksiklik/kusur nedir?

```java
public interface House {
    @Deprecated
    void open();
    void openFrontDoor();
    void openBackDoor();
}
```

2. 1. Soruda gösterilen `House` arayüzünün aşağıdaki implementasyonunu düşünün:

```java
public class MyHouse implements House {
    public void open() {}
    public void openFrontDoor() {}
    public void openBackDoor() {}
}
```

Bu programı derlediğinizde, `open` arayüzde kullanımdan kaldırıldığı (`@Deprecated`) için derleyici bir uyarı verir. Bu uyarıdan kurtulmak için ne yapabilirsiniz?

3. Aşağıdaki kod hatasız derlenir mi? Neden derlenir veya neden derlenmez?

```java
public @interface Meal { ... }

@Meal("breakfast", mainDish="cereal")
@Meal("lunch", mainDish="pizza")
@Meal("dinner", mainDish="salad")
public void evaluateDiet() { ... }
```

---

## Alıştırmalar

1. `id`, `synopsis`, `engineer` ve `date` öğelerini içeren bir geliştirme talebi (*enhancement request*) açıklama türü tanımlayın. `engineer` için varsayılan değeri `"unassigned"`, `date` için ise `"unknown"` olarak belirleyin.

---

## Yanıtlar

### Soruların Yanıtları

1. Dokümantasyon, `open` metodunun neden kullanımdan kaldırıldığını ve bunun yerine neyin kullanılması gerektiğini belirtmelidir. Örneğin:

```java
public interface House { 
    /**
     * @deprecated open metodunun kullanımı önerilmez; 
     * bunun yerine openFrontDoor veya openBackDoor kullanın.
     */
    @Deprecated
    void open(); 
    void openFrontDoor();
    void openBackDoor();
}
```

2. İki farklı çözüm uygulayabilirsiniz:

**Seçenek A:** Sınıftaki `open` metodunun implementasyonunu da `@Deprecated` olarak işaretleyebilirsiniz:

```java
public class MyHouse implements House { 
    // Dokümantasyon arayüzden miras alınır
    @Deprecated
    public void open() {} 
    public void openFrontDoor() {}
    public void openBackDoor() {}
}
```

**Seçenek B:** Uyarıyı `@SuppressWarnings` ile bastırabilirsiniz:

```java
public class MyHouse implements House { 
    @SuppressWarnings("deprecation")
    public void open() {} 
    public void openFrontDoor() {}
    public void openBackDoor() {}
}
```

3. Kod **derlenmez**. JDK 8'den önce yinelenen açıklamalar desteklenmemekteydi. JDK 8 ve sonrasında ise kodun derlenememe nedeni, `Meal` açıklama türünün yinelenebilir (`@Repeatable`) olarak tanımlanmamış olmasıdır. `@Repeatable` meta-açıklaması eklenerek ve bir kapsayıcı açıklama türü bildirilerek düzeltilebilir:

```java
public class AnnotationTest {

    public @interface MealContainer {
        Meal[] value();
    }

    @java.lang.annotation.Repeatable(MealContainer.class)
    public @interface Meal {
        String value();
        String mainDish();
    }

    @Meal(value="breakfast", mainDish="cereal")
    @Meal(value="lunch", mainDish="pizza")
    @Meal(value="dinner", mainDish="salad")
    public void evaluateDiet() { }
}
```

### Alıştırmaların Yanıtları

1. Tanımlanan geliştirme talebi (*Request-for-Enhancement - RFE*) açıklama türü:

```java
/**
 * Geliştirme Talebi (Request-for-Enhancement - RFE) açıklama türünü tanımlar.
 */
public @interface RequestForEnhancement {
    int id();
    String synopsis();
    String engineer() default "[unassigned]";
    String date() default "[unknown]";
}
```
