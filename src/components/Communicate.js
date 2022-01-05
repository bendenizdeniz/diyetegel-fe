import React from 'react'
import { useNavigate } from 'react-router';
import img from '../image/diyetegel.jpg'
import '../Style/contact.css';
import { Navbar } from './Navbar';

const Communicate = () => {
    var navigate = useNavigate();

    return (
        <div style={{ paddingBottom: '11.2rem' }}>
            <div className='body'>
                <Navbar />
                <br />

                <div className="container-sm formStyle" style={{ marginTop: '1rem', borderRadius: '2rem', color: 'black', marginTop: '5rem' }}>
                    <div className="row">
                        <div className="col-md-4 p-5">
                            <img style={{ marginTop: '4rem', marginLeft: '3rem', borderRadius: '2rem', }}
                                src={img} class="img-fluid" alt="Responsive image" />
                            <p style={{ textAlign: 'center', marginTop: '1rem', marginLeft: '5.5rem' }}>Akaretler 23.Beşiktaş, İstanbul</p>
                            <p style={{ textAlign: 'center', marginTop: '1rem', marginLeft: '5.5rem' }}>
                                diyetegel0@gmail.com</p>
                            <p style={{ textAlign: 'center', marginTop: '1rem', marginLeft: '5.5rem' }}>
                                +90 212 222 22 22</p>
                            <p style={{ textAlign: 'center', marginTop: '1rem', marginLeft: '5.5rem' }}>
                                +90 555 555 55 55</p>

                        </div>
                        <div className="col">
                            <div style={{ borderRadius: '2rem', color: 'black', paddingTop: '4rem' }}>
                                <div className="row">
                                    <div className='col-sm'>
                                        <div className="wrapper centered">
                                            <article className="letter">
                                                <h5 style={{ textAlign: 'center' }}>İletişime Geçin</h5>
                                                <div className="side">

                                                    <p className='p'>
                                                        <textarea className='textarea' placeholder="İletmek istediğiniz mesajı yazınız..."></textarea>
                                                    </p>
                                                </div>
                                                <div className="side">
                                                    <p className='p'>
                                                        <input className='input' type="email" placeholder="Email" />
                                                    </p>
                                                    <p className='p'>
                                                        <input className='input' type="number" placeholder="Telefon" />
                                                    </p>
                                                    <p className='p'>
                                                        <button className='button y-button' id="sendLetter" onClick={(e) => { alert("Geri dönüşünüz için teşekkürler!"); navigate('/') }}>Gönder</button>
                                                    </p>
                                                </div>
                                            </article>
                                            <div className="envelope front"></div>
                                            <div className="envelope back"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Communicate
