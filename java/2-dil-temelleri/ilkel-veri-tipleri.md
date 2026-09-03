# İlkel Veri Tipleri (Primitive Data Types)

Java programlama dili statik tür denetimli (*statically-typed*) bir dildir; yani tüm değişkenlerin kullanılmadan önce bildirilmesi gerektiği anlamına gelir. Bu, daha önce gördüğünüz gibi, değişkenin türünü ve adını belirtmeyi içerir:

```java
int gear = 1;
```

Bunu yapmak, programınıza "gear" adlı bir alanın var olduğunu, sayısal veriler içerdiğini ve başlangıç değerinin "1" olduğunu bildirir. Bir değişkenin veri türü, içerebileceği değerleri ve üzerinde gerçekleştirilebilecek işlemleri belirler. Java programlama dili, int'e ek olarak yedi başka ilkel veri türünü de destekler. İlkel bir tür, dil tarafından önceden tanımlanır ve ayrılmış bir anahtar sözcükle adlandırılır. İlkel değerler, diğer ilkel değerlerle durumu paylaşmaz. Java programlama dili tarafından desteklenen sekiz ilkel veri türü şunlardır:

* **byte**: byte veri türü, 8 bitlik işaretli iki'nin tümleyeni tamsayıdır. Minimum değeri -128 ve maksimum değeri 127'dir (dahil). byte veri türü, bellek tasarrufunun gerçekten önemli olduğu büyük dizilerde bellekten tasarruf etmek için yararlı olabilir. Ayrıca, sınırlarının kodunuzu daha anlaşılır kılmaya yardımcı olduğu durumlarda int yerine de kullanılabilir; bir değişkenin aralığının sınırlı olması bir tür belge görevi görebilir.

* **short**: short veri türü, 16 bitlik işaretli iki'nin tümleyeni tamsayıdır. Minimum değeri -32,768 ve maksimum değeri 32,767'dir (dahil). byte'ta olduğu gibi, aynı yönergeler geçerlidir: büyük dizilerde, bellek tasarrufunun gerçekten önemli olduğu durumlarda bellekten tasarruf etmek için short kullanabilirsiniz.

* **int**: Varsayılan olarak, int veri türü, minimum değeri -2<sup>31</sup> ve maksimum değeri 2<sup>31</sup>-1 olan 32 bitlik işaretli iki'nin tümleyeni tamsayıdır. Java SE 8 ve sonraki sürümlerde, minimum değeri 0 ve maksimum değeri 2<sup>32</sup>-1 olan işaretsiz 32 bitlik bir tamsayıyı temsil etmek için int veri türünü kullanabilirsiniz. int veri türünü işaretsiz bir tamsayı olarak kullanmak için Integer sınıfını kullanın. Daha fazla bilgi için [The Number Classes](../6-sayilar-ve-metinler/sayilar.md) bölümüne bakın. İşaretsiz tamsayılar için aritmetik işlemleri desteklemek amacıyla [Integer](https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html) sınıfına *compareUnsigned*, *divideUnsigned* vb. gibi statik metotlar eklenmiştir.

`Not:` ***İşaretli (Signed)***: En soldaki ilk bit "işaret biti" (+ veya -) olur. Geriye kalan 31 bit sayıyı belirler. Bu yüzden sınır -2<sup>31</sup> ile 2<sup>31</sup>-1 arasıdır. ***İşaretsiz (Unsigned)***: En soldaki bit işaret için harcanmaz, o da sayıya dahil edilir. 32 bitin tamamı sayı için kullanılır. Bu yüzden sınır 0 ile 2<sup>32</sup>-1 (0 ile 4.294.967.295) arası olur.

Java'da normalde *int a = -1;* yazdığınızda bu sayı negatiftir. Ancak Java 8 ile gelen *Integer.toUnsignedString(a)* metodunu kullanırsanız, Java 32 bite bakar, işaret bitini yok sayar ve size ekrana 4294967295 yazar. Dokümanda bahsedilen *Integer.compareUnsigned()* veya *divideUnsigned()* metotları da tam olarak bunu yapar. Sayının içindeki bitleri negatifmiş gibi değil, pozitif bir dev sayıymış gibi işleme sokar.

