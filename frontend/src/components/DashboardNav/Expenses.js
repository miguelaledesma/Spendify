import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
const Expense = () => {
  const { getExpenses } = useGlobalContext();
  useEffect(() => {
    getExpenses();
  }, []);
  return <div>Expense</div>;
};

export default Expense;
