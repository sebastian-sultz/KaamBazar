import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";

import Error from "./components/Error.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import AboutUs from "./components/AboutUs.tsx";
import ContactUs from "./components/Contact.tsx";
import Login from "./components/Login.tsx";
import Signup from "./components/Signup.tsx";
import TermsAndConditions from "./components/TermsAndConditions.tsx";
import RefundPolicy from "./components/RefundPolicy.tsx";
import PrivacyPolicy from "./components/PrivacyPolicy.tsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Hero />
            <Features />
          </>
        ),
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/home",
        element: (
          <>
            <Hero />
            <Features />
          </>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/terms",
        element: <TermsAndConditions />,
      },
      {
        path: "/refunds",
        element: <RefundPolicy />,
      },
      {
        path: "/privacy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={appRouter} />
);
