import React, { useState } from "react";
import Cards from "../UI/Cards";
import ExpenseFilter from "./ExpenseFilter";

import ExpenseList from "./ExpenseList";
import "./Expenses.css";
function Expenses(props) {
  const [FilterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (SelectYear) => {
    setFilterYear(SelectYear);
  };
  const FilteredExpenses=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===FilterYear;
  })
  
  
  return (
    <Cards className="expenses">

      <ExpenseFilter
        selected={FilterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseList item={FilteredExpenses}/>
     
    </Cards>
  );
}
export default Expenses;
