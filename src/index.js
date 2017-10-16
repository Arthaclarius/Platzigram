//Cargar Page
import navigation from './navigation'
import signup from './signup'
import yo from 'yo-yo'
import empty from 'empty-element'

const routes = [
  { url: '/signup', html : signup() },
  { url: '/', html: yo`<a href="./signup">Signup</a>`}
]

let navigationApp = new navigation(routes, "main-container")
navigationApp.start()