import React from "react"
import './NewExpenses.css' 
import ExpenseFourm from './ExpenseFourm'


const NewExpenses = () =>{
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseFourm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

export default NewExpenses;