const express = require('express')

const app = express()

//Template
app.set("view engine","ejs")

//Middlewares
app.use(express.static("public"))

app.get('/',(req,res) => {

    res.send('Merhaba')

})





app.listen(3000)
console.log("Express Başlatıldı");