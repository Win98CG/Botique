import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import users from "../../stores/User/users";

import style from "./SignInForm.module.css";

import { userAction } from "../../stores/userSlice";
function SignInForm() {
  //navigate to homepage
  const navigate = useNavigate();
  //get data user input
  const email = useRef();
  const password = useRef();
  //
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    //check login user
    const loginUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (loginUser) {
      localStorage.setItem("activeUser", JSON.stringify(loginUser));
      dispatch(userAction.login(loginUser));
      navigate("/");
    } else {
      alert("Wrong user please try agin!");
      password.current.value = "";
    }
  }
  return (
    <div className={style.container}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" ref={email} required />

        <input type="password" placeholder="Password" ref={password} required />

        <button>SIGN IN</button>
      </form>
      <p>
        Create an account?<Link to="/register">Click</Link>
      </p>
    </div>
  );
}
export default SignInForm;
