    const express = require('express')
    const ejs = require('ejs')
    const mongoose = require('mongoose')
    var methodOverride = require('method-override')

    const app = express()


    mongoose.connect('mongodb://localhost/User0');


    //Template
    app.set("view engine","ejs")


    //Middlewares
    app.use(express.static("public"))

    app.use(express.json()) // for parsing application/json
    app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    app.use(methodOverride('_method',{
        methods:['POST','GET']
    }))


    const pageRoute = require('./routes/pageRoute')
    const userRoute = require('./routes/userRoute')

    app.use('/' , pageRoute)
    app.use('/users' , userRoute)
    



    app.listen(3000)