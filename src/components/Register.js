import React, { useState } from 'react'
import '../Style/login.css';
import 'font-awesome/css/font-awesome.min.css';
import { Api } from './Api'
import { useNavigate } from 'react-router';
import {
    faTwitter,
    faInstagram,
    faFacebook
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img from '../image/diyetegel.jpg'

const Register = () => {
    const [registerInfo, setregisterInfo] = useState({ name: "", surname: "", phone: "", email: "", password: "" });
    var navigate = useNavigate();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const handleRegisterSubmit = (registerInfo) => {
        Api().post(
            `api/v1/user/register`, registerInfo
        ).then((res) => {
            if (res.data.success == true)
                navigate('/')
        });
    }

    const handleOnChange = (event) => {
        setregisterInfo({ ...registerInfo, [event.target.name]: event.target.value });
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
                <div className="form-container sign-in-container" >
                    <form className="form" onSubmit={(e) => {
                        e.preventDefault();
                        handleRegisterSubmit(registerInfo)
                    }}
                    >
                        <h2>Kaydol</h2>
                        <input className="input" type="text" placeholder="İsim" name="name" onChange={handleOnChange} value={registerInfo.name} />
                        <input className="input" type="text" placeholder="Soyisim" name="surname" onChange={handleOnChange} value={registerInfo.surname} />
                        <input className="input" type="number" placeholder="Telefon" name="phone" onChange={handleOnChange} value={registerInfo.phone} />
                        <input className="input" type="email" placeholder="Email" name="email" onChange={handleOnChange} value={registerInfo.email} />
                        <input className="input" type="password" placeholder="Şifre" name="password" onChange={handleOnChange} value={registerInfo.password} />
                        <br />
                        <button className="button" type="submit">Kaydol</button>
                        <div className="row" style={{ marginBottom: '-2rem', marginTop: '0.5rem' }}>
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
                            <h1 className="h1" style={{ color: 'white' }} >Hoş Geldin!</h1>
                            <p className="p" >Zaten bir hesabın var mı?</p>
                            <p className="p"> Hemen giriş yap!</p>
                            <button className="button ghost x-button" id="signUp" onClick={() => { navigate('/login') }}>giriş</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register