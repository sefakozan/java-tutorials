# Ders: İşlem Yönetimi (Transactions)

İşlemler (Transactions), birden fazla SQL ifadesinin bölünemez tek bir mantıksal birim (ACID) olarak yürütülmesini sağlar.

---

## 1. Manuel İşlem Yönetimi

```java
try {
    // 1. Otomatik onaylamayı devre dışı bırak
    conn.setAutoCommit(false);

    // 2. SQL ifadelerini çalıştır
    updateSales.executeUpdate();
    updateTotal.executeUpdate();

    // 3. Tüm adımlar başarılıysa kalıcı olarak kaydet
    conn.commit();
} catch (SQLException e) {
    // 4. Hata anında tüm adımları geri al
    if (conn != null) {
        conn.rollback();
    }
} finally {
    conn.setAutoCommit(true);
}
```

---

## 2. Kaydetme Noktaları (Savepoints)

İşlemin belirli bir noktasına kadar olan değişiklikleri koruyarak sadece geri kalan kısmı geri almak için `Savepoint` kullanılır:

```java
Savepoint save1 = conn.setSavepoint("Savepoint1");
// ... diğer işlemler ...
conn.rollback(save1); // Yalnızca save1'den sonraki adımları geri al
conn.commit();
```
