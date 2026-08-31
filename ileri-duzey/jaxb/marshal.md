# Ders: Serileştirme ve Ayrıştırma (Marshalling & Unmarshalling)

`JAXBContext` sınıfı, JAXB işlemlerinin ana giriş noktasıdır.

---

## 1. Marshalling (Java Nesnesinden XML'e)

```java
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Marshaller;
import java.io.File;

public class MarshalDemo {
    public static void main(String[] args) throws Exception {
        Customer customer = new Customer(1, "Ahmet Yılmaz", "ahmet@example.com");

        JAXBContext jc = JAXBContext.newInstance(Customer.class);
        Marshaller marshaller = jc.createMarshaller();
        marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

        marshaller.marshal(customer, new File("customer.xml"));
        marshaller.marshal(customer, System.out);
    }
}
```

---

## 2. Unmarshalling (XML'den Java Nesnesine)

```java
import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import java.io.File;

public class UnmarshalDemo {
    public static void main(String[] args) throws Exception {
        JAXBContext jc = JAXBContext.newInstance(Customer.class);
        Unmarshaller unmarshaller = jc.createUnmarshaller();

        Customer customer = (Customer) unmarshaller.unmarshal(new File("customer.xml"));
        System.out.println("Müşteri Adı: " + customer.getName());
    }
}
```
