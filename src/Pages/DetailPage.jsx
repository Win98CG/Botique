import { useParams } from "react-router-dom";
import ProductDetail from "../Components/DetailPage_Components/ProductDetail";

function DetailPage() {
  const { productId } = useParams();

  return <ProductDetail id={productId} />;
}

export default DetailPage;
