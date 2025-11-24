import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.static('dist'));

// GET: Home Page
app.get('/', (req, res) => {
    res.send("Welcome to the Home Page");
});


// GET: Home Page
app.get('/terms-condition', (req, res) => {
    res.send("Welcome to Terms Condition ");
});

// GET: Jokes
app.get('/api/jokes', (req, res) => {       
    const jokes = [
        { id: 1, title: "A joke", joke: 'Why don\'t scientists trust atoms? Because they make up everything.' },
        { id: 2, title: "Another joke", joke: 'Why don\'t eggs tell jokes? They\'re worried they\'ll crack each other up.' },
        { id: 3, title: "Scarecrow joke", joke: 'Why did the scarecrow win an award? Because he was outstanding in his field.' },
        { id: 4, title: "Lobster joke", joke: 'Why don\'t lobsters share? Because they\'re shellfish.' },
    ];
    res.json(jokes);
});

// // GET: About Page
app.get('/api/about', (req, res) => {
    res.send({
        message: "This is the about page for our awesome Express server.",
        version: "1.0.0",
        author: "Your Name"
    });
});

// GET: Contact Info
app.get('/api/contact', (req, res) => {
    res.send({
        email: "support@example.com",
        phone: "+1-800-123-4567",
        address: "123 Express Lane, JS City, NodeLand"
    });
});

// GET: Products
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: "LED Light", price: "$20" },
        { id: 2, name: "Smart Bulb", price: "$30" },
        { id: 3, name: "Tube Light", price: "$15" },
    ];
    res.json(products);
});

// GET: Team Members
app.get('/api/team', (req, res) => {
    const team = [
        { id: 1, name: "Alice Johnson", role: "Project Manager" },
        { id: 2, name: "Bob Smith", role: "Developer" },
        { id: 3, name: "Charlie Brown", role: "Designer" }
    ];
    res.json(team);
});

// GET: Services
app.get('/api/services', (req, res) => {
    const services = [
        { id: 1, name: "Web Development", description: "Building responsive and performant websites" },
        { id: 2, name: "Mobile Apps", description: "Creating cross-platform mobile applications" },
        { id: 3, name: "SEO Optimization", description: "Improving search engine rankings" }
    ];
    res.json(services);
});

// GET: FAQ
app.get('/api/faq', (req, res) => {
    const faq = [
        { question: "How do I contact support?", answer: "You can email support@example.com or call +1-800-123-4567." },
        { question: "What is your refund policy?", answer: "We offer a 30-day money-back guarantee." },
        { question: "Do you offer custom solutions?", answer: "Yes, please contact sales for custom project inquiries." }
    ];
    res.json(faq);
});

// GET: Hello
app.get('/hello', (req, res) => {
    res.send("Hello! Welcome to our Express server.");
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
