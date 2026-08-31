# Ders: Dizin İşlemleri ve LDAP (Directory Operations & LDAP)

Bir **dizin hizmeti (directory service)**, adlandırma hizmetini genişleterek nesnelerin adlarının yanı sıra **özniteliklere (attributes)** sahip olmasına izin verir. Dizin hizmetleri (örneğin LDAP - Lightweight Directory Access Protocol), kullanıcı kimlik doğrulama, adres defterleri ve kurumsal kaynak yönetimi için yaygın olarak kullanılır.

1. [**`DirContext` ve Öznitelik Yönetimi**](#1-dircontext-ve-öznitelik-yönetimi)
2. [**LDAP Sunucusunda Arama Yapma (`search`)**](#2-ldap-sunucusunda-arama-yapma-search)
---

# 1. `DirContext` ve Öznitelik Yönetimi

`javax.naming.directory.DirContext` arayüzü öznitelik tabanlı işlemler sunar:

```java
import javax.naming.directory.*;
import java.util.Hashtable;

Hashtable<String, String> env = new Hashtable<>();
env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.ldap.LdapCtxFactory");
env.put(Context.PROVIDER_URL, "ldap://localhost:389/dc=example,dc=com");

DirContext ctx = new InitialDirContext(env);

// Bir nesnenin özniteliklerini okuma
Attributes attrs = ctx.getAttributes("cn=Ahmet Yilmaz,ou=People");
Attribute mailAttr = attrs.get("mail");
System.out.println("E-posta: " + mailAttr.get());
```

---

# 2. LDAP Sunucusunda Arama Yapma (`search`)

Kriterlere uyan nesneleri bulmak için arama filtreleri kullanılır:

```java
SearchControls controls = new SearchControls();
controls.setSearchScope(SearchControls.SUBTREE_SCOPE);

// Filtre: Soyadı "Yilmaz" olan tüm kullanıcılar
String filter = "(sn=Yilmaz)";
NamingEnumeration<SearchResult> results = ctx.search("ou=People", filter, controls);

while (results.hasMore()) {
    SearchResult sr = results.next();
    System.out.println("Bulunan nesne: " + sr.getNameInNamespace());
}
```
