import { useLoaderData, useSearchParams } from "react-router-dom";
import Header from "../Components/Header";
import NavBar from "../Components/ShopPage_Components/NavBar";
import ProductList from "../Components/ShopPage_Components/ProductList";
import Content from "../UI/Content";
import style from "./ShopPage.module.css";
function ShopPage() {
  //get data
  const data = useLoaderData();
  //filter data by category
  const [searchParam, setSearchParam] = useSearchParams();
  const mode = searchParam.get("mode") || "all";
  const productList = data.filter(
    (product) => mode === "all" || product.category === mode
  );
  return (
    <>
      <Content className={style.wrapper}>
        <Header title="SHOP" />
        <div className={style.container}>
          <NavBar />
          <ProductList products={productList} />
        </div>
      </Content>
    </>
  );
}

export default ShopPage;
