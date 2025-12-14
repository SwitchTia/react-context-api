import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import GoBack from "../components/GoBack";



export default function SingleProductPage() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((resp) => {
                setProduct(resp.data);
            })
            .catch((err) => {
                if (err.status === 404) {
                    navigate("/products");
                }
            });
    }, [id, navigate]);

    return (
        <>
            {product !== null &&

                (
                    <div className="container flex-between">

                        <div>
                            <img className="gap" src={product.image} alt={product.title} />
                        </div>

                        <div>
                            <h3 className="py-10 ">{product.title}</h3>
                            <hr />
                            
                            <h4 className="py-30 ">Category: {product.category}</h4>
                            <p className="py-20">Description: {product.description}</p>
                            <h4 className="py-20">Price: ${product.price}</h4>
                            <div className="py-40">
                                <GoBack />
                            </div>
                        </div>

                    </div>
                )}
        </>
    );
}