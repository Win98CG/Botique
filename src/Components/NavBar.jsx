import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Content from "../UI/Content";
import style from "./NavBar.module.css";
import { useSelector } from "react-redux";
import { userAction } from "../stores/userSlice";
function NavBar() {
  const { user, isLogin } = useSelector((state) => state.user);
  //logout and delete user active in local storage
  const handleLogout = function () {
    localStorage.removeItem("activeUser");
    dispatch(userAction.logout());
  };
  return (
    <nav className={style.navbar}>
      <Content className={style.container}>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? style.active : undefined)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? style.active : undefined)}
          >
            Shop
          </NavLink>
        </ul>
        <h1 className={style.title}>Boutique</h1>
        <ul>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? style.active : undefined)}
          >
            <FontAwesomeIcon icon={faCartShopping} />
            Cart
          </NavLink>
          {!isLogin && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <FontAwesomeIcon icon={faUser} />
              Login
            </NavLink>
          )}
          {user && isLogin && (
            <a style={{ color: "#551a8b" }}>
              <FontAwesomeIcon icon={faUser} />
              {user.fullName}
            </a>
          )}
          {user && isLogin && (
            <Link onClick={handleLogout} className={style.logoutbtn}>
              (Logout)
            </Link>
          )}
        </ul>
      </Content>
    </nav>
  );
}

export default NavBar;
