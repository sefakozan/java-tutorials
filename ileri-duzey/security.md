# Kılavuz: Java Güvenlik Özellikleri (Security)

Java platformu, güvenliğe odaklanarak tasarlanmıştır. `java.security` paketi ve alt paketleri şifreleme, dijital imzalar, kimlik doğrulama ve yetkilendirme için geniş bir çerçeve sunar.

---

## Temel Güvenlik Mimarisi

- **Tip Güvenliği ve Bellek Güvenliği:** Java'da işaretçi (pointer) aritmetiği yoktur ve dizi sınırları otomatik denetlenir.
- **Bayt Kodu Doğrulayıcı (Bytecode Verifier):** Kodun JVM üzerinde çalıştırılmadan önce bellek kurallarına ve tip güvenliğine uygunluğunu kontrol eder.
- **Kriptografi Mimarisi (JCA / JCE):** Şifreleme algoritmaları (AES, RSA), özet fonksiyonları (SHA-256) ve güvenli rastgele sayı üretimi (`SecureRandom`).

---

## SHA-256 ile Veri Özeti (Hash) Hesaplama

```java
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

public class SecurityDigestExample {
    public static void main(String[] args) throws Exception {
        String originalString = "Gizli Mesaj";
        
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] encodedHash = digest.digest(originalString.getBytes(StandardCharsets.UTF_8));

        StringBuilder hexString = new StringBuilder(2 * encodedHash.length);
        for (byte b : encodedHash) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        System.out.println("SHA-256 Özeti: " + hexString.toString());
    }
}
```
