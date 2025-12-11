import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import GoBack from "../components/GoBack";

export default function SingleProduct() {
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
    }, [id]);

    return (
        <>
            {product !== null && (
                <div className="container flex-between">
                    <div>
                        <span className="py-30">Category: {product.category}</span>
                        <hr />


                        <h5 className="py-10">{product.title}</h5>
                        <p className="py-10">Description: {product.description}</p>

                        <span>Price: {product.price}</span>

                        <div className="py-40">
                            <GoBack />
                        </div>

                    </div>

                    <div>
                        <img src={product.image} alt={product.title} />
                    </div>

                </div>


            )}
        </>
    );
}