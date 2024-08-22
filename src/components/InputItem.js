import React from 'react'

const InputItem = ({ disabled, className, amount, type, setAmount }) => {
    return (
        <input
            disabled={disabled}
            className={className}
            value={amount}
            type={type}
            placeholder="Please enter amount"
            onChange={(e) => setAmount(e.target.value)}
        />
    )
}

export default InputItem