import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductDetailPage from '../pages/ProductDetailPage'
import HomePage from '../pages/HomePage'
import Header from '../components/Header'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/productDetailPage" component={ProductDetailPage} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
