import React, { useState } from 'react'
import { Api } from './Api'
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from './Navbar';

export const UpdateAddress = () => {
    const [updateAddressInformation, setUpdateAddressInformation] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        phone: "",
        country: "",
        city: "",
        address: "",
        postalCode: ""
    });
    let { id } = useParams();
    const navigate = useNavigate();

    const changeAddressInfos = (updateAddressInformation) => {
        Api().post(
            `api/v1/user/billing-address/put/${id}`, updateAddressInformation
        ).then((res) => {
            if (res.data.success == true) {
                navigate('/profile');
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const handleOnAddressChange = (event) => {
        setUpdateAddressInformation({ ...updateAddressInformation, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <Navbar />
            <div className='container formStyle'
                style={{
                    marginTop: '2rem',
                    paddingBottom: '6.8rem',
                    paddingTop: '5rem',
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                }}>
                <p style={{ textAlign: 'center', color: 'black' }}>Adres Güncelle</p>
                <form className="form formStyle"
                    //style={{ backgroundColor: "#d9bebe" }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        changeAddressInfos(updateAddressInformation)
                    }}>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>İsim </label>
                        <input type="text" className="form-control input-sm" id="firstName"
                            name="firstName" placeholder="Merve" onChange={handleOnAddressChange} value={updateAddressInformation.firstName} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Soyisim </label>
                        <input type="text" className="form-control input-sm" id="lastName"
                            name="lastName" placeholder="Bulut" onChange={handleOnAddressChange} value={updateAddressInformation.lastName} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label>Email </label>
                        <input type="email" className="form-control input-sm" id="mail"
                            name="mail" placeholder="example@mail.com" onChange={handleOnAddressChange} value={updateAddressInformation.mail} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Telefon </label>
                        <input type="number" className="form-control input-sm" id="phone"
                            name="phone" placeholder="örn: 5553336688" onChange={handleOnAddressChange} value={updateAddressInformation.phone} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Ülke </label>
                        <input type="text" className="form-control input-sm" id="country"
                            name="country" placeholder="örn: Türkiye" onChange={handleOnAddressChange} value={updateAddressInformation.country} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>İl </label>
                        <input type="text" className="form-control input-sm" id="city"
                            name="city" placeholder="örn: İstanbul" onChange={handleOnAddressChange} value={updateAddressInformation.city} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Adres </label>
                        <input type="text" className="form-control input-sm" id="address"
                            name="address" placeholder="Örn: X. Mahallesi Y. Sk." onChange={handleOnAddressChange} value={updateAddressInformation.address} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Posta Kodu </label>
                        <input type="number" className="form-control input-sm" id="postalCode"
                            name="postalCode" placeholder="örn: 34000" onChange={handleOnAddressChange} value={updateAddressInformation.postalCode} />
                    </div>
                    <button type="submit" className="btn btn-outline-light">Kaydet</button>
                </form>
            </div>
        </div >
    )
}
