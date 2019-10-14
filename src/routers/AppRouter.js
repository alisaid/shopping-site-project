import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductDetailPage from "../pages/ProductDetailPage";
import HomePage from "../pages/HomePage";
import Header from "../components/Header";
import NotFoundPage from "../pages/NotFoundPage";
import SearchResultPage from "../pages/SearchResultPage";
import CategoryPage from "../pages/CategoryPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={Header} />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/search/:id" component={SearchResultPage} />
          <Route path="/category/:id" component={CategoryPage} />
          <Route path="/item/:id" component={ProductDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
