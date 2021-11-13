import style from './loguinPage.module.css';
import logostore from './icons/logostore.png';
import GoogleLogin from 'react-google-login';

function loguinPage() {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }

  return (
    <div className={style.App}>
      <header className={style['App-header']}>
          <div className={style['login-info-container']}>
            <h1 className={style.title}>Login</h1>
            <img src={logostore} className={style['logo-store']} alt={style.logo}/>
            <div className={style['social-login']}>
              <div className={style['social-login-element']}>
                <br  /><br  />
                  <GoogleLogin
                    clientId="567785216612-clf3196se3emp7qfascjd1ptfq044ppp.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
              </div>
            </div>
            <form className={style['inputs-container']}>
              <h5>Olvidaste la Contraseña? <span className={style.span}>Click here</span></h5>
            </form>
          </div>
      </header>
    </div>
  );
}

export default loguinPage;
