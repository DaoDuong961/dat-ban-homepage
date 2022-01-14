import React from "react";
import Button from "../common/Button";
import Container from "../common/Container";
import "./header.css";

interface Props {}
export default function Header(props: Props) {
  return (
    <div className="root">
      <Container>
        <div className="header">
          <div className="header__left">
            <div className="menu">
              <ul>
                <li>
                  <a href="#" className="sub_menu">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="sub_menu">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="sub_menu">
                    About us
                  </a>
                </li>
              </ul>
              <Button backgroundColor="black" color="white" name="Order now" />
            </div>
          </div>
          <div className="header__right">
            <div className="search__account">
              <div className="search mg__right">
                <input type="text" placeholder="Search" />
                <a href="#">
                  <img
                    className="img__icon1"
                    src={require("../../assets/icons/search.png")}
                    alt=""
                  />
                </a>
              </div>
              <a href="#" className="account mg__right">
                <img
                  className="img__icon2"
                  src={require("../../assets/icons/user.png")}
                  alt="user"
                />
                <span>Account</span>
              </a>
              <a href="#" className="cart">
                <img
                  className="img__icon3"
                  src={require("../../assets/icons/cart.png")}
                  alt="cart"
                />
                <div className="number">
                  <span>1</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="border"></div>
    </div>
  );
}
