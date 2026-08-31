# Ders: Eşzamanlılık (Concurrency)

Bilgisayar kullanıcıları sistemlerinin aynı anda birden fazla işi yapabilmesini (arka planda müzik çalarken belge düzenleme ve e-posta kontrol etme) bekler. Java platformu, en temel seviyeden gelişmiş yardımcı programlara kadar güçlü bir **eşzamanlılık (concurrency)** ve çoklu iş parçacığı (*multi-threading*) desteği sunar.

1. [**İşlemler ve İş Parçacıkları (Processes and Threads)**](#1-i̇şlemler-ve-i̇ş-parçacıkları-processes-and-threads)
2. [**İş Parçacığı Tanımlama ve Başlatma**](#2-i̇ş-parçacığı-tanımlama-ve-başlatma)
3. [**Senkronizasyon ve Kilitlenmeler (Deadlock)**](#3-senkronizasyon-ve-kilitlenmeler-deadlock)
4. [**Korumalı Bloklar (`wait` ve `notifyAll`)**](#4-korumalı-bloklar-wait-ve-notifyall)
5. [**Üst Düzey Eşzamanlılık Nesneleri (Executors, Locks, Atomic Variables)**](#5-üst-düzey-eşzamanlılık-nesneleri-executors-locks-atomic-variables)
---

# 1. İşlemler ve İş Parçacıkları (Processes and Threads)

Eşzamanlı programlamada iki temel yürütme birimi vardır:
- **İşlem (*Process*):** Kendi kendine yeten, bağımsız bir yürütme ortamıdır. Her işlemin kendine ait özel bir bellek alanı vardır.
- **İş Parçacığı (*Thread*):** Bazen "hafif işlem" (*lightweight process*) olarak da adlandırılır. Bir işlem içinde çalışır ve belleği, açık dosyaları ve diğer kaynakları aynı işlem içindeki diğer iş parçacıklarıyla paylaşır.

---

# 2. İş Parçacığı Tanımlama ve Başlatma

Java'da bir iş parçacığı oluşturmanın iki yolu vardır:

### 1. `Runnable` Arayüzünü Uygulama (Tavsiye Edilen Yöntem)
```java
public class HelloRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Hello from a thread!");
    }

    public static void main(String args[]) {
        (new Thread(new HelloRunnable())).start();
    }
}
```

### 2. `Thread` Sınıfını Genişletme
```java
public class HelloThread extends Thread {
    @Override
    public void run() {
        System.out.println("Hello from a thread!");
    }

    public static void main(String args[]) {
        (new HelloThread()).start();
    }
}
```

### İş Parçacığını Duraklatma ve Katılma
- `Thread.sleep(4000)`: Geçerli iş parçacığının yürütülmesini belirtilen milisaniye boyunca duraklatır.
- `t.join()`: Bir iş parçacığının, `t` iş parçacığının tamamlanmasını beklemesini sağlar.

---

# 3. Senkronizasyon ve Kilitlenmeler (Deadlock)

Birden fazla iş parçacığı aynı değişkeni aynı anda okuyup değiştirdiğinde **iş parçacığı çakışması (*thread interference*)** ve **bellek tutarsızlığı hataları (*memory consistency errors*)** ortaya çıkar.

### Senkronize Metotlar (Synchronized Methods)
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

### Senkronize İfadeler ve İçsel Kilitler (Intrinsic Locks)
```java
public void addName(String name) {
    synchronized(this) {
        lastName = name;
        nameCount++;
    }
    nameList.add(name);
}
```

### Kilitlenme (Deadlock)
İki veya daha fazla iş parçacığının sonsuza kadar birbirlerinin elinde tuttukları kilitleri bırakmasını beklemesi durumudur.

---

# 4. Korumalı Bloklar (`wait` ve `notifyAll`)

İş parçacıkları arasında koordinasyon sağlamak için `Object` sınıfının `wait()`, `notify()` ve `notifyAll()` metotları kullanılır:

```java
// Bir koşul sağlanana kadar bekleme
public synchronized void guardedJoy() {
    while(!joy) {
        try {
            wait();
        } catch (InterruptedException e) {}
    }
    System.out.println("Joy and efficiency have been achieved!");
}

// Diğer iş parçacıklarına haber verme
public synchronized void notifyJoy() {
    joy = true;
    notifyAll();
}
```

---

# 5. Üst Düzey Eşzamanlılık Nesneleri (java.util.concurrent)

Modern Java uygulamalarında doğrudan düşük seviyeli `Thread` nesneleri oluşturmak yerine `java.util.concurrent` paketindeki üst düzey yapılar kullanılır:

### 1. `Executor` ve İş Parçacığı Havuzları (Thread Pools)
İş parçacığı yönetimini ve görev çalıştırmayı soyutlar:

```java
ExecutorService executor = Executors.newFixedThreadPool(4);
executor.submit(() -> {
    System.out.println("Görev havuzda çalışıyor: " + Thread.currentThread().getName());
});
executor.shutdown();
```

### 2. Kilit Nesneleri (`Lock` & `ReentrantLock`)
Geleneksel `synchronized` bloklarına kıyasla daha esnek kilitleme mekanizmaları (`tryLock()`) sağlar.

### 3. Eşzamanlı Koleksiyonlar (Concurrent Collections)
Çok iş parçacıklı erişim için optimize edilmiş, thread-safe veri yapıları:
- `ConcurrentHashMap`
- `BlockingQueue` / `ArrayBlockingQueue`
- `CopyOnWriteArrayList`

### 4. Atomik Değişkenler (`java.util.concurrent.atomic`)
Kilit kullanmadan tek bir değişken üzerinde atomik işlemler gerçekleştiren sınıflar: `AtomicInteger`, `AtomicLong`, `AtomicBoolean`.
