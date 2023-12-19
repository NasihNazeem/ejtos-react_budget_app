import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.map(obj => obj.cost).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const handleBudgetChange = (event) => {
        if (event.target.value < 20000 && event.target.value > totalExpenses){
            setNewBudget(event.target.value);
            console.log(event.target.value)
        } else {
            if(event.target.value > 20000){
                alert("The value cannot exceed £20000.")
            } else {
                alert(`You cannot reduce the budget value below your spending (${totalExpenses}).`)
            }
        }

    }

    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
