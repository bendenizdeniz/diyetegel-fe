import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import { Api } from './Api';
import { Navbar } from './Navbar';

export const MealCart = () => {
    const [addressList, setAddressList] = useState([]);
    const [buyMeal, setBuyMeal] = useState({
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
    const [flag, setFlag] = useState(false);

    const wrongInfoRef = useRef();

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
        setBuyMeal({ ...buyMeal, creditCard: { ...buyMeal.creditCard, [event.target.name]: event.target.value } });
    }

    const handleOnChange = (event) => {
        setBuyMeal({ ...buyMeal, [event.target.name]: event.target.value });
    }

    const buy = (buyMeal) => {
        Api().post(
            `api/v1/basket/buy/`, buyMeal
        ).then((res) => {
            console.log(res.data);
            if (res.data.success === true) {
                if (res.data.data.paymentErrorCode === "SUCCESS") {
                    window.location.replace(res.data.data.url);
                    setFlag(false);
                    wrongInfoRef.current.classList.add("d-none");
                }
                // else {
                //     setFlag(res.data.data.errorMessage);
                //     wrongInfoRef.current.classList.remove("d-none");
                // }
            }
            else if (res.data.success === false) {
                setFlag(true);
                wrongInfoRef.current.classList.remove("d-none");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <Navbar />
            <div class="container formStyle" style={{ marginTop: '2rem' }}>
                <h5 className="card-title" style={{ marginTop: '2rem', textAlign: 'center', marginBottom: '2rem' }}>Yemek Sepeti</h5>

                <div class="row d-none" ref={wrongInfoRef} style={{ marginBottom: '2rem' }}>
                    <div class="d-flex justify-content-center">
                        <div class="card text-center"
                            style={{
                                width: '40rem',
                                borderRadius: '1rem',
                                fontSize: '2rem'
                            }}>
                            {
                                flag === true ?
                                    <div class="card-body">
                                        Hata Oluştu
                                    </div> : null
                            }
                        </div>
                    </div>
                </div>

                <form className="form formStyle"
                    onSubmit={(e) => {
                        e.preventDefault();
                        buy(buyMeal);
                    }}>
                    <div className="col-5" style={{ marginBottom: "1rem" }}>
                        <label>Fatura Teslim Adresi </label>
                        <select className="form-select input-sm" value={buyMeal.billingAddressId} name="billingAddressId" onChange={handleOnChange}>
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
                    <div className="col-5" style={{ marginBottom: "1rem" }}>
                        <label>Sipariş Teslim Adresi </label>
                        <select className="form-select input-sm" value={buyMeal.shippingAddressId} name="shippingAddressId" onChange={handleOnChange}>
                            <option selected hidden>Sipariş Teslim Adresini Seçiniz</option>
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
                            name="cardHolderName" placeholder="örn: Merve Bulut" onChange={handleOnCardChange} value={buyMeal.creditCard.cardHolderName} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Kart Numarası </label>
                        <input type="number" className="form-control input-sm" id="cardNumber"
                            name="cardNumber" placeholder="örn: 5555444466667777" onChange={handleOnCardChange} value={buyMeal.creditCard.cardNumber} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Yıl </label>
                        <input type="number" className="form-control input-sm" id="cardExpireYear"
                            name="cardExpireYear" placeholder="örn: 2024" onChange={handleOnCardChange} value={buyMeal.creditCard.cardExpireYear} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>Ay</label>
                        <input type="number" className="form-control input-sm" id="cardExpireMonth"
                            name="cardExpireMonth" placeholder="örn: 12" onChange={handleOnCardChange} value={buyMeal.creditCard.cardExpireMonth} />
                    </div>
                    <div className="form-group" style={{ marginBottom: "1rem" }}>
                        <label style={{ color: 'black' }}>CVC</label>
                        <input type="number" className="form-control input-sm" id="cvc"
                            name="cvc" placeholder="örn: 666" onChange={handleOnCardChange} value={buyMeal.creditCard.cvc} />
                    </div>
                    <button type="submit" className="btn btn-dark" style={{ marginTop: '2rem', marginBottom: '2rem', color: 'white' }}>Satın Al</button>
                </form>
            </div>
        </div >
    )
}
