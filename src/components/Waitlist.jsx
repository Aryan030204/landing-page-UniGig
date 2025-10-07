import React, { useState } from "react";
import { Link } from "react-router-dom";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !education) {
      setMessage("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch(
        "https://landing-page-unigig-server.onrender.com/api/waitinglist/join",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, education }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setMessage("You’ve been added to the waitlist! 🎉");
        setName("");
        setEmail("");
        setEducation("");
      } else {
        setMessage(data.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // Adjusted vertical padding for better balance on mobile
    <div className="bg-gray-900 text-white py-12 lg:py-16 px-6 md:px-16 lg:px-32">
      {/* Made the gap responsive for better spacing when stacked vertically */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl lg:text-left text-center md:text-5xl font-bold mb-4">
            A place where everything changes for students
          </h2>
          {/* Corrected `text-md` to a standard class and made it responsive */}
          <p className="text-gray-300 lg:text-left text-center mt-3 text-base lg:text-lg">
            Not a class. Not a club. Not a job. Yet it will transform the way
            you experience student life. See it before the story reaches
            everyone else.
          </p>
        </div>

        {/* Right Section - Form */}
        {/* Adjusted padding inside the form card for smaller screens */}
        <div className="flex-1 w-full bg-white text-gray-900 rounded-xl p-6 md:p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Reserve your seat for beta launch
          </h3>
          <p className="text-gray-500 mb-6">
            It’s coming soon — and only early members will get the first glimpse
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block mb-1 font-medium">Your name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Select Education type
              </label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Choose an option</option>
                <option value="school">School</option>
                <option value="college">College</option>
              </select>
            </div>

            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSds9ag-PGRogH4Tq8AAiOUaicJMjKqLxAplki3F4qsdq2fgiw/viewform?usp=header"
              type="submit"
              disabled={loading}
              className=" text-center bg-purple-800 text-white font-semibold py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Joining..." : "Join"}
            </Link>

            {message && (
              <p
                className={`mt-2 text-center ${
                  message.includes("added") ? "text-green-500" : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
