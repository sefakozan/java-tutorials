# Eşitlik, İlişkisel ve Koşullu Operatörler (Equality, Relational, and Conditional Operators)

## Eşitlik ve İlişkisel Operatörler (The Equality and Relational Operators)

Eşitlik ve ilişkisel operatörler (*equality and relational operators*), bir işlenenin (*operand*) diğerinden büyük, küçük, eşit veya eşit olmadığını belirler. Bu operatörlerin büyük bir kısmı muhtemelen size de tanıdık gelecektir. İki ilkel değerin (*primitive values*) eşit olup olmadığını test ederken, "**=**" değil, "**==**" kullanmanız gerektiğini unutmayın.

* <span style="display: inline-block; width: 38px;"><strong>==</strong></span> eşittir (*equal to*)
* <span style="display: inline-block; width: 38px;"><strong>!=</strong></span> eşit değildir (*not equal to*)
* <span style="display: inline-block; width: 38px;"><strong>&gt;</strong></span> büyüktür (*greater than*)
* <span style="display: inline-block; width: 38px;"><strong>&gt;=</strong></span> büyük veya eşittir (*greater than or equal to*)
* <span style="display: inline-block; width: 38px;"><strong>&lt;</strong></span> küçüktür (*less than*)
* <span style="display: inline-block; width: 38px;"><strong>&lt;=</strong></span> küçük veya eşittir (*less than or equal to*)

Aşağıdaki program, `ComparisonDemo`, karşılaştırma operatörlerini (*comparison operators*) test eder:

```java
class ComparisonDemo {

    public static void main(String[] args){
        int value1 = 1;
        int value2 = 2;
        if(value1 == value2)
            System.out.println("value1 == value2");
        if(value1 != value2)
            System.out.println("value1 != value2");
        if(value1 > value2)
            System.out.println("value1 > value2");
        if(value1 < value2)
            System.out.println("value1 < value2");
        if(value1 <= value2)
            System.out.println("value1 <= value2");
    }
}
```

Çıktı (*Output*):

```text
value1 != value2
value1 <  value2
value1 <= value2
```

---

## Koşullu Operatörler (The Conditional Operators)

**&&** ve **||** operatörleri, iki `boolean` ifadesi üzerinde *Koşullu-VE (Conditional-AND)* ve *Koşullu-VEYA (Conditional-OR)* işlemlerini gerçekleştirir. Bu operatörler "**kısa devre**" (***short-circuiting***) davranışı sergiler; bu da ikinci işlenenin (*operand*) yalnızca gerek duyulduğunda değerlendirildiği anlamına gelir.

* <span style="display: inline-block; width: 38px;"><strong>&&</strong></span> Koşullu-VE (*Conditional-AND*)
* <span style="display: inline-block; width: 38px;"><strong>||</strong></span> Koşullu-VEYA (*Conditional-OR*)

Aşağıdaki program, `ConditionalDemo1`, bu operatörleri test eder:

```java
class ConditionalDemo1 {

    public static void main(String[] args){
        int value1 = 1;
        int value2 = 2;
        if((value1 == 1) && (value2 == 2))
            System.out.println("value1 is 1 AND value2 is 2");
        if((value1 == 1) || (value2 == 1))
            System.out.println("value1 is 1 OR value2 is 1");
    }
}
```

Bir diğer koşullu operatör, bu dersin [Kontrol Akış İfadeleri (Control Flow Statements)](java/2-dil-temelleri/kontrol-akisi.md) bölümünde ele alınan bir `if-then-else` ifadesinin kısaltması olarak düşünülebilecek **?:** operatörüdür. Bu operatör, üç işlenen (*operand*) kullandığı için **üçlü operatör (ternary operator)** olarak da bilinir. Aşağıdaki örnekte bu operatör şu şekilde okunmalıdır: "`someCondition` değeri `true` ise, `value1` değerini `result` değişkenine ata. Aksi takdirde, `value2` değerini `result` değişkenine ata."

Aşağıdaki program, `ConditionalDemo2`, **?:** operatörünü test eder:

```java
class ConditionalDemo2 {

    public static void main(String[] args){
        int value1 = 1;
        int value2 = 2;
        int result;
        boolean someCondition = true;
        result = someCondition ? value1 : value2;

        System.out.println(result);
    }
}
```

`someCondition` değeri `true` olduğu için bu program ekrana "1" yazdırır. Kodunuzu daha okunabilir kılıyorsa, `if-then-else` ifadesi yerine **?:** operatörünü kullanın; örneğin ifadeler kompakt olduğunda ve yan etkileri (*side-effects*, örneğin atamalar gibi) bulunmadığında.

---

## Tip Karşılaştırma Operatörü instanceof (The Type Comparison Operator instanceof)

`instanceof` operatörü, bir nesneyi (*object*) belirtilen bir tiple karşılaştırır. Bir nesnenin bir sınıfın örneği (*instance of a class*), bir alt sınıfın örneği (*instance of a subclass*) veya belirli bir arayüzü uygulayan (*implements a particular interface*) bir sınıfın örneği olup olmadığını test etmek için bu operatörü kullanabilirsiniz.

Aşağıdaki program, `InstanceofDemo`, bir üst sınıf (`Parent` adında), basit bir arayüz (`MyInterface` adında) ve üst sınıftan miras alan (*inherits*) ve arayüzü uygulayan (*implements*) bir alt sınıf (`Child` adında) tanımlar:

```java
class InstanceofDemo {
    public static void main(String[] args) {

        Parent obj1 = new Parent();
        Parent obj2 = new Child();

        System.out.println("obj1 instanceof Parent: "
            + (obj1 instanceof Parent));
        System.out.println("obj1 instanceof Child: "
            + (obj1 instanceof Child));
        System.out.println("obj1 instanceof MyInterface: "
            + (obj1 instanceof MyInterface));
        System.out.println("obj2 instanceof Parent: "
            + (obj2 instanceof Parent));
        System.out.println("obj2 instanceof Child: "
            + (obj2 instanceof Child));
        System.out.println("obj2 instanceof MyInterface: "
            + (obj2 instanceof MyInterface));
    }
}

class Parent {}
class Child extends Parent implements MyInterface {}
interface MyInterface {}
```

Çıktı (*Output*):

```text
obj1 instanceof Parent: true
obj1 instanceof Child: false
obj1 instanceof MyInterface: false
obj2 instanceof Parent: true
obj2 instanceof Child: true
obj2 instanceof MyInterface: true
```

`instanceof` operatörünü kullanırken, `null` değerinin hiçbir şeyin bir örneği (*instance*) olmadığını aklınızda bulundurun.
