# Ders: Örneklenmiş Ses İşleme (Sampled Audio)

Örneklenmiş ses, mikrofon veya dosyadan gelen analog ses dalgalarının dijital sayısallaştırılmış bayt verileridir.

---

## 1. Ses Çalma (`Clip`)

```java
import javax.sound.sampled.*;
import java.io.File;

public class ClipDemo {
    public static void play(String filename) throws Exception {
        File file = new File(filename);
        try (AudioInputStream stream = AudioSystem.getAudioInputStream(file)) {
            Clip clip = AudioSystem.getClip();
            clip.open(stream);
            clip.start();
            
            // Ses bitene kadar bekle
            Thread.sleep(clip.getMicrosecondLength() / 1000);
            clip.close();
        }
    }
}
```

---

## 2. Desteklenen Formatlar
Java Sound varsayılan olarak WAV, AIFF, AIFC, AU ve SND dosya formatlarını ve PCM kodlamalarını destekler.
