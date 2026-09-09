# Sorular ve Alıştırmalar: Sınıflar (Classes)

## Sorular

1. Aşağıdaki sınıfı göz önünde bulundurun:

```java
public class IdentifyMyParts {
    public static int x = 7; 
    public int y = 3; 
}
```

a. Sınıf değişkenleri (class variables) nelerdir?  
b. Örnek değişkenleri (instance variables) nelerdir?  
c. Aşağıdaki kodun çıktısı nedir:

```java
IdentifyMyParts a = new IdentifyMyParts();
IdentifyMyParts b = new IdentifyMyParts();
a.y = 5;
b.y = 6;
a.x = 1;
b.x = 2;
System.out.println("a.y = " + a.y);
System.out.println("b.y = " + b.y);
System.out.println("a.x = " + a.x);
System.out.println("b.x = " + b.x);
System.out.println("IdentifyMyParts.x = " + IdentifyMyParts.x);
```

---

## Alıştırmalar

1. Örnekleri bir iskambil destesinden tek bir oyun kartını temsil eden bir sınıf yazın. Oyun kartlarının iki ayırt edici özelliği vardır: değer (rank) ve takım (suit). [Enum Türleri](java/3-siniflar-ve-nesneler/enum-turleri.md) bölümünde bunu yeniden yazmanız isteneceği için çözümünüzü sakladığınızdan emin olun.

> **İpucu:** Atamalarınızı kontrol etmek için `assert` ifadesini kullanabilirsiniz. Şöyle yazarsınız:
> ```java
> assert (test edilecek boolean ifade);
> ```
> Boolean ifade false ise bir hata mesajı alırsınız. Örneğin:
> ```java
> assert toString(ACE) == "Ace";
> ```
> `true` döndürmelidir, böylece hata mesajı oluşmaz.
> `assert` ifadesini kullanırsanız programınızı `-ea` bayrağı ile çalıştırmalısınız:
> ```bash
> java -ea YourProgram.class
> ```

2. Örnekleri **tam** bir iskambil destesini temsil eden bir sınıf yazın. Bu çözümü de saklamalısınız.

3. Deste (deck) ve kart (card) sınıflarınızı test etmek için küçük bir program yazın. Program, bir kart destesi oluşturmak ve kartlarını görüntülemek kadar basit olabilir.

---

## Yanıtlar

### Soruların Yanıtları

1.
a. **Soru**: Sınıf değişkenleri nelerdir?  
**Cevap**: `x`

b. **Soru**: Örnek değişkenleri nelerdir?  
**Cevap**: `y`

c. **Soru**: Aşağıdaki kodun çıktısı nedir?  
**Cevap**: İşte çıktı:
```text
a.y = 5
b.y = 6
a.x = 2
b.x = 2
IdentifyMyParts.x = 2
```
`x`, `IdentifyMyParts` sınıfında `public static int` olarak tanımlandığından, `x` sınıfın tüm örnekleri arasında paylaşılan statik bir değişken (ve dolayısıyla bir sınıf değişkeni) olduğu için `x`'e yapılan her başvuru en son atanan değere sahip olacaktır. Yani yalnızca tek bir `x` vardır: herhangi bir örnekte `x`'in değeri değiştiğinde, `IdentifyMyParts`'ın tüm örnekleri için `x`'in değerini etkiler.

Bu konu [Sınıf Üyelerini Anlama](java/3-siniflar-ve-nesneler/sinif-uyeleri.md) dersinin Sınıf Değişkenleri bölümünde ele alınmıştır.

---

### Alıştırmaların Yanıtları

1. **Kart Sınıfı (`Card.java`)**:

