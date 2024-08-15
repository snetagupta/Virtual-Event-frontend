import { useState } from "react";

const Signup = () => {
  const [formDetail, SetFormDetail] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formDetail);
  }

  function handleOnChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    SetFormDetail({ ...formDetail, [name]: value });
  }

  function handleClick(e) {
    e.preventDefault();
    // handle signup with google
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-8 underline">
          Sign up Page
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formDetail.name}
              onChange={handleOnChange}
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              value={formDetail.email}
              onChange={handleOnChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              value={formDetail.password}
              onChange={handleOnChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-semibold mb-2"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="conformPassword"
              name="confirmPassword"
              value={formDetail.confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition duration-300 ease-in-out">
            Submit
          </button>

          <hr className="border-gray-300 my-4" />

          <div className="flex items-center justify-center">
            <a onClick={handleClick}
              href="#"
              className="p-1 mt-2 flex items-center bg-gray-50 text-black rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              Sign Up with Google
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
