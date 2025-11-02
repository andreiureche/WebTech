// implementați un nou endpoint în server care să primească id-ul unei resurse 
// și să răspundă cu resursa respectivă

let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use("/api",router);

const array = [
    {id: 1, name: "Ionut", age: 25},
    {id: 2, name: "Alex", age: 28},
    {id: 3, name: "Mihai", age: 23},
    {id: 4, name: "Marcel", age: 20},
    {id: 5, name: "Marius", age: 21}
];

router.route("/getList").get((req,res) => {
    res.json(array);
});

router.route("/postList").post((req,res) => {
    let element = req.body;
    array.push(element);
    res.json(element);
});

router.route("/getById/:id").get((req,res) => {
    let id = parseInt(req.params.id);
    let element = array.find(item => item.id === id);
    if(element){
        res.json(element);
    }
    else{
        res.status(404).json({message: `Resursa cu id-ul ${id} nu a fost gasita!`});
    }
});

let port = 8000;
app.listen(port);
console.log("API is running!");

