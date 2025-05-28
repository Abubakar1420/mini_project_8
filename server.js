const express = require('express');
const PORT = 6000;

const app = express();

app.get('/', (req, res) => {
    console.log('responce sent');
})




app.listen('PORT', () => {
    console.log(`server connected to port http://localhost:${PORT}`);
})