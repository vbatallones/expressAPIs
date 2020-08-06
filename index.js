require('dotenv').config()

const express = require('express');
const axios = require('axios');
const app = express();

// using .env to hide our API KEY
let API_KEY = process.env.API_KEY

app.set('view engine', 'ejs')
//using ejs as the view engine for rendering ejs files
app.use(express.static('static'))
//express using static to access CSS
app.get('/', (req, res) => {
    let qs = {
        params: {
            s: 'star wars',
            apikey: API_KEY
        }
    }
    axios.get('http://www.omdbapi.com', qs)
    .then((response) => {
        //seeting a variable to our data
        let episodes = response.data.Search
        // render home with data
        res.render('home', {episodes})
    })
    .catch(err => {
        console.log(err)
    })
})

app.listen(3000)