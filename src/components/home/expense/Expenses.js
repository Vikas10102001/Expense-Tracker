import FilterExpense from "./FilterExpense";
import ExpenseItems from "./ExpenseItems"
import ExpenseChart from "../../chart/ExpenseChart"
import Card from "../../ui/Card"
import "./Expenses.css"
const Expenses = (props) => {
    // console.log(props.items)


    return (
        <Card className="items ">
            <FilterExpense selectedYear={props.selectedYear} setYear={props.setYear} />
            <ExpenseChart items={props.items} />
            {props.items.length === 0 ? <p className="no_expense">No Expenses</p> : props.items.map((expense) => <ExpenseItems item={expense} key={expense.id}></ExpenseItems>)}
        </Card>
    )
}
export default Expenses