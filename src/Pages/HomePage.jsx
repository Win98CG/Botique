import { Link, useLoaderData, useNavigate } from "react-router-dom";

import Content from "../UI/Content";
import Button from "../UI/Button";
import ProductItem from "../Components/HomPage_Components/ProductItem";

import banner from "../assets/banner1.jpg";
import product1 from "../assets/product_1.png";
import product2 from "../assets/product_2.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_4.png";
import product5 from "../assets/product_5.png";
import style from "./HomePage.module.css";
import { useSelector } from "react-redux";
import Popup from "../Components/HomPage_Components/Popup";
import LiveChat from "../Components/HomPage_Components/LiveChat";
function HomePage() {
  //show popup
  const { isShow, product } = useSelector((state) => state.popup);
  //use data from loader
  const data = useLoaderData();
  //navigate to shop page
  const navigate = useNavigate();
  const handleClick = function () {
    navigate("shop");
  };
  return (
    <>
      <Content className={style.container}>
        <img className={style.banner} src={banner} alt="banner" />
        <div className={style.infor}>
          <p className={style.color}>NEW INSPIRATION 2020</p>
          <p className={style.sale}>
            20% OFF ON NEW
            <br /> SEASON
          </p>
          <Button className={style.btn} onClick={handleClick}>
            Browse collections
          </Button>
        </div>
      </Content>
      <Content>
        <div className={style.title}>
          <h3>CAREFULLY CREATED COLLECTIONS</h3>
          <h2>CAREFULLY CREATED COLLECTIONS</h2>
        </div>
        <div className={style.row}>
          <Link
            to="/shop?mode=iphone"
            className={`${style.col} ${style.col_2}`}
          >
            <img src={product1} alt="" />
          </Link>
          <Link
            to="/shop?mode=macbook"
            className={`${style.col} ${style.col_2}`}
          >
            <img src={product2} alt="" />
          </Link>
        </div>
        <div className={style.row}>
          <Link to="/shop?mode=ipad" className={`${style.col} ${style.col_3}`}>
            <img src={product3} alt="" />
          </Link>
          <Link to="/shop?mode=watch" className={`${style.col} ${style.col_3}`}>
            <img src={product4} alt="" />
          </Link>
          <Link
            to="/shop?mode=airpod"
            className={`${style.col} ${style.col_3}`}
          >
            <img src={product5} alt="" />
          </Link>
        </div>
      </Content>
      <Content>
        <div className={`${style.title} ${style.trending}`}>
          <h3>MAKE THE HARD WAY</h3>
          <h2>TOP TRENDING PRODUCTS</h2>
        </div>
        <div className={style.product}>
          {data.map((product) => (
            <ProductItem key={product._id.$oid} product={product} />
          ))}
        </div>
      </Content>

      <Content className={`${style.more_info} ${style.footer}`}>
        <div className={style.row}>
          <div className={style.col_3}>
            <p className={style.shipping_title}>FREE SHIPPING</p>
            <p className={style.shipping}>Free shipping worlwide</p>
          </div>
          <div className={style.col_3}>
            <p className={style.shipping_title}>24 X 7 SERVICE</p>
            <p className={style.shipping}>Free shipping worlwide</p>
          </div>
          <div className={style.col_3}>
            <p className={style.shipping_title}>FESTIVAL OFFER</p>
            <p className={style.shipping}>Free shipping worlwide</p>
          </div>
        </div>
      </Content>
      <Content className={style.register}>
        <div>
          <p className={style.register_title}>LET'S BE FRIEND!</p>
          <p className={style.register_desc}>
            Nisi nisi tempor consequat laboris nisi.
          </p>
        </div>
        <div className={style.sign}>
          <input type="text" placeholder="Enter your email address" />
          <Button className={style.sign_btn}>Subscribe</Button>
        </div>
      </Content>
      {isShow && <Popup product={product} />}
      <LiveChat />
    </>
  );
}

export default HomePage;
export async function loader() {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );
  return response;
}
