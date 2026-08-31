# Ders: Dizin İşlemleri ve LDAP (Directory Operations)

Dizin servisi, nesneleri adlandırmanın yanı sıra nesnelere ait zengin **nitelikleri (attributes)** saklar ve filtreli aramaları destekler.

---

## 1. Dizin Niteliklerini Okuma

```java
import javax.naming.directory.*;

Attributes attrs = ctx.getAttributes("cn=John Doe,ou=People,dc=example,dc=com");
Attribute mailAttr = attrs.get("mail");
System.out.println("E-posta: " + mailAttr.get());
```

---

## 2. LDAP Arama Sorguları

```java
SearchControls ctls = new SearchControls();
ctls.setSearchScope(SearchControls.SUBTREE_SCOPE);

String filter = "(&(sn=Doe)(mail=*))";
NamingEnumeration<SearchResult> results = ctx.search("ou=People,dc=example,dc=com", filter, ctls);

while (results.hasMore()) {
    SearchResult sr = results.next();
    System.out.println("Bulunan: " + sr.getName());
}
```