Yani doküman şunu demek istiyor: "Normalde int eksili sayılardan başlar. Ama Java 8+ metotlarını kullanırsanız, aynı int tipini 0'dan başlayan pozitif bir sayıymış gibi de manipüle edebilirsiniz."

* **long**: long veri türü, 64 bitlik iki'nin tümleyeni tamsayıdır. İşaretli long, minimum -2<sup>63</sup> ve maksimum 2<sup>63</sup>-1 değerine sahiptir. Java SE 8 ve sonraki sürümlerde, minimum değeri 0 ve maksimum değeri 2<sup>64</sup>-1 olan işaretsiz 64 bitlik bir long'u temsil etmek için long veri türünü kullanabilirsiniz. int tarafından sağlananlardan daha geniş bir değer aralığına ihtiyaç duyduğunuzda bu veri türünü kullanın. [Long](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html) sınıfı ayrıca işaretsiz long için aritmetik işlemleri desteklemek üzere *compareUnsigned*, *divideUnsigned* vb. metotları da içerir.

* **float**: float veri türü, tek duyarlıklı 32 bitlik bir IEEE 754 kayan noktalı sayıdır. Değer aralığı bu konunun kapsamı dışındadır, ancak Java Dil Belirtimi (Java Language Specification)'nin [Floating-Point Types, Formats, and Values](https://docs.oracle.com/javase/specs/jls/se7/html/jls-4.html#jls-4.2.3) bölümünde belirtilmiştir. byte ve short için yapılan önerilerde olduğu gibi, büyük kayank noktalı sayı dizilerinde bellekten tasarruf etmeniz gerekiyorsa double yerine float kullanın. Bu veri türü, para birimi gibi kesin değerler için asla kullanılmamalıdır. Bunun için bunun yerine [java.math.BigDecimal](https://docs.oracle.com/javase/8/docs/api/java/math/BigDecimal.html) sınıfını kullanmanız gerekir. [Sayılar ve Metinler (Numbers and Strings)](../6-sayilar-ve-metinler/sayilar.md), BigDecimal'ı ve Java platformu tarafından sağlanan diğer kullanışlı sınıfları ele alır.

* **double**: double veri türü, çift duyarlıklı 64 bitlik bir IEEE 754 kayan noktalı sayıdır. Değer aralığı bu konunun kapsamı dışındadır, ancak Java Dil Belirtimi (Java Language Specification)'nin [Floating-Point Types, Formats, and Values](https://docs.oracle.com/javase/specs/jls/se7/html/jls-4.html#jls-4.2.3) bölümünde belirtilmiştir. Kayank noktalı değerler için bu veri türü genellikle varsayılan tercihtir. Yukarıda belirtildiği gibi, bu veri türü para birimi gibi kesin değerler için asla kullanılmamalıdır.

* **boolean**: Boolean veri türünün yalnızca iki olası değeri vardır: true ve false. Doğru/yanlış koşullarını izleyen basit bayraklar için bu veri türünü kullanın. Bu veri türü bir bitlik bilgiyi temsil eder, ancak "boyutu" kesin olarak tanımlanmış bir şey değildir.

* **char**: char veri türü, tek bir 16 bitlik Unicode karakteridir. Minimum değeri '\u0000' (veya 0), maksimum değeri ise '\uffff' (veya 65,535 dahil) değeridir.

Yukarıda listelenen sekiz ilkel veri türüne ek olarak, Java programlama dili [java.lang.String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) sınıfı aracılığıyla karakter dizileri için de özel destek sağlar. Karakter dizinizi çift tırnak içine almak otomatik olarak yeni bir String nesnesi oluşturur; örneğin, *String s = "bu bir string"*;. String nesneleri **değişmezdir** (*immutable*); yani, oluşturulduktan sonra değerlerinin değiştirilemeyeceği anlamına gelir. String sınıfı teknik olarak ilkel bir veri türü değildir, ancak dil tarafından kendisine sağlanan özel destek göz önüne alındığında, muhtemelen onu böyle düşünme eğiliminde olacaksınız. String sınıfı hakkında daha fazla bilgiyi [Basit Veri Nesneleri (Simple Data Objects)](../6-sayilar-ve-metinler/sayilar.md) bölümünde öğreneceksiniz

