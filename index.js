require('dotenv').load();
const express = require("express")
const app = express()
const pg = require("pg")
const Client = pg.Client
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug')


const client = new Client({

    user: process.env.POSTGRES_USER,
    host: process.env.host,
    database: process.env.database,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

const client2 = new Client({

    user: process.env.POSTGRES_USER,
    host: process.env.host,
    database: process.env.database,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@process.env.host/process.env.database';
/*
client.connect()
const query = {
	text: `select * from users where name = '${process.argv[2]}'`,
}
client.query(query, (err,res)=> { 
	console.log(res)
		client.end()
})*/

app.post("/input", (req, res) => {
    var title1 = req.body.title
    var message1 = req.body.message

    client.connect()
    const query = {
        text: `insert into messages (title, body) values 
		('${title1}','${message1}');`
    }
    client.query(query, (err, res) => {
        console.log("succes")

    })
    res.redirect("read")
})


app.get("/", (req, res) => {
    res.render("index")
})


app.get("/read", (req, results) => {

    client2.connect()
    const query = {
        text: "select * from messages"
    }

    client2.query(query, (err, res) => {
        var lijst = res.rows
        console.log(res.rows)
        results.render("read", {
            lijst: lijst

        })

    })


})


app.listen(3000, function() {
    console.log("find me @ 3k")
})