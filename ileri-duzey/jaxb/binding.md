# Ders: XML Şeması ve Java Bağlama (JAXB Schema Binding)

JAXB, standart Java ek açıklamaları (*annotations*) kullanarak standart bir Java sınıfını XML elemanlarına ve özniteliklerine bağlar.

1. [**Temel JAXB Ek Açıklamaları**](#1-temel-jaxb-ek-açıklamaları)
2. [**Örnek Sınıf Bildirimi**](#2-örnek-sınıf-bildirimi)
3. [**`xjc` Şema Derleyicisi**](#3-xjc-şema-derleyicisi)
---

# 1. Temel JAXB Ek Açıklamaları

`javax.xml.bind.annotation` paketi şu temel ek açıklamaları sağlar:

- **`@XmlRootElement`:** Bir sınıfın en üst düzey XML kök öğesi olduğunu belirtir.
- **`@XmlElement`:** Bir sınıf alanını veya getter metodunu bir XML alt elemanına eşler.
- **`@XmlAttribute`:** Bir sınıf alanını XML elemanının bir özniteliğine (*attribute*) eşler.
- **`@XmlType`:** XML elemanlarının sıralanış düzenini (`propOrder`) belirler.
- **`@XmlTransient`:** Bir alanın XML çıktısına dahil edilmesini engeller.

---

# 2. Örnek Sınıf Bildirimi

```java
import javax.xml.bind.annotation.*;

@XmlRootElement(name = "customer")
@XmlType(propOrder = { "name", "age", "email" })
public class Customer {
    private int id;
    private String name;
    private int age;
    private String email;

    @XmlAttribute
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    @XmlElement
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    @XmlElement
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }

    @XmlElement
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
```

---

# 3. `xjc` Şema Derleyicisi

Var olan bir XML Şemasından (`.xsd`) otomatik olarak Java kaynak kodları ve sınıfları üretmek için JDK ile birlikte gelen `xjc` komut satırı aracı kullanılır:

```bash
xjc -p com.example.schema schema.xsd
```
