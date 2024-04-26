import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage, { loader as trendingProductLoader } from "./Pages/HomePage";
import RootLayout from "./Pages/RootLayout";
import LoginPage from "./Pages/LoginPage";
import ShopPage from "./Pages/ShopPage";
import DetailPage from "./Pages/DetailPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import RegisterPage, { action as registerAction } from "./Pages/RegisterPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage />, loader: trendingProductLoader },
        { path: "/shop", element: <ShopPage />, loader: trendingProductLoader },
        {
          path: "/detail/:productId",
          element: <DetailPage />,
          loader: trendingProductLoader,
        },
        { path: "/cart", element: <CartPage /> },
        { path: "/checkout", element: <CheckoutPage /> },
        { path: "/login", element: <LoginPage /> },
        {
          path: "/register",
          element: <RegisterPage />,
          action: registerAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
