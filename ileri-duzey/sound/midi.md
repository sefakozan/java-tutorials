# Ders: MIDI Mimarisi (MIDI Audio)

**MIDI (Musical Instrument Digital Interface)**, gerçek ses dalgalarını değil, notaları, enstrüman türlerini ve çalma komutlarını dijital mesajlar olarak iletir.

---

## 1. Yazılımsal Sentezleyici ile Nota Çalma

```java
import javax.sound.midi.*;

public class MidiPlayDemo {
    public static void main(String[] args) throws Exception {
        Synthesizer synth = MidiSystem.getSynthesizer();
        synth.open();

        MidiChannel[] channels = synth.getChannels();
        MidiChannel channel = channels[0];

        // 60 numaralı notayı (Orta Do / Middle C), 93 ses şiddetiyle çal
        channel.noteOn(60, 93);
        Thread.sleep(1000);
        channel.noteOff(60);

        synth.close();
    }
}
```
