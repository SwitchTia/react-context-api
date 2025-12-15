import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext"; 
import ProductCard from "../components/ProductCard";


export default function ShoppingCartPage({ productsList }) {
  const { shoppingCartList, removeShoppingCart} = useShoppingCart();


  const shoppingCartProducts = productsList.filter((product) =>
    shoppingCartList.includes(product.id)
  );



  return (
    <>
      <div>
        <h2 className="text-center py-20">Your shopping cart:</h2>

        <section className="container flex wrap">

          {shoppingCartProducts.map((product) => (
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
                  className="btn py-10 "
                  onClick={() => removeShoppingCart(product.id)}
                >Remove from cart
                </button>
              </div>


            </div>
          ))}

        </section>
      </div>
    </>
  );
}