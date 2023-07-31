import React, { useState } from "react";

import Expense from "./DashboardNav/Transaction/Expenses";
import Income from "./DashboardNav/Transaction/Income";
import { useGlobalContext } from "../context/globalContext";
import FinanceOverview from "./DashboardNav/FinancesOverview";
import ResponsiveNavigation from "./DashboardComponents/DaisyNavigation";
// const BASE_URL = "http://localhost:5000/api/v1/";

const DashboardMain = () => {
  const { user } = useGlobalContext();
  const [active, setActive] = useState(1);

  const renderComponent = () => {
    switch (active) {
      case 1:
        return <FinanceOverview />;
      case 2:
        return <FinanceOverview />;
      case 3:
        return <Income />;
      case 4:
        return <Expense />;
      default:
        return <FinanceOverview />;
    }
  };
  return (
    <div className="DashMainApp h-screen relative">
      <ResponsiveNavigation active={active} setActive={setActive} user={user} />
      <div className="mainAppLayout p-4 h-full flex gap-3 dark:bg-gray-900">
        <main className="flex-1 bg-rgba-252-246-249-78 border-3 border-white backdrop-blur-4.5 rounded-2xl overflow-x-hidden">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardMain;

//   const AppStyled = styled.div`
//   height: 100vh;
//   background-image: url(${props => props.bg});
//   position: relative;
//   main{
//     flex: 1;
//     background: rgba(252, 246, 249, 0.78);
//     border: 3px solid #FFFFFF;
//     backdrop-filter: blur(4.5px);
//     border-radius: 32px;
//     overflow-x: hidden;
//     &::-webkit-scrollbar{
//       width: 0;
//     }
//   }
// `;
