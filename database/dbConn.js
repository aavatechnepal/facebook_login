const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://anil:anil1921@cluster0.634sltj.mongodb.net/facebookhack?retryWrites=true&w=majority')
.then(()=>{
    console.log(`Database Connected !`);
})
.catch((error)=>{
    console.log(`Database Not Connected !`);
})