```java
public class Card {
    private final int rank;
    private final int suit;

    // Takım türleri (Suits)
    public final static int DIAMONDS = 1;
    public final static int CLUBS    = 2;
    public final static int HEARTS   = 3;
    public final static int SPADES   = 4;

    // Değer türleri (Ranks)
    public final static int ACE   = 1;
    public final static int DEUCE = 2;
    public final static int THREE = 3;
    public final static int FOUR  = 4;
    public final static int FIVE  = 5;
    public final static int SIX   = 6;
    public final static int SEVEN = 7;
    public final static int EIGHT = 8;
    public final static int NINE  = 9;
    public final static int TEN   = 10;
    public final static int JACK  = 11;
    public final static int QUEEN = 12;
    public final static int KING  = 13;

    public Card(int rank, int suit) {
        assert isValidRank(rank);
        assert isValidSuit(suit);
        this.rank = rank;
        this.suit = suit;
    }

    public int getSuit() {
        return suit;
    }

    public int getRank() {
        return rank;
    }

    public static boolean isValidRank(int rank) {
        return ACE <= rank && rank <= KING;
    }

    public static boolean isValidSuit(int suit) {
        return DIAMONDS <= suit && suit <= SPADES;
    }

    public static String rankToString(int rank) {
        switch (rank) {
        case ACE:
            return "Ace";
        case DEUCE:
            return "Deuce";
        case THREE:
            return "Three";
        case FOUR:
            return "Four";
        case FIVE:
            return "Five";
        case SIX:
            return "Six";
        case SEVEN:
            return "Seven";
        case EIGHT:
            return "Eight";
        case NINE:
            return "Nine";
        case TEN:
            return "Ten";
        case JACK:
            return "Jack";
        case QUEEN:
            return "Queen";
        case KING:
            return "King";
        default:
            return null;
        }    
    }
    
    public static String suitToString(int suit) {
        switch (suit) {
        case DIAMONDS:
            return "Diamonds";
        case CLUBS:
            return "Clubs";
        case HEARTS:
            return "Hearts";
        case SPADES:
            return "Spades";
        default:
            return null;
        }    
    }

    public static void main(String[] args) {
        // assert ifadelerini kullanmak için program -ea bayrağı ile çalıştırılmalıdır (java -ea ..)
        assert rankToString(ACE) == "Ace";
        assert rankToString(DEUCE) == "Deuce";
        assert rankToString(THREE) == "Three";
        assert rankToString(FOUR) == "Four";
        assert rankToString(FIVE) == "Five";
        assert rankToString(SIX) == "Six";
        assert rankToString(SEVEN) == "Seven";
        assert rankToString(EIGHT) == "Eight";
        assert rankToString(NINE) == "Nine";
        assert rankToString(TEN) == "Ten";
        assert rankToString(JACK) == "Jack";
        assert rankToString(QUEEN) == "Queen";
        assert rankToString(KING) == "King";

        assert suitToString(DIAMONDS) == "Diamonds";
        assert suitToString(CLUBS) == "Clubs";
        assert suitToString(HEARTS) == "Hearts";
        assert suitToString(SPADES) == "Spades";
    }
}
```

2. **Deste Sınıfı (`Deck.java`)**:

```java
import java.util.*;

public class Deck {

    public static int numSuits = 4;
    public static int numRanks = 13;
    public static int numCards = numSuits * numRanks;

    private Card[][] cards;

    public Deck() {
        cards = new Card[numSuits][numRanks];
        for (int suit = Card.DIAMONDS; suit <= Card.SPADES; suit++) {
            for (int rank = Card.ACE; rank <= Card.KING; rank++) {
                cards[suit-1][rank-1] = new Card(rank, suit);
            }
        }
    }

    public Card getCard(int suit, int rank) {
        return cards[suit-1][rank-1];
    }
}
```

3. **Desteyi Görüntüleme Programı (`DisplayDeck.java`)**:

```java
import java.util.*;

public class DisplayDeck {
    public static void main(String[] args) {
        Deck deck = new Deck();
        for (int suit = Card.DIAMONDS; suit <= Card.SPADES; suit++) {
            for (int rank = Card.ACE; rank <= Card.KING; rank++) {
                Card card = deck.getCard(suit, rank);
                System.out.format("%s of %s%n",
                    card.rankToString(card.getRank()),
                    card.suitToString(card.getSuit()));
            }
        }
    }
}
```
