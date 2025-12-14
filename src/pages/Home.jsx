
import HomeImg from "../assets/img/HomeImg.png"

export default function Home() {
    return (
        <>
            <div className="container">

                <div className="text-center py-40 ">
                    <h1 className="mb-30">Welcome to ShopWithUs</h1>
                    <hr />
                </div>

                <div className="flex">
                    <div>
                        <img className="homeImg" src={HomeImg} alt="homeImg" />
                    </div>

                    <div>
                        <h2 >
                            Your trusted online destination for quality products and a seamless shopping experience.
                            Founded with a simple mission — to make online shopping easier, faster, and more enjoyable — ShopWithUs brings together a curated selection of items from trusted brands and emerging creators around the world.
                        </h2>
                   
                    </div>

                </div>


                <div className="py-40">
                    <h3 className="py-40">What We Offer:</h3>
                    <hr />
                    <p className="py-20">At ShopWithUS, we handpick every item to ensure our customers get a curated selection of:</p>
                    <div className="py-20">
                        <ul>
                            <li className="mb-30">Fashion & Apparel: Trendy clothing, accessories, and seasonal collections</li>
                            <li className="mb-30">Electronics & Gadgets: Smart devices, accessories, and everyday tech</li>
                            <li className="mb-30">Home & Lifestyle: Decor, organization, kitchenware, and comfort essentials</li>
                            <li className="mb-30">Beauty & Wellness: Skincare, grooming, and personal-care favorites</li>
                            <li className="mb-30">Special Deals: Weekly promotions, bundle offers, and exclusive discounts</li>
                        </ul>
                    </div>
                </div>

            </div >

        </>
    );
}