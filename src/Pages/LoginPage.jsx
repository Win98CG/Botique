import banner from "../assets/banner1.jpg";
import SignInForm from "../Components/LoginPage_Components/SignInForm";
import Content from "../UI/Content";

import style from "./LoginPage.module.css";
function LoginPage() {
  return (
    <Content>
      <div className={style.background}>
        <img className={style.banner} src={banner} alt="banner" />
        <img className={style.banner} src={banner} alt="banner" />
        <SignInForm />
      </div>
    </Content>
  );
}

export default LoginPage;
