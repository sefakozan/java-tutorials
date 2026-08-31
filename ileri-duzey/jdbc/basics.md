# Ders: Bağlantı Kurma ve SQL İşleme (Connecting & SQL Statements)

Veritabanı işlemleri `Connection` nesnesi üzerinden yürütülür.

---

## 1. Bağlantı Açma

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

String url = "jdbc:postgresql://localhost:5432/testdb";
String user = "postgres";
String password = "password";

try (Connection conn = DriverManager.getConnection(url, user, password)) {
    System.out.println("Veritabanına başarıyla bağlanıldı!");
} catch (SQLException e) {
    System.err.println("Bağlantı hatası: " + e.getMessage());
}
```

---

## 2. Basit SQL Sorgusu Çalıştırma (`Statement`)

```java
import java.sql.Statement;
import java.sql.ResultSet;

try (Statement stmt = conn.createStatement();
     ResultSet rs = stmt.executeQuery("SELECT COF_NAME, PRICE FROM COFFEES")) {
    
    while (rs.next()) {
        String coffeeName = rs.getString("COF_NAME");
        float price = rs.getFloat("PRICE");
        System.out.println(coffeeName + " : $" + price);
    }
}
```
