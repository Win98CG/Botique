import Content from "../UI/Content";
import Header from "../Components/Header";
import TotalProduct from "../Components/CheckoutPage_Components/TotalProduct";
import style from "./CheckoutPage.module.css";
import CheckoutForm from "../Components/CheckoutPage_Components/CheckoutForm";
function CheckoutPage() {
  return (
    <Content>
      <Header title="CHECKOUT" />
      <h2 className={style.title}>BILLING DETAILS</h2>
      <div className={style.container}>
        <CheckoutForm />
        <TotalProduct />
      </div>
    </Content>
  );
}

export default CheckoutPage;
