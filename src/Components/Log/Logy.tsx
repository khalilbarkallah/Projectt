import './LoginUi.css';
import 'font-awesome/css/font-awesome.min.css';
import { SocialitePage } from '../Socialite/SocialitePage';



function LoginUi() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="Title">
            <h3>Log in into your webitall account</h3>
          </div>

          <div className="Input">
            <input type="text" placeholder="user name" className="name" />

            <div className="second-input">

              <input type="password" placeholder="Password" className="name" />
            </div>
          </div>

          <div className="login-button">
            <button > <a href='/folder' className='Login-link'>Login</a></button>
          </div>
          <div className="second-Title">
            <h4> or  <a href="/login" className="linkk"> forget password</a></h4>
          </div>
          <div className="rd-Title">
            <h4> dont have an acount <a href="/signup" className="linkk"> Sign up</a></h4>
          </div>

          <SocialitePage></SocialitePage>
        </div>
      </div>
    </div>
  );
}

export default LoginUi;