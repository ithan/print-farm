const express = require("express");

const app = express();
const port = 3000;

const filamentList = [
    {
        "_id": 1,
        "name" : "Prusament Prusa Orange",
        "quantity" : 7,
        "availability" : 'true'
    },
    {
        "_id": 2,
        "name" : "Prusament Galaxy Silver",
        "quantity" : 8,
        "availability" : 'false'
    },
    {
        "_id": 3,
        "name" : "Prusament Galaxy Purple",
        "quantity" : 2,
        "availability" : 'false'
    },
    {
        "_id": 4,
        "name" : "Prusament Jet Blac",
        "quantity" : 111,
        "availability" : 'false'
    },
    {
        "_id": 5,
        "name" : "Prusament Ms. Pink",
        "quantity" : 3,
        "availability" : 'true'
    }
];

app.use(express.static("examples"));


app.get("/api/filamentList", (req,res)=>{
    res.json(filamentList);
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

