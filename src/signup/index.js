const yo = require('yo-yo');

export default yo`
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
                <h2>Registrate para ver fotos de cirno</h2>
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
