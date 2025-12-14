import { Link } from "react-router-dom";
import { useFavourite } from "../context/FavouriteContext";
import ProductCard from "../components/ProductCard";


export default function FavouritePage({ productList }) {
  const { favouriteItemsList, removeFavourite } = useFavourite();


  const favouriteItems = productList.filter((product) =>
    favouriteItemsList.includes(product.id)
  );



  return (
    <>
      <div>
        <h2 className="text-center py-20">Your favorite products:</h2>

        <section className="container flex wrap">

          {favouriteItems.map((product) => (
            <div className="col card  " key={product.id}>

              <Link to={`/products/${product.id}`}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
              </Link>

              <div className="flex py-20">
                <button
                  className="btn "
                  onClick={() => removeFavourite(product.id)}
                >Remove from favourites
                </button>
              </div>

            </div>
          ))}

        </section>
      </div>
    </>
  );
}