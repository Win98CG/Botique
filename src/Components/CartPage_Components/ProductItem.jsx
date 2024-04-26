import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { cartAction } from "../../stores/cartSlice";

import style from "./ProductItem.module.css";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <>
      {product.quantity > 0 && (
        <tr>
          <td>
            <img className={style.banner} src={product.img1} alt="" />
          </td>
          <td className={style.name}>{product.name}</td>
          <td className={style.price}>
            {Number(product.price).toLocaleString()} VND
          </td>
          <td className={style.quantity}>
            <span
              onClick={() =>
                dispatch(cartAction.REMOVE_CART({ id: product._id.$oid }))
              }
            >
              <FontAwesomeIcon
                className={style.icon}
                icon={faAngleDoubleLeft}
              />
            </span>
            {Number(product.quantity)}
            <span
              onClick={() =>
                dispatch(cartAction.ADD_CART({ item: product, quantity: 1 }))
              }
            >
              <FontAwesomeIcon
                className={style.icon}
                icon={faAngleDoubleRight}
              />
            </span>
          </td>
          <td className={style.price}>
            {Number(product.totalPrice).toLocaleString()} VND
          </td>
          <td>
            <FontAwesomeIcon
              onClick={() =>
                dispatch(cartAction.DELETE_CART({ id: product._id.$oid }))
              }
              className={style.icon}
              icon={faTrash}
            />
          </td>
        </tr>
      )}
    </>
  );
}
export default ProductItem;
