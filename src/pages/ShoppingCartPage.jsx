import { Link } from "react-router-dom";
import { useFavourite } from "../context/FavouriteContext";
import ProductCard from "../components/ProductCard";


export default function ShoppingCartPage({ productList }) {
  const { shoppingCartList} = useState();


  const shoppingCartItems = productList.filter((product) =>
    shoppingCartList.includes(product.id)
  );



  return (
    <>
      <div>
        <h2 className="text-center py-20">Your favorite products:</h2>

        <section className="container flex wrap">

          {shoppingCartItems.map((product) => (
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


            </div>
          ))}

        </section>
      </div>
    </>
  );
}