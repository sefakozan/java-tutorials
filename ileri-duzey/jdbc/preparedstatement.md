# Ders: PreparedStatements & Parametreli Sorgular

**`PreparedStatement`**, önceden derlenmiş (*precompiled*) bir SQL ifadesini temsil eder. Bir SQL sorgusu parametrelerle birden çok kez çalıştırılacağı zaman veya kullanıcı girdilerini güvenli bir şekilde sorguya dahil etmek gerektiğinde kullanılır.

1. [**Neden `PreparedStatement` Kullanılır?**](#1-neden-preparedstatement-kullanılır)
2. [**Parametre Değerleri Atama ve Yürütme**](#2-parametre-değerleri-atama-ve-yürütme)
---

# 1. Neden `PreparedStatement` Kullanılır?

- **Performans:** Veritabanı motoru SQL ifadesini bir kez derler ve yürütme planını önbelleğe alır; böylece sonraki çalıştırmalar çok daha hızlı gerçekleşir.
- **Güvenlik (SQL Injection Koruması):** Kullanıcı girdileri doğrudan SQL dizesiyle birleştirilmez; parametre olarak bağlanır. Bu durum SQL Enjeksiyonu açıklarını tamamen engeller.

---

# 2. Parametre Değerleri Atama ve Yürütme

Sorgudaki her parametre bir soru işareti (`?`) yer tutucusu ile gösterilir. İndeksler 1'den başlar:

```java
import java.sql.*;

String updateString = "UPDATE COFFEES SET SALES = ? WHERE COF_NAME = ?";

try (
    Connection con = DriverManager.getConnection(url, user, password);
    PreparedStatement updateSales = con.prepareStatement(updateString)
) {
    // 1. Parametre (SALES - int)
    updateSales.setInt(1, 100);

    // 2. Parametre (COF_NAME - String)
    updateSales.setString(2, "Colombian");

    // Sorguyu yürüt
    updateSales.executeUpdate();

    // Farklı değerlerle tekrar yürüt
    updateSales.setInt(1, 150);
    updateSales.setString(2, "French_Roast");
    updateSales.executeUpdate();
}
```
