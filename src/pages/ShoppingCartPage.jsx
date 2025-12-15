import { useState } from 'react';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const [budgetMode, setBudgetMode] = useState(false);

  const toggleBudgetMode = () => {
    setBudgetMode(!budgetMode);
  };

  return (
    <div>
      <header>
        <div className="flex-between">
          <div className="flex gap">
            <img 
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=200&h=200&fit=crop" 
              alt="Logo" 
              className="logo-img" 
            />
            <ul>
              <li><h1>Shopping Cart</h1></li>
            </ul>
          </div>
          <button 
            className={`btnBudgetMode ${budgetMode ? 'bg-on' : 'bg-off'}`}
            onClick={toggleBudgetMode}
          >
            {budgetMode ? 'Budget Mode On' : 'Budget Mode Off'}
          </button>
        </div>
      </header>

      <main>
        <div className="container">
          <div className="text-center mb-30">
            <h2 className="py-20">Your Shopping Cart</h2>
          </div>

          <div className="text-center py-40">
            <p className="burgundy py-20">Your cart is empty</p>
            <button className="btn">Continue Shopping</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShoppingCartPage;