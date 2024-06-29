import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'
import onSubmitChange from '../utilities/onSelectChange'
import classes from './MainNavigation.module.scss'

// const formSubmitHandler = (event) => {
//     event.preventDefault()
//     if ( event ) {
//         return true
//     } else {
//         return false
//     }
// }

const showModal = () => {
    document.getElementById('dialog-default').showModal()
}

const closeModal = () => {
    document.getElementById('dialog-default').close()
}

const MainNavigation = () => {

    return(
    <>
        <header className={classes.header}>
            <nav className={classes.navbar}>

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                    isActive ? classes.active : undefined
                    }
                    end
                    >
                    <button type="button" className="nes-btn is-primary" to="/">
                        Home
                    </button>
                    
                    <button type="button" className="nes-btn is-warning" to="/search">
                        Search
                    </button>

                    <button type="button" className="nes-btn is-primary" onClick={showModal}>
                        Types
                    </button>
                    
                </NavLink>
            </nav>
        </header>

        <dialog className="nes-dialog" id="dialog-default">
            <form method="dialog">
            <p className="title">Types</p>
            <ul>
                <li>
                        <NavLink
                            to="/pokemon/type/normal"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Normal
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/pokemon/type/fighting"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Fighting
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/pokemon/type/flying"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Flying
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/poison"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Poison
                        </NavLink>
                    </li>    
                    <li>
                        <NavLink
                            to="/pokemon/type/ground"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Ground
                        </NavLink>
                    </li>    
                    <li>
                        <NavLink
                            to="/pokemon/type/rock"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Rock
                        </NavLink>
                    </li>    
                    <li>
                        <NavLink
                            to="/pokemon/type/bug"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Bug
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/ghost"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Ghost
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/steel"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Steel
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/fire"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Fire
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/water"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Water
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/grass"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Grass
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/electric"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Electric
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/psychic"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Psychic
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/ice"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Ice
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/dragon"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Dragon
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/dark"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Dark
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pokemon/type/fairy"
                            className={({ isActive }) =>
                            isActive ? classes.active : undefined
                            }
                        >Fairy
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink
                            to="/carousel"
                            className={({ isActive }) => isActive ? classes.active : undefined }
                            >
                                Kanto Carousel
                        </NavLink>
                    </li>
                </ul>
                
            <menu className="dialog-menu">
                <button className="nes-btn is-error" onClick={closeModal}>Close</button>
            </menu>
            </form>
        </dialog>
    </>
    )
}

export default MainNavigation
