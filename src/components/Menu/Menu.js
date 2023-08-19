import React from "react";
import AccountIcon from "../../images/icon.svg";
import { Link } from "react-router-dom"; 

const Menu = ({ items, active, setActive }) => {
    return (
        <div
            className={active ? "menu active" : "menu"}
            onClick={() => setActive(!active)}
        >
            <div className="menu__background" />
            <div className="menu__cross" />
            <div className="menu__content" onClick={(e) => e.stopPropagation()}>
                <ul className="menu__content-links">
                    {items.map((item) => (
                        <li>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    ))}
                </ul>
                <div className="menu__account">
                    <Link to="/profile" className="menu__account-title">Аккаунт</Link>
                    <img
                        src={AccountIcon}
                        className="menu__account-icon"
                        alt="Аккаунт"
                    />
                </div>
            </div>
        </div>
    );
};

export default Menu;
