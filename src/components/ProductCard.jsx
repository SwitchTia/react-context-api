import HeartEmpty from "../assets/img/icons/HeartEmpty";
import HeartRed from "../assets/img/icons/HeartRed";
import { useState } from "react";


export default function ProductCard({ title, price, image }) {

    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteToggle = (e) => {
        e.preventDefault(); 
    
        setIsFavorite(current => !current); 

        // addToFavorites(productId); 
    };



    return (

        <div>
            <div className="favorite-icon-wrapper" 
                onClick={handleFavoriteToggle}>
                {isFavorite ? (
                    <HeartRed className="favorite-icon" />
                ) : (
                    <HeartEmpty className="favorite-icon" />
                )}
            </div>

            <img className="card-img" src={image} alt={title} />

            <h5 className="py-10">{title}</h5>

            <span>Price: {price}</span>

        </div>

    );
}