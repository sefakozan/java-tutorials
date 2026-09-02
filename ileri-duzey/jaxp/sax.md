# Ders: SAX Ayrıştırıcı (Simple API for XML)

**SAX (Simple API for XML)**, XML belgelerini baştan sona tek geçişte (*streaming*) okuyan ve karşılaştığı her XML etiketinde olaylar tetikleyen **olay odaklı (event-driven)** bir XML ayrıştırıcısıdır.

1. [**SAX Mimarisi ve DOM ile Karşılaştırması**](#1-sax-mimarisi-ve-dom-ile-karşılaştırması)
2. [**`DefaultHandler` ile SAX Ayrıştırma Örneği**](#2-defaulthandler-ile-sax-ayrıştırma-örneği)
---

# 1. SAX Mimarisi ve DOM ile Karşılaştırması

- **Hafif ve Hızlı:** SAX tüm XML belgesini belleğe yüklemez; satır satır okur. Bu nedenle gigabytelarca büyüklükteki devasa XML dosyalarını minimum bellek ile ayrıştırabilir.
- **Salt Okunur:** Yalnızca ileriye doğru okuma yapar; belgede geriye dönülemez veya düğümler dinamik olarak değiştirilemez.

---

# 2. `DefaultHandler` ile SAX Ayrıştırma Örneği

SAX ile XML okumak için `org.xml.sax.helpers.DefaultHandler` sınıfı genişletilir ve olay metotları geçersiz kılınır:

```java
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;
import java.io.File;

public class UserHandler extends DefaultHandler {
    boolean bFirstName = false;
    boolean bLastName = false;

    @Override
    public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
        if (qName.equalsIgnoreCase("firstname")) {
            bFirstName = true;
        } else if (qName.equalsIgnoreCase("lastname")) {
            bLastName = true;
        }
    }

    @Override
    public void endElement(String uri, String localName, String qName) throws SAXException {
        // Eleman kapandığında çalışır
    }

    @Override
    public void characters(char ch[], int start, int length) throws SAXException {
        if (bFirstName) {
            System.out.println("Adı: " + new String(ch, start, length));
            bFirstName = false;
        } else if (bLastName) {
            System.out.println("Soyadı: " + new String(ch, start, length));
            bLastName = false;
        }
    }

    public static void main(String[] args) throws Exception {
        File inputFile = new File("input.xml");
        SAXParserFactory factory = SAXParserFactory.newInstance();
        SAXParser saxParser = factory.newSAXParser();
        UserHandler userhandler = new UserHandler();
        saxParser.parse(inputFile, userhandler);
    }
}
```
