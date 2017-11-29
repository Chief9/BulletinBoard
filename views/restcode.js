

  /*  var arryuser= []

    function arraycheck(){
        for (var i = 0; i < arryuser.length; i++) {
            if (req.body.name===arryuser[i]) {
                return i
            } else {
                arryuser.push(req.body.name)
            }
            var list = arryuser.length
        }

    }
*/
/*


    const query = {
        text: `insert into messages (title, body) values 
		('${title1}','${message1}');`
    }
*/
/*    const query2 = {
        text: `ALTER TABLE messages add column user_id integer REFERENCES users(username);`
    }    
*/
    /*const query3 = {
        text: `select username from users where username = '${user1}';`
    }    

    const query4 = {
        text: `insert into users (username) values 
		('${user1}');`
    }  

    const query5 = {
        text: `insert into messages (user_id) 
        select id from users where username = '${user1}';`
    }*/
   //code zet ids in lege vakken, moet titel en body als verificatie
   // gebruiken
   // eerst isoleren, namen stapeleb check if statement, daarna
   // checken of cijfers aansluiten op bericht


/*    client.query(query)*/
/*    .then ((res)=>{
        console.log("succes")
     })*/
/*    .then((res2)=>{
        console.log(query3 + "test")*/
    /*client.query(query2)*/
/*    if (query3 === req.body.name){
        client.query(query5) 
    } else {
        client.query(query4)
    }
    })    
    .then((res3)=>{
    client.query(query5)

*/
/*    client.query(query2, (err, res) => {
        console.log("succes")

    })

    client.query(query3, (err, res) => {
        console.log("succes")

    })
*/
/*    .then((res4)=> {
    res.redirect("read")
    })
    .catch((e) => {
        console.log(e)
    })
})

})
*/


// search bar op page 2 select * for bodyparser, value adden op foreign key
// key toeschrijven aan usernames.  stuur reqs naar array, comparay array 
// anders insert nummer 
//select where * reg.body.name = username if username = reg.body.name, insert primary key username into messages user id
//select where * reg.body.name = username if username != reg.body.name, insert name into username en primary key into userid
//(res2.rows.length!== 0)

/*
client.connect()
const query = {
    text: `select * from users where name = '${process.argv[2]}'`,
}
client.query(query, (err,res)=> { 
    console.log(res)
        client.end()
})*/