import { Link } from "react-router-dom";
import { useBudgetMode } from "../context/BudgetContex";

export default function BudgetModePage({ productsList }) {
  const { turnBudgetModeOff } = useBudgetMode();

  const productsBudgetMode = productsList.filter((product) =>
   product.price <= 30
  );

  return (
    <div className="container">
      <h1></h1>
      <ul>
        {productsBudgetMode.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <button
              className="btn"
              onClick={() => turnBudgetModeOff}
            >Turn off budget mode
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}