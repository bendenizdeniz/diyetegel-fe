import React, { useState } from 'react'
import { Api } from './Api'
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router';

export const AddAddress = () => {

    const [addressInformation, setAddressInformation] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        phone: "",
        country: "",
        address: "",
        city: "",
        postalCode: ""
    });

    const navigate = useNavigate();

    const changeAddressInfos = (addressInformation) => {
        console.log(addressInformation);
        Api().post(
            `api/v1/user/billing-address/put`, addressInformation
        ).then((res) => {
            if (res.data.success == true) {
                console.log(res.data);
                navigate('/profile');
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const handleOnAddressChange = (event) => {
        setAddressInformation({ ...addressInformation, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <Navbar />
            <div className="container formStyle"
                style={{
                    marginTop: '1rem',
                    paddingBottom: '0.5rem',
                    paddingTop: '2rem',
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                }}>
                <p style={{ textAlign: 'center', color: 'white' }}>Adres Ekle</p>
                <form className="form formStyle"
                    onSubmit={(e) => {
                        e.preventDefault();
                        changeAddressInfos(addressInformation);
                    }}>
                    <div className="form-group">
                        <label style={{ textAlign: 'center', color: 'black' }}>İsim </label>
                        <input type="text" className="form-control input-sm" id="firstName"
                            name="firstName" placeholder="örn: Merve" onChange={handleOnAddressChange} value={addressInformation.firstName} />
                    </div>
                    <br />
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ textAlign: 'center', color: 'black' }}>Soyisim </label>
                        <input type="text" className="form-control input-sm" id="lastName"
                            name="lastName" placeholder="örn: Bulut" onChange={handleOnAddressChange} value={addressInformation.lastName} />
                    </div>
                    <br />
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ textAlign: 'center', color: 'black' }}>E-mail </label>
                        <input type="email" className="form-control input-sm" id="mail"
                            name="mail" placeholder="örn: example@mail.com" onChange={handleOnAddressChange} value={addressInformation.mail} />
                    </div>
                    <br />
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ textAlign: 'center', color: 'black' }}>Telefon </label>
                        <input type="number" className="form-control input-sm" id="phone"
                            name="phone" placeholder="örn: 5355558812" onChange={handleOnAddressChange} value={addressInformation.phone} />
                    </div>
                    <br />
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ textAlign: 'center', color: 'black' }}>Ülke </label>
                        <input type="text" className="form-control input-sm" id="country"
                            name="country" placeholder="örn: Türkiye" onChange={handleOnAddressChange} value={addressInformation.country} />
                    </div>
                    <br />
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ textAlign: 'center', color: 'black' }}>Adres </label>
                        <input type="text" className="form-control input-sm" id="address"
                            name="address" placeholder="örn: x. Mahallesi y. Caddesi" onChange={handleOnAddressChange} value={addressInformation.address} />
                    </div>
                    <br />
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ textAlign: 'center', color: 'black' }}>Şehir </label>
                        <input type="text" className="form-control input-sm" id="city"
                            name="city" placeholder="örn: İstanbul" onChange={handleOnAddressChange} value={addressInformation.city} />
                    </div>
                    <br />
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ textAlign: 'center', color: 'black' }}>Posta Kodu </label>
                        <input type="number" className="form-control input-sm" id="postalCode"
                            name="postalCode" placeholder="örn: 34000" onChange={handleOnAddressChange} value={addressInformation.postalCode} />
                    </div>
                    <button type="submit" className="btn btn-outline-light"
                        style={{ marginTop: '0.7rem' }}>Ekle</button>
                </form>
            </div>
        </div>
    )
}
