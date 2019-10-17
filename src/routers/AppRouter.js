import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top'
import ProductDetailPage from "../pages/ProductDetailPage";
import HomePage from "../pages/HomePage";
import Header from "../components/Header";
import NotFoundPage from "../pages/NotFoundPage";
import SearchResultPage from "../pages/SearchResultPage";
import CategoryPage from "../pages/CategoryPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import OrderPage from '../pages/OrderPage'

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
      <ScrollToTop>
        <Route component={Header} />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/search/:id" component={SearchResultPage} />
          <Route path="/category/:id" component={CategoryPage} />
          <Route path="/item/:id" component={ProductDetailPage} />
          <Route path="/shoppingCart" component={ShoppingCartPage} />
          <Route path="/order" component={OrderPage} />
          <Route component={NotFoundPage} />
        </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
