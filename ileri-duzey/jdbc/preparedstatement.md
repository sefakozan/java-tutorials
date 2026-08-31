# Ders: Hazırlıklı İfadeler ve Sonuçlar (PreparedStatements & ResultSets)

`PreparedStatement` nesnesi, parametreli SQL sorgularını önceden derleyerek hem performansı artırır hem de **SQL Enjeksiyonu** açıklarını tamamen engeller.

---

## 1. Parametreli Sorgu Örneği

```java
import java.sql.PreparedStatement;
import java.sql.ResultSet;

String updateString = "UPDATE COFFEES SET SALES = ? WHERE COF_NAME = ?";

try (PreparedStatement updateSales = conn.prepareStatement(updateString)) {
    updateSales.setInt(1, 75);
    updateSales.setString(2, "Colombian");
    int affectedRows = updateSales.executeUpdate();
    System.out.println("Güncellenen satır sayısı: " + affectedRows);
}
```

---

## 2. ResultSet Üzerinde Gezinme

- `rs.next()` : Sonraki satıra geçer (varsa `true` döner).
- `rs.getString(colName)` / `rs.getInt(colIndex)` : İlgili sütunun değerini okur.
- `rs.wasNull()` : Son okunan sütunun veritabanında `NULL` olup olmadığını kontrol eder.
