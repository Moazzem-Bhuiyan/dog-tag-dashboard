import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import login_image from "../../images/login/login_page_logo.png";


const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Client-side validation
    if (!email) {
      setError("Email is required");
      return;
    }

    setLoading(true); // Set loading to true



    


    // try {
    //   // API Call
    //   const response = await axios.post(
    //     "http://localhost:5001/api/user/admin/forgot-password",
    //     { email }
    //   );
    //   console.log(response.data);
    //   setOtpEmail(email);

    //   // Show success message
    //   toast.success("Verification email sent. Please check your inbox.");

    //   // Redirect to OTP verification route
    //   navigate("/auth/verifyOTP");
    // } catch (err) {
    //   // Show error message
    //   const errorMessage =
    //     err.response?.data?.message || "Something went wrong!";
    //   toast.error(errorMessage);
    //   setError(errorMessage);
    // } finally {
    //   setLoading(false); // Reset loading state
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3A3C3B]">
      <div className="flex flex-col md:flex-row items-center rounded-lg p-8 w-full h-[500px] max-w-7xl">
        {/* Form Section */}
        <div className="flex-1 w-full max-w-lg mx-auto bg-black-2 p-10 rounded-lg border-2 border-white text-white ">
          <h2 className="text-lg font-medium mb-4 text-white text-center ">
            Forgot Password
          </h2>
          <p className="text-white mb-6 text-sm font-medium text-center">
            Please enter your registered email to receive a verification code
          </p>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your-email@example.com"
                className="w-full p-3 border-2 border-black-2 bg-none rounded-lg focus:outline-none focus:ring-2 focus:ring-black-2"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading} // Disable the button when loading
              className={`w-[430px] h-12 py-4 px-8 bg-white text-black  rounded-3xl text-base flex items-center justify-center ${
                loading
                  ? "opacity-75 cursor-not-allowed"
                  : "hover:scale-105 duration-200"
              }`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-black-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              ) : (
                "Confirm"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
