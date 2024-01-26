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

const MainNavigation = () => {

    return(
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                        end
                    >Home
                    </NavLink>
                </li>

                <li>
                {onSubmitChange}
                </li>
                <li>
                    <NavLink
                        to="/pokemon/types/"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Types
                    </NavLink>
                </li>



                <li>
                    <NavLink
                        to="/pokemon/type/normal"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Normal Type
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/pokemon/type/fighting"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Fighting Type
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/pokemon/type/flying"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Flying Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/poison"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Poison Type
                    </NavLink>
                </li>    
                <li>
                    <NavLink
                        to="/pokemon/type/ground"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Ground Type
                    </NavLink>
                </li>    
                <li>
                    <NavLink
                        to="/pokemon/type/rock"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Rock Type
                    </NavLink>
                </li>    
                <li>
                    <NavLink
                        to="/pokemon/type/bug"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Bug Type
                    </NavLink>
                </li>                


                <li>
                    <NavLink
                        to="/pokemon/type/ghost"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Ghost Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/steel"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Steel Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/steel"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Steel Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/fire"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Fire Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/water"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Water Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/grass"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Grass Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/electric"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Electric Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/psychic"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Psychic Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/ice"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Ice Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/dragon"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Dragon Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/dark"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Dark Type
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/pokemon/type/fairy"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Fairy Type
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation
