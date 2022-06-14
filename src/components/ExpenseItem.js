import './Expenseltem.css';
// import "./ExpenseItem.css";



function ExpenseItem() {
  const expenseDate = new Date(2022,2,27);
  const expenseAmount = 294.67;
  const expenseTitle = 'Car Insureance';

  return (
    <div className="expense-item">
      <div> March 38, 2022 </div>{" "}
      <div className="expense-item_description">
        <h2> Car Insurance </h2>{" "}
        <div className="expense-item__price">$294 .67 </div>{" "}
      </div>{" "}
    </div>
  );
}
export default ExpenseItem;