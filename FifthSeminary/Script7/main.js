// Implementați o metodă put și o metodă delete pe server

let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

let array = [
    { id: 1, name: "Ionut", age: 25 },
    { id: 2, name: "Alex", age: 28 },
    { id: 3, name: "Mihai", age: 23 },
    { id: 4, name: "Marcel", age: 20 },
    { id: 5, name: "Marius", age: 21 }
];

router.route("/getList").get((req, res) => {
    res.json(array);
});

router.route("/getById/:id").get((req, res) => {
    const id = parseInt(req.params.id);
    const element = array.find(item => item.id === id);
    if (element) res.json(element);
    else res.status(404).json({ message: `Resursa cu id=${id} nu a fost găsită!` });
});

router.route("/postList").post((req, res) => {
    const element = req.body;
    if (!element.id || !element.name || !element.age) {
        return res.status(400).json({ message: "Date incomplete!" });
    }
    array.push(element);
    res.json({ message: "Element adăugat!", element });
});

router.route("/update/:id").put((req, res) => {
    const id = parseInt(req.params.id);
    const index = array.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ message: `Resursa cu id=${id} nu a fost găsită!` });
    }
    array[index] = { ...array[index], ...req.body };
    res.json({ message: "Element actualizat!", element: array[index] });
});

router.route("/delete/:id").delete((req, res) => {
    const id = parseInt(req.params.id);
    const index = array.findIndex(item => item.id === id);
    if (index === -1) {
        return res.status(404).json({ message: `Resursa cu id=${id} nu a fost găsită!` });
    }
    const deleted = array.splice(index, 1);
    res.json({ message: "Element șters!", element: deleted[0] });
});

let port = 8000;
app.listen(port, () => console.log(`✅ API running on port ${port}`));
