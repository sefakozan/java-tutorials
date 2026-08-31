# Kontrol Akış İfadeleri (Control Flow Statements)

Bir kaynak dosyadaki deyimler genellikle yukarıdan aşağıya doğru sırayla yürütülür. **Kontrol akış ifadeleri**, karar verme, döngü oluşturma ve dallanma mekanizmalarını kullanarak bu akışı koşullara göre yönlendirir.

---

## 1. Karar Verme İfadeleri

### `if-then` ve `if-then-else`

En temel kontrol akış ifadesidir. Belirli bir koşulun `true` olması durumunda bir kod bloğunu çalıştırır:

```java
void applyBrakes() {
    if (isMoving) {
        currentSpeed--;
    } else {
        System.out.println("Bisiklet zaten durmuş durumda.");
    }
}
```

Birden çok koşulu sıralamak için `else if` blokları eklenir:

```java
int testscore = 76;
char grade;

if (testscore >= 90) {
    grade = 'A';
} else if (testscore >= 80) {
    grade = 'B';
} else if (testscore >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}
```

---

### `switch` İfadesi

Bir değişkenin değerine bağlı olarak birçok olası yürütme yolundan birini seçer:

```java
int month = 2;
String monthString;
switch (month) {
    case 1:  monthString = "Ocak";
             break;
    case 2:  monthString = "Şubat";
             break;
    case 3:  monthString = "Mart";
             break;
    default: monthString = "Geçersiz ay";
             break;
}
System.out.println(monthString);
```

---

## 2. Döngü İfadeleri (Loop Statements)

### `while` ve `do-while`

Bir koşul `true` olduğu sürece bir kod bloğunu sürekli olarak yineler:

```java
int count = 1;
while (count < 6) {
    System.out.println("Sayı: " + count);
    count++;
}
```

`do-while` döngüsünde koşul en sonda değerlendirildiğinden, döngü gövdesi en az bir kez mutlaka çalışır:

```java
int count = 1;
do {
    System.out.println("Sayı: " + count);
    count++;
} while (count < 6);
```

---

### `for` Döngüsü

Belirli bir aralıkta yineleme yapmak için kompakt bir yapı sunar:

```java
for (int i = 1; i < 6; i++) {
    System.out.println("Sayı: " + i);
}
```

### Gelişmiş `for` (for-each) Döngüsü

Diziler ve koleksiyonlar üzerinde sırayla gezinmek için kullanılır:

```java
int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
for (int item : numbers) {
    System.out.println("Sayı: " + item);
}
```

---

## 3. Dallanma İfadeleri (Branching Statements)

- `break`: Bir döngüyü (`for`, `while`, `do-while`) veya `switch` ifadesini anında sonlandırır.
- `continue`: Döngünün mevcut yinelemesini atlar ve bir sonraki yinelemeye geçer.
- `return`: Geçerli metottan çıkar ve kontrolü metodu çağıran yere geri verir (varsa bir dönüş değeriyle birlikte).
