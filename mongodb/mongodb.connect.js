const mongoose = require("mongoose");

async function connect(){
    try{
        await mongoose.connect(
            "YOUR_MONGODB_SERVER_URL",
            {useNewUrlParser:true}
        )

    }catch(e){
        console.error("Error connecting to mongodb");
        console.error(e);
    }
}

module.exports = {connect}