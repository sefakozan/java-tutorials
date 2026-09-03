# if-then ve if-then-else İfadeleri (The if-then and if-then-else Statements)

## `if-then` İfadesi

`if-then` ifadesi en temel kontrol akış ifadesidir. Yalnızca belirli bir koşul `true` olarak değerlendirildiğinde ilgili kod bloğunu yürütür:

```java
void applyBrakes(int decrement) {
    // Bisiklet zaten hareket halinde mi?
    if (isMoving) {
        // Bisiklet hareket halindeyse hızı azalt
        currentSpeed -= decrement;
    }
}
```

---

## `if-then-else` İfadesi

`if-then-else` ifadesi, "if" koşulu `false` olduğunda ikincil bir yürütme yolu sunar:

```java
class IfElseDemo {
    public static void main(String[] args) {
        int testscore = 76;
        char grade;

        if (testscore >= 90) {
            grade = 'A';
        } else if (testscore >= 80) {
            grade = 'B';
        } else if (testscore >= 70) {
            grade = 'C';
        } else if (testscore >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        System.out.println("Grade = " + grade); // Grade = C
    }
}
```
