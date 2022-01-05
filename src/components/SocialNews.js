import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar'

export const SocialNews = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className='container formStyle' style={{ marginTop: '2rem' }}>
                <h2 style={{ marginBottom: '2rem', marginTop: '2rem', textAlign: 'center', color: 'black' }}>Askıya Sen de Bir Mama Bırak </h2>
                <h4>
                    Sosyal Sorumluluk Nedir?
                </h4>
                <br />
                <p>
                    Tüm bireylerin ve yönetimlerin içinde yaşadıkları toplumun yaşam kalitesini iyileştirmek için kendi çalışanları ve
                    onların ailelerinin katılımıyla,  toplumumuzda  sürdürülebilir bir dünya için ekonomik,sosyal kültürel ve çevresel
                    gelişmeye destek verme sorumluluğudur.
                </p>
                <h4>
                    Sokak Hayvanları Kimdir?
                </h4>
                <br />
                <p>
                    Sokak hayvanı olgusu doğa olayı değildir. Sokak hayvanları sokaklarımızda,çöplüklerimizde yaşayan,
                    bizimle birlikte yaşayan kedidir, köpektir. Binlerce yıl önce evcilleştirdiğimiz bir kültür varlığıdır.
                    Hizmetinden yararlandığımız daha sonra sanayi, teknoloji ve buna bağlı olarak metropollerin gelişmesi ve büyümesi ile
                    sokaklara terk ettiğimiz sahipsiz hayvanlardır.
                </p>
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://www.sivilsayfalar.org/wp-content/uploads/2020/04/sokak-hayvanlari-1200x675.jpg' />
                <br />
                <h4>
                    Amacımız
                </h4>
                <br />
                <p>
                    Kimi sokakta doğuyor, kimi sokaklara terk ediliyor. Türkiye’de birçok sahipsiz hayvan sokaklarda yaşamak zorunda kalıyor.
                    Sokak hayvanları en zor şartlar altında hayatta kalmaya çalışıyorlar. Şanslı olanlar hayvan barınaklarına sığınarak nispeten daha
                    iyi ama yine de zor şartlarda yaşıyor. Biz de dostlarımıza yardım eli uzatmaya karar verdik. Pandemi döneminde yiyecek bulmakta
                    zorlanan sokak hayvanlarının beslenme ihtiyaçlarını karşılamayi hedefleyerek yola çıktık.
                    Bu proje hayvan dostlarımızın mutluluğunu hedeflemiş projelerden biridir. Sokaklarda veya barınaklarda yaşayan hayvanları ziyaret
                    edip onları sevmek ve ihtiyaçlarını karşılamak için diyetegel ekibi olarak canla başla uğraşmanın mutluluğunu yaşıyoruz.
                </p>
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://www.anadoluhayat.com.tr/img_content/2c7d5_soguk_3.jpg' />
                <br />
                <h4>
                    Proje Dayanakları
                </h4>
                <br />
                <p>
                    Hayvan Hakları Evrensen Bildirgesi
                </p>
                <p>
                    T.C. 5199 sayılı HAYVANLARI KORUMA KANUNU
                </p>
                <p>
                    Sosyal Sorumluluk Bilinci
                </p>
                <img style={{ width: '40rem', borderRadius: '2rem', position: 'relative', marginLeft: '20rem', marginBottom: '2rem' }}
                    src='https://static.euronews.com/articles/stories/05/87/22/12/1200x675_cmsv2_f25f2c1a-ff95-51a2-a722-312cf6aaf894-5872212.jpg' />
                <div className='col' style={{ textAlign: 'center' }}>
                    <button class="btn btn-dark btn-sm" style={{ marginBottom: '2rem', marginRight: '3rem' }}
                        onClick={(e) => { navigate("/") }}>Ana Sayfaya Dön
                    </button>
                    <button class="btn btn-dark btn-sm" style={{ marginBottom: '2rem' }}
                        onClick={(e) => { navigate("/blog") }}>Bloga Dön
                    </button>
                </div>
            </div>
        </div>
    )
}
