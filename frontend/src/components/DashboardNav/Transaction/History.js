import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../../context/globalContext";

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();

  return (
    <div>
      <h2>Recent History</h2>
      {history.map((item) => {
        const { _id, title, amount, type } = item;
        return (
          <div
            key={_id}
            className="flex flex-col border-opacity-50 sm:w-screen"
          >
            <div className="grid h-20 card bg-gray-300 rounded-box place-items-center">
              <div className="stats  h-full w-full lg:text-2xl sm:text-sm">
                <div
                  className="stat"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="stat-title h-full w-full">
                    <p
                      style={{
                        color: type === "expense" ? "red" : "green",
                        display: "inline-block",
                      }}
                    >
                      {title}
                    </p>
                  </div>
                  <div className=" font-bold h-full w-full sm:text-xxl lg:text-xxl ">
                    <p
                      style={{
                        color: type === "expense" ? "red" : "green",
                        display: "inline-block",
                        marginLeft: "10px",
                      }}
                    >
                      {type === "expense"
                        ? `-${amount <= 0 ? 0 : amount}`
                        : `+${amount <= 0 ? 0 : amount}`}
                    </p>
                  </div>
                  <div className="stat-desc h-full w-full"></div>
                </div>
              </div>
            </div>
            <div className="divider "></div>
          </div>
        );
      })}
    </div>
  );
}

export default History;
