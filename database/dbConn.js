const mongoose = require ('mongoose');

mongoose.connect(process.env.db_url)
.then(()=>{
    console.log(`Database Connected !`);
})
.catch((error)=>{
    console.log(`Database Not Connected !`);
})