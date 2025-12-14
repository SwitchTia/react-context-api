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
        <header className="flex-between">
            <div className="flex gap">
                <img className="logo-img" src={Logo} alt="logo" />

                <ul className="flex-center">
                    {navLinks.map((link, index) => (
                        <li className="gap" key={index}>
                            <NavLink to={link.path}>{link.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>


            <button className={`btn ${isBudgetMode ? "bg-on" : "bg-off"} `} onClick={toggleBudgetMode}>
                {isBudgetMode ? "Turn on Budget Mode" : "Turn off Budget Mode"}
            </button>


        </header >
    );
}