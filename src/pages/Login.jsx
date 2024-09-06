import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as yup from "yup"


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const Login =  () => {
  const navigate = useNavigate()
  const [formDetail, SetFormDetail] = useState({
    name:"",
    username:"",
    email: "",
    password: "",
  });

  let nameRef = useRef(null);
  let usernameRef = useRef(null)
  let emailRef = useRef(null);
  let passwordRef = useRef(null);

  const validationschema = yup.object({
    name:yup.string().required("Name is Required"),
    username:yup.string().required("UserName is Required"),
    email:yup.string().email("Invalid Email Format").required("Email is Required"),
    password:yup.string().required("Password is Required").min(8,"Password must be at least 8 character")
    .matches(
       /@/,
      "Password must contain the '@' symbol"
    )
  })

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(formDetail);

    try {
      const response = await axios.post(`http://localhost:5000/api/user/signin`, formDetail)
      if(response.status == 200){
       // console.log("login done")
       console.log(response.data)
       localStorage.setItem("eventify_user",JSON.stringify(response.data.data))
        // navigate to the home page
        // navigate(/home)
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  function handleOnChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    SetFormDetail({ ...formDetail, [name]: value });
  }

  function handleKeyPress(event, nextref) {
    if (event.key == "Enter") {
      nextref.current.focus();
    }
  }

  function handleSignupClick(e) {
    e.preventDefault();
    console.log("signup clicked")
    // handle signup
    navigate("/signup")
  }

  function handleClick(e) {
    e.preventDefault();
    // handle signup with google
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
       
          <h2 className="text-2xl font-bold text-center mb-8 underline">
            Login
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
              type="name"
              id="name"
              name="name"
              ref={nameRef}
              value={formDetail.name}
              onKeyUp={(event) => handleKeyPress(event, usernameRef)}
              onChange={handleOnChange}
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              UserName
            </label>

            <input
              type="username"
              id="username"
              name="username"
              ref={usernameRef}
              value={formDetail.username}
              onKeyUp={(event) => handleKeyPress(event, emailRef)}
              onChange={handleOnChange}
              placeholder="UserName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
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
              ref={emailRef}
              value={formDetail.email}
              onKeyUp={(event) => handleKeyPress(event, passwordRef)}
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
              ref={passwordRef}
              value={formDetail.password}
              onKeyUp={(event) => handleKeyPress(event, passwordRef)}
              onChange={handleOnChange}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition duration-300 ease-in-out">
            Submit
          </button>

          <hr className="border-gray-300 my-4" />

          <div className="flex items-center justify-center">
            <a
              onClick={handleClick}
              href="#"
              className="p-1 mt-2 flex items-center bg-gray-50 text-black rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              <img
                src="https://icon2.cleanpng.com/20180728/ra/93f307e6dd7cef0dfd4fc937632602e7.webp"
                className="w-10 h-10 mr-2"
              />
              Sign Up with Google
            </a>
          </div>


            <div className="flex justify-center">
              <a
                href="#"
                className="bg-gray-50 p-2 rounded-lg hover:bg-gray-200"
                onClick={handleSignupClick}
              >
                SignUp
              </a>
            </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
