import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './Expenseltem.css';


function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const dummyClickHandler=()=>{
    setTitle('UpdatedTitle');
    console.log('DummyClickHandler');
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2> {title} </h2>{" "}
        <div className="expense-item__price">${props.amount} </div>{" "}
      </div>
      <button onClick={dummyClickHandler}>Change Title</button> 
      {/* by writing the above statement as so, we are creating a pointer to the function 
      which waits for the action to occur.
      We could call it as a function but this would cause the function to fire as soon as the 
      pages loads, which here, we do not want. */}
    </Card>
  );
}
export default ExpenseItem;