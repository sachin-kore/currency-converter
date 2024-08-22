import React from 'react'
import { RxCross2 } from "react-icons/rx";

const Model = ({ handleClose, handleAcceptOffer }) => {
    return (
        <div className='model'>
            <div className='model-content'>
                <RxCross2 className='icon' onClick={handleClose} />
                <div className='content'>
                    Click the button below to accept our amazig offer
                </div>
                <div className='accept-btn'>
                    <button className='accept-btn' onClick={handleAcceptOffer}>Accept offer</button>
                </div>
            </div>
        </div>
    )
}

export default Model