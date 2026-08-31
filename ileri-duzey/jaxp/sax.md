# Ders: SAX Ayrıştırıcı (SAX Parser)

**SAX (Simple API for XML)**, olay güdümlü (event-driven) bir XML ayrıştırıcıdır. XML belgesini baştan sona tek geçişte okur ve bellekte ağaç oluşturmaz.

---

## 1. SAX DefaultHandler Kullanımı

```java
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;
import java.io.File;

public class SAXDemo {
    public static void main(String[] args) throws Exception {
        SAXParserFactory factory = SAXParserFactory.newInstance();
        SAXParser saxParser = factory.newSAXParser();

        DefaultHandler handler = new DefaultHandler() {
            public void startElement(String uri, String localName, String qName, Attributes attributes) {
                System.out.println("Başlayan Etiket: " + qName);
            }

            public void characters(char[] ch, int start, int length) {
                System.out.println("Metin: " + new String(ch, start, length).trim());
            }

            public void endElement(String uri, String localName, String qName) {
                System.out.println("Biten Etiket: " + qName);
            }
        };

        saxParser.parse(new File("staff.xml"), handler);
    }
}
```
