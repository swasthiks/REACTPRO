import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../../Components/About/Contact";
import MapContainer from "../../Components/About/MapContainer";
import NotFound from "../NotFound";
import Footer from "../../Components/Footer/Footer";
import AboutUs from "../../Components/About/About";
import Gallery from "../../Components/Gallery/Gallery";
import Reservation from "../../Components/Reservation/Reservation";
import Home from "../../Components/Home/Home";
import MainMenu from "../../Components/Menu/MainMenu";
import Navigation from "../../Components/Navigation/Navigation";
import Loaction from "../../Components/Location/Index";
import Cart from "../../Components/Carts/cart comp/Cart";

// import j from "../../Components/Carts/"

import "../../Components/Carts/App.css";
import Header from "../../Components/Carts/cart comp/Header";
import Homes from "../../Components/Carts/cart comp/Home";




const Routes = props => {
  return (
    <Router>
      <Header />
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="../../Components/Carts/">
            <Homes />
          </Route>
          <Route path="/about" component={AboutUs} />
          <Route path="/menu" component={MainMenu} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/reservation" component={Reservation} />
          <Route path="/Cart">
            <Cart />
          </Route>
          <Route path="/location" component={Loaction} />
          <Route component={NotFound} />
        </Switch>
        <Contact />
        <MapContainer />
        <Footer />
      </div>
    </Router>
  );
};

export default Routes;
