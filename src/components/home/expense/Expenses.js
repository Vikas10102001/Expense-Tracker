import FilterExpense from "./FilterExpense";
import ExpenseItems from "./ExpenseItems";
import ExpenseChart from "../chart/ExpenseChart";
import Card from "../../ui/Card";
import "./Expenses.css";
import { RotatingLines } from "react-loader-spinner";
const Expenses = (props) => {
  const isLoading = props.isLoading;
  return (
    <Card className="items ">
      <FilterExpense
        selectedYear={props.selectedYear}
        setYear={props.setYear}
      />
      <ExpenseChart items={props.items} />
      {isLoading ? (
        <RotatingLines strokeColor="white" height={50} width={100} />
      ) : props.items.length === 0 ? (
        <p className="no_expense">No Expenses</p>
      ) : (
        props.items.map((expense, ind) => (
          <ExpenseItems item={expense} key={ind}></ExpenseItems>
        ))
      )}
    </Card>
  );
};
export default Expenses;
