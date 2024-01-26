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

            </ul>
        </nav>
    </header>
    )
}

export default MainNavigation
