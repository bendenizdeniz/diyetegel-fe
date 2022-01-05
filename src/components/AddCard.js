import React, { useState } from 'react'
import { Api } from './Api'
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router';

export const AddCard = () => {

    const [cardInformation, setCardInformation] = useState({
        cardNumber: "",
        cardHolderName: "",
        cardExpireYear: "",
        cardExpireMonth: "",
        cvc: ""
    });

    const navigate = useNavigate();

    const changeCardInfos = (cardInformation) => {
        Api().post(
            `api/v1/credit-card/add`, cardInformation
        ).then((res) => {
            if (res.data.success == true) {
                console.log(cardInformation);
                console.log(res.data);
                navigate('/profile');
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const handleOnCardChange = (event) => {
        setCardInformation({ ...cardInformation, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <Navbar />
            <div className="container formStyle"
                style={{
                    marginTop: '5rem',
                    paddingBottom: '10.96rem',
                    paddingTop: '10rem',
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                    //backgroundColor: "#d9bebe"
                }}>
                <p style={{ textAlign: 'center', color: 'black' }}>Kredi Kartı Ekle</p>
                <form className="form formStyle"
                    //style={{ backgroundColor: "#d9bebe" }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        changeCardInfos(cardInformation);
                    }}>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Kart Sahibi </label>
                        <input type="text" className="form-control input-sm" id="cardHolderName"
                            name="cardHolderName" placeholder="örn: Merve Bulut" onChange={handleOnCardChange} value={cardInformation.cardHolderName} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Kart Numarası </label>
                        <input type="number" className="form-control input-sm" id="cardNumber"
                            name="cardNumber" placeholder="örn: 5555 4444 5555 4444" onChange={handleOnCardChange} value={cardInformation.cardNumber} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Yıl </label>
                        <input type="number" className="form-control input-sm" id="cardExpireYear"
                            name="cardExpireYear" placeholder="örn: 2025" onChange={handleOnCardChange} value={cardInformation.cardExpireYear} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Ay </label>
                        <input type="number" className="form-control input-sm" id="cardExpireMonth"
                            name="cardExpireMonth" placeholder="örn: 12" onChange={handleOnCardChange} value={cardInformation.cardExpireMonth} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>CVC </label>
                        <input type="number" className="form-control input-sm" id="cvc"
                            name="cvc" placeholder="örn: 666" onChange={handleOnCardChange} value={cardInformation.cvc} />
                    </div>
                    <button type="submit" className="btn btn-outline-light"
                        style={{ marginTop: '2.5rem' }}>Ekle</button>
                </form>
            </div>
        </div>
    )
}
