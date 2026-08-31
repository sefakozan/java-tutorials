# Ders: RMI Sunucusu Yazma (Writing an RMI Server)

RMI sunucusu, uzak arayüzü uygulayan nesneler oluşturur ve bunları istemcilerin erişebilmesi için RMI Registry'ye kaydeder.

---

## 1. Uzak Arayüz

```java
import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Compute extends Remote {
    <T> T executeTask(Task<T> t) throws RemoteException;
}
```

---

## 2. Sunucu Gerçekleştirimi ve Kayıt

```java
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;
import java.rmi.server.UnicastRemoteObject;

public class ComputeEngine implements Compute {
    public ComputeEngine() {
        super();
    }

    public <T> T executeTask(Task<T> t) {
        return t.execute();
    }

    public static void main(String[] args) {
        try {
            String name = "Compute";
            Compute engine = new ComputeEngine();
            Compute stub = (Compute) UnicastRemoteObject.exportObject(engine, 0);
            
            Registry registry = LocateRegistry.getRegistry();
            registry.rebind(name, stub);
            System.out.println("ComputeEngine bağlandı ve hazır.");
        } catch (Exception e) {
            System.err.println("ComputeEngine istisnası: " + e.getMessage());
        }
    }
}
```
