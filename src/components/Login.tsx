import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils.tsx";
// import { useUser } from '../UserContext.tsx';
import {
  RiMailLine,
  RiLock2Line,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";

interface LoginInfo {
  email: string;
  password: string;
}

function Login() {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  // const { setLoggedInUser } = useUser();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (!email || !password) {
      return handleError("Email and password are required");
    }

    try {
      const response = await fetch(`http://localhost:8080/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        // setLoggedInUser(name);
        setTimeout(() => navigate("/home"), 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message;
        handleError(details || message);
      } else {
        handleError(message);
      }
    } catch (err: any) {
      handleError(err.message || "Something went wrong");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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
                Welcome Back
              </h1>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-secondary">
                Sign in to access your account
              </p>
            </div>

            <form onSubmit={handleLogin} className="grid gap-5 sm:gap-7">
              {/* Email Field */}
              <div className="relative grid grid-cols-1 gap-2 border-b-2 border-accent/20 group">
                <div className="flex items-center">
                  <RiMailLine className="text-gray-800 text-lg sm:text-xl" />
                  <input
                    onChange={handleChange}
                    type="email"
                    name="email"
                    placeholder="Enter Email..."
                    value={loginInfo.email}
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
                    value={loginInfo.password}
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

              {/* Remember me and Forgot password */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-accent focus:ring-accent border-border rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-secondary"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-accent hover:text-accent2"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 sm:py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all transform hover:scale-[1.01]"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* Signup Redirect */}
            <div className="mt-5 sm:mt-6 text-center text-sm">
              <span className="text-secondary">Don't have an account? </span>
              <Link
                to="/signup"
                className="font-medium text-accent hover:text-accent2"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="mt-8 sm:mt-12" />
    </div>
  );
}

export default Login;
