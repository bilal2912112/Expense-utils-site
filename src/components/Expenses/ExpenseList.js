import './ExpenseList.css'
import ExpenseItem from "./ExpenseItem"
const ExpenseList=(props)=>{
     
    if(props.item.length===0){
        return <h2 className='expenses-list__fallback'>Found no Item</h2>
      }
      return (
      <ul className="expenses-list">
{
 props.item.map((expense)=>(
          <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              Date={expense.date}
          />
          )
          ) }
      </ul>
      )
}
export default ExpenseList