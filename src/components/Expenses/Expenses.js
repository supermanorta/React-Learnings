import React,{useState} from 'react'
import './Expenses.css';
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from '../ExpenseFilters/ExpensesFilter';
//This is a Control Compoent to ExpenseFilter because the logic is housed here,

function Expenses( props ){
  const [filteredYear, setYearFilter] = useState("2022");// GIVE THE STATE A BASE YEAR
  
  const filterChangeHandler = selectedYear => {
    setYearFilter(selectedYear);
  };
//recall {} allows you to excute JS code, or dynmaic expression in our jsx code
  return (
    //I want to map every expense into a ExpenstItem element
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedProp={filteredYear} onChangFilter={filterChangeHandler} />
        {props.expensesdata.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  ); 
};
 export default Expenses;