import { useState, useMemo } from 'react';
import { products } from './data/products';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory]);

  const categories = ['earrings', 'rings', 'pendants', 'bracelets'];

  return (
    <div className="container">
      <header className="hero-section">
        <div className="hero-content">
          <div className="brand-container">
            <h1 className="logo-title">Novera</h1>
            <span className="logo-subtitle">Jewels</span>
          </div>
          <p className="brand-tagline">Anti-tarnish Everyday Jewellery</p>
          <a href="https://www.instagram.com/novera.jewels?igsh=MW9qcGQ3dDN3ZWZsOQ==" target="_blank" rel="noreferrer" className="dm-link">
            DM to Order on Instagram <span style={{ fontFamily: 'sans-serif' }}>→</span>
          </a>
        </div>
      </header>

      <nav className="filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </nav>

      <main className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x600/f5f5f5/909090?text=Novera';
                }}
              />
            </div>
            <div className="product-info">
              <div className="product-meta">
                <span className="product-category">{product.category}</span>
              </div>
              <h3 className="product-name">
                {product.name} <span className="model-number">({product.modelNumber})</span>
              </h3>
              <div className="product-price">${product.price}</div>
            </div>
          </div>
        ))}
      </main>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>+91 7425092266</p>
            <p>+91 7726920606</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/novera.jewels?igsh=MW9qcGQ3dDN3ZWZsOQ==" target="_blank" rel="noreferrer" className="social-link">
              @novera.jewels
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Novera Jewels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
