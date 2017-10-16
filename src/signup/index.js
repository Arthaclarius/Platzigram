const yo = require('yo-yo');
import translate from '../translate'


export default function(){
  var slang = 'es'
  var lang = new translate(slang)  
  var pics = 0
  var el

  //#region Functions
  function render() {
    return yo`
<div class="container">
  <div class="row">
    <div class="col s10 push-s1">
      <div class="row">
        <div class="col m5 hide-on-small-only">
          <img class="main-image" src="./assets/images/th_cirno.jpg" alt="">
        </div>
        <di class="col s12 m7">
          <div class="row">
            <div class="signup-box">
              <h1 class="platzigram">Bakagram</h1>
              <form action="" class="signup-form">
                <h2>${lang.translate('SIGIN_MESSAGE')}</h2>
                <button class="btn" onclick=${addPicture}>
                  ${lang.translate('ADD_PICTURE')}
                </button>
                <button class="btn" onclick=${switchLang}>
                  English/Español
                </button>
                <p style="float: right">${lang.translate('PICTURES', { num: pics })} ${lang.translate('FROM')}  ${lang.date(new Date())} - ${lang.date(new Date(1997, 9, 9))}</p>
                <div class="section">
                  <a href="" class="btn btn-fb hiden-on-small-only">
                    Iniciar sesion con Facebook
                  </a>
                  <a href="" class="btn btn-fb hide-on-med-and-up">
                    Iniciar sesion
                  </a>
                </div>
                <div class="divider"></div>
                <div class="section">
                  <input type="email" name="email" placeholder="Correo electronico">
                  <input type="text" name="name" placeholder="Nombre Completo" value="">
                  <input type="text" name="username" placeholder="Nombre de Usuario" value="">
                  <input type="password" name="name" placeholder="Contraseña" value="">
                  <button class="btn waves-effect waves-light btn-signup" type="submit">Registrate</button>
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="login-box">
              Tienes una cuenta? <a href="/login">Entrar</a>
            </div>
          </div>
        </di>
      </div>
    </div>
  </div>
</div>
`
  }

  function addPicture() {
    pics++
    var newEl = render()
    yo.update(el, newEl)
    return false
  }

  function switchLang(){
    if(slang == 'es') {
      slang = 'en'
      lang = new translate(slang)
    } else {
      slang = 'es'
      lang = new translate(slang)
    }

    var newEl = render()
    yo.update(el, newEl)
    return false
  }

  el = render()
  return el
}
