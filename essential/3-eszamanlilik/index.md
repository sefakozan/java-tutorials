# Ders: Eşzamanlılık (Concurrency)

Bilgisayar kullanıcıları sistemlerinin aynı anda birden fazla işi yapabilmesini bekler. Java platformu, en başından itibaren eşzamanlı (eşzamanlı çalışan iş parçacıkları) programlamayı desteklemek üzere tasarlanmıştır.

---

## 1. İş Parçacıkları (Threads)

Java'da bir iş parçacığı oluşturmanın iki temel yolu vardır:

### A. `Runnable` Arayüzünü Uygulamak (Önerilen Yöntem)

```java
public class HelloRunnable implements Runnable {
    public void run() {
        System.out.println("Hello from a thread!");
    }

    public static void main(String[] args) {
        Thread thread = new Thread(new HelloRunnable());
        thread.start();
    }
}
```

### B. `Thread` Sınıfını Genişletmek

```java
public class HelloThread extends Thread {
    public void run() {
        System.out.println("Hello from a thread!");
    }

    public static void main(String[] args) {
        new HelloThread().start();
    }
}
```

---

## 2. Senkronizasyon (Synchronization)

Birden çok iş parçacığı aynı bellek alanını veya nesneyi paylaştığında, veri tutarsızlıkları (**race conditions**) ortaya çıkabilir. Java bu durumu önlemek için `synchronized` anahtar sözcüğünü sağlar:

```java
public class SynchronizedCounter {
    private int c = 0;

    public synchronized void increment() {
        c++;
    }

    public synchronized void decrement() {
        c--;
    }

    public synchronized int value() {
        return c;
    }
}
```

Bir iş parçacığı `synchronized` bir metodu çalıştırırken, o nesnenin içsel kilidini (**intrinsic lock / monitor**) otomatik olarak alır ve işi bitene kadar diğer iş parçacıklarının beklemesini sağlar.

---

## 3. Üst Düzey Eşzamanlılık API'si (`java.util.concurrent`)

Modern Java uygulamaları, doğrudan `Thread` nesneleri oluşturmak yerine `ExecutorService` ve iş parçacığı havuzlarını (thread pools) kullanır:

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

ExecutorService executor = Executors.newFixedThreadPool(4);

executor.submit(() -> {
    System.out.println("Havuzdaki iş parçacığı çalışıyor: " + Thread.currentThread().getName());
});

executor.shutdown();
```
