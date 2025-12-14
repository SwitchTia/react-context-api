import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";


export default function ProductsPage({ productsList }) {


  return (
    <>
      <div className="container flex wrap">
        {productsList.map((product) => (
          <div className="col card" key={product.id}>

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
      </div>
    </>
  );
}