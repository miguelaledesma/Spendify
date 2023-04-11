import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, {
        email,
        password,
      });
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      console.log(response.data);
      setUser(user); // Set the user state with the returned user object
      return user;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  };
  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}add-income`, income, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data.message);
      getIncomes();
    } catch (error) {
      console.error(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  const getIncomes = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found in localStorage");
      }

      const url = `${BASE_URL}get-income`;
      console.log("API endpoint URL:", url);

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response data:", response);
      setIncomes(response.data);
    } catch (error) {
      console.error("Error fetching incomes:", error.message);
      // handle the error here
    }
  };

  const deleteIncome = async (id) => {
    const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
    getIncomes();
  };

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  //calculate incomes
  const addExpense = async (income) => {
    const response = await axios
      .post(`${BASE_URL}add-expense`, income, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .catch((err) => {
        setError(err.response.data.message);
      });
    console.log(response.data.message);
    getExpenses();
  };

  const getExpenses = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No Token found in Local Storage");
      }
      const response = await axios.get(`${BASE_URL}get-expenses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setExpenses(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount;
    });

    return totalIncome;
  };

  const totalBalance = () => {
    const totalForIncomes = totalIncome();
    const totalForExpenses = totalExpenses();
    return totalForIncomes.toFixed(2) - totalForExpenses.toFixed(2);
  };

  const transactionHistory = () => {
    const history = [...incomes, ...expenses];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };

  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        deleteIncome,
        expenses,
        totalIncome,
        addExpense,
        getExpenses,
        totalExpenses,
        totalBalance,
        transactionHistory,
        error,
        setError,
        user,
        setUser,
        loginUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
