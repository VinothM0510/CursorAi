import './Product.css'

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for product 1',
      image: 'https://via.placeholder.com/300/3498db/ffffff?text=Product+1',
      price: '$99'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for product 2',
      image: 'https://via.placeholder.com/300/e74c3c/ffffff?text=Product+2',
      price: '$149'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for product 3',
      image: 'https://via.placeholder.com/300/2ecc71/ffffff?text=Product+3',
      price: '$199'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for product 4',
      image: 'https://via.placeholder.com/300/f39c12/ffffff?text=Product+4',
      price: '$249'
    }
  ]

  return (
    <section className="product-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-price">{product.price}</div>
                <button className="product-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product
