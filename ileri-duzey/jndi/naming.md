# Ders: İsimlendirme İşlemleri (Naming Operations)

İsimlendirme servisi, nesneleri mantıksal isimlerle ilişkilendirir ve bu isimler üzerinden nesnelerin bulunmasını (lookup) sağlar.

---

## 1. InitialContext ve Arama (Lookup)

```java
import javax.naming.*;
import java.util.Hashtable;

Hashtable<String, String> env = new Hashtable<>();
env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.fscontext.RefFSContextFactory");
env.put(Context.PROVIDER_URL, "file:/tmp");

Context ctx = new InitialContext(env);

// İsimle nesne arama
Object obj = ctx.lookup("myFile");
```

---

## 2. İsim Bağlama ve Silme (Bind & Unbind)

```java
// Yeni nesne bağla
ctx.bind("serviceName", new MyService());

// Mevcut bağlamayı güncelle
ctx.rebind("serviceName", new MyUpdatedService());

// Bağlamayı kaldır
ctx.unbind("serviceName");
```
