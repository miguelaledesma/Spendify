import React from "react";
import { useGlobalContext } from "../../../context/globalContext";

function RecentTransactions() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <div>
      <div className="relative col-span-1 m-auto h-[50vh] w-full overflow-scroll rounded-lg border bg-white p-4 lg:h-[60vh] dark:bg-gray-800">
        <h1 className="dark:text-white">Recent Transactions</h1>

        <ul>
          {history.map((item) => (
            <li
              key={item._id}
              className="rounded-lg my-3 flex items-center bg-slate-50 p-2 hover:bg-slate-100 dark:bg-gray-800"
            >
              <div className="rounded-lg bg-rose-50 p-2 dark:bg-blue-200"></div>
              {/* Order info */}
              <div className="pl-4">
                <p
                  className="font-bold text-slate-700"
                  style={{
                    color: item.type === "expense" ? "#F87272" : "#66CC8A",
                    display: "inline-block",
                  }}
                >
                  {item.title}
                </p>
                <p
                  className="text-sm text-slate-400"
                  style={{
                    color: item.type === "expense" ? "#F87272" : "#66CC8A",
                    display: "inline-block",
                    marginLeft: "10px",
                  }}
                >
                  {item.type === "expense"
                    ? `-${item.amount <= 0 ? 0 : item.amount}`
                    : `+${item.amount <= 0 ? 0 : item.amount}`}
                </p>
              </div>
              <p className="absolute right-6 text-sm md:hidden lg:flex"></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecentTransactions;
