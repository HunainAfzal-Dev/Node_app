import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [about, setAbout] = useState(null);
  const [contact, setContact] = useState(null);
  const [products, setProducts] = useState([]);
  const [team, setTeam] = useState([]);
  const [services, setServices] = useState([]);
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const endpoints = [
        { url: "/api/jokes", setter: setJokes, key: "jokes" },
        { url: "/api/about", setter: setAbout, key: "about" },
        { url: "/api/contact", setter: setContact, key: "contact" },
        { url: "/api/products", setter: setProducts, key: "products" },
        { url: "/api/team", setter: setTeam, key: "team" },
        { url: "/api/services", setter: setServices, key: "services" },
        { url: "/api/faq", setter: setFaq, key: "faq" },
      ];

      for (const { url, setter, key } of endpoints) {
        try {
          const res = await axios.get(url);
          setter(res.data);
        } catch (error) {
          setErrors((prev) => ({ ...prev, [key]: error.message }));
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="nav-header">
        <ul className="nav-list">
          <li><a href="#jokes" onClick={() => scrollToSection("jokes")}>Jokes</a></li>
          <li><a href="#about" onClick={() => scrollToSection("about")}>About</a></li>
          <li><a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a></li>
          <li><a href="#products" onClick={() => scrollToSection("products")}>Products</a></li>
          <li><a href="#team" onClick={() => scrollToSection("team")}>Team</a></li>
          <li><a href="#services" onClick={() => scrollToSection("services")}>Services</a></li>
          <li><a href="#faq" onClick={() => scrollToSection("faq")}>FAQ</a></li>
        </ul>
      </nav>
      <div className="app-container">
        {loading && <div className="loading">Loading...</div>}
        {Object.keys(errors).length > 0 && (
          <div className="error">
            Some data failed to load. Please check your connection.
          </div>
        )}
        <h1 className="heading">👌 Random Jokes</h1>
        <div id="jokes" className="section">
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

        <div id="about" className="section">
          <h2>📖 About Us</h2>
          {about && (
            <div className="card">
              <p>
                <strong>Message:</strong> {about.message}
              </p>
              <p>
                <strong>Version:</strong> {about.version}
              </p>
              <p>
                <strong>Author:</strong> {about.author}
              </p>
            </div>
          )}
        </div>

        <div id="contact" className="section">
          <h2>📞 Contact Info</h2>
          {contact && (
            <div className="card">
              <p>
                <strong>Email:</strong> {contact.email}
              </p>
              <p>
                <strong>Phone:</strong> {contact.phone}
              </p>
              {/* <p><strong>Address:</strong> {contact.address}</p> */}
            </div>
          )}
        </div>

        <div id="products" className="section">
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

        <div id="team" className="section">
          <h2>Team: {team.length}</h2>
          <div className="card-grid">
            {team.map((member) => (
              <div key={member.id} className="card">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="services" className="section">
          <h2>🛠️ Services</h2>
          <div className="card-grid">
            {services.map((service) => (
              <div key={service.id} className="card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="faq" className="section">
          <h2>❓ FAQ</h2>
          <div className="card-grid">
            {faq.map((item) => (
              <div key={item.question} className="card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
