import React, { useState, useRef } from 'react'
import '../Style/login.css';
import 'font-awesome/css/font-awesome.min.css';
import { Api } from './Api'
import { useNavigate } from 'react-router';
import {
    faTwitter,
    faInstagram,
    faLinkedin,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../image/diyetegel.jpg'

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

    const wrongInfoRef = useRef();

    var navigate = useNavigate();

    const handleLoginSubmit = (loginInfo) => {
        Api().post(
            `api/v1/user/login`, loginInfo
        ).then((res) => {
            if (res.data.success == true) {
                navigate('/');
                wrongInfoRef.current.classList.add("d-none");
            }
            else if (res.data.success == false) {
                wrongInfoRef.current.classList.remove("d-none");
            }
        });
    }

    const handleOnChange = (event) => {
        setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
    }

    return (
        <div className="area">
            <div className='row'>
                <div className='col-sm'>
                    <span className='diyetegel'>Diyetegel!</span>
                </div>
                <div className='col-sm'>
                    <img
                        style={{
                            position: 'absolute',
                            right: '180px',
                            top: '-4rem',
                            width: "350px"
                        }} src={img} />
                </div>
            </div>

            <div className="container" id="container" style={{ marginTop: '7rem' }}>
                <div className="form-container sign-in-container">
                    <form className="form" onSubmit={(e) => {
                        e.preventDefault();
                        handleLoginSubmit(loginInfo)
                    }}>
                        <div class="row d-none" ref={wrongInfoRef} style={{ marginBottom: '2rem' }}>
                            <div class="d-flex justify-content-center">
                                <div class="card text-center"
                                    style={{
                                        width: '30rem',
                                        borderRadius: '1rem'
                                    }}>
                                    <div class="card-body">
                                        Bilgiler Hatalı
                                    </div>
                                </div>
                            </div>
                        </div>


                        <h2 className="h1">Giriş Yap</h2>
                        <br />
                        <input className="input" type="email" placeholder="Email" name="email" onChange={handleOnChange} value={loginInfo.email} />
                        <input className="input" type="password" placeholder="Şifre" name="password" onChange={handleOnChange} value={loginInfo.password} />
                        <br />
                        <button className="button" type="submit">Giriş</button>
                        <br />
                        <div className="row">
                            <div className="col-sm" style={{ textAlign: 'center' }}>
                                <a style={{ marginRight: '1rem', cursor: 'pointer', color: 'purple' }} href='https://www.instagram.com/diyetegell/'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                            </div>
                            <div className="col-sm" style={{ textAlign: 'center' }}>
                                <a style={{ marginRight: '1rem', cursor: 'pointer', color: '#0007c7' }} href='https://www.facebook.com/profile.php?id=100075940522856'><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                            </div>
                            <div className="col-sm" style={{ textAlign: 'center' }}>
                                <a style={{ marginRight: '1rem', cursor: 'pointer', color: '#00d4ff' }} href='https://mobile.twitter.com/diyetegell'><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-right">
                            <h1 className="h1" style={{ color: 'white' }}>Hoş Geldin!</h1>
                            <p className="p">Henüz hesabın yok mu?</p>
                            <p className="p">Hemen aramıza katıl!</p>
                            <button className="button ghost x-button" id="signUp" onClick={() => { navigate('/register') }}>KAydol</button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Login