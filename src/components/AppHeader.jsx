import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/img/Logo.png"
import { useBudgetMode } from "../context/BudgetContex";


export default function AppHeader() {

    const navigate = useNavigate();

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


    const { toggleBudgetMode, isBudgetMode, turnBudgetModeOff } = useBudgetMode();

    const handleBudgetModeClick = () => {
        if (isBudgetMode) {
            // If mode is ON, turn it ooff and go Home
            turnBudgetModeOff();
            navigate("/");
        } else {
            // If mode is OFF, turn it on and go to the Budget page
            toggleBudgetMode();
            navigate("/personaggi/budget-mode");
        }
    };

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


            <button className={`btn ${isBudgetMode ? "bg-off" : "bg-on"} `} 
                onClick={handleBudgetModeClick}>
                {isBudgetMode ? "Turn off Budget Mode" : "Turn on Budget Mode"}
            </button>


        </header >
    );
}