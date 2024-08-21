// import { BrowserRouter as Router, Route, Routes } from "react-dom";
// import Header from "./home-components/Header.jsx";
// import Footer from "./home-components/Footer.jsx";
import HomePage from "./pages/HomePage";
// import ApartmentPage from "./pages/ApartmentPage.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <HomePage />
      {/* <ApartmentPage /> */}
    </>
  );
}

export default App;
