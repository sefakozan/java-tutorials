# Sorular ve Alıştırmalar: Dil Temelleri

## 1. Değişkenler (Variables)

### Sorular
1. "Örnek değişkeni" (*instance variable*) terimi, \_\_\_ için kullanılan başka bir isimdir.
2. "Sınıf değişkeni" (*class variable*) terimi, \_\_\_ için kullanılan başka bir isimdir.
3. Yerel bir değişken geçici durumu saklar; bir \_\_\_ içinde bildirilir.
4. Bir metodun açılış ve kapanış parantezleri arasında bildirilen değişkene \_\_\_ denir.
5. Java programlama dili tarafından desteklenen sekiz ilkel veri tipi (*primitive data types*) nelerdir?
6. Karakter dizgileri (metinler) \_\_\_ sınıfı ile temsil edilir.
7. Tek bir türden sabit sayıda değer tutan kapsayıcı nesneye \_\_\_ denir.

### Yanıtlar
1. **Statik olmayan alan (non-static field)**.
2. **Statik alan (static field)**.
3. **Metot (method)**.
4. **Parametre (parameter)**.
5. **`byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`**.
6. **`java.lang.String`**.
7. **Dizi (array)**.

---

## 2. Operatörler (Operators)

### Sorular
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

### Yanıtlar
1. `>` (büyüktür ilişkisel operatörü) ve `+` (toplama aritmetik operatörü).
2. 
   - a. `i` değeri **11**, `n` değeri **0** olur (`10 % 5 = 0`).
   - b. `i` değeri **11**, `n` değeri **1** olur (`11 % 5 = 1`).
3. Mantıksal DEĞİL operatörü: **`!`**.
4. İki değeri karşılaştırmak için **`==`** operatörü kullanılır (`=` atama operatörüdür).

---

## 3. İfadeler, Deyimler ve Bloklar (Expressions, Statements, and Blocks)

### Sorular
1. Operatörler, değerleri hesaplayan \_\_\_ oluşturmak için kullanılır.
2. İfadeler, \_\_\_ temel bileşenleridir.
3. Deyimler \_\_\_ halinde gruplanabilir.
4. `1 * 2 * 3` kod parçası bir \_\_\_ ifade örneğidir.
5. Deyimler doğal dillerdeki cümlelere benzer, ancak nokta yerine bir \_\_\_ ile biter.
6. Bir blok, dengeli \_\_\_ arasındaki sıfır veya daha fazla deyim grubudur.

### Yanıtlar
1. **İfadeleri (expressions)**
2. **Deyimlerin (statements)**
3. **Bloklar (blocks)**
4. **Bileşik (compound)**
5. **Noktalı virgül (semicolon - `;`)**
6. **Süslü parantezler (braces - `{ }`)**

---

## 4. Kontrol Akışı (Control Flow)

### Sorular
1. Java tarafından desteklenen en temel kontrol akış ifadesi \_\_\_ ifadesidir.
2. \_\_\_ ifadesi herhangi bir sayıda olası yürütme yoluna izin verir.
3. \_\_\_ ifadesi `while` ifadesine benzer, ancak ifadesini döngünün \_\_\_ değerlendirir.
4. `for` ifadesini kullanarak sonsuz bir döngü nasıl yazılır?
5. `while` ifadesini kullanarak sonsuz bir döngü nasıl yazılır?

### Yanıtlar
1. **`if-then`**
2. **`switch`**
3. **`do-while`**, **sonunda (bottom)**
4. `for ( ; ; ) { }`
5. `while (true) { }`
