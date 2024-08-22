import React, { useEffect, useState } from 'react'
import { FaCaretRight } from "react-icons/fa";


const FaqItem = ({ item, index }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (index === 0) {
            setShow(true);
        }
    }, [])
    return (
        <div div className='faq-item' >
            <div className='question' onClick={() => setShow(!show)}>
                <FaCaretRight className={show ? "arrow" : ""} style={{ fontSize: "25px" }} />
                <span className='question-span'>{item.question}</span>
            </div>
            {
                show && <div className='ans'>{item.answer}</div>
            }
        </div>

    )
}

export default FaqItem