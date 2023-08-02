const LandingContent = () => {
  return (
    <section class="w-full pt-7 pb-7 md:pt-20 md:pb-24">
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
          <img
            src="/dashboard.png"
            alt=""
            class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20"
          />
        </div>

        <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl dark:text-white">
            Real-Time Tracking
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg dark:text-white">
            Get real-time insights into your spending habits and take control of
            your finances. Our app provides detailed reports and analysis to
            help you make informed financial decisions.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full"
                data-primary="blue-300"
              >
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Visualize income
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full"
                data-primary="blue-300"
              >
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              See your spending habits
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full"
                data-primary="blue-300"
              >
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Plan for the future
            </li>
          </ul>
        </div>
      </div>
      <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
        <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
          <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl dark:text-white">
            Effortless
          </h2>
          <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg dark:text-white">
            Easy to track your expenses and stay on top of your finances. With a
            simple and intuitive interface, you can easily add expenses,
            categorize them, and view detailed reports.
          </p>
          <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full"
                data-primary="blue-300"
              >
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Create a game plan
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full"
                data-primary="blue-300"
              >
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Analyze and improve your financial well-being
            </li>
            <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
              <span
                class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-300 rounded-full"
                data-primary="blue-300"
              >
                <span class="text-sm font-bold">✓</span>
              </span>{" "}
              Made simple to use
            </li>
          </ul>
        </div>

        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
          <img
            alt=""
            src="/convenient.png"
            class="pl-4  sm:pr-10 xl:pl-10 lg:pr-32"
          />
        </div>
      </div>
    </section>
  );
};
export default LandingContent;
