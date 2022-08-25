import React, {useState} from "react";
import './ExpenseFourm.css'

const ExpenseFourm = (props) =>{
    const[enteredTitle,setTitle] = useState('');
    const[enterAmount,setAmount] = useState('');
    const[enterDate,setDate] = useState('');
// call it once, and pass a object as value, and we can group together the 3 states above
  //  const [userInput, setUserInput] = useState({
  //       enteredTitle:'',
  //       enterAmount:'',
  //       enterDate:''
  //   })

    const titleChangeHandler =(event) => {
      setTitle(event.target.value);
        // this will updat the state, but you could get conflicting state of title, given that React schedules state updates, and might pullone that is dated.
    //   setUserInput({
    //     enteredTitle: event.target.value,
    //     enterAmount: "",
    //     enterDate: "",
    //   });
    console.log(event);
    // console.log('Title changed');
    // below will always give you the latest state of the function, since React scheudle updates when you want it updated.
    //     setUserInput((prevState) => {
    //       return { ...prevState, enteredTitle: event.target.value };
    //   });
     };
    const amountHandler=( event )=>{
      setAmount(event.target.value);
        // setUserInput({
        // ...userInput,
        // enterAmount: event.target.value})
        // setUserInput((prevState) => {
        // return { ...prevState, enterAmount: event.target.value };
        // });
    };
    const dateHandler=( event )=>{
      setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });

        // setUserInput((prevState) => {
        // return { ...prevState, enterDate: event.target.value };
        // });
        };

    const submitHandler =(event) => {
        event.preventDefault();//prevent the defualt request from being sent

        const expenseData = {
          // title: userInput.enteredTitle,
          // amount: userInput.enterAmount,
          // date: new Date(userInput.enterDate),
          title: enteredTitle,
          amount: enterAmount,
          date: new Date(enterDate)
        };
        
        props.onSaveExpenseData(expenseData);
        //now clear the data after we have accepted it from user input by..
        setTitle('');
        setAmount('');
        setDate('');
        // setUserInput(event.target.value);
        // setUserInput(event.target.value);
        // setUserInput(event.target.value);
    };

    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" 
            value={enteredTitle}//value={userInput.enteredTitle}
            onChange={titleChangeHandler}>  
            </input>
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
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
}
export default ExpenseFourm;