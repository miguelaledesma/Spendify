import Navigation from "./DashboardNav/Navigation";

const DashboardMain = () => {
  return (
    <div className="DashMainApp" class="h-screen relative">
      <div className="mainAppLayout" class="p-8 h-full flex gap-8">
        <main class="flex-1 bg-white bg-opacity-70 border-3 border-white rounded-3xl backdrop-blur-lg overflow-x-hidden scrollbar-none">
          <Navigation />
        </main>
      </div>
    </div>
  );
};

export default DashboardMain;
