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
                        to="/types"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Types
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/type/ghost"
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
