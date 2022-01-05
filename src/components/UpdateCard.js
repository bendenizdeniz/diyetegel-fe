import React, { useState } from 'react'
import { Api } from './Api'
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from './Navbar';
import '../Style/formStyle.css';

export const UpdateCard = () => {
    const [updateCardInformation, setUpdateCardInformation] = useState({
        cardNumber: "",
        cardHolderName: "",
        cardExpireYear: "",
        cardExpireMonth: "",
        cvc: "",
    });
    let { id } = useParams();
    const navigate = useNavigate();

    const changeCardInfos = (updateCardInformation) => {
        Api().post(
            `/api/v1/credit-card/update/${id}`, updateCardInformation
        ).then((res) => {
            if (res.data.success == true) {
                navigate('/profile');
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const handleOnCardChange = (event) => {
        setUpdateCardInformation({ ...updateCardInformation, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <Navbar />
            <div className='container formStyle'
                style={{
                    marginTop: '2rem',
                    paddingBottom: '14.4rem',
                    paddingTop: '5rem',
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                }}
            >
                <p style={{ textAlign: 'center', color: 'black', marginBottom: '6rem' }}>Kredi Kartı Bilgileri Güncelle</p>
                <form className="form formStyle"
                    onSubmit={(e) => {
                        e.preventDefault();
                        changeCardInfos(updateCardInformation)
                    }}>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Kart Sahibi </label>
                        <input type="text" className="form-control input-sm" id="cardHolderName"
                            name="cardHolderName" placeholder="örn: Merve Bulut" onChange={handleOnCardChange} value={updateCardInformation.cardHolderName} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Kart Numarası </label>
                        <input type="number" className="form-control input-sm" id="cardNumber"
                            name="cardNumber" placeholder="örn: 5555444466667777" onChange={handleOnCardChange} value={updateCardInformation.cardNumber} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Yıl </label>
                        <input type="number" className="form-control input-sm" id="cardExpireYear"
                            name="cardExpireYear" placeholder="örn: 2024" onChange={handleOnCardChange} value={updateCardInformation.cardExpireYear} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Ay</label>
                        <input type="number" className="form-control input-sm" id="cardExpireMonth"
                            name="cardExpireMonth" placeholder="örn: 12" onChange={handleOnCardChange} value={updateCardInformation.cardExpireMonth} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>CVC</label>
                        <input type="number" className="form-control input-sm" id="cvc"
                            name="cvc" placeholder="örn: 666" onChange={handleOnCardChange} value={updateCardInformation.cvc} />
                    </div>
                    <button type="submit" className="btn btn-outline-light" style={{ marginTop: '2rem'}}>Kaydet</button>
                </form>
            </div>
        </div>
    )
}
