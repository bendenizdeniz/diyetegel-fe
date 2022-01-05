import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Api } from './Api';
import { Navbar } from './Navbar'

export const BuyMembership = () => {
    const [membership, setMembership] = useState([]);
    var navigate = useNavigate();

    useEffect(() => {
        Api().get(
            `api/v1/membership/get`
        ).then((res) => {
            if (res.data.success == true) {
                const infos = res.data.data;
                setMembership(infos);
            }
        }).catch(err => {
            console.log(err);
        });;
    }, [])

    return (
        <div>
            <Navbar />
            <div class="container formStyle" style={{ marginTop: '2rem' }}>
                <h5 className="card-title" style={{ textAlign: 'center', marginBottom: '2rem', marginTop: '2rem' }}>Üyelik Paketi Satın Al</h5>
                <div className='row'>
                    {
                        membership.map(item => {
                            return (
                                <div class="col-sm-6" style={{ marginBottom: '2rem' }}>
                                    <div class="card" style={{ borderRadius: '3rem' }}>
                                        <div class="card-body" >
                                            <div style={{ textAlign: 'center' }}>
                                                <h5 class="card-title">{item.title}</h5>
                                                <br />
                                                <img src={item.imageUrl} style={{ width: '18rem', marginBottom: '1rem', borderRadius: '3rem' }} />
                                                <br />
                                                <p style={{ marginBottom: '1rem' }}>{item.description}</p>
                                                <button class="btn btn-dark btn-sm" onClick={(e) => { navigate(`/membershipCart/${item.id}`) }}>Toplam Tutar: {item.price} ₺</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        )
                    }
                </div>
            </div>
        </div>
    )
}
