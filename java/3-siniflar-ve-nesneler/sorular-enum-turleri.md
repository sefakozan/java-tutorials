# Sorular ve Alıştırmalar: Enum Türleri (Enum Types)

## Sorular

1. Doğru mu, yanlış mı: Bir `Enum` türü `java.lang.String`'in bir alt sınıfı (subclass) olabilir.

---

## Alıştırmalar

1. [Sorular ve Alıştırmalar: Sınıflar](java/3-siniflar-ve-nesneler/sorular-siniflar.md) bölümündeki alıştırmada yer alan `Card` sınıfını, kartın değerini (rank) ve takımını (suit) enum türleri ile temsil edecek şekilde yeniden yazın.

2. `Deck` sınıfını yeniden yazın.

---

## Yanıtlar

### Soruların Yanıtları

1. **Soru**: Doğru mu, yanlış mı: Bir `Enum` türü `java.lang.String`'in bir alt sınıfı (subclass) olabilir.  
**Cevap**: Yanlış (False). Tüm enum'lar örtük olarak `java.lang.Enum` sınıfını genişletir (`extends`). Bir sınıf yalnızca tek bir üst sınıfı genişletebildiğinden, Java dili durumun çoklu kalıtımını desteklemez ve bu nedenle bir enum başka hiçbir sınıfı genişletemez.

---

### Alıştırmaların Yanıtları

1. **Takım Enum'ı (`Suit.java`)**:

```java
public enum Suit { 
   DIAMONDS, 
   CLUBS, 
   HEARTS, 
   SPADES 
}
```

**Değer Enum'ı (`Rank.java`)**:

```java
public enum Rank { 
   DEUCE, THREE, FOUR, FIVE, SIX, SEVEN,
   EIGHT, NINE, TEN, JACK, QUEEN, KING, ACE 
}
```

**Kart Sınıfı (`Card3.java`)**:

```java
public class Card3 {
    private final Rank rank;
    private final Suit suit;

    public Card3(Rank rank, Suit suit) {
        this.rank = rank;
        this.suit = suit;
    }

    public Suit getSuit() {
        return suit;
    }

    public Rank getRank() {
        return rank;
    }

    public String toString() {
        return rank + " of " + suit;
    }
}
```

2. **Deste Sınıfı (`Deck3.java`)**:

```java
import java.util.*;

public class Deck3 {
    private static Card3[] cards = new Card3[52];
    public Deck3() {
        int i = 0;
        for (Suit suit : Suit.values()) {
            for (Rank rank : Rank.values()) {
                cards[i++] = new Card3(rank, suit);
            }
        }
    }
}
```
