//Cargar Page
import navigation from './navigation'
import signup from './signup'

const routes = [
  { url: '/signup', html : signup },
  { url: '/', html: yo`<a href="./signup">Signup</a>`, action: function(ext, next){
    var main = document.getElementById(target)
    empty(main).appendChild(this.html)
  }}
]

route(routes)
