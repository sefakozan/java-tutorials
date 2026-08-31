# Ders: RMI İstemcisi Yazma (Creating an RMI Client)

RMI istemcisi, sunucu tarafında çalışan uzak nesnenin bir referansını (stub) alır ve metotlarını sanki yerel bir nesneymiş gibi çağırır.

---

## 1. İstemci Uygulaması

```java
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class ComputePi {
    public static void main(String args[]) {
        String name = "Compute";
        try {
            Registry registry = LocateRegistry.getRegistry(args[0]);
            Compute comp = (Compute) registry.lookup(name);

            Pi task = new Pi(Integer.parseInt(args[1]));
            BigDecimal pi = comp.executeTask(task);

            System.out.println("Hesaplanan Pi Değeri: " + pi);
        } catch (Exception e) {
            System.err.println("İstemci istisnası: " + e.getMessage());
        }
    }
}
```
