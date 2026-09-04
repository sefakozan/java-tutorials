# Bit Düzeyinde ve Bit Kaydırma Operatörleri (Bitwise and Bit Shift Operators)

Java programlama dili ayrıca tamsayı türleri üzerinde bit düzeyinde ve bit kaydırma işlemleri gerçekleştiren operatörler de sağlar. Bu bölümde ele alınan operatörler daha az yaygın olarak kullanılır. Bu nedenle, kapsamları kısadır; amaç yalnızca bu operatörlerin varlığından haberdar olmanızı sağlamaktır.

Tekli bitsel tümleyen operatörü "**~**" bir bit desenini tersine çevirir; tamsayı türlerinden herhangi birine uygulanabilir ve her "0"ı "1", her "1"i "0" yapar. Örneğin, bir byte 8 bit içerir; bit deseni "00000000" olan bir değere bu operatörün uygulanması, desenini "11111111" olarak değiştirir.

İşaretli sola kaydırma operatörü "**&lt;&lt;**" bir bit desenini sola, işaretli sağa kaydırma operatörü "**&gt;&gt;**" ise bir bit desenini sağa kaydırır. Bit deseni sol işlenenden, kaç konum kaydırılacağı ise sağ işlenenden verilir. İşaretsiz sağa kaydırma operatörü "**&gt;&gt;&gt;**" en soldaki konuma bir sıfır kaydırırken, "**&gt;&gt;**" sonrasındaki en soldaki konum işaret genişletmesine bağlıdır.

Bit düzeyindeki **&** operatörü, bit düzeyinde **AND (VE)** işlemi gerçekleştirir.

Bit düzeyindeki **^** operatörü, bit düzeyinde **XOR (ÖZEL VEYA)** işlemi gerçekleştirir.

Bit düzeyindeki **|** operatörü, bit düzeyinde **OR (KAPSAYICI VEYA)** işlemi gerçekleştirir.

Aşağıdaki program, `BitDemo`, "2" sayısını standart çıktıya yazdırmak için bitsel AND operatörünü kullanır.

```java
class BitDemo {
    public static void main(String[] args) {
        int bitmask = 0x000F;
        int val = 0x2222;
        // 2 yazdırır
        System.out.println(val & bitmask);
    }
}
```