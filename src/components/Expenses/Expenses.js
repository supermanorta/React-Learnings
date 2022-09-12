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
    console.log(selectedYear);
  };

  const filterSelectedYearOfExpense = props.expensesdata.filter(expense => {
    // if (expense.date.getFullYear().toString() === filteredYear) {
    //   return expense.date.getFullYear().toString() === filteredYear;
    // } else {
    //   return props.expensesdata;
    // }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //  const filterSelectedYearOfExpense2 = props.expensesdata => {
  //    if (expense.date.getFullYear().toString() === filteredYear) {
  //       return expense.date.getFullYear().toString() === filteredYear;
  //    } else {
  //       return props.expensesdata;
  //    }
  //    return expense.date.getFullYear().toString() === filteredYear;
  //  });

//recall {} allows you to excute JS code, or dynmaic expression in our jsx code
let noExpensesContent = <p className="noItem">No Expense found.</p>;
  return (
    //I want to map every expense into a ExpenstItem element
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedProp={filteredYear}
          onChangFilter={filterChangeHandler}
        />
        {filterSelectedYearOfExpense.length === 0 && <p className='noItem'>No Expense found.</p>}
        {filterSelectedYearOfExpense.map((expense) => (
          <ExpenseItem
            key={expense.id} // adding a id to a list of items helps react know where the item is,how long a list of items is, and there for does not have to work as hard to identify it.
            title={expense.title} // adding a id will also help react update the list faster
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        
      </Card>
    </div>
  ); 
};
 export default Expenses;