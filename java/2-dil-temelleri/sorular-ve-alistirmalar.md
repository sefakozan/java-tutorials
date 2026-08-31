# Sorular ve Alıştırmalar: Dil Temelleri

## Sorular

1. Java dilindeki sekiz ilkel veri tipini listeleyin.
2. `int[] arr = new int[5];` ifadesi oluşturulduğunda dizi elemanlarının varsayılan değeri nedir?
3. `&&` operatörü ile `&` operatörü arasındaki mantıksal fark nedir?
4. `for (int i = 0; i < 10; i++)` döngüsünde `break` ve `continue` ifadelerinin davranış farkı nedir?
5. `do-while` döngüsünü `while` döngüsünden ayıran temel fark nedir?

---

## Alıştırmalar

1. 1'den 100'e kadar olan sayılardan hem 3'e hem de 5'e bölünebilenleri ekrana yazdıran bir `for` döngüsü yazın.
2. 5 elemanlı bir `double` dizisi tanımlayıp bu dizinin elemanlarının ortalamasını hesaplayan bir program yazın.

---

## Yanıtlar

1. `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`.
2. `0`.
3. `&&` kısa devre (short-circuit) operatörüdür; ilk koşul `false` ise ikinci koşulu hiç değerlendirmez. `&` ise her iki koşulu da her zaman değerlendirir.
4. `break` döngüyü tamamen sonlandırırken, `continue` sadece o anki yinelemeyi sonlandırıp bir sonraki adıma geçer.
5. `do-while` koşulu sonda kontrol ettiği için döngü gövdesini en az bir kez mutlaka çalıştırır; `while` ise koşul en başta `false` ise hiç çalışmayabilir.
