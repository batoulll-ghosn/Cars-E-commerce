import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login, register } from "../actions/user";
import axios from "axios";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const navigate= useNavigate();
  const dispatch = useDispatch();
  const [registerShow, setRegisterShow] = useState(true);
  const [LoginShow, setLoginShow] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");
  const [loginError, setLoginError] = useState("");
  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }
  const handleRegister = (e) => {
    e.preventDefault();
    setFullNameError("");
    setPhoneNumberError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPassError("");
    if (fullName.trim().indexOf(" ") === -1) {
      setFullNameError("First name and Last name*");
      return;
    }
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailTest.test(email)) {
      setEmailError("myemail@example.com*");
      return;
    }
    const passwordTest =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordTest.test(password)) {
      setPasswordError("at least 1 digit,1 capital letter,1 small letter,1 special and longer than 8*");
      return;
    } 
    if(password !== confirmPass){
      setConfirmPassError("passwords don't match*");
      return;
    }
    dispatch(register(fullName,ph,email,password,"customer"));
    onSignup();
  };
  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
      .then(() => {
        navigate("/");
        toast.success("You logged in successfully!");
      })
      .catch(() => {
        setLoginError("Invalid email or password*");
      });
  };
  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
        navigate("/");
        toast.success("You logged in successfully!");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            👍Login Success
          </h2>
        ) : (
          <div className="register">
            {showOTP ? (
              <div className="card">
                    <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                        Verify Your Phone Number <br /> 
                    </h1>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your verification code
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container "
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="register-button"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </div>
            ) : (
              <>
              <div className="register">
      {registerShow && (
        <form className="card" onSubmit={(e) => handleRegister(e)}>
          <div>
            <input
              type="text"
              className="register-input"
              placeholder="FULLNAME"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
            {fullNameError && <p className="error">{fullNameError}</p>}
          </div>
          <div>
          <PhoneInput  country={"lb"} value={ph} onChange={setPh} inputStyle={{ width: '240px',
            height: '50px'}}/>
            {phoneNumberError && <p className="error">{phoneNumberError}</p>}
          </div>
          <div>
            <input
              type="email"
              className="register-input"
              placeholder="EMAIL"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div>
            <input
              type="password"
              className="register-input"
              placeholder="PASSWORD"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <div>
            <input
              type="password"
              className="register-input"
              placeholder="CONFIRM PASSWORD"
              required
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            {confirmPassError && <p className="error">{confirmPassError}</p>}
          </div>
          <div className="register-input">
            <input type="checkbox" style={{ transform: "scale(2)" }} required />
            <span style={{ paddingLeft: "10px" }}>I'm not a robot</span>
          </div>
          <button className="register-button" type="submit">
            Register
          </button>
          <span className="link">
            Already have an account?
            <span
              className="link2"
              onClick={() => {
                setRegisterShow(false);
                setLoginShow(true);
              }}
            >
              Sign in
            </span>
          </span>
        </form>
      )}
      {LoginShow && (
        <form className="card2" onSubmit={(e)=>handleLogin(e)}>
          <div>
          <input
            type="text"
            className="register-input"
            placeholder="EMAIL"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
          <div>
          <input
            type="text"
            className="register-input"
            placeholder="PASSWORD"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {
            loginError &&
            <p className="error">{loginError}</p>
          }
          </div>
          <button className="register-button" type="submit">Sign in</button>
          <span className="link">
            Don't have an account?
            <span
              className="link2"
              onClick={() => {
                setRegisterShow(true);
                setLoginShow(false);
              }}
            >
              Register
            </span>
          </span>
        </form>
      )}
    </div>  
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;

