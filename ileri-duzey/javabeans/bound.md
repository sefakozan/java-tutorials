# Ders: Bağlı ve Kısıtlı Özellikler (Bound and Constrained Properties)

JavaBeans, özellik değişikliklerinin diğer bileşenlere bildirilmesi ve onaylanması için iki gelişmiş özellik türü sunar.

---

## 1. Bağlı Özellikler (Bound Properties)

Değeri değiştiğinde dinleyicilere haber veren özelliklerdir:

```java
import java.beans.*;

public class MyBean {
    private String name;
    private final PropertyChangeSupport pcs = new PropertyChangeSupport(this);

    public void addPropertyChangeListener(PropertyChangeListener listener) {
        pcs.addPropertyChangeListener(listener);
    }

    public void setName(String newName) {
        String oldName = this.name;
        this.name = newName;
        pcs.firePropertyChange("name", oldName, newName);
    }
}
```

---

## 2. Kısıtlı Özellikler (Constrained Properties)

Bir özelliğin değeri değiştirilmeden önce dinleyicilerin bu değişikliği veto etmesine (`PropertyVetoException`) izin veren özelliklerdir:

```java
import java.beans.*;

public class ConstrainedBean {
    private int price;
    private final VetoableChangeSupport vcs = new VetoableChangeSupport(this);

    public void setPrice(int newPrice) throws PropertyVetoException {
        int oldPrice = this.price;
        vcs.fireVetoableChange("price", oldPrice, newPrice);
        this.price = newPrice;
    }
}
```
