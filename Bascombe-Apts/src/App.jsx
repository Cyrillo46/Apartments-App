import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ApartmentPage from "./pages/ApartmentPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <HomePage /> */}
      <ApartmentPage />
    </>
  );
}

export default App;
