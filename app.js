const express = require('express');

const app = express();

app.use("/product", (req, res, next) => {
    console.log('In middleware');
    res.send('<h1>The product page</h1>');
});

app.use("/", (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);