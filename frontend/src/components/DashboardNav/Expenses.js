import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import ExpenseForm from "../Forms/ExpenseForm";
const Expense = () => {
  const { getExpenses } = useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <div>
      <ExpenseForm />
    </div>
  );
};

export default Expense;
