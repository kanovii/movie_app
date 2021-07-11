import Potato from "./Potato";

const foodILike = [
  {
    name: 'chicken',
    price: '20000won'
  },
  {
    name: 'lamb',
    price: '20000won'

  }
]

function Food({name, price}) {
  return (
    <div>
      i like a {name} and it's {price}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      {foodILike.map(items => 
        <Food name={items.name} price={items.price} />
      )}
    </div>
  );
}

export default App;
