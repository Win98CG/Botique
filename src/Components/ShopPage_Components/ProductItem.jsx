import { Link } from "react-router-dom";
import style from "../HomPage_Components/ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <>
      <div className={style.container} key={product._id.$oid}>
        <Link to={`/detail/${product._id.$oid}`}>
          <img src={product.img1} alt="" />
        </Link>
        <p className={style.title}>{product.name}</p>
        <p className={style.price}>
          {Number(product.price).toLocaleString()} VND
        </p>
      </div>
    </>
  );
}
export default ProductItem;
