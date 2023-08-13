function Drawer() {
  return (
    <div className="overlay">
      <div className="drawer d-flex ">
        <h2 className="d-flex justify-between mb-30 ">
          Cart
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men&apos;s shoes Nike Blazer Mid Suede</p>
              <b>129.99 USD</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men&apos;s shoes Nike Blazer Mid Suede</p>
              <b>129.99 USD</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>214.98 USD</b>
            </li>
            <li>
              <span>Taxes 5%:</span>
              <div></div>
              <b>10.74 USD</b>
            </li>
          </ul>
          <button className="greenButton">
            Place order
            <img src="/img/btn-arrow-right.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Drawer;
