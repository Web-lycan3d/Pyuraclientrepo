/** @format */
import React, { Fragment, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.styles.scss";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/footer.component";

const Contact = lazy(() => import("./pages/contact/contact.component"));
const Home = lazy(() => import("./pages/home/Home"));
const OrderStatus = lazy(() => import("./pages/orderStatus/OrderStatus"));
const About = lazy(() => import("./pages/about/about.component"));
const AdminPanel = lazy(() => import("./pages/admin/admin.component"));

const Product = lazy(() => import("./pages/Product/Product"));
const Checkout = lazy(() => import("./pages/checkout/Checkout"));
const Ordersucces = lazy(() => import("./pages/ordersuccess/Ordersucces"));

const App = () => {
  const Loader = () => {
    return (
      <div className="loader-container">
        <div class="cssload-loader">
          <div class="cssload-top"></div>
          <div class="cssload-bottom"></div>
          <div class="cssload-line"></div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/order" component={OrderStatus} />
          <Route exact path="/user/product" component={Product} />
          <Route exact path="/about" component={About} />
          <Route exact path="/user/checkout" component={Checkout} />
          <Route exact path="/admin/:id" component={AdminPanel} />
          <Route exact path="/user/order/created" component={Ordersucces} />
        </Switch>
      </Suspense>
      <Footer />
    </Fragment>
  );
};

export default App;
