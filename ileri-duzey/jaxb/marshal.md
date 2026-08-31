# Ders: Marshal ve Unmarshal İşlemleri (Marshalling & Unmarshalling)

JAXB mimarisinde iki temel işlem gerçekleştirilir:
- **Marshalling (Paketleme / Dışa Aktarma):** Bir Java nesne ağacını bir XML belgesine dönüştürme işlemi.
- **Unmarshalling (Ayrıştırma / İçe Aktarma):** Bir XML belgesini Java nesne ağacına dönüştürme işlemi.

1. [**Java Nesnesini XML'e Dönüştürme (Marshalling)**](#1-java-nesnesini-xmle-dönüştürme-marshalling)
2. [**XML'i Java Nesnesine Dönüştürme (Unmarshalling)**](#2-xmli-java-nesnesine-dönüştürme-unmarshalling)
---

# 1. Java Nesnesini XML'e Dönüştürme (Marshalling)

Bir Java nesnesini XML olarak kaydetmek için `JAXBContext` ve `Marshaller` sınıfları kullanılır:

```java
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;
import java.io.File;

public class MarshallerExample {
    public static void main(String[] args) throws Exception {
        Customer customer = new Customer();
        customer.setId(100);
        customer.setName("Ahmet Yılmaz");
        customer.setAge(30);
        customer.setEmail("ahmet@example.com");

        // 1. JAXBContext oluştur
        JAXBContext context = JAXBContext.newInstance(Customer.class);

        // 2. Marshaller oluştur
        Marshaller marshaller = context.createMarshaller();

        // Çıktının girintili (okunabilir) olmasını sağla
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, Boolean.TRUE);

        // Konsola yazdır
        marshaller.marshal(customer, System.out);

        // Dosyaya yazdır
        marshaller.marshal(customer, new File("customer.xml"));
    }
}
```

---

# 2. XML'i Java Nesnesine Dönüştürme (Unmarshalling)

Var olan bir XML dosyasını doğrudan Java nesnesine ayrıştırmak için `Unmarshaller` kullanılır:

```java
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import java.io.File;

public class UnmarshallerExample {
    public static void main(String[] args) throws Exception {
        File file = new File("customer.xml");

        // 1. JAXBContext oluştur
        JAXBContext context = JAXBContext.newInstance(Customer.class);

        // 2. Unmarshaller oluştur
        Unmarshaller unmarshaller = context.createUnmarshaller();

        // 3. XML'i nesneye dönüştür
        Customer customer = (Customer) unmarshaller.unmarshal(file);

        System.out.println("Müşteri ID: " + customer.getId());
        System.out.println("Müşteri Adı: " + customer.getName());
        System.out.println("E-posta: " + customer.getEmail());
    }
}
```
