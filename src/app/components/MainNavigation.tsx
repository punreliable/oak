"use client";
import React from "react";
import { NavLink } from "react-router-dom";
import onSubmitChange from "../../utilities/onSelectChange";
import { closeNavModal, showNavModal } from "../../utilities/modals";
import classes from "./MainNavigation.module.scss";

const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <ul>
            <li>
              <button
                type="button"
                className="nes-btn is-primary"
                onClick={showNavModal}
              >
                Menu
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <dialog className="nes-dialog" id="dialog-navigation">
        <form method="dialog">
          <p className="title">Menu</p>
          <ul>
          <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Search by Name
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/types"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Pokemon Types
              </NavLink>
            </li>

          </ul>

          <ul>
            <li>
              <NavLink
                to="/carousel"

                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Carousel
              </NavLink>
            </li>
          </ul>

          <menu className="dialog-menu">
            <button className="nes-btn is-error" onClick={closeNavModal}>
              Close
            </button>
          </menu>
        </form>
      </dialog>
    </>
  );
};

export default MainNavigation;
