# Operatörler (Operators)

Artık değişkenleri nasıl bildireceğinizi (*declare*) ve başlatacağınızı/değer verileceğini (*initialize*) öğrendiğinize göre, muhtemelen onlarla bir şeyler yapmayı öğrenmek istersiniz. Java programlama dilinin operatörlerini öğrenmek başlamak için iyi bir yerdir. Operatörler, bir, iki veya üç işlenen (*operand*) üzerinde belirli işlemleri gerçekleştiren ve ardından bir sonuç döndüren özel sembollerdir.

Java programlama dilinin operatörlerini incelerken, hangi operatörlerin en yüksek önceliğe (*precedence*) sahip olduğunu önceden bilmeniz faydalı olabilir. Aşağıdaki tablodaki operatörler öncelik sırasına göre listelenmiştir. Bir operatör tablonun en üstüne ne kadar yakın görünürse, önceliği o kadar yüksektir. Daha yüksek önceliğe sahip operatörler, nispeten daha düşük önceliğe sahip operatörlerden önce değerlendirilir. Aynı satırdaki operatörler eşit önceliğe sahiptir. Eşit önceliğe sahip operatörler aynı ifadede (*expression*) yer aldığında, hangisinin önce değerlendirileceğini bir kural belirlemelidir. Atama operatörleri (*assignment operators*) dışındaki tüm ikili operatörler (*binary operators*) soldan sağa doğru değerlendirilir; atama operatörleri ise sağdan sola doğru değerlendirilir.

### Operatör Önceliği (Operator Precedence)

| Operatörler (*Operators*) | Öncelik (*Precedence*) |
| :--- | :--- |
| sonek (*postfix*) | **expr++ &nbsp; &nbsp; expr++** |
| birli (*unary*) | **++expr &nbsp; --expr &nbsp; +expr &nbsp; -expr &nbsp; ~ &nbsp; !** |
| çarpımsal (*multiplicative*) | **\* &nbsp; / &nbsp; %** |
| toplamsal (*additive*) | **+ &nbsp; -** |
| kaydırma (*shift*) | **<< &nbsp; >> &nbsp; >>>** |
| ilişkisel (*relational*) | **< &nbsp; > &nbsp; <= &nbsp; >= &nbsp; instanceof** |
| eşitlik (*equality*) | **== &nbsp; !=** |
| bit düzeyinde VE (*bitwise AND*) | **&** |
| bit düzeyinde dışlayıcı VEYA (*bitwise exclusive OR / XOR*) | **^** |
| bit düzeyinde kapsayıcı VEYA (*bitwise inclusive OR*) | **\|** |
| mantıksal VE (*logical AND*) | **&&** |
| mantıksal VEYA (*logical OR*) | **\|\|**  |
| üçlü (*ternary*) | **? &nbsp; &nbsp; :** |
| atama (*assignment*) | **= &nbsp; += &nbsp; -= &nbsp; \*= &nbsp; /= &nbsp; %= &nbsp; &= &nbsp; ^= &nbsp; \|= &nbsp; <<= &nbsp; >>= &nbsp; >>>=** |

Genel amaçlı programlamada, belirli operatörler diğerlerine göre daha sık görünme eğilimindedir; örneğin, atama operatörü "**=**", işaretsiz sağa kaydırma (*unsigned right shift*) operatörü "**>>>**"dan çok daha yaygındır. Bunu göz önünde bulundurarak, aşağıdaki anlatım ilk olarak düzenli olarak kullanma olasılığınızın en yüksek olduğu operatörlere odaklanır ve daha az yaygın olanlara odaklanarak sona erer. Her anlatıma, derleyip çalıştırabileceğiniz örnek kodlar eşlik eder. Bu kodların çıktılarını incelemek, öğrendiklerinizi pekiştirmenize yardımcı olacaktır.