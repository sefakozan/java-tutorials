# Yuvalanmış Sınıflar, Yerel Sınıflar, Anonim Sınıflar ve Lambda İfadeleri Ne Zaman Kullanılmalı? (When to Use Nested Classes, Local Classes, Anonymous Classes, and Lambda Expressions)

[Yuvalanmış Sınıflar](java/3-siniflar-ve-nesneler/yuvalanmis-siniflar.md) bölümünde belirtildiği gibi yuvalanmış sınıflar; yalnızca tek bir yerde kullanılan sınıfları mantıksal olarak gruplandırmanıza, kapsülleme kullanımını artırmanıza ve daha okunabilir ve bakımı kolay kod oluşturmanıza olanak tanır. Yerel sınıflar, anonim sınıflar ve lambda ifadeleri de bu avantajları sağlar; ancak daha belirli durumlar için kullanılmak üzere tasarlanmışlardır:

* **Yerel sınıf (Local class)**: Bir sınıfın birden fazla örneğini oluşturmanız, yapıcısına erişmeniz veya yeni, adlandırılmış bir tür tanıtmanız gerekiyorsa (örneğin daha sonra ek metotlar çağırmanız gerektiğinden) kullanın.
* **Anonim sınıf (Anonymous class)**: Alanlar veya ek metotlar bildirmeniz gerekiyorsa kullanın.
* **Lambda ifadesi (Lambda expression)**:
  * Diğer kodlara aktarmak istediğiniz tek bir davranış birimini kapsüllüyorsanız kullanın. Örneğin bir koleksiyonun her öğesi üzerinde, bir işlem tamamlandığında veya bir işlem bir hatayla karşılaştığında belirli bir eylemin gerçekleştirilmesini istiyorsanız bir lambda ifadesi kullanırsınız.
  * Bir fonksiyonel arayüzün basit bir örneğine ihtiyacınız varsa ve önceki kriterlerin hiçbiri geçerli değilse kullanın (örneğin bir yapıcıya, adlandırılmış bir türe, alanlara veya ek metotlara ihtiyacınız yoksa).
* **Yuvalanmış sınıf (Nested class)**: Gereksinimleriniz bir yerel sınıfa benziyorsa, türü daha geniş bir şekilde kullanılabilir hale getirmek istiyorsanız ve kapsayıcı sınıfın örnek değişkenlerine erişmeniz gerekmiyorsa statik bir yuvalanmış sınıf kullanın. Kapsayıcı örneğin örnek alanlarına veya metotlarına erişmeniz gerekiyorsa statik olmayan bir yuvalanmış sınıf (iç sınıf) kullanın.
