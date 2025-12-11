import { Link } from "react-router-dom";
import { useBudgetMode } from "../context/BudgetContex";
import ProductCard from "../components/ProductCard";

export default function BudgetModePage({ productsList }) {
  const { turnBudgetModeOff } = useBudgetMode();

  const productsBudgetMode = productsList.filter((product) =>
    product.price <= 30
  );

  return (
    <div className="container">
      <h1>Budget mode product list:</h1>
      <ul>
        {productsBudgetMode.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              <ProductCard
                title={product.title}
                image={product.image}
                price={product.price}
              />
            </Link>

            <button
              className="btn"
              onClick={() => turnBudgetModeOff()}
            >Turn off budget mode
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}