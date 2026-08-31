# Ders: XML Şemalarını Java Sınıflarına Bağlama (Binding Schemas)

JAXB, standart W3C XML Şemalarını (`.xsd`) okuyarak bunlara karşılık gelen Java sınıflarını otomatik olarak üreten bir **Şema Derleyicisi (`xjc`)** sunar.

---

## 1. `xjc` Şema Derleyicisini Çalıştırma

```bash
xjc -p com.example.models purchaseOrder.xsd
```

- `-p`: Üretilecek Java sınıflarının paket adı.
- `purchaseOrder.xsd`: Kaynak XML şema dosyası.

---

## 2. JAXB Anotasyonları ile Manuel Bağlama

Var olan Java sınıflarını XML ile eşlemek için anotasyonlar kullanılır:

```java
import javax.xml.bind.annotation.*;

@XmlRootElement(name = "customer")
@XmlAccessorType(XmlAccessType.FIELD)
public class Customer {
    @XmlAttribute
    private long id;

    @XmlElement(name = "full_name")
    private String name;

    @XmlElement
    private String email;
}
```
