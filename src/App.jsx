import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultLayout from "./layouts/DefaultLayout";

import { BudgetProvider } from "./context/BudgetContext";
import { FavouriteProvider } from "./context/FavouriteContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import axios from "axios";

import { useEffect, useState } from "react";

import HomePage from "./pages/HomePage";
import BudgetModePage from "./pages/BudgetModePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import FavouritePage from "./pages/FavouritePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";




function App() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  function fetchAllProducts() {
    axios.get("https://fakestoreapi.com/products")
      .then((resp) => {
        setProductsList(resp.data);
      });
  }

  return (
    <BudgetProvider>
      <FavouriteProvider>
        <ShoppingCartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/products">
                  <Route path="" element={<ProductsPage productsList={productsList} />} />
                  <Route path=":id" element={<SingleProductPage />} />
                </Route>

                <Route path="/budget-mode" element={<BudgetModePage productsList={productsList} />} />
                <Route path="/favourites" element={<FavouritePage productList={productsList} />} />
                <Route path="/shopping-cart" element={<ShoppingCartPage productsList={productsList} />} />

                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ShoppingCartProvider>
      </FavouriteProvider>
    </BudgetProvider>
  );
}

export default App;