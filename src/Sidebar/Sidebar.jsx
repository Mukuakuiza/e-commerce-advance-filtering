import "./Sidebar.css";
import { FaCartPlus } from "react-icons/fa";
import Category from "./Category/Category.jsx";
import Price from "./Price/Price.jsx";
import Colors from "./Colors/Colors.jsx";
const Sidebar = () => {
  return (
    <>
      <>
        <section className="sidebar">
          <div className="logo-container">
            <h1>
              <FaCartPlus />
            </h1>
          </div>
          <Category />
          <Price />
          <Colors />
        </section>
      </>
    </>
  );
};

export default Sidebar;
