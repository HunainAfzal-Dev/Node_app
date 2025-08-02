
import express from 'express';
import cors from 'cors';
const port = process.env.PORT || 3000;
const app = express();
app.use(cors())

app.use(express.static('dist'));

// get a list of 5 jokes
app.get('/api/jokes', (req, res) => {       
    const jokes = [
        { id: 1, title: "A joke" ,  joke: 'Why don\'t scientists trust atoms? Because they" , make up everything.' },
        { id: 2, title: "Another joke" ,  joke: 'Why don \'t eggs tell jokes? They" , worried they"ll crack each other up.' },
        { id: 3, title: "A joke" ,  joke: 'Why did the scarecrow win an award? Because he was outstanding in his field.' },
        { id: 4, title: "A joke" ,  joke: 'Why don \'t lobsters share? Because they" , shellfish.' },
        { id: 5, title: "A joke" ,  joke: 'What do you call a fake noodle? An impasta.' },        
    ]
    res.send(jokes)
})

app.get('/', (req, res) => { 

    res.send("Home Page")
})

app.listen(port, ()=> {
    console.log(`server is running on port . ${port}`);
})
