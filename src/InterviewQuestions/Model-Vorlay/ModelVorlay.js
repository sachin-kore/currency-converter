import React, { useState } from 'react'
import "./style.css";
import Model from '../../components/Model';


const ModelVorlay = () => {

    const [show, setShow] = useState(false);
    const [isOfferAccepted, setIsOfferAccepted] = useState(false);

    const handleAcceptOffer = () => {
        setIsOfferAccepted(true);
        setShow(false);
    }
    const handleClose = () => {
        setShow(false);
    }
    return (
        <div className='Model-overlay'>
            <button className='offer-btn' onClick={() => setShow(true)}>
                {isOfferAccepted ? "Offer accepted" : "Show offer"}
            </button>
            {
                show && <Model handleClose={handleClose} handleAcceptOffer={handleAcceptOffer} />
            }
        </div>
    )
}

export default ModelVorlay