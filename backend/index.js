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

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
