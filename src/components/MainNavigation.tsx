import React, { useRef } from "react"
import { NavLink } from "react-router-dom"
import onSubmitChange from "../utilities/onSelectChange"
import { closeNavModal, showNavModal, } from "../utilities/modals"
import classes from "./MainNavigation.module.scss"
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
          <ul className="menuList">
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

            {/* <li>
              <NavLink
                to="/pokemon/type/normal"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Normal
              </NavLink>
            </li> */}

            {/* <li>
              <NavLink
                to="/pokemon/type/fighting"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Fighting
              </NavLink>
            </li> */}

            {/* <li>
              <NavLink
                to="/pokemon/type/flying"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Flying
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/poison"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Poison
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/ground"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Ground
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/rock"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Rock
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/bug"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Bug
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/ghost"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Ghost
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/steel"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Steel
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/fire"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Fire
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/water"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Water
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/grass"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Grass
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/electric"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Electric
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/psychic"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Psychic
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/ice"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Ice
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/dragon"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Dragon
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/dark"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Dark
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                to="/pokemon/type/fairy"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Fairy
              </NavLink>
            </li> */}
          </ul>

          <ul className="menuList">
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
