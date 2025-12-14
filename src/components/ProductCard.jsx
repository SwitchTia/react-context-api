import HeartRed from "../assets/icons/HeartRed";
import HeartEmpty from "../assets/icons/HeartEmpty";
import StarEmpty from "../assets/icons/StarEmpty";
import { useState } from "react";
import StarFull from "../assets/icons/StarFull";


export default function ProductCard({ title, price, image }) {

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteToggle = (e) => {
        e.preventDefault();

        setIsFavorite(current => !current);

        // addToFavorites(productId); 
    };



    return (

        <section>
            <div className="flex-between">
                <div>
                   {StarFull} 
                </div>
                <div className="" onClick={handleFavoriteToggle}>
                    {isFavorite ? (
                        <HeartRed className="favorite-icon" />
                    ) : (
                        <HeartEmpty className="favorite-icon" />
                    )}
                </div>
            </div>

            <div className="text-center">
                <img className="card-img" src={image} alt={title} />

                <h5 className="py-40">{title}</h5>

                <div>
                    <span >Price: {price}</span>
                </div>
            </div>
        </section >

    );
}