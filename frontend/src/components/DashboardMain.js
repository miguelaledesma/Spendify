import Navigation from "./DashboardNav/Navigation";
import Income from "./DashboardNav/Income";
import Expense from "./DashboardNav/Expenses";
import { useState } from "react";
const DashboardMain = () => {
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <DashboardMain />;
      case 2:
        return <DashboardMain />;
      case 3:
        return <Income />;
      case 4:
        return <Expense />;
      default:
        return <DashboardMain />;
    }
  };

  return (
    <div className="DashMainApp" class="h-screen relative">
      <div className="mainAppLayout" class="p-8 h-full flex gap-8">
        <Navigation active={active} setActive={setActive} />
        <main
          class="flex-1 bg-rgba-252-246-249-78 border-3 border-white backdrop-blur-4.5 rounded-2xl overflow-x-hidden
"
        >
          {/* {displayData()} */}
        </main>
      </div>
    </div>
  );
};

export default DashboardMain;
/**
 * const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;
 */
