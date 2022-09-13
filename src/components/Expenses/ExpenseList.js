import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpenseList = props => {
    if (props.expensesdata.length ==0){
        return <h2 className="noItem">Found no expenses</h2>;
    }
    
      return (
        <ul className="expenses-list">
          {props.expensesdata.map((expense) => (
            <ExpenseItem
              key={expense.id} // adding a id to a list of items helps react know where the item is,how long a list of items is, and there for does not have to work as hard to identify it.
              title={expense.title} // adding a id will also help react update the list faster
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
      );
};

export default ExpenseList;