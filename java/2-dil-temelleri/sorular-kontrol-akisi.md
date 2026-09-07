# Sorular ve Alıştırmalar: Kontrol Akış İfadeleris

## Sorular

1. Java programlama dili tarafından desteklenen en temel kontrol akış ifadesi \_\_\_ ifadesidir.
2. \_\_\_ ifadesi herhangi bir sayıda olası yürütme yoluna izin verir.
3. \_\_\_ ifadesi, `while` ifadesine benzer, ancak ifadesini döngünün \_\_\_ kısmında değerlendirir.
4. `for` ifadesi kullanılarak sonsuz bir döngü nasıl yazılır?
5. `while` ifadesi kullanılarak sonsuz bir döngü nasıl yazılır?

---

## Alıştırmalar

1. Aşağıdaki kod parçasını (*code snippet*) inceleyin:

   ```java
   if (aNumber >= 0)
       if (aNumber == 0)
           System.out.println("first string");
   else System.out.println("second string");
   System.out.println("third string");
   ```

   - a. Eğer `aNumber` 3 ise, kodun nasıl bir çıktı üreteceğini düşünüyorsunuz?
   - b. Önceki kod parçasını içeren bir test programı yazın; `aNumber` değerini 3 yapın. Programın çıktısı nedir? Tahmin ettiğiniz gibi mi? Çıktının neden bu şekilde olduğunu açıklayın; başka bir deyişle, bu kod parçası için kontrol akışı nedir?
   - c. Yalnızca boşluklar ve satır sonları kullanarak, kontrol akışının anlaşılmasını kolaylaştırmak için kod parçasını yeniden biçimlendirin.
   - d. Kodu daha da netleştirmek için süslü parantezler kullanın.

---

## Yanıtlar

### Soru Yanıtları

1. Java programlama dili tarafından desteklenen en temel kontrol akış ifadesi **`if-then`** ifadesidir (*statement*).
2. **`switch`** ifadesi (*statement*) herhangi bir sayıda olası yürütme yoluna izin verir.
3. **`do-while`** ifadesi (*statement*), `while` ifadesine benzer, ancak ifadesini döngünün **sonunda (*bottom*)** değerlendirir.
4. `for` ifadesi (*statement*) kullanılarak sonsuz bir döngü:
   ```java
   for ( ; ; ) {

   }
   ```
5. `while` ifadesi (*statement*) kullanılarak sonsuz bir döngü:
   ```java
   while (true) {

   }
   ```

---

### Alıştırma Yanıtları

1. Aşağıdaki kod parçası incelendiğinde:
   ```java
   if (aNumber >= 0)
       if (aNumber == 0)
           System.out.println("first string");
   else 
       System.out.println("second string");
   System.out.println("third string");
   ```

   - a. **Çözüm:**
     ```text
     second string
     third string
     ```

   - b. **Çözüm:** `NestedIf`
     ```java
     class NestedIf {
         public static void main(String[] args) {
             int aNumber = 3;

             if (aNumber >= 0)
                 if (aNumber == 0) System.out.println("first string");
             else System.out.println("second string");
             System.out.println("third string");
         }
     }
     
     ```
     **Çıktı:**
     ```text
     second string
     third string
     ```

     3 sayısı 0'dan büyük veya eşittir, bu nedenle yürütme ikinci `if` ifadesine geçer. 3 sayısı 0'a eşit olmadığı için ikinci `if` ifadesinin testi başarısız olur. Bu nedenle, `else` kısmı yürütülür (çünkü ikinci `if` ifadesine bağlıdır). Böylece **second string** görüntülenir. Son `println` ise herhangi bir `if` ifadesinin tamamen dışındadır, bu nedenle her zaman yürütülür ve böylece **third string** her zaman görüntülenir. 

   - c. **Çözüm:**
     ```java
     if (aNumber >= 0)
         if (aNumber == 0)
             System.out.println("first string");
         else
             System.out.println("second string");

     System.out.println("third string");
     ```

   - d. **Çözüm:**
     Kodu daha da netleştirmek ve gelecekte kodu sürdürecek kişilerin hata yapma olasılığını azaltmak için **{** ve **}** süslü parantezlerini kullanın:

     ```java
     if (aNumber >= 0) {
         if (aNumber == 0) {
             System.out.println("first string");
         } else {
             System.out.println("second string");
         }
     }

     System.out.println("third string");
     ```