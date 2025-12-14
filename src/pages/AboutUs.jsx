import AppHeader from "../components/AppHeader";
import About from "../assets/img/About.png"

export default function AboutUs() {
    return (
        <>
            <div className="container">
                <h1 className="text-center mb-30">About us</h1>
                <hr />

                <h2 className="py-40">
                    At ShopWithUs, we believe shopping is more than just a transaction – it's an experience. We're dedicated to making every step memorable by focusing on:
                </h2>

                <hr />


                <div className="flex">

                    <div className="py-40 gap">
                        <ul>
                            <li className="mb-30"> Premium Quality
                                Every product in our store is hand-selected to ensure durability, reliability, and great value.</li>

                            <li className="mb-30"> Customer-First Service
                                Your satisfaction matters to us. Our support team is always here to help you with questions, returns, or recommendations.
                            </li>

                            <li className="mb-30"> Fast & Secure Delivery
                                With advanced logistics partners and secure payment systems, we make sure your orders arrive safely and on time.
                            </li>
                            <li className="mb-30"> A Growing Community</li>
                        </ul>
                    </div>
                    <img className="aboutImg" src={About} alt="" />
                </div>


                <hr />

                <h4 className="py-40">
                    We’re more than a store — we’re a community of shoppers who value convenience, style, and smart choices.

                    Whether you’re looking for the latest trends, everyday essentials, or unique items you won’t find elsewhere, NovaCart is here to help you discover it all.

                    Thank you for choosing ShopWithUs — where quality meets convenience.
                </h4>
            </div>
        </>
    );
}