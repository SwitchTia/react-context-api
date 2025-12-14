

import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";


export default function Products({ productsList}) {


    return (
        <>
           
                <div className="text-center py-20">
                    <h1>See our products:</h1>
                </div>
                <div className="container flex wrap">
                    {productsList.map((product) => (
                        <div className="col card" key={product.id}>
                            <div>
                                <Link to={`/products/${product.id}`}>
                                    <ProductCard
                                        title={product.title}
                                        image={product.image}
                                        price={product.price}
                                    />

                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
        
        </>
    )
}

