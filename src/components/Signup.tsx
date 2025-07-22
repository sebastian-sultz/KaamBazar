import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils.tsx";
import {
  RiUserLine,
  RiMailLine,
  RiLock2Line,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

type SignupInfo = {
  name: string;
  email: string;
  password: string;
};

function Signup() {
  const [signupInfo, setSignupInfo] = useState<SignupInfo>({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("Name, email, and password are required");
    }

    try {
      const url = `http://localhost:8080/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || message;
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err: any) {
      handleError(err?.message || "Something went wrong");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12 md:py-24 bg-gradient-to-br from-background to-highlight">
      <div className="w-full max-w-[90%] sm:max-w-md">
        <div className="bg-[rgba(255,255,255,0.2)] backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <img
                src="https://res.cloudinary.com/djjmj40t9/image/upload/f_auto,q_auto,dpr_auto/v1738956464/Logo2_qio7bh.png"
                alt="Logo"
                className="h-12 sm:h-16 mx-auto mb-3 sm:mb-4"
              />
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">
                Create Account
              </h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-secondary">
                Sign up to get started
              </p>
            </div>

            <form onSubmit={handleSignup} className="grid gap-5 sm:gap-7">
              {/* Name Field */}
              <div className="relative grid grid-cols-1 gap-2 border-b-2 border-accent/20 group">
                <div className="flex items-center">
                  <RiUserLine className="text-gray-800 text-lg sm:text-xl" />
                  <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    autoFocus
                    placeholder="Enter Name..."
                    value={signupInfo.name}
                    className="w-full p-2 text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none focus:placeholder-transparent text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="absolute -bottom-px left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>

              {/* Email Field */}
              <div className="relative grid grid-cols-1 gap-2 border-b-2 border-accent/20 group">
                <div className="flex items-center">
                  <RiMailLine className="text-gray-800 text-lg sm:text-xl" />
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={signupInfo.email}
                    className="w-full p-2 text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none focus:placeholder-transparent text-sm sm:text-base"
                    required
                  />
                </div>
                <div className="absolute -bottom-px left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>

              {/* Password Field */}
              <div className="relative grid grid-cols-1 gap-2 border-b-2 border-accent/20 group">
                <div className="flex items-center">
                  <RiLock2Line className="text-gray-800 text-lg sm:text-xl" />
                  <input
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password..."
                    value={signupInfo.password}
                    className="w-full p-2 text-gray-800 bg-transparent border-none focus:outline-none focus:ring-0 focus:border-none focus:placeholder-transparent text-sm sm:text-base"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? (
                      <RiEyeLine className="text-gray-800 text-lg sm:text-xl cursor-pointer" />
                    ) : (
                      <RiEyeOffLine className="text-gray-800 text-lg sm:text-xl cursor-pointer" />
                    )}
                  </button>
                </div>
                <div className="absolute -bottom-px left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all transform hover:scale-[1.01]"
                >
                  Sign up
                </button>
              </div>
            </form>

            {/* Redirect */}
            <div className="mt-5 sm:mt-6 text-center text-sm">
              <span className="text-secondary">Already have an account? </span>
              <Link
                to="/login"
                className="font-medium text-accent hover:text-accent2"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="mt-8 sm:mt-12" />
    </div>
  );
}

export default Signup;
