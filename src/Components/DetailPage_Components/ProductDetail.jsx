import { useLoaderData } from "react-router-dom";
import Content from "../../UI/Content";
import style from "./ProductDetail.module.css";
import Button from "../../UI/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../stores/cartSlice";
import RelatedProduct from "./RelatedProduct";
function DetailPage({ id }) {
  const [amount, setAmount] = useState(1);
  const handleDecrease = function () {
    setAmount((prev) => prev - 1);
  };
  const handleIncrease = function () {
    setAmount((prev) => prev + 1);
  };

  const dispatch = useDispatch();
  const data = useLoaderData();
  //find product detail
  const [productDetail] = data.filter((product) => product._id.$oid === id);
  //related product by category
  const relatedProduct = data.filter(
    (product) =>
      product.category === productDetail.category && product._id.$oid !== id
  );
  const long = productDetail.long_desc.split("•");
  console.log(long);
  //add product to cart
  const handleAddToCart = function () {
    dispatch(cartAction.ADD_CART({ item: productDetail, quantity: amount }));
    alert("Added");
  };
  return (
    <>
      <Content className={style.container}>
        <div className={style.banner_list}>
          <img src={productDetail.img1} alt="" />
          <img src={productDetail.img2} alt="" />
          <img src={productDetail.img3} alt="" />
          <img src={productDetail.img4} alt="" />
        </div>
        <div className={style.banner}>
          <img src={productDetail.img1} alt="" />
        </div>
        <div className={style.detail}>
          <h1>{productDetail.name}</h1>
          <p className={style.price}>
            {Number(productDetail.price).toLocaleString()} VND
          </p>
          <p className={style.short}>{productDetail.short_desc}</p>
          <p>
            CATEGORY:{" "}
            <span className={style.short}>{productDetail.category}</span>
          </p>
          <div className={style.amount}>
            <a>QUANTITY</a>
            <a onClick={handleDecrease}>-</a>
            <a>{amount}</a>
            <a onClick={handleIncrease}>+</a>
            <Button onClick={handleAddToCart}>Add to cart</Button>
          </div>
        </div>
      </Content>
      <Content>
        <Button className={style.description}>DESCRIPTION</Button>
        <ul className={style.long_des}>
          {long.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </Content>
      <Content>
        <RelatedProduct products={relatedProduct} />
      </Content>
    </>
  );
}
export default DetailPage;
