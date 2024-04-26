import Content from "../UI/Content";
import style from "./Footer.module.css";
function Footer() {
  return (
    <footer className={style.footer}>
      <Content className={style.container}>
        <div className={style.content}>
          <h3 className={style.title}>CUSTOMER SERVICES</h3>
          <p>
            <a href="#">Help & Contact Us</a>
          </p>
          <p>
            <a href="#">Returns & Refunds</a>
          </p>
          <p>
            <a href="#">Online Store</a>
          </p>
          <p>
            <a href="#">Terms & Conditions</a>
          </p>
        </div>
        <div className={style.content}>
          <h3 className={style.title}>COMPANY</h3>
          <p>
            <a href="#">What We Do</a>
          </p>
          <p>
            <a href="#">Available Services</a>
          </p>
          <p>
            <a href="#">Latest Posts</a>
          </p>
          <p>
            <a href="#">FAQs</a>
          </p>
        </div>
        <div className={style.content}>
          <h3 className={style.title}>SOCIAL MEDIA</h3>
          <p>
            <a href="#">Twitter</a>
          </p>
          <p>
            <a href="#">Instagram</a>
          </p>
          <p>
            <a href="#">Facebook</a>
          </p>
          <p>
            <a href="#">Pinterest</a>
          </p>
        </div>
      </Content>
    </footer>
  );
}
export default Footer;
