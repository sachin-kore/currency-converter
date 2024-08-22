import React from 'react'

const SelectItem = ({ disabled, className, currencyValues, value }) => {
    return (
        <select
            onChange={(e) => currencyValues(e.target.value)}
            disabled={disabled}
            className={className}
            value={value}>
            <option value="USD"> USD</option>
            <option value="EUR"> EUR</option>
            <option value="CAD"> CAD</option>
            <option value="INR"> INR</option>
        </select>
    )
}

export default SelectItem