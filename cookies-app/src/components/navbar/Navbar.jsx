import { Drawer } from "@mui/material";
import { useState } from "react";
import "./navbar.css";
import AnchorTemporaryDrawer from "../drawer/Drawer.jsx";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

function Navbar({ cartItems, removeFromCart }) {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ right: open });
  };

  return (
    <>
      <div className="container-navbar" id="navBar">
        <div className="container-navbar-title">
          <Link to="/" className="navbar-title">
            <h1 className="navbar-title">Cookies</h1>
          </Link>
          <h2 className="navbar-subtitle">
            <span className="material-symbols-outlined navbar-crown">
              crown
            </span>
            Premium
          </h2>
        </div>
        <div className="container-navbar-list">
          <ul className="navbar-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#premium">Premium</a>
            </li>
            <li>
              <a href="#popular">Popular</a>
            </li>
            <li>
              <a href="#classic">Classic</a>
            </li>
          </ul>
        </div>
        <div className="container-navbar-icons">
          <div className="icon-buscar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="icon-like">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <div className="icon-carrito" onClick={toggleDrawer(true)}>
            <Badge
              badgeContent={cartItems.length}
              color="error"
              className="badge-icon"
              overlap="circular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </Badge>
          </div>
          <div className="icon-usuario">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <AnchorTemporaryDrawer
        state={state}
        toggleDrawer={toggleDrawer}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </>
  );
}

export default Navbar;
