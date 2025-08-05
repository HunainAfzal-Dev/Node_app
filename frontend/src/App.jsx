import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  const [about, setAbout] = useState(null)
  const [contact, setContact] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((res) => setJokes(res.data))
      .catch((err) => console.error(err))

    axios.get('/api/about')
      .then((res) => setAbout(res.data))
      .catch((err) => console.error(err))

    axios.get('/api/contact')
      .then((res) => setContact(res.data))
      .catch((err) => console.error(err))

    axios.get('/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
          color: #333;
        }

        .app-container {
          padding: 40px 20px;
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .heading {
          font-size: 3rem;
          margin-bottom: 10px;
          animation: fadeIn 1s ease-in-out;
        }

        .section {
          margin: 40px 0;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          animation: fadeIn 1.5s ease-in-out;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .card h2 {
          margin-top: 0;
          color: #007acc;
        }

        .card p {
          margin: 10px 0 0;
          color: #444;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="app-container">
        <h1 className="heading">😂 Random Jokes</h1>
        <div className="section">
          <p>Total Jokes: {jokes.length}</p>
          <div className="card-grid">
            {jokes.map((joke) => (
              <div key={joke.id} className="card">
                <h2>{joke.title}</h2>
                <p>{joke.joke}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h1 className="heading">📖 About Us</h1>
          {about && (
            <div className="card">
              <p><strong>Message:</strong> {about.message}</p>
              <p><strong>Version:</strong> {about.version}</p>
              <p><strong>Author:</strong> {about.author}</p>
            </div>
          )}
        </div>

        <div className="section">
          <h1 className="heading">📞 Contact Info</h1>
          {contact && (
            <div className="card">
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Address:</strong> {contact.address}</p>
            </div>
          )}
        </div>

        <div className="section">
          <h1 className="heading">🛒 Products</h1>
          <div className="card-grid">
            {products.map((product) => (
              <div key={product.id} className="card">
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
