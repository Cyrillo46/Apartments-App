// import { BrowserRouter as Router, Route, Routes } from "react-dom";
// import Header from "./home-components/Header.jsx";
// import Footer from "./home-components/Footer.jsx";
import ApartmentPage from "./pages/ApartmentPage";
import { BarPage } from "./pages/BarPage";
import HomePage from "./pages/HomePage";
// import BarPage from "./pages/BarPage";
// import ApartmentPage from "./pages/ApartmentPage.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {/* <HomePage /> */}
      <BarPage />
      {/* <BarPage /> */}
      {/* <ApartmentPage /> */}
    </>
  );
}

export default App;
