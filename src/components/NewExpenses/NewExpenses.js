import "./NewExpenses.css"
import ExpensesForm from "./ExpensesForm";
const NewExpenses=(props)=>{
    const onSaveExpenseDataHandler=(EnteredExpensesData)=>{
const ExpensesData={
    ...EnteredExpensesData,
    id:Math.random().toString()
}
props.onSaveNewExpenseData(ExpensesData);
    }
return(
<div className="new-expense">
<ExpensesForm onSaveExpenseData={onSaveExpenseDataHandler}/>
</div>
);

}
export default NewExpenses