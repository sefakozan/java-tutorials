# Ders: JavaBean Özellikleri (JavaBean Properties)

Bir **JavaBean**, belirli adlandırma kurallarına uyan standart bir Java sınıfıdır. Bir JavaBean bileşeni:
1. Parametresiz genel bir varsayılan kurucu (*no-arg constructor*) sağlamalıdır.
2. `java.io.Serializable` arayüzünü uygulamalıdır.
3. Özelliklerini (*properties*) `getter` ve `setter` erişim metotları üzerinden dışa açmalıdır.

1. [**Basit Özellikler (Simple Properties)**](#1-basit-özellikler-simple-properties)
2. [**Dizinlenmiş Özellikler (Indexed Properties)**](#2-dizinlenmiş-özellikler-indexed-properties)
3. [**Adlandırma Kuralları (Naming Conventions)**](#3-adlandırma-kuralları-naming-conventions)
---

# 1. Basit Özellikler (Simple Properties)

Basit bir özellik tek bir değeri temsil eder ve okuma (`get`) / yazma (`set`) metotlarıyla yönetilir:

```java
import java.io.Serializable;

public class PersonBean implements Serializable {
    private String name;
    private boolean active;

    // Parametresiz kurucu
    public PersonBean() {}

    // Getter ve Setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // boolean özellikler için "is" öneki kullanılır
    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
```

---

# 2. Dizinlenmiş Özellikler (Indexed Properties)

Dizinlenmiş bir özellik bir dizi değeri temsil eder. Hem tüm diziyi hem de tek bir dizi elemanını okuma/yazma metotları sağlar:

```java
public class MatchBean implements Serializable {
    private String[] scores;

    // Tüm diziyi alma/atama
    public String[] getScores() {
        return scores;
    }
    public void setScores(String[] scores) {
        this.scores = scores;
    }

    // Tek bir indeksteki elemanı alma/atama
    public String getScores(int index) {
        return scores[index];
    }
    public void setScores(int index, String score) {
        this.scores[index] = score;
    }
}
```

---

# 3. Adlandırma Kuralları (Naming Conventions)

- **Okuma Metodu:** `public <PropertyType> get<PropertyName>()`
- **Boolean Okuma Metodu:** `public boolean is<PropertyName>()`
- **Yazma Metodu:** `public void set<PropertyName>(<PropertyType> value)`
- Özellik adı metot adından türetilir: `getTitle()` -> `title` özelliği.
