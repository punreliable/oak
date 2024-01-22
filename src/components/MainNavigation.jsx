import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.scss';

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
                    <NavLink
                        to="/pokemon/types"
                        className={({ isActive }) =>
                        isActive ? classes.active : undefined
                        }
                    >Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}