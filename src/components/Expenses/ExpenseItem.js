import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import Cards from "../UI/Cards";
function ExpenseItem(props) {
  
  
  return (
    <Cards className="expense-item">
      <div>
       <ExpenseDate date={props.Date}/>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
   
    </Cards>
  );
}
export default ExpenseItem;
