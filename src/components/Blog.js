import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Api } from './Api';
import { Navbar } from './Navbar'

export const Blog = () => {
    const [flag, setflag] = useState(false);
    var navigate = useNavigate();

    useEffect(() => {
        Api().get(
            `api/v1/user/info`
        ).then((res) => {
            if (res.data.success == true) {
                setflag(true);
            }
            else if (res.data.success == false) {
                setflag(false);
            }
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container formStyle' style={{ marginTop: '2rem' }}>
                <h2 style={{ marginBottom: '2rem', marginTop: '2rem', textAlign: 'center', color: 'black' }}>Blog</h2>
                <button class="btn btn-dark btn-sm" style={{ marginLeft: '72rem', marginTop: '2rem', marginBottom: '2rem' }} onClick={(e) => { navigate("/socialNews") }}>Askıda Mama Projemiz</button>
                <h4>Diyabet Hastaları için Beslenme Önerileri</h4>
                <p>Diyabet hastaları diyabet diyeti yapması gereken hastalardır. Diyabet diyeti kısıtlayıcı bir diyet olmamakla beraber
                    besleyici gıdalar bakımından zengin, meyve ve sebze içeren, tam tahıl ağırlıklı bir beslenme planıdır.
                    Farklı besin gruplarından az miktarda tüketmeye odaklı bir beslenme biçimidir. Bu haftaki blog yazımızda sizlerle diyabet
                    hastalığı diyeti hakkındaki detayları paylaşacağız.
                </p>
                <br />
                <h4>Diyabet Hastalarının Tüketmesi Gereken Yiyecekler</h4>
                <br />
                <p>
                    <h5>
                        Sağlıklı (Kompleks) Karbonhidratlar:
                    </h5>
                    Karbonhidratlar yaşam için gerekli olan üç ana besin grubundan biridir.
                    Vücudun enerji kaynağıdır. Ayrıca karbonhidratlar protein ve yağlara göre glukoz düzeyleri üzerinde rol oynayan besinlerdir.
                    Karbonhidrat olmadan sağlıklı bir beslenme biçimi oluşturulamaz. Gıdalarla alınan karbonhidratlar vücutta glikoza dönüşmektedir.
                    Kompleks karbonhidrat yıkımı uzun sürede gerçekleşmektedir. Yavaş sindirilir ve bu yüzden emilim daha yavaş ve dengelidir.
                    Basit karbonhidrat tüketimi ile birlikte ani kan şekeri yükselmesi ve aşırı insülin salınımı görülmemektedir.
                    Uzun süre tokluk hissi verirler. Beyaz ekmek ve makarna gibi gıdalar yerine sebze ve tam tahıllı ürünler tüketilmelidir.
                </p>
                <br />
                <h5>Lifli Gıdalar </h5>
                <p>
                    Bitkisel kaynaklı gıdaların emilmeyen ve sindirilmeyen kısmıdır. Kabukluk yemişler ve kurubaklagiller bu grup içinde yer almaktadır.
                </p>
                <h5>Balık</h5>
                <p>Haftada en az 2 kere balık tüketilmelidir. Balık Omega 3 yağ asitleri içerir. Izgara olarak tüketilebilir. </p>
                <h5>İyi Yağlar </h5>
                <p>Doymamış yağlar tüketilmelidir. Zeytinyağı ve badem yağı gibi yağlar beslenme planında olmalıdır.
                    Fakat kalori bakımından yüksek olduğu için dikkatli olunmalıdır.
                </p>
                <br />
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://iasbh.tmgrup.com.tr/eb7293/0/0/0/0/0/0?u=http://i.sabah.com.tr/sb/fotohaber/saglik/saglikli-diye-yedigimiz-meyve-sebzeler-de-aslinda-bizi-zehirliyor/4.jpg' />
                <br />
                <h4>Diyabet Hastalarının Tüketmemesi Gereken Yiyecekler</h4>
                <br />
                <h5>Doymuş Yağlar </h5>
                <p>Sosis, salam gibi proteinler, yağ içerikli süt ürünleri tüketilmemelidir. </p>
                <h5>Kolesterol</h5>
                <p>İşlenmiş gıdalar ve margarin tüketilmemelidir. </p>
                <h5>Trans Yağlar</h5>
                <p>İşlenmiş gıdalar ve margarin tüketilmemelidir. </p>
                <h5>Tuz</h5>
                <p>Bir çay kaşığını geçmemelidir. Sodyum böbreklerdeki glikoz emilimini etkiler. </p>
                <br />
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://www.diyetasistan.com/files/en-saglikli-13-kok-sebzesi%20(1).jpg' />
                <br />
                <h4>Şeker Hastalarının Dikkat Etmesi Gerekenler</h4>
                <br />
                <ul style={{ listStyleType: 'none' }}>
                    <li>Diyabetik ürünlere ihtiyacınız yoktur.</li>
                    <li>Besin grupları ile sağlıklı beslenmelisiniz. </li>
                    <li>Kompleks karbonhidrat ve lif alımını artırın. </li>
                    <li>Nişastasız sebze tüketin.</li>
                    <li>Az işlenmiş tahıl tercih edin. </li>
                    <li>Patates ve makarna gibi karbonhidratlardan kaçının.</li>
                    <li>Tuzu, şekeri ve yağı az kullanın. </li>
                    <li>Balık gibi sağlıklı etleri tercih edin. </li>
                    <li>Paketlenmiş gıda tüketiminizi azaltın. </li>
                    <li>Yemeklerinizi yavaş yiyin. </li>
                    <li>Tokluk hissedince yemek yemeyi bırakın.</li>
                </ul>
                <br />
                <h4>Şekeri Hayatınızdan Çıkarmak için Yapabilecekleriniz</h4>
                <br />
                <ul style={{ listStyleType: 'none' }}>
                    <li>Meyve suyu yerine meyve tercih edin.</li>
                    <li>Hindistan cevizi gibi tatlı hissi veren seçeneklere yönelin. </li>
                    <li>Meyveli süt gibi karışımlar tercih edin. </li>
                    <li>Kuru meyve tüketin.</li>
                </ul>
                <h4>Kan Şekerini Düzenleyen Gıdalar</h4>
                <ul style={{ listStyleType: 'none' }}>
                    <li>Tarçın</li>
                    <li>Enginar</li>
                    <li>Kereviz</li>
                    <li>Soğan</li>
                    <li>Greyfurt</li>
                    <li>Ananas</li>
                    <li>Sirke</li>
                    <li>Yaban Mersini</li>
                    <li>Tüm Baharatlar</li>
                </ul>
                <br />
                <h4>Diyet Yaparken Hangi Meyveler Tercih Edilmeli</h4>
                <br />
                <p>
                    Meyve; bitkilerde çiçeğin döllenmesinden sonra yumurtalığın gelişmesiyle oluşan tohumları taşıyan, genellikle yenebilen organ,
                    yemiş olarak tanımlanır.
                </p>
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://mutluyasaminsirlari.com/wp-content/uploads/2020/02/mutlu-eden-meyveler-turker-taktak.jpg' />
                <p>
                    Meyve suları günlük enerji tüketimine katkı sağlar, ancak diyet posası açısından yetersizdir.
                    Meyve sularının genellikle asidik olması nedeniyle sık tüketimleri diş erozyonuna neden olabilir.
                    Ayrıca kurutulmuş meyveler diş çürüğü riskini arttırabileceğinden meyve suyu ve kurutulmuş meyve tüketimi sınırlandırılmalıdır.
                    Meyve suyu tüketiminde şeker ilavesi yapılmamalı, taze hazırlanmış ve bekletilmemiş olanlar tüketilmelidir.
                </p>
                <br />
                <h4>Diyet Yaparken Tüketilebilecek Meyveler ve Miktarları</h4>
                <br />
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Meyve</th>
                            <th scope="col">Ölçü/Miktar(gr)</th>
                            <th scope="col">Enerji(kkal)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="col">Ayva</td>
                            <td scope="col">1/3 orta boy</td>
                            <td scope="col">114</td>
                        </tr>
                        <tr>
                            <td scope="col">Çilek</td>
                            <td scope="col">12-14 adet orta boy</td>
                            <td scope="col">42</td>
                        </tr>
                        <tr>
                            <td scope="col">Elma</td>
                            <td scope="col">1/2 büyük boy</td>
                            <td scope="col">36</td>
                        </tr>
                        <tr>
                            <td scope="col">Kırmızı Erik</td>
                            <td scope="col">5 orta boy</td>
                            <td scope="col">95</td>
                        </tr>
                        <tr>
                            <td scope="col">Greyfurt</td>
                            <td scope="col">1/2 orta boy</td>
                            <td scope="col">75</td>
                        </tr>
                        <tr>
                            <td scope="col">İncir (taze)</td>
                            <td scope="col">1 küçük boy</td>
                            <td scope="col">37</td>
                        </tr>
                        <tr>
                            <td scope="col">Kavun</td>
                            <td scope="col">1/10 küçük boy</td>
                            <td scope="col">50</td>
                        </tr>
                        <tr>
                            <td scope="col">Mandalina</td>
                            <td scope="col">1 büyük boy</td>
                            <td scope="col">80</td>
                        </tr>
                        <tr>
                            <td scope="col">Vişne</td>
                            <td scope="col">20 tane</td>
                            <td scope="col">61</td>
                        </tr>
                        <tr>
                            <td scope="col">Muz</td>
                            <td scope="col">1/2 orta boy</td>
                            <td scope="col">76</td>
                        </tr>
                    </tbody>
                </table>
                <h4>Suyun Büyük Önemi</h4>
                <p>Vücudumuzun gün içinde bol bol suya ihtiyacı olduğunu, bardaklar dolusu su içip sürahiler devirmemiz gerektiğini artık bilmeyen kalmadı.
                    Ancak hala az bilinen ya da yanlış yapılan bir sorun var bu konuyla ilgili: Su, aslında ne zaman içilmeli?
                    "Su içmenin de zamanı mı olurmuş canım, susarsın ve içersin, işte bu kadar!" diye düşünmeyin, zira iş sandığınızdan biraz daha karışık.
                    Spor yaparken kramp girmemesi için ya da yanlış zamanda su içip midenizi şişirmemek için bu noktaları bilmenizde fayda var.
                </p>
                <br />
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://i2.milimaj.com/i/milliyet/75/1200x675/5ca1c6ef45d2a0296418ec13.jpg' />
                <br />
                <h4>Yemek Yerken Su İçmemelisiniz</h4>
                <br />
                <p>
                    Yemek yerken birkaç lokmada bir su içmek pek de doğru değil. Bu, zayıflamak isteyen bazı insanlara önerilen bir yöntem olsa da aslında
                    sindirim sistemine zarar verebiliyor. Çünkü su, midenizdeki hidroklorik asidi seyreltiyor ve sindirimi hızlandırıyor.
                    Eğer yemek yerken su içerseniz muhtemelen karnınız şişecek, gaz problemi oluşacak ve kendinizi rahatsız hissedeceksiniz.
                </p>
                <br />
                <h4>
                    Yemek Yemeden Önce Su İçmelisiniz
                </h4>
                <br />
                <p>
                    Aslında birçok uzmanın önerdiği ve yine zayıflamak isteyenlerin sıklıkla başvurduğu "yemeklerden önce su içme" durumu oldukça
                    sağlıklı bulunuyor. Çünkü su, tokluk hissi oluşturuyor ve bu sayede su içtikten en az yarım saat sonra yiyeceğiniz yemeği aç
                    olsanız dahi az yiyorsunuz. Mideniz yorulmuyor, fazla kalori almıyorsunuz. Tabii tekrar etmekte fayda var: Yemeklerden önce su
                    içecekseniz en az yarım saat önce içmelisiniz, yemek yemeye başlamadan hemen önce değil.
                </p>
                <br />
                <h4>Yoğun Şekilde Spor Yaparken Su İçmemelisiniz</h4>
                <br />
                <p>
                    Spor yaparken su ihtiyacınız en üst seviyeye ulaşıyor olabilir, şöyle kısa bir ara verip bir şişe suyu bir solukta bitirmek
                    isteyebilirsiniz ama YAPMAYIN. Çünkü bu, oldukça zararlı sonuçlar doğurabilir.
                    Neden derseniz hemen açıklayalım: Vücudumuzun kramp gibi sorunlarla karşılaşmaması için potasyum, sodyum gibi elektrolitlere
                    ihtiyacı vardır. Çok fazla su içmek elektrolit stoğunuzu seyreltir ve kramplara neden olabilir. Terlediğinizde de su ve sodyum
                    kaybedersiniz. Bunları geri almak için Hindistan cevizi suyu gibi içecekler sudan daha fazla yardımcı olabilir.
                </p>
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://www.marsu.com.tr/wp-content/uploads/2020/06/su-icmek-zayiflatir-mi.jpg' />
                <br />
                <h4>Güne Başlarken Su İçmelisiniz</h4>
                <br />
                <p>
                    Boş karnına su içmekle ilgili endişeleriniz varsa olmasın. Zira birçok uzmana göre sabah uyandıktan sonra su içmek oldukça faydalı. Sabah içeceğiniz su, metabolizmanızı hızlandırmakla kalmıyor, aynı zamanda sindirime de yardımcı oluyor. Özellikle kilo alımını engellemek isteyenler için bire bir olduğu söyleniyor.
                    Japon kültüründe oldukça yaygın olan, sabah uyanır uyanmaz bardaklar dolusu su içmek, gözlemleyeceğiniz gibi cilt sağlığı için de
                    oldukça faydalı.
                </p>
                <br />
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://www.drozdogan.com/news-images/Sabahlari-uyanabilmek-ve-gune-guzel-baslamak-icin-ipuclari-660179.jpg' />
                <br />
                <div className='col' style={{ textAlign: 'center' }}>
                    <button class="btn btn-dark btn-sm" style={{ marginBottom: '2rem' }}
                        onClick={(e) => { navigate("/") }}>Ana Sayfaya Dön
                    </button>
                    {
                        flag == true ?
                            <button class="btn btn-dark btn-sm" style={{ marginBottom: '2rem', marginLeft: '3rem' }}
                                onClick={(e) => { navigate("/recipe") }}>Tariflere Göz At
                            </button> : <div></div>
                    }
                </div>
            </div>
        </div >
    )
}
