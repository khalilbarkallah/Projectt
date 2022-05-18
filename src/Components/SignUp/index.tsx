import './styles.css';
import 'font-awesome/css/font-awesome.min.css';



function SignUp() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="Title">
            <h3> Sign up and start creating your interfaces</h3>
          </div>

          <div className="Input">
            <input type="text" placeholder="Full name" className="name" />

            <div className="second-input">


              <input type="text" placeholder="Email" className="name" />
            </div>
            <div className="rd-input">

              <input type="password" placeholder="Password" className="name" />
            </div>
          </div>

          <div className="login-button">
            <button><a href='/folder' className='Login-link'>Sign up</a></button>
          </div>
          <div className="second-Title">
            <h4> Already have an acount ? <a href="/login" className='linkk'> Log in</a></h4>
          </div>




        </div>
      </div>
    </div>
  );
}

export default SignUp;