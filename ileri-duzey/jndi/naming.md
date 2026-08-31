# Ders: İsimlendirme İşlemleri (JNDI Naming Operations)

Bir **adlandırma hizmeti (naming service)**, adları nesnelerle ilişkilendirir (**bağlama / binding**). Bir adlandırma hizmetinde bir nesneyi adına göre arama işlemine **arama (lookup)** denir.

1. [**`InitialContext` Oluşturma**](#1-initialcontext-oluşturma)
2. [**Temel İsimlendirme İşlemleri (`lookup`, `bind`, `unbind`)**](#2-temel-i̇simlendirme-i̇şlemleri-lookup-bind-unbind)
---

# 1. `InitialContext` Oluşturma

JNDI işlemlerine başlamak için bir başlangıç bağlamı (*initial context*) oluşturulur:

```java
import javax.naming.Context;
import javax.naming.InitialContext;
import java.util.Hashtable;

Hashtable<String, String> env = new Hashtable<>();
env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.fscontext.RefFSContextFactory");
env.put(Context.PROVIDER_URL, "file:/tmp");

Context ctx = new InitialContext(env);
```

---

# 2. Temel İsimlendirme İşlemleri

### Nesne Arama (`lookup`)
```java
// JNDI üzerinden nesne bulma (örneğin bir veritabanı DataSource'u)
DataSource ds = (DataSource) ctx.lookup("jdbc/MyDataSource");
```

### İsim Bağlama (`bind` ve `rebind`)
```java
// Yeni bir nesneyi bir ada bağla
ctx.bind("reportConfig", myConfigObject);

// Varsa üzerine yaz
ctx.rebind("reportConfig", newConfigObject);
```

### İsim Bağlantısını Kaldırma (`unbind`) ve Yeniden Adlandırma (`rename`)
```java
ctx.rename("reportConfig", "oldReportConfig");
ctx.unbind("oldReportConfig");
```
