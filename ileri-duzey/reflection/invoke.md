# Ders: Dinamik Örnekleme ve Metot Çağırma (Dynamic Invocation)

Reflection ile derleme anında adı bilinmeyen bir sınıfın örneği oluşturulabilir ve metotları çağrılabilir.

---

## 1. Dinamik Nesne Oluşturma

```java
import java.lang.reflect.Constructor;

Class<?> clazz = Class.forName("java.lang.StringBuilder");
Constructor<?> ctor = clazz.getConstructor(String.class);

Object obj = ctor.newInstance("Başlangıç Metni");
```

---

## 2. Dinamik Metot Çağırma (`Method.invoke`)

```java
import java.lang.reflect.Method;

Class<?> stringClass = String.class;
Method charAtMethod = stringClass.getMethod("charAt", int.class);

String text = "Java Tutorials";
Object charResult = charAtMethod.invoke(text, 5);

System.out.println("5. İndeksteki Karakter: " + charResult); // 'T'
```
