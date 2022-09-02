import React, { useState } from "react";

import NewExpenses from './components/NewExpenses/NewExpenses';
import Expenses from './components/Expenses/Expenses';


const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
const App = () => {
  const [expenses,setExpense]= useState(DUMMY_DATA);

  const onAddExpenseHandler = expense => {
    console.log(expense);
     //setExpense([expense, ...expense]); // Pass a new array, add the item to expense, then use the spread operator to pull out the
    //This helps react pick up on the change sooner
    setExpense((previousExpenses) => {
      return [expense, ...previousExpenses];
    }); // Pass a new array, add the item to expense, then use the spread operator to pull out the
  };
  return (
    <div>
      <NewExpenses onAddExpense={onAddExpenseHandler}></NewExpenses>
      <Expenses expensesdata={expenses} />;
    </div>
  );
}

export default App;