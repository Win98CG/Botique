import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

import CartTotal from "../Components/CartPage_Components/CartTotal";
import ProductCard from "../Components/CartPage_Components/ProductCard";
import Header from "../Components/Header";
import Content from "../UI/Content";

import style from "./CartPage.module.css";
function CartPage() {
  return (
    <Content>
      <Header title="CART" />
      <div>
        <h2 className={style.title}>SHOPPING CART</h2>
        <div className={style.container}>
          <ProductCard />
          <CartTotal />
        </div>
        <div className={style.navigate}>
          <Link to="/shop">
            <FontAwesomeIcon className={style.icon} icon={faLeftLong} />
            Continiue shopping
          </Link>
          <Link to="/checkout">
            Proceed to checkout
            <FontAwesomeIcon className={style.icon} icon={faRightLong} />
          </Link>
        </div>
      </div>
    </Content>
  );
}

export default CartPage;
