import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import "./DeleteExpenseButton.css";
import { getDatabase, ref, remove } from "firebase/database";
export default function DeleteExpenseButton({ expense }) {
  const handleDeleteExpense = () => {
    const expenseId = expense.key;
    const user=JSON.parse(localStorage.getItem("user"))
    const db = getDatabase();
    const expenseRef = ref(db, "expenses/" + user.uid + "/" + expenseId);
    remove(expenseRef)
      .then(() => {
        console.log("Expense deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting expense:", error);
      });
  };
  return (
    <FaTimesCircle className="deleteButton" onClick={handleDeleteExpense} />
  );
}
