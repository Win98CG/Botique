import { useSelector } from "react-redux";
import style from "./CartTotal.module.css";
import Button from "../../UI/Button";
function CartTotal() {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>CART TOTAL</h1>
        <div>
          <h3 className={style.subtotal}>
            SUBTOTAL{" "}
            <span className={style.price}>
              {Number(totalAmount).toLocaleString()} VND
            </span>
          </h3>
          <h3>
            TOTAL
            <span className={style.totalPrice}>
              {Number(totalAmount).toLocaleString()} VND
            </span>
          </h3>
        </div>
        <div className={style.coupon}>
          <input type="text" placeholder="Enter your coupon" />
          <Button>Apply Coupon</Button>
        </div>
      </div>
    </div>
  );
}
export default CartTotal;
