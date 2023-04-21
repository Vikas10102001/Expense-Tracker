import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import "./DeleteExpenseButton.css";
export default function DeleteExpenseButton({expense}) {
    const handleDeleteExpense=()=>{
        console.log(expense)
    }
  return <FaTimesCircle className="deleteButton"  onClick={handleDeleteExpense}/>;
}
