import React, {useState} from "react"
import './NewExpenses.css' 
import ExpenseFourm from './ExpenseFourm'


const NewExpenses = (props) =>{
  const [isAddExpense, setIsAddExpense] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
      };
      console.log(expenseData);
      props.onAddExpense(expenseData);
      setIsAddExpense(false);
  }
  const startEditingHandler = () =>{
    setIsAddExpense(true);
  }
  const stopEditingHandler = () => {
    setIsAddExpense(false);
  };

    return (
      //This is how a child compoent talks "up". Here the ExpenseFourm(child) can communicate to the parent compoent, the NewExpense
      <div className="new-expense">
        {!isAddExpense && (
          <button className="new-expense button" onClick={startEditingHandler}>
            Add New Expense
          </button>
        )}
        {isAddExpense && (
          <ExpenseFourm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    );
};

export default NewExpenses;