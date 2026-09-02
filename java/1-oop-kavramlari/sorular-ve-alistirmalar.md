# Sorular ve Alıştırmalar: Nesne Yönelimli Programlama Kavramları

## Sorular

1. Gerçek dünya nesneleri \_\_\_ ve \_\_\_ içerir.
2. Bir yazılım nesnesinin durumu \_\_\_ içinde saklanır.
3. Bir yazılım nesnesinin davranışı \_\_\_ aracılığıyla dışa açılır.
4. Dahili verileri dış dünyadan gizlemek ve bunlara yalnızca genel erişime açık metotlar aracılığıyla erişmek veri \_\_\_ olarak bilinir.
5. Bir yazılım nesnesi için taslak/şablon olan yapıya \_\_\_ denir.
6. Ortak davranış bir \_\_\_ içinde tanımlanabilir ve \_\_\_ anahtar sözcüğü kullanılarak bir \_\_\_ içine miras alınabilir.
7. Gövdesi (implementasyonu) olmayan metotlar topluluğuna \_\_\_ denir.
8. Sınıfları ve arayüzleri işlevselliklerine göre düzenleyen ad alanına \_\_\_ denir.
9. API terimi ne anlama gelir?

---

## Alıştırmalar

1. Bu kılavuzun başında gözlemlediğiniz her bir gerçek dünya nesnesi için yeni sınıflar oluşturun. Gerekli sözdizimini unutursanız `Bicycle` sınıfına başvurun.
2. Yukarıda oluşturduğunuz her yeni sınıf için, onun davranışını tanımlayan bir arayüz (*interface*) oluşturun ve ardından sınıfınızın bunu uygulamasını (*implements*) sağlayın. Bir veya iki metodu sınıfta yazmayı atlayın ve derlemeyi deneyin. Hata mesajı nasıl görünüyor?

---

## Yanıtlar

### Soruların Yanıtları

1. Gerçek dünya nesneleri **durum (state)** ve **davranış (behavior)** içerir.
2. Bir yazılım nesnesinin durumu **alanlarda (fields)** saklanır.
3. Bir yazılım nesnesinin davranışı **metotlar (methods)** aracılığıyla dışa açılır.
4. Dahili verileri dış dünyadan gizlemek ve bunlara yalnızca genel metotlarla erişmek veri **kapsülleme (encapsulation)** olarak bilinir.
5. Bir yazılım nesnesinin taslağına/şablonuna **sınıf (class)** denir.
6. Ortak davranış bir **üst sınıfta (superclass)** tanımlanabilir ve **extends** anahtar sözcüğü kullanılarak bir **alt sınıfa (subclass)** miras alınabilir.
7. Gövdesi olmayan metotlar topluluğuna **arayüz (interface)** denir.
8. Sınıfları ve arayüzleri işlevselliğe göre düzenleyen ad alanına **paket (package)** denir.
9. API terimi **Application Programming Interface** (Uygulama Programlama Arayüzü) anlamına gelir.

### Alıştırmaların Yanıtları

1. Yanıtlarınız modellemeyi seçtiğiniz gerçek dünya nesnelerine göre değişiklik gösterecektir.
2. Yanıtlarınız burada da değişiklik gösterecektir; ancak derleyici hata mesajında arayüzde tanımlanan fakat sınıfta uygulanmayan metotların adları açıkça listelenecektir.
