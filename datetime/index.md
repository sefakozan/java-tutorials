# Kılavuz: Tarih ve Saat API'si (Date-Time API - java.time)

Java SE 8 ile tanıtılan `java.time` paketi (JSR 310 standardı), eski `java.util.Date` ve `java.util.Calendar` sınıflarının eksikliklerini ve iş parçacığı güvenliği (*thread-safety*) sorunlarını gideren modern, kapsamlı ve değiştirilemez (*immutable*) bir tarih-saat çerçevesi sunar.

1. [**Tasarım İlkeleri ve Temel Sınıflar**](#1-tasarım-i̇lkeleri-ve-temel-sınıflar)
2. [**Yerel Tarih ve Saat (`LocalDate`, `LocalTime`, `LocalDateTime`)**](#2-yerel-tarih-ve-saat-localdate-localtime-localdatetime)
3. [**Zaman Dilimi ve Anlık Zaman (`ZonedDateTime`, `Instant`)**](#3-zaman-dilimi-ve-anlık-zaman-zoneddatetime-instant)
4. [**Süre ve Aralıklar (`Period` ve `Duration`)**](#4-süre-ve-aralıklar-period-ve-duration)
5. [**Biçimlendirme ve Ayrıştırma (`DateTimeFormatter`)**](#5-biçimlendirme-ve-ayrıştırma-datetimeformatter)
---

# 1. Tasarım İlkeleri ve Temel Sınıflar

`java.time` API'si şu temel ilkeler üzerine kurulmuştur:
- **Değişmezlik ve İş Parçacığı Güvenliği (*Immutability & Thread-Safety*):** Tüm temel sınıflar değişmezdir; çoklu iş parçacıklarında güvenle paylaşılabilir.
- **Akıcı Arayüz (*Fluent API*):** Metotlar zincirleme çağrılara uygundur (`date.plusDays(5).minusMonths(1)`).
- **Açıklık:** Sınıf adları ve metotlar temsil ettikleri kavramları açıkça ifade eder.

---

# 2. Yerel Tarih ve Saat (`LocalDate`, `LocalTime`, `LocalDateTime`)

Zaman dilimi bilgisi içermeyen tarih ve saat sınıflarıdır:

```java
import java.time.*;

// Yalnızca Tarih (Yıl-Ay-Gün)
LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1995, Month.MAY, 23);

// Yalnızca Saat (Saat:Dakika:Saniye.Nanosaniye)
LocalTime now = LocalTime.now();
LocalTime meetingTime = LocalTime.of(14, 30);

// Tarih ve Saat Birlikte
LocalDateTime currentDateTime = LocalDateTime.now();
LocalDateTime customDateTime = LocalDateTime.of(today, meetingTime);

// Tarih Aritmetiği
LocalDate nextWeek = today.plusWeeks(1);
LocalDate lastMonth = today.minusMonths(1);
```

---

# 3. Zaman Dilimi ve Anlık Zaman (`ZonedDateTime`, `Instant`)

### `Instant`
Zaman çizelgesi üzerindeki anlık bir noktayı temsil eder (1 Ocak 1970 UTC'den itibaren geçen nanosaniye). Makine zamanı ve zaman damgaları için kullanılır:

```java
Instant timestamp = Instant.now();
```

### `ZonedDateTime`
Belirli bir zaman dilimine (`ZoneId`) sahip eksiksiz tarih-saat bilgisidir:

```java
ZoneId istanbulZone = ZoneId.of("Europe/Istanbul");
ZonedDateTime istanbulTime = ZonedDateTime.now(istanbulZone);

ZoneId tokyoZone = ZoneId.of("Asia/Tokyo");
ZonedDateTime tokyoTime = istanbulTime.withZoneSameInstant(tokyoZone);
```

---

# 4. Süre ve Aralıklar (`Period` ve `Duration`)

- **`Period`:** Tarih tabanlı zaman miktarını (yıl, ay, gün) temsil eder:
  ```java
  LocalDate start = LocalDate.of(2020, 1, 1);
  LocalDate end = LocalDate.now();
  Period period = Period.between(start, end);
  System.out.format("%d yıl, %d ay, %d gün%n",
      period.getYears(), period.getMonths(), period.getDays());
  ```
- **`Duration`:** Zaman tabanlı süreyi (saniye, nanosaniye) temsil eder:
  ```java
  Instant t1 = Instant.now();
  // ... bir işlem gerçekleştir ...
  Instant t2 = Instant.now();
  long millis = Duration.between(t1, t2).toMillis();
  ```

---

# 5. Biçimlendirme ve Ayrıştırma (`DateTimeFormatter`)

`DateTimeFormatter` sınıfı, tarih ve saat nesnelerini dizeye dönüştürmek veya metinleri nesneye ayrıştırmak (*parse*) için kullanılır:

```java
LocalDate date = LocalDate.now();
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

// Nesneden Metne (Formatting)
String formattedDate = date.format(formatter);
System.out.println("Bugün: " + formattedDate);

// Metinden Nesneye (Parsing)
LocalDate parsedDate = LocalDate.parse("31/08/2026", formatter);
```
