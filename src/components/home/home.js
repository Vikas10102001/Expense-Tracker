import React, { useEffect } from "react";
import Expenses from "./expense/Expenses";
import AddExpense from "./new-expense/AddExpense";
import "./expense/Expenses.css";
import Card from "../ui/Card";
import { useState } from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [expense, setExpenses] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const db = getDatabase();
      const starCountRef = ref(db, "expenses/" + user.uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        //todo:format data to store it as state
      });
    }
  }, [user, navigate]);
  const [filteredYear, setFilteredYear] = useState("2022");


  const newExpenseHandler = (ExpenseItem) => {
    const newExpenseItem = {
      ...ExpenseItem,
    };

    const db = getDatabase();
    const expenseRef = ref(db, "expenses/" + user.uid);
    const newExpenseRef = push(expenseRef);
    set(newExpenseRef, newExpenseItem);
    setExpenses((prevState) => {
      return [newExpenseItem, ...prevState];
    });
  };

  let filteredExpense = [];
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
