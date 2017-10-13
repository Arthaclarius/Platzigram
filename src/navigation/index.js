const 
page  = require('page'),
empty = require('empty-element'),
yo    = require('yo-yo')

export default class NavigationPages{

  constructor (routes = [], target = "main-container") {
    this.routes = routes
    this.target = document.getElementById(target)
    this.defaultAction = (ctx, next) => {
      let element = routes.filter(
        route => {
          return ctx.pathname == route.url
        }
      )[0].html
      empty(this.target).appendChild(element)
    }
  }

  start () {
    for (var i = 0; i < this.routes.length; i++) {
      if (this.validateRoute(this.routes[i])) {
        if (!this.routes[i].html) {
          this.routes[i].html = yo`<p>Nothing to show</p>`
        }
        page(this.routes[i].url, this.defaultAction)
      }
    }
    page.start()
  }

  validateRoute (route) {
    if (
      route &&
      route.url
    ) {
      return true
    }
    return false
  }
}
