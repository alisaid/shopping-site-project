import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductDetailPage from '../pages/ProductDetailPage'
import HomePage from '../pages/HomePage'
import Header from '../components/Header'
import NotFoundPage from '../pages/NotFoundPage';
import SearchResultPage from '../pages/SearchResultPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/search/:id" component={SearchResultPage} />
                    <Route path="/productDetailPage" component={ProductDetailPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
