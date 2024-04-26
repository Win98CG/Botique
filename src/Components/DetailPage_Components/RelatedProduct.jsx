import { Link } from "react-router-dom";
import style from "./RelatedProduct.module.css";
function RelatedProduct({ products }) {
  console.log(products[0]);
  return (
    <>
      <h2 className={style.title}>RELATED PRODUCT</h2>
      <div className={style.flex}>
        {products.map((product) => (
          <div className={style.container} key={product._id.$oid}>
            <Link to={`/detail/${product._id.$oid}`}>
              <img src={product.img1} alt="" />
            </Link>
            <p className={style.title_product}>{product.name}</p>
            <p className={style.price}>
              {Number(product.price).toLocaleString()} VND
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
export default RelatedProduct;
