const express = require('express');

const app = express();

app.use(express.static('public'));


app.get('/get_data', () => {
    console.log("Request received at /get_data")
})

app.listen(5000, () => {
    console.log("Server is listening on 5000")
})