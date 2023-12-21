import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currencies = () => {
    const { dispatch, currency } = useContext(AppContext);
    
    const handleCurrencyChange = (event) => {
        const updatedCurrency = event.target.value;
        dispatch({type: 'CHG_CURRENCY', payload: updatedCurrency});
    };

    return (
        <div className='alert alert-success'>
            <label>Currencies:</label>
            <select className='form-control' value={currency} onChange={handleCurrencyChange}>
                <option value={"$"}>$ Dollar</option>
                <option value={"£"}>£ Pound</option>
                <option value={"€"}>€ Euro</option>
                <option value={"₹"}>₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currencies;