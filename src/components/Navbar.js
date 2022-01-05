import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Api } from './Api'
import '../Style/nav.css';
import img from '../image/diyetegel.png'

export const Navbar = () => {
    var navigate = useNavigate();
    const [userSession, setUserSession] = useState({ name: "", sirName: "" });

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        Api().get(
            `api/v1/user/info`
        ).then((res) => {
            if (res.data.success == true) {
                setIsLoggedIn(true);
                const infos = res.data.data;
                setUserSession({
                    name: infos.name,
                    sirName: infos.sirName
                });
            }
            else if (res.data.success == null) {
                setIsLoggedIn(false);
            }
        }).catch(err => {
            console.log(err);
        });;
    }, [])

    const logout = () => {
        Api().post(
            `api/v1/user/logout`
        ).then((res) => {
            if (res.data.success == true) {
                setIsLoggedIn(false);
                navigate('/');
            }

        });
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ebebeb' }}>
                <img src={img} style={{ width: '3.5rem', marginLeft: '1rem', marginRight: '1rem' }} />
                <a className="navbar-brand" href="/">Diyetegel</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Ana Sayfa <span class="sr-only">(current)</span></a>
                        </li>
                        {
                            isLoggedIn ?
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/profile">Profil</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/calculator">Size Özel Menü</a>
                                    </li>
                                </>
                                :
                                null
                        }
                        <li className="nav-item">
                            <a className="nav-link" href="/allFoods">Yemek Sepetimiz</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/communucate">İletişim</a>
                        </li>
                    </ul>

                </div>
                {isLoggedIn ?
                    <>
                        <h5 style={{ marginRight: '1rem', marginTop: '0.5rem' }}>{userSession.name} {userSession.sirName}</h5>
                        <form>
                            <button
                                style={{ marginRight: '2rem', color: 'white' }}
                                class="btn btn-sm my-2 my-sm-0 button"
                                type="submit"
                                onClick={(e) => { e.preventDefault(); logout(); }}
                            >Oturumu Kapat</button>
                        </form>
                    </>
                    :
                    <form>
                        <button
                            style={{ marginRight: '2rem', color: 'white' }}
                            class="btn btn-sm my-2 my-sm-0 button"
                            type="submit"
                            onClick={(e) => { e.preventDefault(); navigate("/login"); }}
                        >Giriş Yap</button>
                        <button
                            style={{ marginRight: '2rem', color: 'white' }}
                            class="btn btn-sm my-2 my-sm-0 button"
                            type="submit"
                            onClick={(e) => { e.preventDefault(); navigate("/register"); }}
                        >Kaydol</button>
                    </form>
                }
            </nav>
        </div>
    )
}
