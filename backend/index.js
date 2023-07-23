const express = require("express");
const connectDB = require("./connect");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8001;


app.use(express.json());
app.use(cors());


app.get("/", (req,res) => res.status(200).send("hello"));

app.post("/tinder/cards", (req,res) =>{
    const dbCard = req.body;

    Cards.create(dbCard, (err,data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
});

app.get("/tinder/cards") , (req,res) =>{
    
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }

    })
     
    
}

const start = async () => {
    try{
        await connectDB();
        app.listen(port, () =>{
            console.log("connected");
        });
    } catch(error){
        console.log(error)
    }
};
start();