import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Api } from './Api'
import { Navbar } from './Navbar'

export const Calculator = () => {
    const [meal, setMeal] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartLength, setCartLength] = useState(0);

    var navigate = useNavigate();

    useEffect(() => {
        Api().get(
            `api/v1/meal-plan/get-match`
        ).then((res) => {
            if (res.data.success == true) {
                const infos = res.data.data;
                setMeal(infos);
            }
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const addToCart = (meal) => {
        console.log(meal);
        Api().put(
            `api/v1/basket/add-one/${meal.productId}`
        ).then((res) => {
            if (res.data.success == true) {
                console.log(res.data);
                setCartLength(cartLength + 1);
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <div>
            <Navbar />
            <div className="container formStyle" style={{ marginTop: '3rem', paddingRight: '2rem', paddingLeft: '2rem' }}>
                <div>
                    <h2 style={{ marginBottom: '2rem', marginTop: '2rem', textAlign: 'center', color: 'black', fontFamily: 'Lucida Handwriting' }}>Size Özel Menüler</h2>
                    {cartLength != 0 ?
                        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                            <button type="button" class="btn btn-outline-dark" disabled>Sepetteki Yemek Sayısı: {cartLength}</button>
                        </div>
                        : <div></div>}

                </div>
                <div className='row'>
                    {
                        meal.map(item => {
                            return (
                                <div class="col-sm-6" style={{ marginBottom: '2rem' }}>
                                    <div class="card" style={{ borderRadius: '3rem' }}>
                                        <div class="card-body" >
                                            <div style={{ textAlign: 'center' }}>
                                                <h5 class="card-title" >{item.name}</h5>
                                                <img src={item.imageLinks[0]} class="img-thumbnail" />
                                                <p class="card-text" >İdeal Kalori Aralığı: {item.calorieMax + " - " + item.calorieMin}</p>
                                                <p class="card-text" >{item.description}</p>
                                                <p class="card-text">{item.price} ₺</p>
                                                <br />
                                                <br />
                                                <button className="btn btn-dark" onClick={(e) => { addToCart(item) }}>Sepete Ekle</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        )
                    }

                </div>
                <div style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '3rem', color: 'white' }}>
                    <button className='btn btn-dark' onClick={(e) => { navigate("/cart") }}>Sepete Git</button >
                </div>
            </div>
        </div>
    )
}
