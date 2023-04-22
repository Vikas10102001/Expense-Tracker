import React, { useEffect } from "react";
import Expenses from "./expense/Expenses";
import AddExpense from "./new-expense/AddExpense";
import "./expense/Expenses.css";
import Card from "../ui/Card";
import { useState } from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { dispatchAlert } from "../../utils/alert";

export default function HomePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [expense, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      setIsLoading(true);
      const db = getDatabase();
      const starCountRef = ref(db, "expenses/" + user.uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        const expenses = [];
        for (let key in data) {
          expenses.push({
            ...data[key],
            date: new Date(data[key].date),
            key: key,
          });
        }
        expenses.reverse()
        setExpenses((prevExpenses) => {
          console.log('here')
          if (prevExpenses.length !== expenses.length) {
            return expenses;
          }
          return prevExpenses;
        });
        setIsLoading(false);
      });
    }
  }, [user, navigate]);
  const [filteredYear, setFilteredYear] = useState("2023");

  const newExpenseHandler = (ExpenseItem) => {
    const newExpenseItem = {
      ...ExpenseItem,
    };

    const db = getDatabase();
    const expenseRef = ref(db, "expenses/" + user.uid);
    const newExpenseRef = push(expenseRef);
    set(newExpenseRef, newExpenseItem)
      .then(() => {
        dispatchAlert("Expense added successfully", "success");
      })
      .catch((error) => {
        console.log("error", error);
        dispatchAlert("Cant perform this action right now", "error");
      });
  };
  let filteredExpense = [];
  if (expense) {
    console.log(expense);
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
        isLoading={isLoading}
        items={filteredExpense}
        selectedYear={filteredYear}
        setYear={setFilteredYear}
      />
    </div>
  );
}
