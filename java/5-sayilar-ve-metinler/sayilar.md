# Ders: Sayılar ve Math Sınıfı (Numbers and the Math Class)

Sayılarla çalışırken çoğu zaman ilkel türleri (`byte`, `int`, `double` vb.) kullanırsınız. Ancak bazen bir sayıyı nesne olarak kullanmanız gerekir; örneğin nesne kabul eden bir koleksiyonda (`List<Integer>`) saklamak istediğinizde.

1. [**Number Sınıf Hiyerarşisi**](#1.-number-sınıf-hiyerarşisi)
2. **Sarmalayıcı Sınıflar (Wrapper Classes) ve Autoboxing**
3. [**Math Sınıfı ile Matematiksel İşlemler**](#3.-math-sınıfı-ile-matematiksel-i̇şlemler)
---

# 1. Number Sınıf Hiyerarşisi

Tüm sayısal sarmalayıcı sınıflar `java.lang.Number` soyut sınıfından türer:

<figure style="text-align: center;">
  <img src="_media/figures// Autoboxing: int değer doğrudan Integer nesnesine atanır
Integer x = 5;

// Unboxing: Integer nesnesi otomatik int değere açılır
int y = x + 10;
```

---

# 3. Math Sınıfı ile Matematiksel İşlemler

`java.lang.Math` sınıfı temel matematiksel metotları ve sabitleri sağlar:

```java
double a = -191.635;
double absA = Math.abs(a); // 191.635 (Mutlak değer)

double max = Math.max(24, 75); // 75
double power = Math.pow(2, 8); // 256.0 (2 üzeri 8)
double sqrt = Math.sqrt(16); // 4.0 (Karekök)
```
