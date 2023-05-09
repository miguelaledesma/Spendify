import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../context/globalContext";
const WaitingList = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async function (e) {
    e.preventDefault();
    const waitlistEntry = { email };
    try {
      const response = await axios.post(`${BASE_URL}wait-list`, waitlistEntry);

      if (response.status === 200) {
        // Waitlist entry added successfully
        console.log("Added to waitlist!");
      } else {
        // Handle error case
        console.log("Error adding to waitlist");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };
  return (
    <section class="py-8 leading-7 text-gray-900 sm:py-12 md:py-16 lg:py-24">
      <div class="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
        <div class="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
          <div class="box-border flex-1 text-center border-solid sm:text-left">
            <h2 class="m-0 text-4xl font-extrabold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl dark:text-white">
              Join the waitlist!
            </h2>
            <p class="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl dark:text-white">
              Experience budgeting like never before with Spendify's AI-powered
              insights
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div
              data-rounded="rounded-full"
              className="relative flex items-center max-w-md mx-auto mt-12 ml-10 overflow-hidden text-center rounded-full"
            >
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none"
                data-primary="indigo-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="relative top-0 right-0 block">
                <button
                  type="submit"
                  className="inline-flex items-center w-32 h-12 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-blue-400 border border-transparent hover:bg-blue-700 focus:outline-none active:bg-blue-300"
                  data-primary="blue-500"
                >
                  Sign Up
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitingList;
