import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Api } from './Api';
import { Navbar } from './Navbar'

export const OrderHistory = () => {
    const [orderhistory, setOrderHistory] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        Api().get(
            `api/v1/user-purchase-history/get`
        ).then((res) => {
            if (res.data.success == true) {
                const infos = res.data.data;
                setOrderHistory(infos);
            }
        }).catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container formStyle' style={{ marginTop: '2rem' }}>
                <h2 style={{ marginBottom: '2rem', marginTop: '2rem', textAlign: 'center', color: 'black' }}>Sipariş Geçmişim</h2>
                <div className="row">
                    {orderhistory.map((item) => {
                        return (
                            <div class="col-4" style={{ marginBottom: '2rem' }}>
                                <div class="card" style={{ borderRadius: '3rem' }}>
                                    <div class="card-body" >
                                        <div style={{ textAlign: 'center' }}>
                                            <h5 class="card-title" >{item.name}</h5>
                                            <img src={item.imageUrl} class="img-thumbnail" />
                                            <p class="card-text" >{item.description}</p>
                                            <p class="card-text">{item.price} ₺</p>
                                            <p class="card-text">{item.count} Adet</p>
                                            <p class="card-text">Toplam Tutar: {item.totalPrice} ₺</p>
                                            {
                                                item.paymentStatus === 'WAITING' ?
                                                    <p class="card-text">Sipariş Durumu: Beklemede</p> :
                                                    item.paymentStatus === 'APPROVED' ?
                                                        <p class="card-text">Sipariş Durumu: Onaylandı</p> :
                                                        <p class="card-text">Sipariş Durumu: Reddedildi</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div >
    )
}
