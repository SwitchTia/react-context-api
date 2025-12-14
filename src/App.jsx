
import "./App.css";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/NotFound";


import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";
import { BudgetProvider } from "./context/BudgetContex";
import axios from "axios";
import { useEffect, useState } from "react";
import BudgetModePage from "./pages/BudgetModePage";





function App() {


  const [productsList, setProductsList] = useState([]);


    useEffect(() => {
        fetchAllProducts();
    }, [])

    function fetchAllProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((resp) => {
                setProductsList(resp.data);
            });
    }

  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/products">
                <Route path="" element={<Products productsList={productsList} />} />
                <Route path=":id" element={<SingleProduct />} />
              </Route>
              <Route
                path="/budget-mode"
                element={<BudgetModePage productsList={productsList} />}
              />
              
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  );
}

export default App;