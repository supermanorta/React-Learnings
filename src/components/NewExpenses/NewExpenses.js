import React from "react"
import './NewExpenses.css' 
import ExpenseFourm from './ExpenseFourm'


const NewExpenses = (props) =>{
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    return (
      //This is how a child compoent talks "up". Here the ExpenseFourm(child) can communicate to the parent compoent, the NewExpense
      <div className="new-expense">
        <ExpenseFourm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
};

export default NewExpenses;