# Ders: JavaBean Özellikleri (Properties)

Bir JavaBean nesnesinin durumunu belirleyen alanlar **özellikler (properties)** olarak adlandırılır. Özelliklere doğrudan erişilmez; standartlaştırılmış okuma ve yazma metotları kullanılır.

---

## 1. Basit Özellikler (Simple Properties)

```java
private String title;

public String getTitle() {
    return this.title;
}

public void setTitle(String title) {
    this.title = title;
}
```

Boolean özellikler için okuyucu metot `is` öneki ile başlar:
```java
private boolean enabled;

public boolean isEnabled() {
    return this.enabled;
}

public void setEnabled(boolean enabled) {
    this.enabled = enabled;
}
```

---

## 2. Dizinli Özellikler (Indexed Properties)

Dizi türündeki özelliklere tek tek veya topluca erişmek için kullanılır:

```java
private String[] tags;

public String getTags(int index) {
    return this.tags[index];
}

public void setTags(int index, String tag) {
    this.tags[index] = tag;
}

public String[] getTags() {
    return this.tags;
}

public void setTags(String[] tags) {
    this.tags = tags;
}
```
