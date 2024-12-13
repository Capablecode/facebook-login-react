import "./App.css";
import Input from "./components/Input";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="wrapper_1">
          <h1>Facebook</h1>
          <p>
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        <div class="wrapper_2">
          <div class="form_container">
            <form>
              <div>
                <Input
                  type="text"
                  name="text1"
                  placeholder="Enter email address or phone number"
                />
              </div>
              <div>
                <Input type="text" name="text2" placeholder="Password" />
              </div>

              <div class="login">
                <a href="https://web.facebook.com/?_rdc=1&_rdr#&_rdr">
                  Log in{" "}
                </a>
              </div>
              <div class="f_password">
                <a href="https://web.facebook.com/login/identify/?ctx=recover&ars=facebook_login&from_login_screen=0">
                  Forgotten password?
                </a>
              </div>
              <hr class="hr" />
              <div class="create_acct">
                <a href="https://web.facebook.com/r.php?locale=en_GB&display=page">
                  Create new account
                </a>
              </div>
            </form>
          </div>

          <div class="last__text">
            <a href="https://web.facebook.com/pages/create/?ref_type=registration_form">
              <b>Create a Page</b>
            </a>{" "}
            for a celebrity, brand or business.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
