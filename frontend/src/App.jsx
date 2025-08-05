import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.error(error)
      });
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

        .subheading {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: #555;
          animation: fadeIn 1.3s ease-in-out;
        }

        .joke-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          animation: fadeIn 1.5s ease-in-out;
        }

        .joke-card {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }

        .joke-card h2 {
          margin-top: 0;
          color: #007acc;
        }

        .joke-card p {
          margin: 10px 0 0;
          color: #444;
          font-size: 1rem;
        }

        .joke-card:hover {
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
        <h1 className="heading">Random Jokes</h1>
        <p className="subheading">Total Jokes: {jokes.length}</p>

        <div className="joke-grid">
          {jokes.map((joke) => (
            <div key={joke.id} className="joke-card">
              <h2>{joke.title}</h2>
              <p>{joke.joke}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
