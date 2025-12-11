import { Link } from "react-router-dom";
import { useBudgetMode } from "../context/BudgetContex";
import ProductCard from "../components/ProductCard";

export default function BudgetModePage({ productsList }) {
  const { turnBudgetModeOff } = useBudgetMode();

  const productsBudgetMode = productsList.filter((product) =>
    product.price <= 30
  );

  return (
    <div >
      <h1 className="text-center py-20">Budget mode product list:</h1>
      <section className="container flex wrap">
        {productsBudgetMode.map((product) => (
          <div className="col card" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <ProductCard
                title={product.title}
                image={product.image}
                price={product.price}
              />
            </Link>
          </div>
        ))}
      </section>
      <div className="flex-center py-40">
        <button
              className="btn"
              onClick={() => turnBudgetModeOff()}
            >Turn off budget mode
            </button>
      </div>

    </div>
  );
}