import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send('it works');
})

app.listen(5000, () => console.log('Server  is listening on https://localhost:5000...'));