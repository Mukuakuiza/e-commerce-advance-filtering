import "./Price.css";

const Price = () => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>

      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>All
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>R0 - R50
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>R50 - R100
      </label>
      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>R100 - R150
      </label>

      <label className="sidebar-label-container">
        <input type="radio" value="" name="test2" />
        <span className="checkmark"></span>Over R150
      </label>
    </div>
  );
};

export default Price;
