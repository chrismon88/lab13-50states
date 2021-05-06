//starts express server
let express = require('express')
let states_api = require('./routes/states')

//create express webserver app
let app = express()
//lets serve understand json data requests
app.use(express.json())

//will make routes in states api available
app.use('/api', states_api)

//error handeling resource we dont have 400, error with server 500
app.use(function (req,res,next){
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next){
    console.log(err)
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function (){
console.log('server running on port', server.address().port)
})
