import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Api } from './Api'
import { Navbar } from './Navbar'

export const Cart = () => {
    const [cart, setCart] = useState([]);

    var navigate = useNavigate();

    useEffect(() => {
        Api().get(
            `api/v1/basket/get`
        ).then((res) => {
            if (res.data.success == true) {
                const products = res.data.data.products;
                setCart(products)

            }
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const getBasket = () => {
        Api().get(
            `api/v1/basket/get`
        ).then((res) => {
            if (res.data.success == true) {
                const products = res.data.data.products;
                setCart(products)

            }
        }).catch(err => {
            console.log(err);
        });
    }

    const increaseQuantity = (productId) => {
        Api().put(
            `api/v1/basket/add-one/${productId}`
        ).then((res) => {
            if (res.data.success == true) {
                getBasket();

            }
        }).catch(err => {
            console.log(err);
        });
    }

    const decreaseQuantity = (productId) => {
        Api().put(
            `api/v1/basket/remove-one/${productId}`
        ).then((res) => {
            if (res.data.success == true) {
                getBasket();
            }
        }).catch(err => {
            console.log(err);
        });
    }

    const isLoggedIn = () => {
        Api().get(
            `api/v1/user/info`
        ).then((res) => {
            if (res.data.success == true) {
                navigate("/mealCart");
            }
            else navigate("/login");
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <Navbar />
            <div className='container formStyle' style={{ marginTop: '2rem' }}>
                <h2 style={{ marginBottom: '2rem', marginTop: '2rem', textAlign: 'center', color: 'black' }}>Sepetim</h2>
                <div className='row'>
                    {
                        cart.map(item => {
                            return (
                                <div class="col-sm-6" style={{ marginBottom: '2rem' }}>
                                    <div class="card" style={{ borderRadius: '3rem' }}>
                                        <div class="card-body" >
                                            <div style={{ textAlign: 'center' }}>
                                                <h5 class="card-title" >{item.name}</h5>
                                                <img src={item.imageUrl} class="img-thumbnail" />
                                                <p class="card-text" >{item.description}</p>
                                                <p class="card-text">{item.price} ₺</p>
                                                <div>
                                                    <div class="row" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                                        <div class="col-1">
                                                            <button class="btn btn-primary btn-sm"
                                                                onClick={(e) => { increaseQuantity(item.productId) }}
                                                                style={{ marginRight: '1rem' }}
                                                            >+</button>
                                                        </div>
                                                        <div class="col-1">
                                                            <h5>{item.count}</h5>
                                                        </div>
                                                        <div class="col-1">
                                                            <button class="btn btn-light btn-sm"
                                                                onClick={(e) => { decreaseQuantity(item.productId) }}
                                                            >-</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                <p class="card-text">Toplam Tutar: {item.totalPrice} ₺</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        )
                    }

                </div>
                <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '2rem' }}>
                    <button className='btn btn-dark' style={{ marginRight: '2rem' }} onClick={(e) => { navigate("/calculator") }}>Ürünlere Dön</button>
                    <button className='btn btn-dark' onClick={(e) => { isLoggedIn(); }}>Alışverişi Tamamla</button>
                </div>
            </div>
        </div >
    )
}
