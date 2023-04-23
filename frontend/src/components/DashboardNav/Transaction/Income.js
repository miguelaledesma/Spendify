import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../../context/globalContext";
import { InnerLayout } from "../../../styles/Layout";
import { Loader } from "../../../styles/Loader";
import IncomeForm from "../../Forms/IncomeForm";
import IncomeItem from "../Items/IncomeItems";
const Income = () => {
  const { addIncome, incomes, getIncomes, totalIncome, deleteIncome } =
    useGlobalContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getIncomes();
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <IncomeStyled>
      <InnerLayout>
        <h1>Incomes</h1>

        <h2 className="total-income">
          Total Income: <span>${totalIncome()}</span>
        </h2>
        {isLoading ? (
          // display loader while data is being fetched
          <Loader />
        ) : (
          // display income items when data is loaded
          <div className="income-content">
            <div className="form-container">
              <IncomeForm />
            </div>
            <div className="incomes">
              {incomes.map((income) => {
                const {
                  _id,
                  title,
                  amount,
                  date,
                  category,
                  description,
                  type,
                } = income;
                return (
                  <IncomeItem
                    key={_id}
                    id={_id}
                    title={title}
                    description={description}
                    amount={amount}
                    date={date}
                    type={type}
                    category={category}
                    indicatorColor="#42AD00"
                    deleteItem={deleteIncome}
                  />
                );
              })}
            </div>
          </div>
        )}
      </InnerLayout>
    </IncomeStyled>
  );
};

const IncomeStyled = styled.div`
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

export default Income;
