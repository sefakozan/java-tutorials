# Kılavuz: Tam Ekran Özel Mod API'si (Full-Screen Exclusive Mode API)

Tam Ekran Özel Mod API'si, grafik donanımına doğrudan erişim sağlayarak yüksek performanslı grafik uygulamaları ve oyunlar geliştirmeye olanak tanır.

---

## Bu Kılavuzdaki Dersler

### 1. [Tam Ekran Moduna Genel Bakış](ileri-duzey/fullscreen/index.md)
İşletim sistemi pencere yöneticisini devreden çıkararak ekran aygıtını tam ekran moduna geçirme (`GraphicsDevice.setFullScreenWindow`).

### 2. [Tampon Stratejisi ve Sayfa Çevirme (BufferStrategy and Page Flipping)](ileri-duzey/fullscreen/bufferstrategy.md)
Çift ve üçlü tamponlama (double/triple buffering) ile titremesiz (flicker-free) grafik render etme.

### 3. [Ekran Çözünürlüğü ve Modunu Değiştirme (Display Mode)](ileri-duzey/fullscreen/displaymode.md)
Ekran donanımının desteklediği çözünürlükleri listeleme ve çalışma zamanında ekran modunu değiştirme (`DisplayMode`).
