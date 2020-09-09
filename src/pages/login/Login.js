import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import bgImage from "../../assets/dist/images/illustration.svg";

//components
import InputField from "../../components/inputField/InputField";
import Button from "../../components/button/Button";

import { login } from "../../actions/User";
import { userLogin } from "../../apiConstants/ApiConstant";

const Login = () => {
  const [control, setControl] = useState({});

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setControl({
      ...control,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(login(userLogin, control));
    console.log(control);
  };

  return (
    <div className="login">
      <div className="container sm:px-10">
        <div className="block xl:grid grid-cols-2 gap-4">
          <div className="hidden xl:flex flex-col min-h-screen">
            <Link to="/" className="-intro-x flex items-center pt-5">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="w-6"
                src={logo}
              />
              <span className="text-white text-lg ml-3">
                Mid<span className="font-medium">One</span>
              </span>
            </Link>
            <div className="my-auto">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="-intro-x w-1/2 -mt-16"
                src={bgImage}
              />
              <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                A few more clicks to
                <br />
                sign in to your account.
              </div>
              <div className="-intro-x mt-5 text-lg text-white">
                Manage all your e-commerce accounts in one place
              </div>
            </div>
          </div>
          <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
              <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                Sign In
              </h2>
              <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">
                A few more clicks to sign in to your account. Manage all your
                e-commerce accounts in one place
              </div>
              <div className="intro-x mt-8">
                <InputField
                  type="text"
                  name="EmailPhone"
                  onChange={handleChange}
                  className="intro-x login__input input input--lg border border-gray-300 block"
                  placeholder="Email"
                />
                <InputField
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="intro-x login__input input input--lg border border-gray-300 block mt-4"
                  placeholder="Password"
                />
              </div>
              <div className="intro-x flex text-gray-700 text-xs sm:text-sm mt-4"></div>
              <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                {/* <Button
                  type="button"
                  onClick={handleClick}
                  className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                  value="Login"
                /> */}
                <Link
                  to="/dashboard"
                  className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
