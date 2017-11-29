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

const client3 = new Client({

    user: process.env.POSTGRES_USER,
    host: process.env.host,
    database: process.env.database,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@process.env.host/process.env.database';

    client.connect()

app.post("/input", (req, res) => {

 const query1 = {
      text: `select * from users where username = '${req.body.name}';`
   }

   const query2 = {
      text: `insert into users (username) values ('${req.body.name}');`
   }

   const query3 = {
       text: `insert into messages (title,body,username,user_id) SELECT '${req.body.title}','${req.body.message}', '${req.body.name}', users.id FROM users WHERE users.username = '${req.body.name}';`
   }
  client.query(query1)
    .then ((result)  => {
    if (result.rows.length !== 0){
           client.query(query3) 
            .then ((result) => {  
           })
       } else {   
           client.query(query2)
            .then  ((result) => {
              client.query(query3)
                .then ((result) => {  
               })
           })
       }
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

    client2.query(query)
    .then  ((res) => {
        var lijst = res.rows
        results.render("read", {
            lijst: lijst
        })

    })


})

app.post("/search", (req,results) => {
        client3.connect()
        const query = {
            text: `select * from messages where user_id = (select (id) from users where username = '${req.body.search}' );`
        }

        client3.query(query)
        .then ((res) => {
            var lijst = res.rows
            results.render("read", {
            lijst: lijst
        })
        })
})


app.listen(3000, function() {
    console.log("find me @ 3k")
})

