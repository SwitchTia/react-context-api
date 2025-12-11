
import "./App.css";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";


import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import { BudgetProvider } from "./context/BudgetContex";



function App() {
  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/products">
                <Route path="" element={<Products />} />
                <Route path=":id" element={<SingleProduct />} />
              </Route>
              {/* need to add a route for BudgetModeProducts page */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  );
}

export default App;