import { NavLink } from "react-router-dom";
import Logo from "../assets/img/Logo.png"


export default function AppHeader() {
    const navLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About us",
            path: "/about-us",
        },
        {
            title: "Products",
            path: "/products",
        },
    ];


    return (
        <header className="flex gap">
            <div>
                <img className="logo-img" src={Logo} alt="logo" />
            </div>
            <ul className="flex-center">
                {navLinks.map((link, index) => (
                    <li className="gap" key={index}>
                        <NavLink to={link.path}>{link.title}</NavLink>
                    </li>
                ))}
            </ul>
        
        </header>
    );
}