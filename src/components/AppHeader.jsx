import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/Logo.png"
import { useBudgetMode } from "../context/BudgetContex";


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
        {
            title: "Budget Mode",
            path: "/personaggi/budget-mode",
        },
    ];
    

    const { toggleBudgetMode, isBudgetMode } = useBudgetMode();

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

            <button className="btn" onClick={toggleBudgetMode}>
                {isBudgetMode ? "Turn on Budget Mode" : "Turn off Budget Mode"}
            </button>

        </header>
    );
}