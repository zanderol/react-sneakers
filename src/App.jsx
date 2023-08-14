import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const goods = [
  {
    title: "Men's shoes Nike Blazer Mid Suede",
    price: 129.99,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 129.99,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 84.99,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 89.99,
    imageUrl: "/img/sneakers/4.jpg",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 151.99,
    imageUrl: "/img/sneakers/5.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 112.99,
    imageUrl: "/img/sneakers/6.jpg",
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 107.99,
    imageUrl: "/img/sneakers/7.jpg",
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 164.99,
    imageUrl: "/img/sneakers/8.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 139.99,
    imageUrl: "/img/sneakers/9.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 84.99,
    imageUrl: "/img/sneakers/10.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 89.99,
    imageUrl: "/img/sneakers/11.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 112.99,
    imageUrl: "/img/sneakers/12.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />
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
          {goods.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickFavorite={() => console.log("Added to favorite")}
              onClickPlus={() => console.log("Clicked on Plus")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
