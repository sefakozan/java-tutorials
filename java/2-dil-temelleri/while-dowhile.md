# while ve do-while İfadeleri (The while and do-while Statements)

## `while` İfadesi

`while` ifadesi, belirli bir boolean koşul `true` olduğu sürece bir deyim veya bloğu sürekli olarak yürütür:

```java
class WhileDemo {
    public static void main(String[] args){
        int count = 1;
        while (count < 11) {
            System.out.println("Count is: " + count);
            count++;
        }
    }
}
```

Sonsuz bir döngü oluşturmak için `while (true) { }` kullanılabilir.

---

## `do-while` İfadesi

`do-while` ifadesi, koşulu döngünün başında değil **sonunda** değerlendirir. Bu nedenle döngü gövdesi içindeki kod **en az bir kez** mutlaka yürütülür:

```java
class DoWhileDemo {
    public static void main(String[] args){
        int count = 1;
        do {
            System.out.println("Count is: " + count);
            count++;
        } while (count < 11);
    }
}
```
