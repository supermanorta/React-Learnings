import React,{useState} from 'react'
import './Expenses.css';
import Card from '../UI/Card'
import ExpenseList from "./ExpenseList";
import ExpensesFilter from '../ExpenseFilters/ExpensesFilter';
//This is a Control Compoent to ExpenseFilter because the logic is housed here,

function Expenses( props ){
  const [filteredYear, setYearFilter] = useState("2022");// GIVE THE STATE A BASE YEAR
  
  const filterChangeHandler = selectedYear => {
    setYearFilter(selectedYear);
    console.log(selectedYear);
  };

  const filterSelectedYearOfExpense = props.expensesdata.filter(expense => {
 
    return expense.date.getFullYear().toString() === filteredYear;
  });

 

//recall {} allows you to excute JS code, or dynmaic expression in our jsx code


  return (
    //I want to map every expense into a ExpenstItem element
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedProp={filteredYear}
          onChangFilter={filterChangeHandler}
        />
        <ExpenseList expensesdata={filterSelectedYearOfExpense}/>
      </Card>
    </div>
  ); 
};
export default Expenses;