---

## Varsayılan Değerler (Default Values)

Bir alan (*field*) tanımlandığında her zaman bir değer atanması gerekmez. Tanımlanan ancak başlatılmayan alanlara derleyici tarafından makul bir varsayılan değer atanır. Genel olarak bu varsayılan değer, veri türüne bağlı olarak sıfır veya null olur. Ancak bu tür varsayılan değerlere güvenmek genellikle kötü bir programlama tarzı olarak kabul edilir.

Aşağıdaki tablo, yukarıdaki veri türleri için varsayılan değerleri özetlemektedir.

| Veri Tipi | Varsayılan Değer (Alanlar İçin) |
| :--- | :--- |
| byte, short, int | 0 |
| long | 0L |
| float | 0.0f |
| double | 0.0d |
| char | '\u0000' |
| String (veya herhangi bir nesne) | null |
| boolean | false |

Yerel değişkenler biraz farklı davranır; derleyici, yerel değişkenlere hiçbir zaman otomatik olarak varsayılan bir değer atamaz. Yerel değişkeninizi bildirildiği yerde değer atamıyorsanız, onu kullanmaya çalışmadan önce mutlaka bir değer atayın. Değer atanmamış bir yerel değişkene erişmek derleme zamanı (compiler time) hatasına yol açar.

---

## Değişmez Değerler (Literals)

`new` anahtar sözcüğünün ilkel türde bir değişken oluştururken kullanılmadığını fark etmiş olabilirsiniz. İlkel türler, dile yerleşik özel veri türleridir; bir sınıftan oluşturulan nesneler değildir. Bir sabit, sabit bir değerin kaynak kodu gösterimidir; sabitler hesaplama gerektirmeden doğrudan kodunuzda gösterilir. Aşağıda gösterildiği gibi, bir ilkel türdeki değişkene bir sabit atamak mümkündür:
```java
boolean result = true;
char capitalC = 'C';
byte b = 100;
short s = 10000;
int i = 100000;
```

### Tamsayı Literalleri (Integer Literals)
Bir tamsayı sabiti, L veya l harfiyle bitiyorsa long türündedir; aksi takdirde int türündedir. Küçük harf l'nin 1 rakamından ayırt edilmesi zor olduğundan, büyük harf L kullanmanız önerilir.

byte, short, int ve long integral türlerinin değerleri int sabitlerinden oluşturulabilir. int aralığını aşan long türündeki değerler long sabitlerinden oluşturulabilir. Tamsayı sabitleri şu sayı sistemleriyle ifade edilebilir:

```java
// 26 sayısı, ondalık olarak
int decVal = 26;
// 26 sayısı, onaltılık olarak
int hexVal = 0x1a;
// 26 sayısı, ikilik olarak
int binVal = 0b11010;
```

### Kayan Noktalı Sayı Literalleri (Floating-Point Literals)
Bir kayan noktalı sabit, F veya f harfiyle bitiyorsa float türündedir; aksi takdirde türü double'dır ve isteğe bağlı olarak D veya d harfiyle bitebilir.

Kayan noktalı türler (float ve double), E veya e (bilimsel gösterim için), F veya f (32 bitlik float sabiti) ve D veya d (64 bitlik double sabiti; bu varsayılandır ve geleneksel olarak belirtilmez) kullanılarak da ifade edilebilir.

```java
double d1 = 123.4;
double d2 = 1.234e2; // 1.234 * 10^2
float f1 = 123.4f;
```

### Karakter ve String Literalleri (Character and String Literals)
char ve String türlerinin sabitleri herhangi bir Unicode (UTF-16) karakteri içerebilir. Düzenleyiciniz ve dosya sisteminiz buna izin veriyorsa, bu tür karakterleri doğrudan kodunuzda kullanabilirsiniz. Aksi takdirde, '*\u0108*' (şapkalı büyük C-Ĉ) veya "*S\u00Í Se\u00F1or*" (İspanyolcada Sí Señor) gibi bir "Unicode kaçış dizisi (Unicode escape)" kullanabilirsiniz. char sabitleri için her zaman 'tek tırnak', String sabitleri için ise "çift tırnak" kullanın. Unicode kaçış dizileri bir programın başka yerlerinde (örneğin alan adlarında) de kullanılabilir; yalnızca char veya String sabitlerinde kullanılmaları gerekmez

