import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  const [about, setAbout] = useState(null);
  const [contact, setContact] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes').then(res => setJokes(res.data)).catch(console.error);
    axios.get('/api/about').then(res => setAbout(res.data)).catch(console.error);
    axios.get('/api/contact').then(res => setContact(res.data)).catch(console.error);
    axios.get('/api/products').then(res => setProducts(res.data)).catch(console.error);
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(120deg, #f0f4f8, #e0eafc);
          color: #2c3e50;
        }

        .app-container {
          padding: 50px 20px;
          max-width: 1200px;
          margin: auto;
        }

        .heading {
          font-size: 2.5rem;
          margin-bottom: 15px;
          text-align: center;
          color: #1a237e;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .section {
          margin: 50px 0;
          background: #fff;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .section h2 {
          color: #3949ab;
          margin-bottom: 10px;
          font-size: 1.8rem;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .card {
          background: #fefefe;
          border: 1px solid #ddd;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
        }

        .card h3 {
          margin: 0 0 10px;
          font-size: 1.5rem;
          color: #1565c0;
        }

        .card p {
          margin: 0;
          font-size: 1rem;
          color: #333;
        }

        @media (max-width: 768px) {
          .heading {
            font-size: 2rem;
          }

          .section h2 {
            font-size: 1.5rem;
          }

          .card h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
      <div className="app-container">
        <h1 className="heading">😂 Random Jokes</h1>
        <div className="section">
          <h2>Total Jokes: {jokes.length}</h2>
          <div className="card-grid">
            {jokes.map((joke) => (
              <div key={joke.id} className="card">
                <h3>{joke.title}</h3>
                <p>{joke.joke}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>📖 About Us</h2>
          {about && (
            <div className="card">
              <p><strong>Message:</strong> {about.message}</p>
              <p><strong>Version:</strong> {about.version}</p>
              <p><strong>Author:</strong> {about.author}</p>
            </div>
          )}
        </div>

        {/* <div className="section">
          <h2>📞 Contact Info</h2>
          {contact && (
            <div className="card">
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Address:</strong> {contact.address}</p>
            </div>
          )}
        </div> */}

        <div className="section">
          <h2>🛒 Products</h2>
          <div className="card-grid">
            {products.map((product) => (
              <div key={product.id} className="card">
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
