import React from "react";
import Expenses from "./components/home/expense/Expenses";
import AddExpense from "./components/home/new-expense/AddExpense";
import "./components/home/expense/Expenses.css";
import Card from "./components/ui/Card";
import { useState } from "react";

let InitialExpense = [
  {
    id: "asdada21",
    date: new Date(2021, 6, 5),
    title: "Car Insurance",
    amount: 206,
  },
  {
    id: "ads1",
    date: new Date(2021, 7, 15),
    title: "Car Service",
    amount: 149,
  },
  {
    id: "asads66",
    date: new Date(2021, 8, 5),
    title: "New phone",
    amount: 1120,
  },
  {
    id: "jhhsd91",
    date: new Date(2021, 5, 30),
    title: "share",
    amount: 1800,
  },
];
export default function home() {
  const [expense, setExpenses] = useState(InitialExpense);
  const [filteredYear, setFilteredYear] = useState("2022");
  const newExpenseHandler = (ExpenseItem) => {
    const newExpenseItem = {
      id: Math.random().toString(),
      ...ExpenseItem,
    };
    //  console.log(newExpenseItem)
    setExpenses((prevState) => {
      return [newExpenseItem, ...prevState];
    });
    // console.log(expense)
  };

  const filteredExpense = expense.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="container">
      <Card className="additems">
        <AddExpense onGettingNewExpense={newExpenseHandler} />
      </Card>
      <Expenses
        items={filteredExpense}
        selectedYear={filteredYear}
        setYear={setFilteredYear}
      />
    </div>
  );
}
