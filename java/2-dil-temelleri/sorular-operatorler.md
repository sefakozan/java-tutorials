# Sorular ve Alıştırmalar: Operatörler (Questions and Exercises: Operators)

## Sorular

1. Aşağıdaki kod parçasını (*code snippet*) inceleyin:
   ```java
   arrayOfInts[j] > arrayOfInts[j+1]
   ```
   Bu kod hangi operatörleri (*operators*) içerir?

2. Aşağıdaki kod parçasını inceleyin:
   ```java
   int i = 10;
   int n = i++%5;
   ```
   - a. Kod yürütüldükten (*executed*) sonra `i` ve `n` değerleri ne olur?
   - b. Sonek artırma operatörü (*postfix increment operator* - `i++`) yerine önek sürümünü (*prefix version* - `++i`) kullanırsanız `i` ve `n` nihai değerleri ne olur?

3. Bir `boolean` değerini tersine çevirmek (*invert*) için hangi operatörü kullanırsınız?

4. İki değeri karşılaştırmak için hangi operatör kullanılır: "**=**" mi yoksa "**==**" mi?

5. Aşağıdaki kod örneğini (*code sample*) açıklayın:
   ```java
   result = someCondition ? value1 : value2;
   ```

---

## Alıştırmalar

1. Bileşik atamaları (*compound assignments*) kullanmak için aşağıdaki programı değiştirin:
   ```java
   class ArithmeticDemo {

        public static void main (String[] args){
             
             int result = 1 + 2; // result artık 3
             System.out.println(result);

             result = result - 1; // result artık 2
             System.out.println(result);

             result = result * 2; // result artık 4
             System.out.println(result);

             result = result / 2; // result artık 2
             System.out.println(result);

             result = result + 8; // result artık 10
             result = result % 7; // result artık 3
             System.out.println(result);
        }
   }
   ```

2. Aşağıdaki programda, "6" değerinin neden arka arkaya iki kez yazdırıldığını açıklayın:
   ```java
   class PrePostDemo {
       public static void main(String[] args){
           int i = 3;
           i++;
           System.out.println(i);    // "4"
           ++i;                     
           System.out.println(i);    // "5"
           System.out.println(++i);  // "6"
           System.out.println(i++);  // "6"
           System.out.println(i);    // "7"
       }
   }
   ```

---

## Yanıtlar (Answers)

### Soru Yanıtları (Answers to Questions)

1. **>** ve **+** operatörlerini içerir (**>** ilişkisel/büyüktür operatörü - *relational operator*, **+** toplama aritmetik operatörü - *arithmetic addition operator*).
2. 
   - a. `i` değeri **11**, `n` değeri **0** olur (`10 % 5 = 0`).
   - b. `i` değeri **11**, `n` değeri **1** olur (`11 % 5 = 1`).
3. Mantıksal tümleyen operatörü (*logical complement operator*): **!**
4. Karşılaştırma (*comparison*) için "**==**" operatörü kullanılır; "**=**" ise atama (*assignment*) için kullanılır.
5. Bu kod şu şekilde okunmalıdır: "Eğer `someCondition` `true` (doğru) ise, `value1` değerini `result` değişkenine ata. Aksi takdirde, `value2` değerini `result` değişkenine ata." (*"If `someCondition` is `true`, assign the value of `value1` to `result`. Otherwise, assign the value of `value2` to `result`."*)

---

### Alıştırma Yanıtları (Answers to Exercises)

1. İşte olası bir çözüm:
   ```java
   class ArithmeticDemo {

       public static void main (String[] args){
           int result = 3;
           System.out.println(result);

           result -= 1; // result artık 2
           System.out.println(result);

           result *= 2; // result artık 4
           System.out.println(result);

           result /= 2; // result artık 2 
           System.out.println(result);

           result += 8; // result artık 10
           result %= 7; // result artık 3
           System.out.println(result);

       }
   }
   ```

2. `System.out.println(++i);` kodu **6** olarak değerlendirilir, çünkü **++** operatörünün önek sürümü (*prefix version*), artırılmış değeri (*incremented value*) değerlendirir (önce `i` değerini **5'ten 6'ya artırır, sonra döndürür (return eder)**).  Bir sonraki satır olan `System.out.println(i++);` ise geçerli değeri (**6**) değerlendirir/yazdırır ve ardından değeri bir artırır (7 yapar). Dolayısıyla "**7**" değeri bir sonraki satıra kadar yazdırılmaz.
