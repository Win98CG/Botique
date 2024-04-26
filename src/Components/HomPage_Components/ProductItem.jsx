import { useDispatch } from "react-redux";
import { popupAction } from "../../stores/popupSlice";
import style from "../HomPage_Components/ProductItem.module.css";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.container} key={product._id.$oid}>
        <img
          src={product.img1}
          alt=""
          onClick={() => dispatch(popupAction.showPopup(product))}
        />
        <p className={style.title}>{product.name}</p>
        <p className={style.price}>
          {Number(product.price).toLocaleString()} VND
        </p>
      </div>
    </>
  );
}
export default ProductItem;
