# Ders: DOM Ayrıştırıcı (Document Object Model)

**DOM (Document Object Model)**, bir XML belgesinin tamamını belleğe yükleyerek hiyerarşik bir ağaç yapısına (*node tree*) dönüştüren bir XML ayrıştırma modelidir.

1. [**DOM Mimarisi**](#1-dom-mimarisi)
2. [**XML Belgesini Ayrıştırma Örneği**](#2-xml-belgesini-ayrıştırma-örneği)
3. [**DOM ile Yeni XML Belgesi Oluşturma**](#3-dom-ile-yeni-xml-belgesi-oluşturma)
---

# 1. DOM Mimarisi

DOM ağacındaki her bileşen bir **`Node` (Düğüm)** nesnesidir:
- **`Document`:** Belgenin kök nesnesi.
- **`Element`:** XML etiketleri (`<customer>`, `<name>`).
- **`Attr`:** Eleman öznitelikleri (`id="100"`).
- **`Text`:** Etiketler arasındaki metin içeriği.

DOM, belgenin tamamı üzerinde ileri-geri gezinme ve düğümleri dinamik olarak değiştirme/ekleme imkanı sunar; ancak çok büyük dosyalarda yüksek bellek tüketebilir.

---

# 2. XML Belgesini Ayrıştırma Örneği

```java
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import java.io.File;

public class DomParserDemo {
    public static void main(String[] args) throws Exception {
        File inputFile = new File("input.xml");

        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
        Document doc = dBuilder.parse(inputFile);

        doc.getDocumentElement().normalize();
        System.out.println("Kök Eleman: " + doc.getDocumentElement().getNodeName());

        NodeList nList = doc.getElementsByTagName("student");
        for (int temp = 0; temp < nList.getLength(); temp++) {
            Element element = (Element) nList.item(temp);
            System.out.println("Öğrenci No: " + element.getAttribute("rollno"));
            System.out.println("Adı: " + element.getElementsByTagName("firstname").item(0).getTextContent());
        }
    }
}
```

---

# 3. DOM ile Yeni XML Belgesi Oluşturma

```java
Document doc = dBuilder.newDocument();
Element rootElement = doc.createElement("cars");
doc.appendChild(rootElement);

Element supercar = doc.createElement("supercar");
supercar.setAttribute("company", "Ferrari");
rootElement.appendChild(supercar);
```
