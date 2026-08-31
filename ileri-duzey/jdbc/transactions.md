# Ders: İşlem Yönetimi (Transactions)

Bir **işlem (transaction)**, tek bir atomik mantıksal birim olarak yürütülen bir veya daha fazla SQL ifadesi grubudur. İşlem içindeki tüm ifadeler ya tamamen başarılı olur (**commit**) ya da herhangi bir hata durumunda tüm değişiklikler geri alınır (**rollback**).

1. [**Otomatik Kaydetmeyi (Auto-Commit) Kapatma**](#1-otomatik-kaydetmeyi-auto-commit-kapatma)
2. [**İşlem Yürütme ve Geri Alma Örneği**](#2-i̇şlem-yürütme-ve-geri-alma-örneği)
3. [**Kayıt Noktaları (Savepoints)**](#3-kayıt-noktaları-savepoints)
---

# 1. Otomatik Kaydetmeyi (Auto-Commit) Kapatma

Varsayılan olarak bir `Connection` nesnesi **otomatik kaydetme (*auto-commit*)** modundadır; yani her SQL ifadesi çalıştırıldığı anda veritabanına kalıcı olarak kaydedilir. Bir işlem başlatmak için:

```java
con.setAutoCommit(false);
```

---

# 2. İşlem Yürütme ve Geri Alma Örneği

Aşağıdaki örnekte iki hesap arasında para transferi işlemi yapılmaktadır. İki güncellemenin her ikisi de başarılı olursa `commit()` çağrılır; herhangi bir hata oluşursa `catch` bloğunda `rollback()` çağrılarak işlemler iptal edilir:

```java
import java.sql.*;

try (Connection con = DriverManager.getConnection(url, user, password)) {
    con.setAutoCommit(false); // İşlem başlat

    try (
        PreparedStatement withdraw = con.prepareStatement("UPDATE ACCOUNTS SET BALANCE = BALANCE - ? WHERE ID = ?");
        PreparedStatement deposit  = con.prepareStatement("UPDATE ACCOUNTS SET BALANCE = BALANCE + ? WHERE ID = ?")
    ) {
        // 1. Hesaptan para çek
        withdraw.setDouble(1, 500.0);
        withdraw.setInt(2, 101);
        withdraw.executeUpdate();

        // 2. Hesaba para yatır
        deposit.setDouble(1, 500.0);
        deposit.setInt(2, 202);
        deposit.executeUpdate();

        // Her şey yolundaysa işlemleri onayla
        con.commit();
        System.out.println("Transfer başarıyla tamamlandı.");
    } catch (SQLException e) {
        // Hata durumunda tüm değişiklikleri geri al
        con.rollback();
        System.err.println("Transfer başarısız, değişiklikler geri alındı: " + e.getMessage());
    } finally {
        con.setAutoCommit(true);
    }
}
```

---

# 3. Kayıt Noktaları (Savepoints)

`Savepoint`, bir işlem içinde ara bir kontrol noktası belirlemenizi sağlar. Böylece bir hata oluştuğunda tüm işlemi iptal etmek yerine sadece belirli bir noktaya kadar geri alabilirsiniz (`con.rollback(savepoint)`):

```java
Savepoint save1 = con.setSavepoint("Savepoint1");
// ... bazı işlemler ...
con.rollback(save1); // Yalnızca save1'den sonraki işlemleri geri alır
con.commit();
```
