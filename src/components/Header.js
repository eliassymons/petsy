import Dropdown from "react-bootstrap/Dropdown";
import Hamburger from "hamburger-react";
import cart from "../images/icons8-shopping-cart-96.png";

export default function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <Dropdown>
          <Dropdown.Toggle
            className="dropdown"
            variant="success"
            data-toggle="dropdown"
          >
            <Hamburger />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Shop</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Locations action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Services</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Story</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Articles</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <h1>Petsy</h1>
        <div className="my-cart">
          <img alt="cart" src={cart} className="shopping-cart-img" />
        </div>
      </div>
    </div>
  );
}
