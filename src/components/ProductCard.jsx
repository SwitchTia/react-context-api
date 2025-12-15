import HeartFull from "../assets/icons/HeartFull";
import HeartEmpty from "../assets/icons/HeartEmpty";
import StarEmpty from "../assets/icons/StarEmpty";
import StarFull from "../assets/icons/StarFull";

import { useFavourite } from "../context/FavouriteContext";



export default function ProductCard({ id, title, price, image, rating }) {

  const { isFavourite, addFavourite, removeFavourite } = useFavourite();
  const isFav = isFavourite(id);

  const handleFavoriteToggle = (event) => {
    event.preventDefault();
    if (isFav) {
      removeFavourite(id);
    } else {
      addFavourite(id);
    }
  };

  const ratingValue = rating.rate;
  const ratingCount = rating.count;

  const roundedRating = Math.round(ratingValue);
  const totalStars = 5;

  
  const stars = [];


  for (let i = 0; i < totalStars; i++) {
    if (i < roundedRating) {
      stars.push(<StarFull key={i} />);
    } else {
      stars.push(<StarEmpty key={i} />);
    }
  }

  return (
    <section>
      <div className="flex-between">

        <div>
          {stars}
        </div>

        <div  onClick={handleFavoriteToggle}>
          {isFav ? (
            <HeartFull />
          ) : (
            <HeartEmpty />
          )}
        </div>
      </div>

      <div className="mb-30"> 
        <span>out of {ratingCount} reviews</span>
      </div>
      
      <div className="text-center">
        <img className="card-img" src={image} alt={title} />
        <h5 className="py-40">{title}</h5>

        <div className="flex-between">
          <h4>Price: ${price}</h4>

          <button className="addToCartBtn" 
              // onClick={handleAddToCartToggle}
              > Add to cart
          </button>
        </div>
      </div>
    </section>
  );
}