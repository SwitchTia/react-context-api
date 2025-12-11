export default function ProductCard({ title, price, image }) {

    return (

        <div>
            <img className="card-img" src={image} alt={title} />

            <h5 className="py-10">{title}</h5>

            <span>Price: {price}</span>

        </div>

    );
}