import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar'

export const Recipe = () => {

    var navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className='container formStyle' style={{ marginTop: '2rem' }}>
                <h2 style={{ marginBottom: '2rem', marginTop: '2rem', textAlign: 'center', color: 'black' }}>Pratik Tarifler</h2>
                <h4>Pancar Salatası Tarifi İçin Malzemeler</h4>
                <ul style={{ listStyleType: 'none' }}>
                    <li>3 orta boy pancar</li>
                    <li>Yarım limonun suyu</li>
                    <li>3 yemek kaşığı zeytinyağı</li>
                    <li>Ceviz içi</li>
                    <li>Tuz</li>
                </ul>
                <h4>Pancar Salatası Nasıl Yapılır?</h4>
                <p>
                    Pancarları temizleyip su dolu bir tencereye alın. Pancarlar yumuşayana kadar yaklaşık 25 dakika haşlayın.
                </p>
                <p>Suyu süzüp pancarların kabuğunu soyun. Rendenin iri yanıyla rendeleyip bir kaseye alın.
                    Zeytinyağı ve limon suyunu bir kasede iyice çırpın.
                </p>
                <p>Tuzla tatlandırın. Sosu pancara ekleyip iyice karıştırın. Üzerine ceviz parçaları serpiştirin.</p>
                <p>Kırmızı pancar salatasını, kolayca hazırlanan maklubenin yanında servis edebilirsiniz. Şimdiden afiyet olsun.</p>
                <h4>1 Porsiyon Pancar Salatası Kaç Kaloridir?</h4>
                <p>Pancar salatasının bir porsiyonu, yaklaşık 40 kaloridir. Kısa sürede hazırlanan bu tarifi, diyet listelerine ekleyerek
                    öğle ve akşam öğünlerinde tüketebilirsiniz
                </p>
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://i.lezzet.com.tr/images-xxlarge-recipe/pancar_salatasi-42ebdb05-7bcf-48c1-9861-0c8ebc4f6a91.jpg' />
                <br />
                <h4>Kırmızı Pancar Çorbası Tarifi İçin Malzemeler</h4>
                <ul style={{ listStyleType: 'none' }}>
                    <li>2 adet orta boy kırmızı pancar</li>
                    <li>1 adet orta boy patates</li>
                    <li>1 adet iri havuç</li>
                    <li>1 adet orta boy soğan</li>
                    <li>2-3 diş sarımsak</li>
                    <li>Yarım kahve fincanı zeytinyağı</li>
                    <li>2 su bardağı et suyu</li>
                    <li>2 su bardağı su</li>
                    <li>Tuz</li>
                </ul>
                <br />
                <h4>Kırmızı Pancar Çorbası Nasıl Yapılır?</h4>
                <p>
                    Kırmızı pancarın içerdiği vitamin ve mineraller sayesinde saç dökülmesine sedeften egzamaya ürtiker,
                    kurdeşen ve karaciğer hastalıkları ile vücutta kaşıntının önlenmesinde faydalı olduğu bilinmekle birlikte ayrıca
                    kırmızı pancarın kemik sağlığına ve kas yapısına katkısı da çok fazladır. Bunun yanında kırmızı pancar  aynı zamanda
                    fosfor, demir, bakır, potasyum, magnezyum, kalsiyum, brom, çinko ve manganez bakımından da zengindir. İçinde çok fazla
                    protein barındırır ve  içinde bol miktarda C vitamini vardır. C vitamini genel anlamda vücudun savunma sistemine katkıda
                    bulunur ve bağışıklığı arttırır.
                </p>
                <br />
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://cdn.yemek.com/mncrop/940/625/uploads/2020/02/pancar-corbasi.jpg' />
                <br />
                <p>
                    Ayrıca yapılan araştırmalarda kırmızı pancarın 15 dakikadan daha uzun süre pişirilmemesi gerektiğine işaret edilmiş olup
                    kırmızı pancardaki çok önemli kanser önleyici antioksidanların (betanin ve vulgaxanthin) uzun süre kaynatıldığı zaman
                    büyük oranda azalmakta  ve pancarın bu kanser önleyici antioksidan etkileri önemli miktarda yitirilmektedir.
                </p>
                <br />
                <p>
                    Ve işte bu bilgiler ışığında kırmızı pancarın ister turşusunu ister salatasını ister sıkıp suyunu içerek yada çorbasını
                    yaparak birçok şekilde faydalanabiliriz. Bende evde çocuklar için pancar çorbası yaptım ve sizlerle de paylaşmak istedim;
                </p>
                <br />
                <ul style={{ listStyleType: 'decimal' }}>
                    <li>Öncelikle Pancar, havuç, soğan ve patatesleri soyarak küçük küçük doğruyoruz (uzun süre kaynatmak yararını
                        azaltacağından ben kısa sürede pişirmek için ben düdüklü tencere kullandım)
                    </li>
                    <li>Düdüklü tencerede zeytinyağını çok az kızdıyoruz ve  kızdırdığımız yağa önce soğan ve sarımsaklarımızı atıyoruz.</li>
                    <li>Biraz çevirdikten sonra doğradığımız tüm malzemeleri de ekleyerek 2-3 dakika kavuruyoruz.</li>
                    <li>Daha sonra et suyu ve suyunu ve tuzunu da ekleyip kapağını kapatıyoruz.</li>
                    <li>Düdüklüde 10 dakika kaynattıktan sonra pürüzsüz bir kıvam alana kadar blenderdan geçiriyoruz ve sıcak sıcak servis ediyoruz.</li>
                </ul>
                <br />
                <br />
                <h4>Kırmızı Pancar Cacığı Nasıl Yapılır?</h4>
                <ul style={{ listStyleType: 'none' }}>
                    <li>3 orta boy pancar</li>
                    <li>3 su bardağı içme suyu</li>
                    <li>1 yemek kaşığı zeytinyağı</li>
                    <li>1 çay kaşığı tuz</li>
                </ul>
                <h4>Cacık İçin: </h4>
                <ul style={{ listStyleType: 'none' }}>
                    <li>4 yemek kaşığı süzme yoğurt</li>
                    <li>6 yemek kaşığı pancar suyu</li>
                    <li>1/2 (yarım) çay kaşığı tuz</li>
                    <li>3 yemek kaşığı pancar taneleri</li>
                    <li>3 yaprak nane (süslemek için)</li>
                </ul>
                <br />
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://cdn.yemek.com/mnresize/940/940/uploads/2020/03/pancar-cacigi.jpg' />
                <br />
                <div className='col' style={{ textAlign: 'center' }}>
                    <button class="btn btn-dark btn-sm" style={{ marginBottom: '2rem', marginRight: '3rem' }}
                        onClick={(e) => { navigate("/") }}>Ana Sayfaya Dön
                    </button>
                </div>
            </div>
        </div>
    )
}
