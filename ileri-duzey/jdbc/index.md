# Özel Kılavuz: JDBC ile Veritabanı Erişimi (JDBC Database Access)

**JDBC (Java Database Connectivity)**, Java uygulamalarının ilişkisel veritabanlarına (PostgreSQL, MySQL, Oracle, SQL Server vb.) bağlanmasını ve SQL sorguları yürütmesini sağlayan standart bir Java API'sidir.

---

## Bu Kılavuzdaki Dersler

### 1. [Bağlantı ve SQL İşleme (JDBC Basics)](ileri-duzey/jdbc/basics.md)
JDBC sürücüsü yükleme, `DriverManager` ile veritabanı bağlantısı açma, `Statement` ve `ResultSet` ile sorgu çalıştırma ve sonuçları okumayı ele alır.

### 2. [PreparedStatements ve Parametreli Sorgular](ileri-duzey/jdbc/preparedstatement.md)
Önceden derlenmiş SQL ifadeleri (`PreparedStatement`), dinamik parametre bağlama ve SQL Enjeksiyonu (*SQL Injection*) güvenlik önlemlerini inceler.

### 3. [İşlem Yönetimi (Transactions)](ileri-duzey/jdbc/transactions.md)
Çoklu SQL ifadelerini atomik bir bütün olarak yürütmeyi (`commit`), hata durumunda geri almayı (`rollback`) ve kayıt noktalarını (*savepoints*) açıklar.
