import { useSelector } from "react-redux";

import ProductItem from "./ProductItem.jsx";

import style from "./ProductCard.module.css";

function ProductCard() {
  const productList = useSelector((state) => state.cart.cartItems);
  return (
    <div className={style.container}>
      {productList.length !== 0 && (
        <table>
          <thead>
            <tr className={style.bg}>
              <th>IMAGE</th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <ProductItem product={product} key={product._id.$oid} />
            ))}
          </tbody>
        </table>
      )}
      <div>
        <footer></footer>
        {productList.length === 0 && (
          <h4 className={style.no_found}>No product! Please add new</h4>
        )}
      </div>
    </div>
  );
}
export default ProductCard;
