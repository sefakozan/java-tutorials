# Kılavuz: Tarih-Saat API'leri (Date-Time APIs)

Java SE 8 ile birlikte `java.time` paketi altında kapsamlı, değişmez (immutable) ve iş parçacığı açısından güvenli (thread-safe) yeni bir Tarih-Saat API'si sunulmuştur (JSR-310).

---

## Temel Sınıflar

- **`LocalDate`:** Saat veya saat dilimi bilgisi olmadan yalnızca yılı, ayı ve günü temsil eder (Örn: `2026-08-29`).
- **`LocalTime`:** Tarih veya saat dilimi bilgisi olmadan yalnızca saati, dakikayı ve saniyeyi temsil eder (Örn: `10:45:00`).
- **`LocalDateTime`:** Hem tarihi hem de saati bir arada tutar (Örn: `2026-08-29T10:45:00`).
- **`ZonedDateTime`:** Saat dilimi (`ZoneId`) bilgisine sahip tarih ve saat (Örn: `2026-08-29T10:45:00+03:00[Europe/Istanbul]`).
- **`Instant`:** Zaman çizgisindeki tek bir anı (Unix zaman damgası / epoch) nanosaniye hassasiyetinde temsil eder.
- **`Period`:** Tarih tabanlı bir zaman aralığını (yıl, ay, gün) temsil eder.
- **`Duration`:** Zaman tabanlı bir zaman aralığını (saniye, nanosaniye) temsil eder.

---

## Kullanım Örnekleri

```java
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.Month;
import java.time.format.DateTimeFormatter;

// Geçerli tarih ve saat
LocalDate today = LocalDate.now();
LocalTime now = LocalTime.now();
LocalDateTime currentDateTime = LocalDateTime.now();

// Belirli bir tarih oluşturma
LocalDate birthday = LocalDate.of(2000, Month.JANUARY, 15);

// Tarih aritmetiği (Sınıflar immutable olduğu için yeni bir nesne döner)
LocalDate nextWeek = today.plusWeeks(1);
LocalDate lastYear = today.minusYears(1);

// Biçimlendirme (Formatting)
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
String formatted = currentDateTime.format(formatter);
System.out.println("Biçimlendirilmiş Tarih: " + formatted);
```
