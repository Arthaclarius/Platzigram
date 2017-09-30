const
express = require('express'),
app     = express()

//Routing
app.get('/', function(req, res){
  res.send('Za Warudo!')
})

//Server Init
app.listen(3000, function(err){
  if (err) {
    console.error(err)
    return process.exit(1)
  }else {
    console.log('Init')
  }
})
