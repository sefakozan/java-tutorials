# Tür Açıklamaları ve Eklenebilir Tür Sistemleri (Type Annotations and Pluggable Type Systems)

Java SE 8 sürümünden önce açıklamalar yalnızca bildirimlere (*declarations*) uygulanabiliyordu. Java SE 8 sürümünden itibaren açıklamalar herhangi bir **tür kullanımına (*type use*)** da uygulanabilir hale gelmiştir.

Bu, bir türün kullanıldığı her yerde açıklamaların kullanılabileceği anlamına gelir. Türlerin kullanıldığı yerlere birkaç örnek şunlardır:

- **Sınıf örneği oluşturma ifadeleri (`new`):**
  ```java
  new @Interned MyObject();
  ```

- **Tür dönüşümleri (*Type casts*):**
  ```java
  myString = (@NonNull String) str;
  ```

- **`implements` tümceleri:**
  ```java
  class UnmodifiableList<T> implements
      @Readonly List<@Readonly T> { ... }
  ```

- **`throws` tümceleri:**
  ```java
  void monitorTemperature() throws
      @Critical TemperatureException { ... }
  ```

---

## Eklenebilir Tür Sistemleri (Pluggable Type Systems)

Tür açıklamaları, Java programlarının analizini geliştirmek ve daha güçlü tür denetimi (*stronger type checking*) sağlamak amacıyla oluşturulmuştur. Java SE 8 yerleşik bir tür denetleme çerçevesi sunmaz; ancak Java derleyicisiyle birlikte çalışan bir veya daha fazla eklenti modülü (*pluggable module*) olarak uygulanan tür denetleme çerçeveleri yazmanıza veya indirmenize olanak tanır.

Örneğin, programınızdaki belirli bir değişkenin hiçbir zaman `null` değerine atanmamasını sağlamak ve bir `NullPointerException` hatası almaktan kaçınmak istiyorsunuz. Bunu denetlemek için özel bir derleyici eklentisi kullanabilirsiniz. Ardından kodunuzda o değişkeni işaretleyerek `null` olamayacağını belirtirsiniz:

```java
@NonNull String str;
```

Komut satırında `NonNull` modülünü dahil ederek kodu derlediğinizde, derleyici olası bir problem tespit ederse bir uyarı yazdırır ve hatayı önlemek için kodu düzeltmenize olanak tanır. Tüm uyarıları giderecek şekilde kodu düzelttikten sonra, program çalışırken bu belirli hata kesinlikle meydana gelmez.

Farklı hata türlerini denetleyen birden çok tür denetleme modülünü aynı anda kullanabilirsiniz. Bu sayede Java'nın temel tür sisteminin üzerine inşa ederek istediğiniz zaman ve istediğiniz yerde özel denetimler ekleyebilirsiniz.

Tür açıklamalarının ve eklenebilir tür denetleyicilerinin bilinçli kullanımıyla, hatalara karşı çok daha dayanıklı ve güvenilir kodlar yazabilirsiniz.

---

## Hazır Tür Denetleme Araçları (Checker Framework)

Çoğu durumda kendi tür denetleme modüllerinizi sıfırdan yazmanız gerekmez. Açık kaynaklı ve üçüncü taraf birçok güçlü araç mevcuttur. Örneğin Washington Üniversitesi tarafından geliştirilen **Checker Framework**, `@NonNull` denetleyicisinin yanı sıra düzenli ifadeler (*regular expressions*), muteks kilitleri (*mutex locks*) ve birim analizi gibi birçok hazır denetim modülü içerir.
