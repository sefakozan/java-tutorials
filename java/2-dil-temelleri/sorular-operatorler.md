# Sorular ve Alıştırmalar: Operatörler (Questions and Exercises: Operators)

## Sorular

1. Aşağıdaki kod parçasını inceleyin:
   ```java
   arrayOfInts[j] > arrayOfInts[j+1]
   ```
   Bu kod hangi operatörleri içerir?
2. Aşağıdaki kod parçasını inceleyin:
   ```java
   int i = 10;
   int n = i++ % 5;
   ```
   - a. Kod yürütüldükten sonra `i` ve `n` değerleri ne olur?
   - b. Sonek artırma operatörü (`i++`) yerine önek sürümü (`++i`) kullanılırsa `i` ve `n` değerleri ne olur?
3. Bir `boolean` değerini tersine çevirmek için hangi operatörü kullanırsınız?
4. İki değeri karşılaştırmak için hangi operatör kullanılır: `=` mi yoksa `==` mi?

---

## Yanıtlar

1. `>` (büyüktür ilişkisel operatörü) ve `+` (toplama aritmetik operatörü).
2. 
   - a. `i` değeri **11**, `n` değeri **0** olur (`10 % 5 = 0`).
   - b. `i` değeri **11**, `n` değeri **1** olur (`11 % 5 = 1`).
3. Mantıksal DEĞİL operatörü: **`!`**.
4. İki değeri karşılaştırmak için **`==`** operatörü kullanılır (`=` atama operatörüdür).
