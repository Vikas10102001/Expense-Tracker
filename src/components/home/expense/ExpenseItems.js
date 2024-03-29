import "./ExpenseItems.css";
import Date from "../date/date";
import Card from "../../ui/Card";
import DeleteExpenseButton from "./DeleteExpenseButton";
const ExpenseItems = (props) => {
  return (
    <Card className="item">
      <Date className="single_item" date={props.item.date}></Date>
      <div className="single_item title">{props.item.title}</div>
      <Card className="single_item price">${props.item.amount}</Card>
      <DeleteExpenseButton expense={props.item} />
    </Card>
  );
};

export default ExpenseItems;
