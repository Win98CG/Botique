import style from "./Button.module.css";
function Button({ children, className, onClick }) {
  return (
    <button className={`${style.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
