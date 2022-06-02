import React from "react";
import "./register.css";
import { Carousel } from "react-bootstrap";

import banners from "../../assets/banners.jpg";
import banner2 from "../../assets/banner2.jpg";
import { Link, Routes, BrowserRouter ,Switch ,Route } from "react-router-dom";
import Home from "../home/Home";
function Register() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="first" src={banners} alt="First slide" />
          <Carousel.Caption>
            <p className="headline">A Complete Malayalam Movie Collections</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="first" src={banner2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="first" src={banner2} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <BrowserRouter>
        <Link to="/home">
          <button id="button" className="btn btn-primary">
            MOVIE TIME!!!
          </button>
        </Link>

        <Switch>
            <Route path="/home">
                <Home/>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Register;
