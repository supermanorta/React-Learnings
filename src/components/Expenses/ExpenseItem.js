import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// Currently in this state, or lack of state, would deem this
// Compoent as a Dumb-Compoent or Stateless-Compoent or Presentation-Compoent 

function ExpenseItem( props ) {
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2> {props.title} </h2>
        <div className="expense-item__price">${props.amount} </div>
      </div>
    </Card>
  );
}
export default ExpenseItem;