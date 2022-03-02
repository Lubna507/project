const express= require('express');
const app=express();
const path=require('path');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

if(process.env.NODE_ENV !='production')
 require('dotenv').config();
 

app.get('/', (req, res) => {
    res.render('input/index');
});

app.post('/bfhl',(req,res)=>{

    const d=req.body.data.trim();
    var data=d.split(" ");

    let numbers = data.filter((value) => !isNaN(value))

    let alphabets = data.filter((value) => (/[a-zA-Z]/).test(value));
    res.status(200).send({
        'is_success': 'true',
        'user_id': 'lubnaNoorAhmad_28082001',
        'email': 'lubna0400.cse19@chitkara.edu.in',
        'roll_number': '1910990400',
        'numbers': numbers,
        'alphabet': alphabets
});
});





app.listen(process.env.PORT || 3000, (req, res) => {
    console.log('server running at port 3000');
});
