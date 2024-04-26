import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className={style.nav}>
      <h3>CATEGORIES</h3>
      <ul className={style.navigation}>
        <li className={style.title}>
          <h4>APPLE</h4>
        </li>
        <li>
          <Link to="?mode=all">All</Link>
        </li>
        <li className={style.titlebg}>
          <h4>IPHONE & MAC</h4>
        </li>
        <li>
          <Link to="?mode=iphone">Iphone</Link>
        </li>
        <li>
          <Link to="?mode=ipad">Ipad</Link>
        </li>
        <li>
          <Link to="?mode=macbook">Macbook</Link>
        </li>
        <li className={style.titlebg}>
          <h4>WIRELESS</h4>
        </li>
        <li>
          <Link to="?mode=airpod">Airpod</Link>
        </li>
        <li>
          <Link to="?mode=watch">Watch</Link>
        </li>
        <li className={style.titlebg}>
          <h4>OTHER</h4>
        </li>
        <li>
          <Link to="?mode=mouse">Mouse</Link>
        </li>
        <li>
          <Link to="?mode=keyboard">Keyboard</Link>
        </li>
        <li>
          <Link to="?mode=other">Other</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
