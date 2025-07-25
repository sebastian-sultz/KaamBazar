import React, { useState, useEffect, useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useUser } from "../UserContext.tsx";
import { FaUser } from "react-icons/fa";
import StarBorder from "../assets/Anim/StarBorder";
import Logo from "../assets/Img/kaambazar_logo_512x512px_transparent.png";
const Header: React.FC = () => {
  const { loggedInUser, setLoggedInUser } = useUser();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsMobileMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    setLoggedInUser("");
    setIsMobileMenuOpen(false);
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    {
      to: "/",
      label: "Home",
      icon: "M5 12l-2 0l9 -9l9 9l-2 0 M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7 M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6",
    },
    {
      to: "/aboutUs",
      label: "About Us",
      icon: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0 M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",
    },
    {
      to: "/contact",
      label: "Contact Us",
      icon: "M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2H5a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2z",
    },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto px-4 sm:max-w-7xl md:w-4/5 md:max-w-5xl">
        {/* Main header container with preserved backdrop blur */}
        <div className="flex items-center justify-between py-1 md:py-2 rounded-full px-2 md:px-3 backdrop-blur-xl bg-[rgba(249,250,251,0.7)] shadow-md border border-border transition-all duration-300">
          {/* Logo - unchanged */}
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="overflow-hidden h-4 md:h-5 flex items-center"
          >
            <img
              src={Logo}
              alt="Logo"
              loading="lazy"
              className="h-28 md:h-32 w-fit object-contain"
            />
          </NavLink>

          {/* Desktop navigation - unchanged */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm font-medium transition-all duration-200 relative px-3 py-1 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-text hover:text-primary"
                  } after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100`
                }
              >
                {({ isActive }) => (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-5 w-5 transition-transform ${
                        isActive
                          ? "scale-110 text-primary"
                          : "text-textSecondary"
                      }`}
                    >
                      <path d={icon} />
                    </svg>
                    <span className="hidden lg:inline md:text-base">
                      {label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop auth buttons - wrapped original button with StarBorder */}
          <div className="hidden md:flex items-center gap-4">
            <NavLink
              to={loggedInUser ? "#" : "/login"}
              onClick={loggedInUser ? handleLogout : undefined}
            >
              <StarBorder
                thickness={0.5}
                as="div"
                className="relative inline-flex items-center rounded-full transition-all group"
              >
                <span className="absolute inset-0 rounded-full p-0.5">
                  <span className="block h-full w-full rounded-full bg-background"></span>
                </span>
                <span className="relative z-10 flex items-center gap-2 text-primary px-5 py-2.5 font-semibold">
                  <FaUser className="h-5 w-5" />
                  {loggedInUser ? "Logout" : "Login"}
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </StarBorder>
            </NavLink>
          </div>

          {/* Mobile controls - unchanged */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={loggedInUser ? handleLogout : () => navigate("/login")}
              className="inline-flex items-center p-2 bg-primary text-white font-semibold rounded-full hover:shadow-lg transition-all group relative overflow-hidden hover:bg-green-700"
            >
              <span className="relative z-10 flex items-center">
                <FaUser className="h-5 w-5" />
                <svg
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-surface transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 17 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-text"
              >
                <path d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu - unchanged */}
        {isMobileMenuOpen && (
          <nav
            ref={mobileMenuRef}
            className="md:hidden absolute top-full left-0 right-0 mt-2 w-[80%] mx-auto max-w-5xl p-4 backdrop-blur-md bg-[rgba(249,250,251,0.9)] shadow-md border border-border rounded-lg animate-slide-down"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map(({ to, label, icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 p-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? "text-primary font-semibold"
                        : "text-text hover:text-primary"
                    } after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-5 w-5 transition-colors duration-200 ${
                          isActive
                            ? "text-primary scale-110"
                            : "text-textSecondary group-hover:text-primary"
                        }`}
                      >
                        <path d={icon} />
                      </svg>
                      {label}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
