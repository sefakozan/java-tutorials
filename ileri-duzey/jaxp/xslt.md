# Ders: XSLT Dönüşümleri (XSLT Transformations)

**XSLT (Extensible Stylesheet Language Transformations)**, bir XML belgesini başka bir XML belgesine, HTML'e veya düz metne dönüştürmek için kullanılan standart bir şablon dilidir.

1. [**TrAX (Transformation API for XML)**](#1-trax-transformation-api-for-xml)
2. [**XSLT Dönüşüm Örneği**](#2-xslt-dönüşüm-örneği)
---

# 1. TrAX (Transformation API for XML)

Java'da XSLT dönüşümleri `javax.xml.transform` paketi ile gerçekleştirilir:
- **`TransformerFactory`:** XSLT dönüştürücüleri oluşturan fabrika sınıfı.
- **`Transformer`:** XSLT stil şablonunu (`.xsl`) kullanarak kaynak XML'i hedef biçime dönüştüren nesne.
- **`Source`:** Girdi verisi (`StreamSource`, `DOMSource`, `SAXSource`).
- **`Result`:** Çıktı hedefi (`StreamResult`, `DOMResult`, `SAXResult`).

---

# 2. XSLT Dönüşüm Örneği

```java
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import java.io.File;

public class XsltTransformExample {
    public static void main(String[] args) throws Exception {
        File stylesheet = new File("style.xsl");
        File datafile = new File("data.xml");
        File outfile = new File("output.html");

        TransformerFactory factory = TransformerFactory.newInstance();
        Transformer transformer = factory.newTransformer(new StreamSource(stylesheet));

        transformer.transform(new StreamSource(datafile), new StreamResult(outfile));
        System.out.println("XSLT dönüşümü tamamlandı: output.html oluşturuldu.");
    }
}
```