Java programlama dili ayrıca char ve String sabitleri için birkaç özel kaçış dizisini de destekler: `\b` (backspace - geri silme), `\t` (tab - sekme), `\n` (line feed - yeni satır), `\f` (form feed - sayfa sonu), `\r` (carriage return - satır başı), `\"` (çift tırnak), `\'` (tek tırnak) ve `\\` (ters eğik çizgi).

Ayrıca, herhangi bir referans türü için değer olarak kullanılabilen özel bir `null` sabiti de vardır. null, ilkel türdeki değişkenler dışında herhangi bir değişkene atanabilir. Bir null değeriyle, varlığını test etmek dışında yapabileceğiniz pek bir şey yoktur. Bu nedenle, null programlarda genellikle bir nesnenin mevcut olmadığını belirtmek için bir işaretleyici olarak kullanılır.

Son olarak, bir tür adı alınıp ".class" eklenerek oluşturulan class literal adı verilen özel bir literal türü de vardır; örneğin, `String.class`. Bu, türün kendisini temsil eden (Class türündeki) nesneyi ifade eder.

### Sayısal Literallerde Alt Çizgi Karakterlerini Kullanma (Using Underscore Characters in Numeric Literals)
Java SE 7 ve sonraki sürümlerde, sayısal bir sabitte rakamların arasında herhangi sayıda alt çizgi karakteri (_) bulunabilir. Bu özellik, örneğin sayısal sabitlerdeki rakam gruplarını ayırmanıza olanak tanır; bu da kodunuzun okunabilirliğini artırabilir.

Örneğin, kodunuz çok basamaklı sayılar içeriyorsa, rakamları üçlü gruplar halinde ayırmak için alt çizgi karakterini kullanabilirsiniz; tıpkı ayırıcı olarak virgül veya boşluk gibi bir noktalama işareti kullanacağınız gibi.

Aşağıdaki örnek, sayısal sabitlerde alt çizgiyi kullanabileceğiniz diğer yolları gösterir:

```java
long creditCardNumber = 1234_5678_9012_3456L;
long socialSecurityNumber = 999_99_9999L;
float pi =  3.14_15F;
long hexBytes = 0xFF_EC_DE_5E;
long hexWords = 0xCAFE_BABE;
long maxLong = 0x7fff_ffff_ffff_ffffL;
byte nybbles = 0b0010_0101;
long bytes = 0b11010010_01101001_10010100_10010010;
```

Alt çizgileri yalnızca rakamların arasına yerleştirebilirsiniz; alt çizgileri aşağıdaki yerlere yerleştiremezsiniz:
* Bir sayının başında veya sonunda
* Ondalıklı sayı sabitinde ondalık noktasının bitişiğinde
* F veya L son ekinden önce
* Bir rakam dizisinin beklendiği konumlarda

Aşağıdaki örnekler, sayısal sabitlerde alt çizgilerin (vurgulanmış) geçerli ve geçersiz yerleşimlerini göstermektedir:

```java
// <b>Invalid: cannot put underscores</b>
// <b>adjacent to a decimal point</b>
float pi1 = 3_.1415F;
// <b>Invalid: cannot put underscores</b>
// <b>adjacent to a decimal point</b>
float pi2 = 3._1415F;
// <b>Invalid: cannot put underscores</b>
// prior to an L suffix
long socialSecurityNumber1 = 999_99_9999_L;

// OK (decimal literal)
int x1 = 5_2;
// <b>Invalid: cannot put underscores</b>
// <b>At the end of a literal</b>
int x2 = 52_;
// OK (decimal literal)
int x3 = 5_______2;

// <b>Invalid: cannot put underscores</b>
// <b>in the 0x radix prefix</b>
int x4 = 0_x52;
// <b>Invalid: cannot put underscores</b>
// <b>at the beginning of a number</b>
int x5 = 0x_52;
// OK (hexadecimal literal)
int x6 = 0x5_2; 
// <b>Invalid: cannot put underscores</b>
// <b>at the end of a number</b>
int x7 = 0x52_;
```