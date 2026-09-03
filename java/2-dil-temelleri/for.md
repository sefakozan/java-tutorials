# for İfadesi (The for Statement)

`for` ifadesi, belirli bir aralıktaki değerler üzerinde kompakt bir şekilde yineleme yapmak için tasarlanmıştır:

```java
class ForDemo {
    public static void main(String[] args){
         for(int i=1; i<11; i++){
              System.out.println("Count is: " + i);
         }
    }
}
```

`for` döngüsünün üç ana bileşeni vardır:
1. **Başlatma (*Initialization*):** Döngüyü başlatır; döngüye girildiğinde bir kez yürütülür (`int i=1`).
2. **Sonlandırma Koşulu (*Termination*):** `false` olduğunda döngü biter (`i<11`).
3. **Artırma/Güncelleme (*Increment*):** Her yinelemeden sonra çağrılır (`i++`).

Sonsuz bir `for` döngüsü: `for ( ; ; ) { }`.

---

## Gelişmiş for Döngüsü (Enhanced for-each Loop)

Java SE 5.0 ile tanıtılan gelişmiş `for` döngüsü, diziler ve koleksiyonlar üzerinde indeks kullanmadan kolayca yineleme sağlar:

```java
class EnhancedForDemo {
    public static void main(String[] args){
         int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
         for (int item : numbers) {
             System.out.println("Count is: " + item);
         }
    }
}
```
