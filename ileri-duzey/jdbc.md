# Kılavuz: JDBC ile Veritabanı Erişimi (JDBC Database Access)

**JDBC (Java Database Connectivity)** API'si, Java uygulamalarından ilişkisel veritabanlarına (PostgreSQL, MySQL, Oracle DB vb.) erişim ve SQL sorguları yürütme olanağı sağlayan endüstri standardıdır (`java.sql` paketi).

---

## Temel JDBC Adımları

1. **Bağlantı Kurma (`Connection`):** `DriverManager.getConnection` ile veritabanına bağlanılır.
2. **Sorgu Oluşturma (`PreparedStatement`):** SQL enjeksiyon saldırılarını önlemek ve performansı artırmak için `PreparedStatement` kullanılır.
3. **Sorguyu Çalıştırma:** `executeQuery` (SELECT) veya `executeUpdate` (INSERT/UPDATE/DELETE).
4. **Sonuçları İşleme (`ResultSet`):** Döndürülen satırlar üzerinde gezinilir.
5. **Kaynakları Kapatma:** `try-with-resources` bloğu ile bağlantı güvenle kapatılır.

---

## Örnek JDBC Kodu

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class JDBCTest {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/mydatabase";
        String user = "username";
        String password = "secretpassword";

        String query = "SELECT id, name, email FROM users WHERE active = ?";

        try (Connection conn = DriverManager.getConnection(url, user, password);
             PreparedStatement pstmt = conn.prepareStatement(query)) {

            pstmt.setBoolean(1, true);

            try (ResultSet rs = pstmt.executeQuery()) {
                while (rs.next()) {
                    int id = rs.getInt("id");
                    String name = rs.getString("name");
                    String email = rs.getString("email");
                    System.out.println(id + ": " + name + " (" + email + ")");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
```
