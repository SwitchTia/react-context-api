import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoImg from "../assets/img/LogoImg.png"
import { useBudgetMode } from "../context/BudgetContext";


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
            title: "Favourite Items",
            path: "/favourites",
        },
        {
            title: "Shopping Cart",
            path: "/shopping-cart",
        },
    ];


    const { toggleBudgetMode, isBudgetMode, turnBudgetModeOff } = useBudgetMode();

    const handleBudgetModeClick = () => {
        if (isBudgetMode) {
            // If mode is ON, turn it ooff and go Home
            turnBudgetModeOff();
            navigate("/products");
        } else {
            // If mode is OFF, turn it on and go to the Budget page
            toggleBudgetMode();
            navigate("/budget-mode");
        }
    };

    return (
        <header className="flex-between">
            <div className="flex gap">
                <img className="logo-img" src={LogoImg} alt="logo" />

                <ul className="flex">
                    {navLinks.map((link, index) => (
                        <li className="gap" key={index}>
                            <NavLink to={link.path}>{link.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>


            <button className={`btnBudgetMode ${isBudgetMode ? "bg-off" : "bg-on"} `} 
                onClick={handleBudgetModeClick}>
                {isBudgetMode ? "Turn off Budget Mode" : "Turn on Budget Mode"}
            </button>


        </header >
    );
}