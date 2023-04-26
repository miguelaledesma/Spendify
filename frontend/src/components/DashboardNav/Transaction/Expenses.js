import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../../context/globalContext";
import { InnerLayout } from "../../../styles/Layout";
import ExpenseForm from "../../Forms/ExpenseForm";
import FormItems from "../Items/FormItems";
import IncomeItem from "../Items/IncomeItems";

const PAGE_SIZE = 4;

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const expensesToDisplay = expenses.slice(startIndex, endIndex);

  const totalPages = Math.ceil(expenses.length / PAGE_SIZE);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    getExpenses();
  }, []);
  return (
    <section class="w-full">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row">
          <ExpenseForm />

          <div class="w-full lg:w-1/2 xl:w-1/2">
            <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div class="relative">
                  <p class="mb-2 font-medium text-gray-700 uppercase"></p>

                  <div class="w-full max-w-md p-4 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex items-center justify-between mb-4">
                      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        All Expenses
                      </h5>
                      <a
                        href="/dashboard"
                        src=""
                        class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        View all
                      </a>
                    </div>
                    {expensesToDisplay.map((income) => {
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
                    <div className="flex justify-center mt-4">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (pageNumber) => (
                          <button
                            key={pageNumber}
                            className={`mx-1 px-3 py-1 rounded-full focus:outline-none ${
                              currentPage === pageNumber
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                            onClick={() => handlePageChange(pageNumber)}
                          >
                            {pageNumber}
                          </button>
                        )
                      )}
                    </div>
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
