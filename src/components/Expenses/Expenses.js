import React,{useState} from 'react'
import './Expenses.css';
import Card from '../UI/Card'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from '../ExpenseFilters/ExpensesFilter';
//This is a Control Compoent to ExpenseFilter because the logic is housed here,



function Expenses( props ){
  const [enteredYearFilter, setYearFilter] = useState("2020");// GIVE THE STATE A BASE YEAR
  
  const filterChangeHandler = selectedYear =>{
   
    setYearFilter(selectedYear);
  }
//recall {} allows you to excute JS code, or dynmaic expression in our jsx code
  return (
    //I want to map every expense into a ExpenstItem element
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedProp={enteredYearFilter}
          onChangFilter={filterChangeHandler}
        />
        {props.expensesdata.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}{" "}
      </Card>
    </div>
    // <div className="expenses">
    //   <ExpenseItem
    //     title={props.expensesdata[0].title}
    //     amount={props.expensesdata[0].amount}
    //     date={props.expensesdata[0].date}
    //   ></ExpenseItem>
    //   <ExpenseItem
    //     title={props.expensesdata[1].title}
    //     amount={props.expensesdata[1].amount}
    //     date={props.expensesdata[1].date}
    //   ></ExpenseItem>
    //   <ExpenseItem
    //     title={props.expensesdata[2].title}
    //     amount={props.expensesdata[2].amount}
    //     date={props.expensesdata[2].date}
    //   ></ExpenseItem>
    //   <ExpenseItem
    //     title={props.expensesdata[3].title}
    //     amount={props.expensesdata[3].amount}
    //     date={props.expensesdata[3].date}
    //   ></ExpenseItem>
    // </div>
  ); 
}
 export default Expenses;