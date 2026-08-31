# Nesneleri Oluşturma ve Kullanma (Creating and Using Objects)

Tipik bir Java programı nesneler oluşturur ve bu nesneler metotları çağırarak birbirleriyle etkileşime girer.

---

## 1. Nesneleri Oluşturma

Bir nesne oluşturmak üç aşamayı içerir:

1. **Bildirim (Declaration):** Bir nesne referansı değişkenini bildirme.
2. **Örnekleme (Instantiation):** `new` anahtar sözcüğü ile nesne için bellekte yer ayırma.
3. **Başlatma (Initialization):** `new` işlecini takip eden yapıcı çağrısı ile nesnenin başlangıç durumunu ayarlama.

```java
Point originOne = new Point(23, 94);
Rectangle rectOne = new Rectangle(originOne, 100, 200);
```

---

## 2. Nesneleri Kullanma

Bir nesne oluşturulduktan sonra, onun alanlarına ve metotlarına nokta (`.`) operatörü ile erişilir:

```java
// Alanlara erişim (Genellikle kapsülleme gereği doğrudan erişim yerine get/set tercih edilir)
System.out.println("Genişlik: " + rectOne.width);
System.out.println("Yükseklik: " + rectOne.height);

// Metotları çağırma
int area = rectOne.getArea();
System.out.println("Alan: " + area);
```

---

## 3. Çöp Toplama (Garbage Collection)

C++ gibi dillerde oluşturulan her nesnenin belleğini serbest bırakmak programcının sorumluluğundadır (`delete` veya `free`).

Java çalışma zamanı ortamı ise **çöp toplayıcı (Garbage Collector)** adı verilen otomatik bir bellek yönetim mekanizmasına sahiptir:
- Bir nesneye artık hiçbir canlı referans işaret etmediğinde (örneğin referansı `null` yapıldığında veya metodun kapsamı bittiğinde), nesne çöp toplayıcı için uygun hale gelir.
- Çöp toplayıcı arka planda çalışarak bu nesnelerin belleğini otomatik olarak sisteme geri kazandırır.
