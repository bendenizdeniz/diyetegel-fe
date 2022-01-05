import React from 'react'
import { useNavigate } from 'react-router';
import { Navbar } from './Navbar';
import img from '../image/odeme.png'
const Home = () => {

    return (
        <div>
            <Navbar />
            <div className="container" style={{ marginTop: '1rem', backgroundColor: "#108c24", borderRadius: '2rem', color: 'white' }}>
                <div className="row">
                    <div className="col-sm">
                        <img style={{ marginTop: '1.7rem', marginLeft: '1rem', borderRadius: '2rem', }} src="https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHByZXNlbnRhdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-sm">
                        <div style={{ marginTop: '1rem', backgroundColor: "#06340d", borderRadius: '2rem', color: 'white', marginTop: '8rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
                            <h5 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Sağlığınıza Uygun Öğün Kombinasyonları</h5>
                            <p className="card-text" style={{ textAlign: 'center' }}>Vücut kitle indeksinize göre size özel yemek önerileri sunuyoruz.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container" style={{ marginTop: '1rem', backgroundColor: "#abaf16", borderRadius: '2rem', color: 'white' }}>
                <div className="row">
                    <div className="col-sm">
                        <div style={{ backgroundColor: "#7d8114", borderRadius: '2rem', color: 'white', marginTop: '5rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
                            <h5 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Neden Biz?</h5>
                            <ul style={{ listStyleType: 'square' }}>
                                <li>Lezzetli</li>
                                <li>Dürüst </li>
                                <li>Sağlıklı</li>
                            </ul>
                            <p className="card-text" style={{ textAlign: 'center', marginTop: '1rem' }}>İştahınızı kabartan ve günlük kalori miktarınıza uygun öğünler sunuyoruz. </p>
                        </div>
                    </div>
                    <div className="col-sm">
                        <img style={{ marginTop: '4rem', borderRadius: '2rem', }} src="https://wallpaperaccess.com/full/1737971.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
            <br />
            <div className="container" style={{ marginTop: '1rem', backgroundColor: "#c40f34", borderRadius: '2rem', color: 'white' }}>
                <div className="row">
                    <div className="col-sm">
                        <img style={{ marginTop: '3rem', marginLeft: '1rem', borderRadius: '2rem', }} src="https://cdn.wallpapersafari.com/76/37/lYEcUg.jpg" className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="col-sm">
                        <div style={{ backgroundColor: "#590617", borderRadius: '2rem', color: 'white', marginLeft: '1rem', marginTop: '7rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
                            <h5 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Kalori Takibiyle Sürekli Destek</h5>
                            <p className="card-text" style={{ textAlign: 'center' }}>Sağlığın değerliyse, ne yediğin önemlidir.</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="container" style={{ marginTop: '1rem', backgroundColor: "#3639dd", borderRadius: '2rem', color: 'white' }}>
                <div className="row">
                    <div className="col-sm">
                        <div style={{ backgroundColor: "#0a0b4e", borderRadius: '2rem', color: 'white', marginLeft: '1.5rem', marginTop: '7.5rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
                            <h5 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Güvenli Hizmet</h5>
                            <p className="card-text" style={{ textAlign: 'center' }}>256 bit SSL şifreleme ile güvenle alışveriş yapın.</p>
                        </div>
                    </div>
                    <div className="col-sm" style={{ paddingRight: '3.2rem' }}>
                        <img style={{ marginTop: '4.5rem', marginLeft: '1rem', borderRadius: '2rem', }}
                            src={img} className="img-fluid" alt="Responsive image" />
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default Home
