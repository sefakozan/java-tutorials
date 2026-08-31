# Ders: Bağlantı ve SQL İşleme (JDBC Basics)

JDBC API'si üzerinden bir veritabanı ile çalışmak temel olarak şu adımlardan oluşur:
1. Veritabanı bağlantısı açma (`Connection`).
2. SQL ifadesi oluşturma (`Statement`).
3. Sorguyu yürütme (`executeQuery` veya `executeUpdate`).
4. Sonuç kümesini işleme (`ResultSet`).
5. Kaynakları kapatma.

1. [**Veritabanı Bağlantısı Açma**](#1-veritabanı-bağlantısı-açma)
2. [**SQL Sorguları Yürütme ve `ResultSet` Okuma**](#2-sql-sorguları-yürütme-ve-resultset-okuma)
3. [**Veri Güncelleme (`INSERT`, `UPDATE`, `DELETE`)**](#3-veri-güncelleme-insert-update-delete)
---

# 1. Veritabanı Bağlantısı Açma

`DriverManager.getConnection` metodu bir veritabanı URL'si, kullanıcı adı ve şifre kabul eder:

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

String url = "jdbc:postgresql://localhost:5432/mydb";
String user = "postgres";
String password = "password";

try (Connection conn = DriverManager.getConnection(url, user, password)) {
    System.out.println("Veritabanına başarıyla bağlanıldı!");
} catch (SQLException e) {
    System.err.println("Bağlantı hatası: " + e.getMessage());
}
```

---

# 2. SQL Sorguları Yürütme ve `ResultSet` Okuma

Veritabanından veri çekmek için `Statement.executeQuery` çağrılır ve dönen `ResultSet` üzerinde döngüyle gezinilir:

```java
import java.sql.*;

String query = "SELECT COF_NAME, SUP_ID, PRICE, SALES, TOTAL FROM COFFEES";

try (
    Connection con = DriverManager.getConnection(url, user, password);
    Statement stmt = con.createStatement();
    ResultSet rs = stmt.executeQuery(query)
) {
    while (rs.next()) {
        String coffeeName = rs.getString("COF_NAME");
        int supplierID = rs.getInt("SUP_ID");
        float price = rs.getFloat("PRICE");
        int sales = rs.getInt("SALES");
        int total = rs.getInt("TOTAL");
        System.out.println(coffeeName + "\t" + supplierID + "\t" + price + "\t" + sales + "\t" + total);
    }
}
```

---

# 3. Veri Güncelleme (`INSERT`, `UPDATE`, `DELETE`)

Veri ekleme, güncelleme veya silme işlemleri için `executeUpdate` metodu kullanılır; bu metot etkilenen satır sayısını (`int`) döndürür:

```java
String updateSql = "UPDATE COFFEES SET SALES = 75 WHERE COF_NAME = 'Colombian'";
int rowsAffected = stmt.executeUpdate(updateSql);
System.out.println("Güncellenen satır sayısı: " + rowsAffected);
```
