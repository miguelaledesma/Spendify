import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../context/globalContext";

const WaitingList = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const waitlistEntry = { email };
    try {
      const response = await axios.post(`${BASE_URL}wait-list`, waitlistEntry);

      if (response.status === 200) {
        // Waitlist entry added successfully
        console.log("Added to waitlist!");
        setMessage(
          "You have been added to the waitlist, check your email. We will be sending out updates soon!"
        );
        setEmail("");
      } else {
        // Handle error case
        console.log("Error adding to waitlist");
        setMessage("Error Adding to waitlist");
      }
    } catch (error) {
      setMessage(`${error.response.data.message}`);
      console.log("Error:", error);
    }

    setShowModal(true); // Show the modal regardless of the response
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-filter backdrop-blur-lg flex items-center justify-center z-50">
          <div className="bg-white max-w-md p-6 rounded-lg shadow-lg">
            <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800">
              Thank you for your support!
            </h5>
            <p className="mb-4 text-base text-gray-600">{message}</p>
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 py-2 text-xs  rounded-md border-2 border-gray-200 font-semibold text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <section className="py-8 leading-7 text-gray-900 sm:py-12 md:py-16 lg:py-24">
        <div class="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
          <div class="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
            <div class="box-border flex-1 text-center border-solid sm:text-left">
              <h2 class="m-0 text-4xl font-extrabold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl dark:text-white">
                Join the waitlist!
              </h2>
              <p class="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl dark:text-white">
                Experience budgeting like never before with Spendify's
                AI-powered insights
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
    </div>
  );
};

export default WaitingList;
