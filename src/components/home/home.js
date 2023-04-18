import React, { useEffect } from "react";
import Expenses from "./expense/Expenses";
import AddExpense from "./new-expense/AddExpense";
import "./expense/Expenses.css";
import Card from "../ui/Card";
import { useState } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";

export default function Home() {
  const [expense, setExpenses] = useState();
  const userId = JSON.parse(localStorage.getItem("user")).uid;
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users/" + userId);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setExpenses(data);
    });
  }, [userId]);
  const [filteredYear, setFilteredYear] = useState("2022");
  const newExpenseHandler = (ExpenseItem) => {
    const newExpenseItem = {
      ...ExpenseItem,
    };
    //  console.log(newExpenseItem)
    setExpenses((prevState) => {
      return [newExpenseItem, ...prevState];
    });
  };

  let filteredExpense=[];
  if (expense) {
    filteredExpense = expense.filter((item) => {
      return item.date.getFullYear().toString() === filteredYear;
    });
  }

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
