# Ders: DOM Ayrıştırıcı (DOM Parser)

**DOM (Document Object Model)**, XML belgesinin tamamını hiyerarşik bir ağaç yapısında belleğe yükleyen bir W3C standardıdır.

---

## 1. DocumentBuilder ile XML Ayrıştırma

```java
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.*;
import java.io.File;

public class DOMDemo {
    public static void main(String[] args) throws Exception {
        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
        Document doc = dBuilder.parse(new File("staff.xml"));

        doc.getDocumentElement().normalize();
        System.out.println("Kök Eleman :" + doc.getDocumentElement().getNodeName());

        NodeList nList = doc.getElementsByTagName("staff");
        for (int temp = 0; temp < nList.getLength(); temp++) {
            Node nNode = nList.item(temp);
            if (nNode.getNodeType() == Node.ELEMENT_NODE) {
                Element eElement = (Element) nNode;
                System.out.println("Personel ID : " + eElement.getAttribute("id"));
                System.out.println("Adı : " + eElement.getElementsByTagName("name").item(0).getTextContent());
            }
        }
    }
}
```
