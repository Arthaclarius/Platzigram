const
express = require('express'),
app     = express()

//Asignar el render de pug
app.set('view engine', 'pug')

//Asignar ruta de archivos estáticos
app.use(express.static(__dirname + '/public'))

//Routing
app.get('/', function(req, res){
  res.render('index', {title: 'Baka'})
})

app.get('/signup', function(req, res){
  res.render('index', {title:'Baka-in'})
})

app.get('/signin', function(req, res){
  res.render('index')
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
