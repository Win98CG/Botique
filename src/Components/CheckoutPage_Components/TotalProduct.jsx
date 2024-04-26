import { useSelector } from "react-redux";
import style from "./TotalProduct.module.css";
function TotalProduct() {
  const { totalAmount, cartItems } = useSelector((state) => state.cart);
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1>YOUR ORDER</h1>
        <div>
          {cartItems.map((item) => (
            <div className={style.card}>
              <h3 key={item._id.$oid} className={style.subtotal}>
                {item.name}
              </h3>
              <p className={style.price}>
                {Number(item.price).toLocaleString()} VND <span>x</span>
                <span>{item.quantity}</span>
              </p>
            </div>
          ))}
          <h3 className={style.mg}>
            TOTAL
            <span className={style.totalPrice}>
              {Number(totalAmount).toLocaleString()} VND
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
export default TotalProduct;
