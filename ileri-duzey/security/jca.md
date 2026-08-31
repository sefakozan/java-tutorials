# Ders: Java Kriptografi Mimarisi (JCA / JCE)

**JCA (Java Cryptography Architecture)** ve **JCE (Java Cryptography Extension)**, sağlayıcı tabanlı (Provider-based) bağımsız bir şifreleme çatısı sunar.

---

## 1. SHA-256 ile Güvenli Özet Hesaplama

```java
import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

public class HashExample {
    public static byte[] computeSHA256(String input) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        return md.digest(input.getBytes(StandardCharsets.UTF_8));
    }
}
```

---

## 2. AES ile Simetrik Veri Şifreleme

```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

public class EncryptExample {
    public static void main(String[] args) throws Exception {
        KeyGenerator keyGen = KeyGenerator.getInstance("AES");
        keyGen.init(128);
        SecretKey secretKey = keyGen.generateKey();

        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] encrypted = cipher.doFinal("Gizli Bilgi".getBytes());

        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        byte[] decrypted = cipher.doFinal(encrypted);
        System.out.println("Çözülen: " + new String(decrypted));
    }
}
```
