import style from "./Header.module.css";
function Header({ title }) {
  return (
    <div className={style.header_container}>
      <h2>{title}</h2>
      <p>{title}</p>
    </div>
  );
}
export default Header;
