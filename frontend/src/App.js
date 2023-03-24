// import logo from "./logo.svg";
import "./App.css";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")`,
    backgroundSize: "cover",
  };
  return (
    <div className="App">
      <div className=" text-black " style={backgroundImageStyle}>
        <div className="bg-gradient-to-r from-white px-8 py-16">
          <div className=" max-w-xl grid grid-cols-1 gap-8">
            <div className="w-12">
              {/* <ReactLogo className="fill-white" /> */}
            </div>
            {/* <h2 className="text-xl uppercase font-bold text-left">
              Track Your Expenses like a Pro
            </h2> */}
            <h1 className="text-6xl font-bold">
              Take control of your finances, effortlessly.
            </h1>
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">
                Say goodbye to spreadsheet headaches and hello to effortless
                expense tracking
              </p>
              <button
                className="relative bg-blue-500 py-2 px-4 text-base rounded-md w-48 hover:bg-purple-600 focus:outline-none focus:shadow-outline-blue"
                style={{
                  padding: "12.5px 30px",
                  borderRadius: "100px",
                  color: "#ffffff",
                  fontWeight: "bold",
                  transition: "background-color 0.5s",
                }}
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 opacity-0 transition-all duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-16">
        <div className="max-w-md mb-16">
          <h2 className="text-5xl">Track your expenses like a Pro</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 text-slate-600">
          <div>
            <h3 className="text-2xl font-bold mb-2">Tracking</h3>
            <p className="text-lg">
              Get real-time insights into your spending habits and take control
              of your finances. Our app provides detailed reports and analysis
              to help you make informed financial decisions.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2">Effortless</h3>
            <p className="text-lg">
              Our app makes it easy to track your expenses and stay on top of
              your finances. With a simple and intuitive interface, you can
              easily add expenses, categorize them, and view detailed reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
