import React, { useEffect } from 'react'
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { Api } from './Api';
import { Navbar } from './Navbar';

export const MembershipCart = () => {
    const [addressList, setAddressList] = useState([]);
    const [buyMembership, setBuyMembership] = useState({
        billingAddressId: "",
        shippingAddressId: "",
        creditCard: {
            cardNumber: "",
            cardHolderName: "",
            cardExpireYear: "",
            cardExpireMonth: "",
            cvc: ""
        }
    });
    const [returnUrl, setReturnUrl] = useState("");

    let { id } = useParams();

    useEffect(() => {
        Api().get(
            `api/v1/user/billing-address/get`
        ).then((res) => {
            if (res.data.success == true) {
                const infos = res.data.data;
                setAddressList(infos);
            }
        }).catch(err => {
            console.log(err);
        });
    }, [])

    const handleOnCardChange = (event) => {
        setBuyMembership({ ...buyMembership, creditCard: { ...buyMembership.creditCard, [event.target.name]: event.target.value } });
    }

    const handleOnChange = (event) => {
        setBuyMembership({ ...buyMembership, [event.target.name]: event.target.value });
    }

    const buy = (buyMembership) => {
        console.log(buyMembership);
        buyMembership.shippingAddressId = buyMembership.billingAddressId;
        Api().post(
            `api/v1/membership/buy/${id}`, buyMembership
        ).then((res) => {
            if (res.data.success == true) {
                const infos = res.data.data;
                console.log(res.data.data.url);
                window.location.replace(res.data.data.url);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <Navbar />
            <div class="container formStyle" style={{ marginTop: '2rem' }}>
                <h5 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Üyelik Paketi Satın Al</h5>

                <form className="form formStyle"
                    onSubmit={(e) => {
                        e.preventDefault();
                        buy(buyMembership);
                    }}>
                    <div className="col-5" style={{ marginBottom: "1rem" }}>
                        <label>Fatura Teslim Adresi </label>
                        <select className="form-select input-sm" value={buyMembership.billingAddressId} name="billingAddressId" onChange={handleOnChange}>
                            <option selected hidden>Fatura Teslim Adresini Seçiniz</option>
                            {
                                addressList.map(item => {
                                    return (
                                        <option value={item.id}>{item.address}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Kart Sahibi </label>
                        <input type="text" className="form-control input-sm" id="cardHolderName"
                            name="cardHolderName" placeholder="örn: Merve Bulut" onChange={handleOnCardChange} value={buyMembership.creditCard.cardHolderName} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Kart Numarası </label>
                        <input type="number" className="form-control input-sm" id="cardNumber"
                            name="cardNumber" placeholder="örn: 5555444466667777" onChange={handleOnCardChange} value={buyMembership.creditCard.cardNumber} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Yıl </label>
                        <input type="number" className="form-control input-sm" id="cardExpireYear"
                            name="cardExpireYear" placeholder="örn: 2024" onChange={handleOnCardChange} value={buyMembership.creditCard.cardExpireYear} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Ay</label>
                        <input type="number" className="form-control input-sm" id="cardExpireMonth"
                            name="cardExpireMonth" placeholder="örn: 12" onChange={handleOnCardChange} value={buyMembership.creditCard.cardExpireMonth} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>CVC</label>
                        <input type="number" className="form-control input-sm" id="cvc"
                            name="cvc" placeholder="örn: 666" onChange={handleOnCardChange} value={buyMembership.creditCard.cvc} />
                    </div>
                    <button type="submit" className="btn btn-dark" style={{ marginTop: '2rem', marginBottom: '2rem', color: 'white' }}>Satın Al</button>
                </form>
            </div>
        </div>
    )
}
