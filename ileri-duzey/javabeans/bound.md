# Ders: Bağlı ve Kısıtlı Özellikler (Bound and Constrained Properties)

JavaBeans mimarisinde bir özelliğin değeri değiştiğinde diğer bileşenlerin uyarılması veya değişikliğin engellenmesi gerekebilir.

1. [**Bağlı Özellikler (Bound Properties)**](#1-bağlı-özellikler-bound-properties)
2. [**Kısıtlı Özellikler (Constrained Properties)**](#2-kısıtlı-özellikler-constrained-properties)
---

# 1. Bağlı Özellikler (Bound Properties)

Bir **bağlı özellik (bound property)** değiştiğinde, kayıtlı tüm dinleyicilere (`PropertyChangeListener`) bir `PropertyChangeEvent` bildirimi gönderilir. Bu işlem `java.beans.PropertyChangeSupport` yardımcı sınıfı ile gerçekleştirilir:

```java
import java.beans.PropertyChangeListener;
import java.beans.PropertyChangeSupport;
import java.io.Serializable;

public class MyBean implements Serializable {
    private String title;
    private final PropertyChangeSupport changes = new PropertyChangeSupport(this);

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String newTitle) {
        String oldTitle = this.title;
        this.title = newTitle;
        // Dinleyicilere eski ve yeni değeri bildir
        changes.firePropertyChange("title", oldTitle, newTitle);
    }

    public void addPropertyChangeListener(PropertyChangeListener l) {
        changes.addPropertyChangeListener(l);
    }

    public void removePropertyChangeListener(PropertyChangeListener l) {
        changes.removePropertyChangeListener(l);
    }
}
```

---

# 2. Kısıtlı Özellikler (Constrained Properties)

Bir **kısıtlı özellik (constrained property)** değişmeden önce, kayıtlı dinleyicilere (`VetoableChangeListener`) değişiklik önerilir. Herhangi bir dinleyici yeni değeri uygun bulmazsa bir `PropertyVetoException` fırlatarak değişikliği iptal edebilir (*veto* eder):

```java
import java.beans.PropertyVetoException;
import java.beans.VetoableChangeListener;
import java.beans.VetoableChangeSupport;
import java.io.Serializable;

public class BankAccountBean implements Serializable {
    private int balance;
    private final VetoableChangeSupport vetos = new VetoableChangeSupport(this);

    public int getBalance() {
        return this.balance;
    }

    public void setBalance(int newBalance) throws PropertyVetoException {
        int oldBalance = this.balance;
        // Değişikliği öner (dinleyiciler veto edebilir)
        vetos.fireVetoableChange("balance", oldBalance, newBalance);
        this.balance = newBalance;
    }

    public void addVetoableChangeListener(VetoableChangeListener l) {
        vetos.addVetoableChangeListener(l);
    }

    public void removeVetoableChangeListener(VetoableChangeListener l) {
        vetos.removeVetoableChangeListener(l);
    }
}
```
