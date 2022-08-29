import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  
  const dropDownChangeHandler = (event) =>{
   // console.log(event.target.value); // just to test handler
    props.onChangFilter(event.target.value); // this comes from the parent
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value ={props.selectedProp} onChange={dropDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;