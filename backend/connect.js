const mongoose = require("mongoose");

uri = "mongodb+srv://tinder:maanirehman03332799923@tinder.ivznsyi.mongodb.net/tinder?retryWrites=true&w=majority";

const connectDB = () =>{
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
}

module.exports  = connectDB;