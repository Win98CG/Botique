const users = JSON.parse(localStorage.getItem("userArr"))
  ? JSON.parse(localStorage.getItem("userArr"))
  : [];
export default users;
