import ProductItem from "./ProductItem";
import style from "./ProductList.module.css";
function ProductList({ products }) {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <input type="text" placeholder="Enter Search Here!" />
        <select>
          <option value="">Default Sorting</option>
        </select>
      </div>
      <div className={style.products}>
        {products.length === 0 ? (
          <div className={style.no_found}>
            <p>Sorry no product in this category</p>
          </div>
        ) : (
          products.map((product) => (
            <ProductItem key={product._id.$oid} product={product} />
          ))
        )}
      </div>
      <div className={style.footer}>
        <a>&laquo;</a>
        <a>1</a>
        <a>&raquo;</a>
      </div>
    </div>
  );
}
export default ProductList;
