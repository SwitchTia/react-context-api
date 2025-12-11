import AppHeader from "../components/AppHeader";

export default function AboutUs() {
    return (
        <>
            <div className="container">
                <h1>About us</h1>
            <hr />
            <p className="py-40">
                At ShopWithUs, we believe shopping should be more than just a transaction. It should be an experience. That’s why we focus on:
            </p>

            <hr />

            <div className="py-40">
                <ul>
                    <li> Premium Quality
                        Every product in our store is hand-selected to ensure durability, reliability, and great value.</li>

                    <li> Customer-First Service
                        Your satisfaction matters to us. Our support team is always here to help you with questions, returns, or recommendations.
                    </li>

                    <li> Fast & Secure Delivery
                        With advanced logistics partners and secure payment systems, we make sure your orders arrive safely and on time.
                    </li>
                    <li> A Growing Community</li>
                </ul>
            </div>

            <hr />

            <p className="py-40">
                We’re more than a store — we’re a community of shoppers who value convenience, style, and smart choices.

                Whether you’re looking for the latest trends, everyday essentials, or unique items you won’t find elsewhere, NovaCart is here to help you discover it all.

                Thank you for choosing ShopWithUs — where quality meets convenience.
            </p>
            </div>
        </>
    );
}