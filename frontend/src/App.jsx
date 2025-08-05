import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log(response.data);
        setJokes(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  return (
    <>
      <div style={{ textAlign: 'center', margin: '30px 0', fontSize: '24px', fontWeight: 'bold' }}>
        Total Jokes: {jokes.length}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {jokes.map((joke) => (
          <div
            key={joke.id}
            style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '20px',
              width: '300px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
          >
            <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{joke.title}</h2>
            <p style={{ fontSize: '16px', color: '#333' }}>{joke.joke}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
