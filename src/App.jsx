function App() {
  return (
    <div className="wrapper clear">
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
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
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
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
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
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          {" "}
          <img width={40} height={40} src="/img/header_logo.png" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">Best sport shoes store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" />
            <span> 120 USD</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All shoes</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        .....
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-neutral.svg" alt="Neutral" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Men&apos;s shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>129.99 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Men&apos;s shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>129.99 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Men&apos;s shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>129.99 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Add" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Men&apos;s shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Price:</span>
                <b>129.99 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="Add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
