import { json, redirect } from "react-router-dom";
import users from "../stores/User/users";
import banner from "../assets/banner1.jpg";

import SignUpForm from "../Components/RegisterPage_Components/SignUpForm";
import Content from "../UI/Content";

import style from "./RegisterPage.module.css";
function RegisterPage() {
  return (
    <Content>
      <div className={style.background}>
        <img className={style.banner} src={banner} alt="banner" />
        <img className={style.banner} src={banner} alt="banner" />
        <SignUpForm />
      </div>
    </Content>
  );
}

export default RegisterPage;
export async function action({ request }) {
  const data = await request.formData();
  const user = {
    fullName: data.get("fullName"),
    email: data.get("email"),
    password: data.get("password"),
    phone: data.get("phone"),
  };
  const isUniqueEmail = users.some((u) => u.email === user.email);
  if (isUniqueEmail) {
    return json({ message: "Email is already exists" });
  } else {
    users.push(user);
    localStorage.setItem("userArr", JSON.stringify(users));
    return redirect("/login");
  }
}
