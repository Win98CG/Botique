import { Form, Link, useActionData } from "react-router-dom";
import style from "./SignUpForm.module.css";
function SignUpForm() {
  const data = useActionData();
  return (
    <div className={style.container}>
      <h2>Sign Up</h2>
      <Form method="post">
        <input type="text" name="fullName" placeholder="Full Name" required />

        <input type="email" name="email" placeholder="Email" required />
        {data && <p>{data.message}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength={8}
        />

        <input type="text" name="phone" placeholder="Phone" required />
        <button>SIGN UP</button>
      </Form>
      <p>
        Login?<Link to="/login">Click</Link>
      </p>
    </div>
  );
}
export default SignUpForm;
