import React, {useState} from "react";
import './ExpenseFourm.css'

const ExpenseFourm = (props) =>{
    const[enteredTitle,setTitle] = useState('');
    const[enterAmount,setAmount] = useState('');
    const[enterDate,setDate] = useState('');

//Note the Browswer gives you the event.
    const titleChangeHandler =(event) => {
      setTitle(event.target.value);
    };
    const amountHandler=( event )=>{
      setAmount(event.target.value);
    };
    const dateHandler=( event )=>{
      setDate(event.target.value);
    };

    const submitHandler =(event) => {
      event.preventDefault();//prevent the defualt request from being sent

      const expenseData = {
        title: enteredTitle,
        amount: enterAmount,
        date: new Date(enterDate)
    };
        
    props.onSaveExpenseData(expenseData);
        //now clear the data after we have accepted it from user input by..
        //This is two way binding, we take the input but we also clear the fourm 
      setTitle('');
      setAmount('');
      setDate('');
    };

   
     let cancelExpenseButton = (
       <div className="new-expense__actions">
         <button type="button" onClick={props.onCancel}>Cancel</button>
       </div>
     );
    let addExpenseButton = (
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    );


    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle} //value={userInput.enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enterAmount}
              onChange={amountHandler}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enterDate}
              onChange={dateHandler}
            ></input>
          </div>
        </div>
        {cancelExpenseButton}
        {addExpenseButton}
      </form>
    );
}
export default ExpenseFourm;