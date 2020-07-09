const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3001;

const List = require("./models/listModel");
const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set('view engine', 'ejs')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shoplistdb", { useNewUrlParser: true });

app.get("/", (req, res) => {
    res.render("main.ejs", {
        name:"jean"
    })
})
app.get("/list", (req,res) => {
    List.find({})
        .then(ne => {
            res.json(ne)
        })
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
