import React, { useEffect, useState, useRef } from 'react'
import { Navbar } from './Navbar';
import { Api } from './Api'
import '../Style/nav.css';
import { useNavigate } from 'react-router';

function Calculator() {
    const [userBmiInfo, setUserBmiInfo] = useState({ weight: "", height: "", gender: "", bodyType: "", activityType: "", age: "", });
    const [bmiInfo, setBmiInfo] = useState({ weight: "", height: "", gender: "", bodyType: "", activityType: "", age: "", });
    const [userInfo, setUserInfo] = useState({ email: "", membershipName: "", name: "", phone: "", profileCompleted: "", roleType: "", sirName: "" });
    const [addressInformation, setAddressInformation] = useState([]);
    const [cardInformation, setCardInformation] = useState([]);

    const userInformationRef = useRef();
    const bodyInformationRef = useRef();
    const editBodyInformationRef = useRef();
    const adressInformationRef = useRef();
    const editButtonRef = useRef();

    var navigate = useNavigate();

    useEffect(() => {
        Api().get(
            `api/v1/user/info`
        ).then((res) => {
            if (res.data.success == true) {
                const infos = res.data.data;
                setUserInfo({
                    email: infos.email,
                    membershipName: infos.membershipName,
                    name: infos.name,
                    phone: infos.phone,
                    profileCompleted: infos.profileCompleted,
                    roleType: infos.roleType,
                    sirName: infos.sirName
                })
                    .catch(err => {
                        console.log(err);
                    });
            }
        });
    }, []);

    useEffect(() => {
        Api().get(
            `api/v1/user/profile/get`
        ).then((res) => {
            if (res.data.success == true) {
                const infos = res.data.data;
                setUserBmiInfo({
                    weight: infos.weight,
                    height: infos.height,
                    gender: infos.gender,
                    bodyType: infos.bodyType,
                    activityType: infos.activityType,
                    age: infos.age
                });
            }
        }).catch(err => {
            console.log(err);
        });;
    }, [])

    const getUserBodyInfo = () => {
        Api().get(
            `api/v1/user/billing-address/get`
        ).then((res) => {
            if (res.data.success == true) {
                const infos = res.data.data;
                setAddressInformation(infos);
            }
        }).catch(err => {
            console.log(err);
        });;
    }

    useEffect(() => {
        getUserBodyInfo();
    }, [])

    useEffect(() => {
        Api().get(
            `api/v1/credit-card/get`
        ).then((res) => {
            if (res.data.success == true) {
                const infos = res.data.data;
                setCardInformation(infos);
            }
        }).catch(err => {
            console.log(err);
        });;
    }, [])

    const handleBmiSubmit = (bmiInfo) => {
        Api().post(
            `api/v1/user/profile/set`, bmiInfo
        ).then((res) => {
            if (res.data.success == true)
                window.location.reload();
        });
    }


    const handleOnChange = (event) => {
        setBmiInfo({ ...bmiInfo, [event.target.name]: event.target.value });
    }

    const showForm = () => {
        editBodyInformationRef.current.classList.remove("d-none");
        editButtonRef.current.classList.add("d-none");
    }

    const deleteAddress = (id) => {
        Api().delete(
            `api/v1/user/billing-address/delete/${id}`
        ).then((res) => {
            if (res.data.success == true)
                window.location.reload();
        });
    }

    return (
        <div style={{ paddingBottom: '24.7rem' }}>
            <Navbar />
            <div class="container formStyle" style={{ marginTop: '2rem', paddingRight: '0', paddingLeft: '0' }}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" style={{ cursor: 'pointer' }}
                                    onClick={(e) => {
                                        userInformationRef.current.classList.remove("d-none");
                                        bodyInformationRef.current.classList.add("d-none");
                                        editBodyInformationRef.current.classList.add("d-none");
                                        adressInformationRef.current.classList.add("d-none");
                                    }}>Kullan??c?? Bilgileri <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={(e) => {
                                    bodyInformationRef.current.classList.remove("d-none");
                                    editBodyInformationRef.current.classList.add("d-none");
                                    userInformationRef.current.classList.add("d-none");
                                    adressInformationRef.current.classList.add("d-none");
                                    editButtonRef.current.classList.remove("d-none");
                                }}>Fiziksel ??zellikler </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ cursor: 'pointer' }} onClick={(e) => {
                                    adressInformationRef.current.classList.remove("d-none");
                                    bodyInformationRef.current.classList.add("d-none");
                                    editBodyInformationRef.current.classList.add("d-none");
                                    userInformationRef.current.classList.add("d-none");
                                }}>Adres Bilgileri </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="row">
                    <div class="col-sm formStyle" id="userInformation" ref={userInformationRef}>
                        <div style={{ textAlign: 'center', color: 'black' }}>
                            <div class="card-body formStyle">
                                <div style={{ borderRadius: '2rem', color: 'black', marginLeft: '1.5rem', marginTop: '2rem', paddingTop: '5rem', paddingBottom: '3rem' }}>
                                    <h5 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Kullan??c?? Bilgileri</h5>
                                    <p className="card-text" style={{ textAlign: 'center' }}>??sim Soyisim: {userInfo.name + " " + userInfo.sirName}</p>
                                    <p className="card-text" style={{ textAlign: 'center' }}>Telefon: {userInfo.phone}</p>
                                    <p className="card-text" style={{ textAlign: 'center' }}>Email: {userInfo.email}</p>
                                    {userInfo.membershipName === "MEMBERSHIP_TYPE_0" ?
                                        <p className="card-text" style={{ textAlign: 'center' }}>??yelik: Klasik ??yelik Paketi</p> :
                                        <p className="card-text" style={{ textAlign: 'center' }}>??yelik: Tam Destek ??yelik Paketi</p>
                                    }
                                </div>
                            </div>
                            {userInfo.membershipName ?
                                <button style={{ marginBottom: '1rem', textAlign: 'center' }} className="btn btn-dark" onClick={(e) => { navigate("/buyMembership"); }}>??yelik Paketi G??ncelle</button>
                                :
                                <button style={{ marginBottom: '1rem', textAlign: 'center' }} className="btn btn-dark" onClick={(e) => { navigate("/buyMembership"); }}>??yelik Paketi Sat??n Al</button>
                            }
                            <button style={{ marginBottom: '1rem', textAlign: 'center', marginLeft: '2rem' }} className="btn btn-dark" onClick={(e) => { navigate("/orderHistory"); }}>Sipari?? Ge??mi??im</button>
                        </div>
                    </div>
                    <div class="col-sm d-none formStyle" id="bodyInformation" ref={bodyInformationRef}>
                        <div style={{ marginTop: '1rem', textAlign: 'center', color: 'black', marginBottom: '2rem' }}>
                            <div class="card-body">
                                <div style={{ borderRadius: '2rem', color: 'black', marginLeft: '1.5rem', marginTop: '2rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
                                    <div className="col-sm">
                                        <h5 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '-2rem' }}>V??cut Bilgileri</h5>
                                        <p className="card-text" style={{ textAlign: 'center' }}>Cinsiyet: {userBmiInfo.gender}</p>
                                        <p className="card-text" style={{ textAlign: 'center' }}>Ya??: {userBmiInfo.age}</p>
                                        <p className="card-text" style={{ textAlign: 'center' }}>V??cut Uzunlu??u: {userBmiInfo.height}</p>
                                        <p className="card-text" style={{ textAlign: 'center' }}>V??cut A????rl??????: {userBmiInfo.weight}</p>
                                        <p className="card-text" style={{ textAlign: 'center' }}>V??cut Tipi: {userBmiInfo.bodyType}</p>
                                        <p className="card-text" style={{ textAlign: 'center' }}>Aktivite S??kl??????: {userBmiInfo.activityType}</p>
                                    </div>
                                    <div className="col-sm">
                                        <div class="col-sm d-none" id="editBodyInformation" ref={editBodyInformationRef}>
                                            <div style={{ marginTop: '5rem' }}>
                                                <form className="form formStyle"
                                                    onSubmit={(e) => {
                                                        e.preventDefault();
                                                        handleBmiSubmit(bmiInfo)
                                                    }}>
                                                    <div className="form-group col-5" style={{ marginBottom: "0.5rem" }}>
                                                        <h5 style={{ marginBottom: '1.5rem', marginTop: '-2.5rem' }}>V??cut Bilgilerini G??ncelle</h5>
                                                        <label>Ya?? </label>
                                                        <input type="age" className="form-control input-sm" id="age" name="age"
                                                            placeholder={bmiInfo.age} onChange={handleOnChange} value={bmiInfo.age} />
                                                    </div>
                                                    <div className="form-group col-5" style={{ marginBottom: "0.5rem" }}>
                                                        <label>Boy </label>
                                                        <input type="weight" className="form-control input-sm" id="height" name="height"
                                                            placeholder={bmiInfo.weight} onChange={handleOnChange} value={bmiInfo.height} />
                                                    </div>
                                                    <div className="form-group col-5" style={{ marginBottom: "1rem" }}>
                                                        <label>Kilo </label>
                                                        <input type="weight" className="form-control input-sm" id="weight"
                                                            name="weight" placeholder={bmiInfo.weight} onChange={handleOnChange} value={bmiInfo.weight} />
                                                    </div>
                                                    <div className="col-5" style={{ marginBottom: "1rem" }}>
                                                        <label>Cinsiyet </label>
                                                        <select className="form-select input-sm" value={bmiInfo.gender} name="gender" onChange={handleOnChange}>
                                                            <option selected hidden>{bmiInfo.gender}</option>
                                                            <option value="MALE">Erkek</option>
                                                            <option value="FEMALE">Kad??n</option>
                                                            <option value="UNKNOWN">Belirtmek ??stemiyorum</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-5" style={{ marginBottom: "1rem" }}>
                                                        <label>V??cut Tipi</label>
                                                        <select className="form-select input-xxlarge" value={bmiInfo.bodyType} name="bodyType" onChange={handleOnChange}>
                                                            <option selected hidden>{bmiInfo.bodyType}</option>
                                                            <option value="ENDOMORPH">Endomorf</option>
                                                            <option value="MESOMORPH">Mezomorf</option>
                                                            <option value="ECTOMORPH">Ektomorf</option>
                                                            <option value="UNKNOWN">Belirtmek ??stemiyorum</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-5" style={{ marginBottom: "1rem" }}>
                                                        <label>Aktivite S??kl??????</label>
                                                        <select className="form-select input-sm" value={bmiInfo.activityType} name="activityType" onChange={handleOnChange}>
                                                            <option selected hidden>{bmiInfo.activityType}</option>
                                                            <option value="BMR">Bazal Metabolik Oran (Hareketsiz)</option>
                                                            <option value="SEDENTARY">Az Hareketli (1 G??n)</option>
                                                            <option value="LIGHT">Hafif Hareketli (1-2 G??n)</option>
                                                            <option value="MODERATE">Orta Derece Hareketli(2-3 G??n)</option>
                                                            <option value="ACTIVE">Aktif Hareketli (3-4 G??n)</option>
                                                            <option value="VERY_ACTIVE">??ok Aktif Hareketli (4-5 G??n)</option>
                                                            <option value="EXTRA_ACTIVE">Ekstra Aktif Hareketli (5-6 G??n)</option>
                                                            <option value="UNKNOWN">Belirtmek ??stemiyorum</option>
                                                        </select>
                                                    </div>
                                                    <button type="submit" className="btn btn-dark">Kaydet</button>
                                                    <p className="form-text text-muted">??zel bilgilerinizi kimseyle payla??mayaca????z.</p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" ref={editButtonRef} style={{ marginBottom: '2rem', color: 'white' }} className="btn btn-dark"
                                onClick={(e) => { showForm() }}>D??zenle</button>
                        </div>
                    </div>

                    <div class="col-sm d-none formStyle" id="addressInformation" ref={adressInformationRef}>
                        <div style={{ textAlign: 'center', color: 'black' }}>
                            <div class="card-body formStyle">
                                <div style={{ borderRadius: '2rem', color: 'black', marginLeft: '1.5rem', marginTop: '2rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
                                    <div className="row" style={{ marginBottom: '3rem' }}>
                                        <div className='col-sm'>
                                            <h5 className="card-title" style={{ position: 'absolute', right: '35rem', marginBottom: '2rem' }}>
                                                Adres Bilgileri
                                            </h5>
                                        </div>
                                        <div className='col-sm'><button type="button" style={{ position: 'absolute', right: '3rem' }} className="btn btn-dark"
                                            onClick={(e) => { navigate("/addAddress"); }}>Ekle</button>
                                        </div>
                                    </div>

                                    {addressInformation.map((item, index) => {
                                        return (
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">??sim Soy ??sim</th>
                                                        <th scope="col">Adres</th>
                                                        <th scope="col">??lke</th>
                                                        <th scope="col">??ehir</th>
                                                        <th scope="col">D??zenle</th>
                                                        <th scope="col">Adres Kayd??n?? Sil</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="col">{index + 1}</td>
                                                        <td scope="col">{item.firstName + " " + item.lastName}</td>
                                                        <td scope="col">{item.address}</td>
                                                        <td scope="col">{item.country}</td>
                                                        <td scope="col">{item.city}</td>
                                                        <td scope="row">
                                                            <button className="btn btn-dark" onClick={(e) => { navigate(`/updateAddress/${item.id}`) }}>Detaya Git</button>
                                                        </td>
                                                        <td scope="row">
                                                            <button className="btn btn-danger" onClick={(e) => { deleteAddress(item.id) }}>Sil</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        );
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );

}

export default Calculator
