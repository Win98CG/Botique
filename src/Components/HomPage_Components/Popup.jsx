import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Button from "../../UI/Button";

import style from "./Popup.module.css";
import { useDispatch } from "react-redux";
import { popupAction } from "../../stores/popupSlice";
import { Link } from "react-router-dom";
function Popup({ product }) {
  const dispatch = useDispatch();
  return createPortal(
    <>
      <div
        className={style.overlay}
        onClick={() => dispatch(popupAction.hidePopup())}
      />
      <div className={style.modal}>
        <img src={product.img1} alt="" />

        <div className={style.desc}>
          <FontAwesomeIcon
            icon={faXmark}
            className={style.close}
            onClick={() => dispatch(popupAction.hidePopup())}
          />
          <h2 className={style.title}>{product.name}</h2>
          <p className={style.price}>
            {Number(product.price).toLocaleString()} VND
          </p>
          <p className={style.desc_text}>{product.short_desc}</p>
          <Link to={`/detail/${product._id.$oid}`}>
            <Button className={style.btn}>
              <FontAwesomeIcon icon={faShoppingCart} className={style.icon} />
              View Detail
            </Button>
          </Link>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
}
export default Popup;
