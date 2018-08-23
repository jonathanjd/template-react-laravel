import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav>
                <ul className="navbar">
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/register">
                            Register
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="/login">
                            Login
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__link" to="#">
                            SubMenu
                        </Link>
                        <ul className="navbar__submenu">
                            <li className="submenu_item">
                                <Link className="submenu_link" to="#">
                                    SubItem1
                                </Link>
                            </li>
                            <li className="submenu_item">
                                <Link className="submenu_link" to="#">
                                    SubItem2
                                </Link>
                            </li>
                            <li className="submenu_item">
                                <Link className="submenu_link" to="#">
                                    SubItem3
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;
