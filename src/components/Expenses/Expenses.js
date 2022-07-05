import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
  

function Expenses( props ){
  console.log("hello");
    return (
      <div className="expenses">
        <ExpenseItem
          title={props.expensesdata[0].title}
          amount={props.expensesdata[0].amount}
          date={props.expensesdata[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expensesdata[1].title}
          amount={props.expensesdata[1].amount}
          date={props.expensesdata[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expensesdata[2].title}
          amount={props.expensesdata[2].amount}
          date={props.expensesdata[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expensesdata[3].title}
          amount={props.expensesdata[3].amount}
          date={props.expensesdata[3].date}
        ></ExpenseItem>
      </div>
    ); 
}
 export default Expenses;