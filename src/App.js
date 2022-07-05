import ExpenseItem from "./components/ExpenseItem";
import Expenses from './components/Expenses';

function App() {
 const expensesList = [
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
     date: new Date(2021, 5, 12),
   },
 ];


  // return (
  //   <div>
  //     <h2> Let 's get started!</h2>
  //     <ExpenseItem
  //       title={expensesList[0].title}
  //       amount={expensesList[0].amount}
  //       date={expensesList[0].date}
  //     ></ExpenseItem>
  //     <ExpenseItem
  //       title={expensesList[1].title}
  //       amount={expensesList[1].amount}
  //       date={expensesList[1].date}
  //     ></ExpenseItem>{" "}
  //     <ExpenseItem
  //       title={expensesList[2].title}
  //       amount={expensesList[2].amount}
  //       date={expensesList[2].date}
  //     ></ExpenseItem>{" "}
  //     <ExpenseItem
  //       title={expensesList[3].title}
  //       amount={expensesList[3].amount}
  //       date={expensesList[3].date}
  //     ></ExpenseItem>{" "}
  //   </div>
  // );
  
  return (
   <div>
     <h2>Lets get the 1st components</h2>
     <Expenses expensesdata={expensesList} />;
   </div>);
}

export default App;
