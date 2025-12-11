import Logo from "../assets/img/Logo.png"

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="text-center py-40">
                    <h1>Welcome to ShopWithUs</h1>
                    <hr />
                </div>

                <section className="flex">
                    <div>
                        <h2 className="py-40">
                            Your trusted online destination for quality products and a seamless shopping experience.
                            Founded with a simple mission — to make online shopping easier, faster, and more enjoyable — ShopWithUs brings together a curated selection of items from trusted brands and emerging creators around the world.
                        </h2>
                    </div>

                    <div>
                        <img className="home-img" src={Logo} alt="logo" />
                    </div>

                </section>
                <div className="py-40">
                    <h4 className="py-20">What We Offer:</h4>
                    <hr />
                    <p className="py-20">At ShopWithUS, we handpick every item to ensure our customers get a curated selection of:</p>
                    <div className="py-20">
                        <ul>
                            <li>Fashion & Apparel: Trendy clothing, accessories, and seasonal collections</li>
                            <li>Electronics & Gadgets: Smart devices, accessories, and everyday tech</li>
                            <li>Home & Lifestyle: Decor, organization, kitchenware, and comfort essentials</li>
                            <li>Beauty & Wellness: Skincare, grooming, and personal-care favorites</li>
                            <li>Special Deals: Weekly promotions, bundle offers, and exclusive discounts</li>
                        </ul>
                    </div>
                </div>
            </div >

        </>
    );
}