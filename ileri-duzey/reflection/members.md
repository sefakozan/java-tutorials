# Ders: Sınıf Üyelerini İnceleme (Members)

Bir sınıfın üyeleri yapıcılar (`Constructor`), alanlar (`Field`) ve metotlardır (`Method`).

---

## 1. Alanları (Fields) Listeleme ve İnceleme

```java
import java.lang.reflect.Field;

public class FieldSpy<T> {
    public boolean[][] b = {{false, true}, {true, false}};
    public String name = "Alice";

    public static void main(String[] args) {
        Field[] fields = FieldSpy.class.getDeclaredFields();
        for (Field f : fields) {
            System.out.printf("Alan Adı: %s, Türü: %s%n", f.getName(), f.getType().getName());
        }
    }
}
```

---

## 2. Metotları Listeleme

```java
import java.lang.reflect.Method;

Method[] methods = String.class.getMethods();
for (Method m : methods) {
    System.out.println("Metot: " + m.getName() + " -> Dönüş Türü: " + m.getReturnType().getName());
}
```
