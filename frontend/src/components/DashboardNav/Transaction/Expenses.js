import React, { useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../../context/globalContext";
import { InnerLayout } from "../../../styles/Layout";
import ExpenseForm from "../../Forms/ExpenseForm";
import FormItems from "../Items/FormItems";
import IncomeItem from "../Items/IncomeItems";

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <section class="w-full bg-white">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row">
          <ExpenseForm />

          <div class="w-full bg-white lg:w-1/2 xl:w-1/2">
            <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div class="relative">
                  <p class="mb-2 font-medium text-gray-700 uppercase"></p>

                  <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        All Expenses
                      </h5>
                      <a
                        href="#"
                        class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        View all
                      </a>
                    </div>
                    {expenses.map((income) => {
                      const {
                        _id,
                        title,
                        amount,
                        date,
                        category,
                        description,
                        type,
                      } = income;
                      console.log(income);
                      return (
                        <FormItems
                          key={income._id}
                          id={_id}
                          title={title}
                          description={description}
                          amount={amount}
                          date={date}
                          type={type}
                          category={category}
                          deleteItem={deleteExpense}
                        />
                      );
                    })}
                  </div>
                </div>
                <p class="text-2xl text-gray-700"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: 0.5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
  .income-content {
    display: flex;
    gap: 2rem;
    .incomes {
      flex: 1;
    }
  }
`;

export default Expenses;

/**
 * 
 * <div className="incomes">
          {expenses.map((income) => {
            const { _id, title, amount, date, category, description, type } =
              income;
            console.log(income);
            return (
              <FormItems
                key={income._id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                deleteItem={deleteExpense}
              />
            );
          })}
        </div>





        <div>
      <h1>Expenses</h1>
      <h2 className="total-income">
        Total Expense: <span>${totalExpenses()}</span>
      </h2>
      <div className="income-content">
        <div className="form-container">
          <ExpenseForm />
        </div>
        <div className="incomes">
          {expenses.map((income) => {
            const { _id, title, amount, date, category, description, type } =
              income;
            console.log(income);
            return (
              <FormItems
                key={income._id}
                id={_id}
                title={title}
                description={description}
                amount={amount}
                date={date}
                type={type}
                category={category}
                deleteItem={deleteExpense}
              />
            );
          })}
        </div>
      </div>
    </div>
 */
