
// import backgroundImage from '../images/agq_logo_white_bg.svg'; 

const Login = () => {
  return (
    <>
      <div className="kt-grid kt-grid--ver kt-grid--root kt-page">
        <div
          className="kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v3 kt-login--signin"
          id="kt_login"
        >
          <div
            className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor"
            style={{
              // backgroundImage: `url(${backgroundImage})`, // Replace with the correct path
            }}
          >
            <div className="kt-grid__item kt-grid__item--fluid kt-login__wrapper">
              <div className="kt-login__container">
                <div className="kt-login__logo">
                  <a href="#">
                    <img
                      style={{ width: '250px' }}
                      src="/path/to/your/logo.svg" // Replace with the correct path
                      alt="Logo"
                    />
                  </a>
                </div>

                <div className="kt-login__signin">
                  <div className="kt-login__head">
                    <h3 className="kt-login__title">Sign In To Admin</h3>
                  </div>

                  <form className="kt-form" method="POST" action="/login">
                    {/* CSRF token would be managed on the backend */}
                    <div className="input-group">
                      <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                        required
                        autoFocus
                      />
                    </div>
                    <div className="input-group">
                      <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        name="password"
                        required
                      />
                    </div>
                    <div className="row kt-login__extra">
                      <div className="col">
                        <label className="kt-checkbox">
                          <input type="checkbox" name="remember" />
                          Remember Me
                          <span></span>
                        </label>
                      </div>
                    </div>
                    <div className="kt-login__actions">
                      <button
                        id="kt_login_signin_submitss"
                        type="submit"
                        className="btn btn-brand btn-elevate kt-login__btn-primary"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>

                {/* Signup form */}
                <div className="kt-login__signup">
                  <div className="kt-login__head">
                    <h3 className="kt-login__title">Sign Up</h3>
                    <div className="kt-login__desc">
                      Enter your details to create your account:
                    </div>
                  </div>
                  <form className="kt-form">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Fullname"
                        name="fullname"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Confirm Password"
                        name="rpassword"
                      />
                    </div>
                    <div className="row kt-login__extra">
                      <div className="col kt-align-left">
                        <label className="kt-checkbox">
                          <input type="checkbox" name="agree" />
                          I Agree the{' '}
                          <a href="#" className="kt-link kt-login__link kt-font-bold">
                            terms and conditions
                          </a>
                          <span></span>
                        </label>
                      </div>
                    </div>
                    <div className="kt-login__actions">
                      <button
                        id="kt_login_signup_submit"
                        className="btn btn-brand btn-elevate kt-login__btn-primary"
                      >
                        Sign Up
                      </button>
                      &nbsp;&nbsp;
                      <button
                        id="kt_login_signup_cancel"
                        className="btn btn-light btn-elevate kt-login__btn-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>

                {/* Forgot password form */}
                <div className="kt-login__forgot">
                  <div className="kt-login__head">
                    <h3 className="kt-login__title">Forgotten Password ?</h3>
                    <div className="kt-login__desc">
                      Enter your email to reset your password:
                    </div>
                  </div>
                  <form className="kt-form">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        name="email"
                        id="kt_email"
                      />
                    </div>
                    <div className="kt-login__actions">
                      <button
                        id="kt_login_forgot_submit"
                        className="btn btn-brand btn-elevate kt-login__btn-primary"
                      >
                        Request
                      </button>
                      &nbsp;&nbsp;
                      <button
                        id="kt_login_forgot_cancel"
                        className="btn btn-light btn-elevate kt-login__btn-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;


