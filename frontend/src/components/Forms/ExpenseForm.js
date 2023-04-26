import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from "../../context/globalContext";
import Button from "../../styles/Button";
import { plus } from "../../utils/icons";

function ExpenseForm() {
  const { addExpense, error, setError } = useGlobalContext();
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const { title, amount, date, category, description } = expense;

  const handleInput = (name) => (e) => {
    setExpense({ ...expense, [name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(expense);
    setExpense({
      title: "",
      amount: "",
      date: "",
      category: "",
      description: "",
    });
  };

  return (
    <div class="w-full dark:bg-gray-800 dark:border-gray-700 lg:w-6/12 xl:w-5/12">
      <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
        <h4 class="w-full text-3xl font-bold dark:text-white">Add Expense</h4>
        <p class="text-lg text-gray-500">
          <a
            href="#_"
            class="text-blue-600 underline"
            data-primary="blue-600"
          ></a>
        </p>
        <form class="relative w-full mt-10 space-y-8" onSubmit={handleSubmit}>
          <div class="relative">
            <label class="font-medium text-gray-900 dark:text-white">
              Expense
            </label>
            <input
              type="text"
              value={title}
              name={"title"}
              placeholder="Item"
              onChange={handleInput("title")}
              class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 "
              data-primary="blue-600"
              data-rounded="rounded-lg"
            />
          </div>
          <div class="relative">
            <label class="font-medium text-gray-900 dark:text-white">
              Amount
            </label>
            <input
              value={amount}
              type="text"
              name={"amount"}
              placeholder={"$"}
              onChange={handleInput("amount")}
              class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
              data-primary="blue-600"
              data-rounded="rounded-lg"
            />
          </div>
          {/* <div class="relative">
                <label class="font-medium text-gray-900">Password</label>
                <input type="password" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" data-primary="blue-600" data-rounded="rounded-lg" placeholder="Password">
            </div> */}
          <div className="input-control">
            <DatePicker
              id="date"
              placeholderText="Enter A Date"
              selected={date}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => {
                setExpense({ ...expense, date: date });
              }}
            />
          </div>
          <div className="selects input-control">
            <select
              required
              value={category}
              name="category"
              id="category"
              onChange={handleInput("category")}
            >
              <option value="" disabled>
                Select Option
              </option>
              <option value="education">Education</option>
              <option value="groceries">Groceries</option>
              <option value="health">Health</option>
              <option value="subscriptions">Subscriptions</option>
              <option value="takeaways">Takeaways</option>
              <option value="clothing">Clothing</option>
              <option value="travelling">Travelling</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="input-control">
            <textarea
              name="description"
              value={description}
              placeholder="Description of expense"
              id="description"
              cols="30"
              rows="4"
              onChange={handleInput("description")}
            ></textarea>
          </div>
          <div className="submit-btn">
            <Button
              name={"Add Expense"}
              icon={plus}
              bPad={".8rem 1.6rem"}
              bRad={"30px"}
              bg={"var(--color-accent"}
              color={"#00000"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

const ExpenseFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder {
      color: rgba(34, 34, 96, 0.4);
    }
  }
  .input-control {
    input {
      width: 100%;
    }
  }
  .selects {
    display: flex;
    justify-content: flex-end;
    select {
      color: rgba(34, 34, 96, 0.4);
      &:focus,
      &:active {
        color: rgba(34, 34, 96, 1);
      }
    }
  }
  .submit-btn {
    button {
      box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
      &:hover {
        background: var(--color-green) !important;
      }
    }
  }
`;
export default ExpenseForm;
