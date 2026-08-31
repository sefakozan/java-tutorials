# Ders: Tür Silme Mekanizması (Type Erasure)

Java dili, eski Java sürümleriyle (JDK 5 öncesi) geriye dönük tam ikili uyumluluk sağlamak amacıyla **Tür Silme (Type Erasure)** mekanizmasını kullanır.

---

## 1. Tür Silme Nasıl Çalışır?

Derleyici derleme esnasında şu adımları izler:

1. Tüm jenerik tür parametrelerini sınır türleriyle veya sınır yoksa `Object` ile değiştirir:
   ```java
   // Derleme öncesi:
   public class Node<T> {
       private T data;
       public Node(T data) { this.data = data; }
   }

   // Derleme sonrası (Bayt kodu):
   public class Node {
       private Object data;
       public Node(Object data) { this.data = data; }
   }
   ```
2. Tip güvenliğini korumak için gerekli noktalara otomatik tür dönüşümleri (`cast`) ekler.
3. Polimorfizmi ve metot ezmeyi korumak için köprü metotları (**bridge methods**) üretir.
