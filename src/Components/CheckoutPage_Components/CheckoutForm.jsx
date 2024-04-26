import Button from "../../UI/Button";
import style from "./CheckoutForm.module.css";
function CheckoutForm() {
  return (
    <form className={style.form}>
      <div className={style.from_control}>
        <label htmlFor="fullName">FULL NAME:</label>
        <input type="text" placeholder="Enter Your Full Name Here!" />
      </div>
      <div className={style.from_control}>
        <label htmlFor="fullName">EMAIL:</label>
        <input type="text" placeholder="Enter Your Email Here!" />
      </div>
      <div className={style.from_control}>
        <label htmlFor="fullName">PHONE NUMBER:</label>
        <input type="text" placeholder="Enter Your Phone Number Here!" />
      </div>
      <div className={style.from_control}>
        <label htmlFor="fullName">ADDRESS:</label>
        <input type="text" placeholder="Enter Your Address Here!" />
      </div>
      <Button>Place Order</Button>
    </form>
  );
}
export default CheckoutForm;
