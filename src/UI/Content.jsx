import style from "./Content.module.css";
function Content({ children, className }) {
  return <div className={`${style.container} ${className}`}>{children}</div>;
}
export default Content;
