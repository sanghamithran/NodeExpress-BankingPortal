const fs = require('fs');
const path = require('path');

const express =  require('express');
const port = 3000

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index', {title:'Index'});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));