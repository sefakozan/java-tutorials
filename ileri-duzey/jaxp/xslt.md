# Ders: XSLT Dönüşümleri (XSLT Transformations)

XSLT (Extensible Stylesheet Language Transformations), XML belgelerini HTML, düz metin veya başka bir XML biçimine dönüştürmek için kullanılan bir standarttır.

---

## 1. Transformer ile XSLT Dönüşümü

```java
import javax.xml.transform.*;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;
import java.io.File;

public class XSLTDemo {
    public static void main(String[] args) throws Exception {
        TransformerFactory tFactory = TransformerFactory.newInstance();
        Transformer transformer = tFactory.newTransformer(new StreamSource(new File("style.xsl")));

        transformer.transform(
            new StreamSource(new File("data.xml")),
            new StreamResult(new File("output.html"))
        );

        System.out.println("XSLT dönüşümü başarıyla tamamlandı: output.html");
    }
}
```
