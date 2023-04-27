import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import FinanceChart from "../DashboardNav/Items/Chart";
import styled from "styled-components";
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
      <h2> Totals </h2>
      <div className="flex flex-col w-full lg:flex-row dark:bg-gray-900">
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center dark:bg-gray-900">
          <div className="stats shadow h-full w-full">
            <div className="stat ">
              <div className="stat-title h-full w-full place-items-center">
                Total Expense
              </div>
              <div className="stat-value h-full w-full">
                {" "}
                ${totalExpenses()}
              </div>
              <div className="stat-desc h-full w-full"></div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          <div className="stats shadow h-full w-full ">
            <div className="stat h-full w-full ">
              <div className="stat-title h-full w-full ">Total Income</div>
              <div className="stat-value h-full w-full "> ${totalIncome()}</div>
              <div className="stat-desc h-full w-full "></div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
          <div className="stats shadow h-full w-full ">
            <div className="stat h-full w-full ">
              <div className="stat-title h-full w-full ">Total Balance</div>
              <div className="stat-value h-full w-full ">
                {" "}
                ${totalBalance()}
              </div>
              <div className="stat-desc h-full w-full "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider lg:divider-vertical"></div>
      <h2> Stats</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div className="stats shadow stats-vertical lg:stats-horizontal">
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Min Income </div>
            <div className="stat-value">
              <p>
                $
                {incomes.length > 0
                  ? Math.min(...incomes.map((item) => item.amount))
                  : 0}
              </p>
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
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Income Count</div>
            <div className="stat-value">
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
            <div className="stat-title">Max Income</div>
            <div className="stat-value">
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
        <div className="stats shadow stats-vertical lg:stats-horizontal">
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
            <div className="stat-title">Min Expense</div>
            <div className="stat-value">
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
            <div className="stat-title">Total Expense Count</div>
            <div className="stat-value">
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
            <div className="stat-title">Max Expense</div>
            <div className="stat-value">
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
    // {/* </DashboardStyled> */}
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1 / 4;
      height: 400px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        max-width: 100%;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          display: flex;
          background: #fcf6f9;
          border: 2px solid #ffffff;
          box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
          border-radius: 20px;
          padding: 2rem;
          p {
            font-size: 1rem;
            font-weight: 700;
          }
        }
        .balance {
          grid-column: 2 / 4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            color: green;
            opacity: 0.6;
            font-size: 2rem;
          }
        }
      }
    }
    .history-con {
      grid-column: 4 / -1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .salary-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .salary-item {
        background: #fcf6f9;
        border: 2px solid #ffffff;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.6rem;
        }
      }
    }
  }
`;

export default FinanceOverview;
