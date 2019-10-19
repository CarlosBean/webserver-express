const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// express hbs engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'carlos benavides',
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => console.log(`Listening on port: ${port}`))