# Ders: "Hello World!" Uygulamasına Yakından Bir Bakış

Artık "Hello World!" uygulamasını gördünüz (ve muhtemelen derleyip çalıştırdınız). Şimdi bu kodun tam olarak nasıl çalıştığını inceleyelim. Kodun tamamı şu şekildedir:

```java
/**
 * HelloWorldApp sınıfı, standart çıktıya
 * "Hello World!" yazdıran bir uygulama tanımlar.
 */
class HelloWorldApp {
    public static void main(String[] args) {
        System.out.println("Hello World!"); // Metni ekrana yazdırır.
    }
}
```

1. [**Kaynak Kod Yorumları (Comments)**](#1.-kaynak-kod-yorumları-(comments))
2. [**HelloWorldApp Sınıf Tanımı**](#2.-helloworldapp-sınıf-tanımı)
3. [**main Metodu ve Konsola Yazdırma**](#3.-main-metodu-ve-konsola-yazdırma)
---

# 1. Kaynak Kod Yorumları (Comments)

Aşağıdaki kalın gösterilen metinler, "Hello World!" uygulamasının yorumlarını oluşturur:

```java
/**
 * HelloWorldApp sınıfı, standart çıktıya
 * "Hello World!" yazdıran bir uygulama tanımlar.
 */
class HelloWorldApp {
    public static void main(String[] args) {
        System.out.println("Hello World!"); // Metni ekrana yazdırır.
    }
}
```

Yorumlar derleyici tarafından tamamen yok sayılır ancak kodu okuyan diğer programcılar için açıklayıcı bilgiler sunar. Java programlama dili üç tür yorumu destekler:

- `/* metin */`: Çok satırlı geleneksel açıklamalardır.
- `/** dokümantasyon */`: Javadoc API dokümantasyonu oluşturmak için kullanılır.
- `// metin`: Tek satırlık açıklamadır.

---

# 2. HelloWorldApp Sınıf Tanımı

Aşağıdaki satırlar sınıf tanımının başlangıcını ve gövdesini oluşturur:

```java
class HelloWorldApp {
    // Sınıfın gövdesi buraya gelir
}
```

Java programlama dilinde yazılan her kod bir sınıf (class) içinde tanımlanmalıdır. `class` anahtar sözcüğü yeni bir sınıf tanımlandığını belirtir. `HelloWorldApp` bu sınıfın adıdır.

---

# 3. main Metodu ve Konsola Yazdırma

Aşağıdaki kod bloğu uygulamanın giriş noktası olan `main` metodunu tanımlar:

```java
public static void main(String[] args) {
    System.out.println("Hello World!"); // Metni ekrana yazdırır.
}
```

- `public`: Metoda herkesin dışarıdan erişebileceğini belirtir.
- `static`: Metodun sınıf örneği oluşturulmadan doğrudan çağrılabileceğini belirtir.
- `void`: Metodun geriye herhangi bir değer döndürmeyeceğini ifade eder.
- `String[] args`: Komut satırından iletilen argümanları tutar.

`System.out.println("Hello World!");` satırı, Java'nın standart kütüphanesini kullanarak konsola bir metin satırı yazdırır.
