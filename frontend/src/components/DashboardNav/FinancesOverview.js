import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import FinanceChart from "../DashboardNav/Items/Chart";

import { InnerLayout } from "../../styles/Layout";
import RecentTransactions from "./Transaction/RecentTransactions";

function FinanceOverview() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
    transactionHistory,
  } = useGlobalContext();

  useEffect(() => {
    getExpenses();
    getIncomes();
    transactionHistory();
  }, []);
  return (
    // <DashboardStyled>
    <InnerLayout>
      <div className="rounded-t mb-0 px-0 py-0 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
              Financial Overview
            </h6>
            <h2 className="text-black text-5xl font-extrabold dark:text-white pb-1">
              ${totalBalance()}
            </h2>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-full sm:w-full lg:w-1/2 px-4 py-90 pb-10 sm:pb-0">
          <div class="h-full">
            <FinanceChart />
          </div>
        </div>

        <div class="w-full md:w-full sm:w-full lg:w-1/2 px-4 py-90 ">
          <div>
            <RecentTransactions />
          </div>
        </div>
      </div>
      <h2 class="pt-4 uppercase text-blueGray-100 mb-1 text-xs font-semibold">
        {" "}
        Totals{" "}
      </h2>
      <div className="flex flex-col w-full lg:flex-row dark:bg-gray-900">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center dark:bg-gray-900">
          <div className="stats shadow h-full w-full dark:bg-gray-800">
            <div className="stat dark:bg-gray-800">
              <div className="stat-title h-full w-full place-items-center dark:text-white uppercase">
                Expenses
              </div>
              <div className="stat-value h-full w-full dark:text-white">
                {" "}
                ${totalExpenses()}
              </div>
              <div className="stat-desc h-full w-full"></div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          <div className="stats shadow h-full w-full dark:bg-gray-800">
            <div className="stat h-full w-full dark:bg-gray-800">
              <div className="stat-title h-full w-full dark:text-white uppercase ">
                Income
              </div>
              <div className="stat-value h-full w-full dark:text-white">
                {" "}
                ${totalIncome()}
              </div>
              <div className="stat-desc h-full w-full "></div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          <div className="stats shadow h-full w-full dark:bg-gray-800 ">
            <div className="stat h-full w-full dark:bg-gray-800">
              <div className="stat-title h-full w-full dark:text-white uppercase">
                Balance
              </div>
              <div className="stat-value h-full w-full dark:text-white">
                {" "}
                ${totalBalance()}
              </div>
              <div className="stat-desc h-full w-full "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider lg:divider-vertical"></div>
      <h2 class=" uppercase text-blueGray-100 mb-1 text-xs font-semibold">
        {" "}
        Stats
      </h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div className="stats shadow stats-vertical lg:stats-horizontal dark:bg-gray-800">
          <div className="stat ">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title dark:text-white">Min Income </div>
            <div className="stat-value dark:text-white">
              <p>
                $
                {incomes.length > 0
                  ? Math.min(...incomes.map((item) => item.amount))
                  : 0}
              </p>
            </div>
            <div className="stat-desc dark:text-white">
              {" "}
              Your initial balance
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title dark:text-white">Total Income Count</div>
            <div className="stat-value dark:text-white">
              <p>{incomes.length}</p>
            </div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title dark:text-white">Max Income</div>
            <div className="stat-value dark:text-white">
              <p>
                $
                {incomes.length > 0
                  ? Math.max(...incomes.map((item) => item.amount))
                  : 0}
              </p>
            </div>
            <div className="stat-desc"></div>
          </div>
        </div>
      </div>
      <div className="divider lg:divider-vertical"></div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div className="stats shadow stats-vertical lg:stats-horizontal dark:bg-gray-800">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title dark:text-white">Min Expense</div>
            <div className="stat-value dark:text-white">
              <p>
                $
                {expenses.length > 0
                  ? Math.min(...expenses.map((item) => item.amount))
                  : 0}
              </p>
            </div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title dark:text-white">
              Total Expense Count
            </div>
            <div className="stat-value dark:text-white">
              <p>{expenses.length}</p>
            </div>
            <div className="stat-desc"></div>
          </div>

          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title dark:text-white">Max Expense</div>
            <div className="stat-value dark:text-white">
              <p>
                $
                {expenses.length > 0
                  ? Math.max(...expenses.map((item) => item.amount))
                  : 0}
              </p>
            </div>
            <div className="stat-desc"></div>
          </div>
        </div>
      </div>
    </InnerLayout>
  );
}

export default FinanceOverview;
