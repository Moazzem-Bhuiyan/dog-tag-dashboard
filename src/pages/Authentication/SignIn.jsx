import React, {useState, useContext, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

import {IoEyeOffOutline} from "react-icons/io5";
import {FaRegEye} from "react-icons/fa";
const SignIn = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [showPassword, setShowPassword] = useState(false);
     const [error, setError] = useState(null);
     const navigate = useNavigate();

     // redirect if token exists
     // useEffect(() => {
     //   if (auth.token) {
     //     return navigate("/"); // Redirect to dashboard if token exists
     //   }
     // }, [auth]);

     const handleSubmit = async (e) => {
          e.preventDefault();
          console.log("Email:", email);
          console.log("Password:", password);
     };

     return (
          <div className="min-h-screen flex items-center justify-center bg-[#3A3C3B]">
               <div className="flex flex-col md:flex-row items-center rounded-lg p-8 w-full h-[500px] max-w-7xl">
                    {/* Login Form Section */}
                    <div className="flex-1 w-full max-w-lg mx-auto border-2 p-10 border-white rounded-lg bg-black-2 ">
                         <h2 className="text-lg font-medium mb-4 text-white text-center">
                              Login to account
                         </h2>
                         <p className="text-white mb-6 text-sm font-medium text-center">
                              Please enter your email and password to continue
                         </p>
                         {error && <p className="text-red-500 mb-2">{error}</p>}

                         <form className="space-y-6" onSubmit={handleSubmit}>
                              {/* Email Input */}
                              <div>
                                   <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-white">
                                        Email
                                   </label>
                                   <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                             setEmail(e.target.value)
                                        }
                                        placeholder="your-email@example.com"
                                        className="w-full p-3 border-2 text-black border-[#ffff] bg-none rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                        required
                                   />
                              </div>

                              {/* Password Input */}
                              <div className="relative">
                                   <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-white">
                                        Password
                                   </label>
                                   <input
                                        type={
                                             showPassword ? "text" : "password"
                                        }
                                        id="password"
                                        value={password}
                                        onChange={(e) =>
                                             setPassword(e.target.value)
                                        }
                                        placeholder="********"
                                        className="w-full p-3 border-2 text-black border-[#ffff] bg-none rounded-lg focus:outline-none focus:ring-2 focus:ring-black-2"
                                        required
                                   />
                                   <button
                                        type="button"
                                        onClick={() =>
                                             setShowPassword(!showPassword)
                                        }
                                        className="absolute top-11 transform -translate-y-1/2 right-4 text-black-2">
                                        {showPassword ? (
                                             <FaRegEye />
                                        ) : (
                                             <IoEyeOffOutline />
                                        )}
                                   </button>
                              </div>

                              {/* Remember Password & Forgot Password */}
                              <div className="flex justify-between items-center text-sm">
                                   <label className="flex items-center">
                                        <input
                                             type="checkbox"
                                             className="form-checkbox text-green-600 border-gray-300 rounded"
                                        />
                                        <span className="ml-2 text-white">
                                             Remember Password
                                        </span>
                                   </label>
                                   <Link
                                        to={"/auth/forgetPassword"}
                                        className="text-red-500 hover:underline">
                                        Forgot Password?
                                   </Link>
                              </div>

                              {/* Submit Button */}
                              <button
                                   type="submit"
                                   className="w-[430px] h-12 py-4 px-8 bg-white text-black  rounded-3xl text-base flex items-center justify-center hover:scale-105 duration-200">
                                   Sign In
                              </button>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default SignIn;
