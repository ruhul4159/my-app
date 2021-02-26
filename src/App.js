import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Adobe PS', price: '$ 90.99'},
    {name: 'Adoby IS', price: '$ 60.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
       <h3>I am a React person!</h3>
       <Product products={products[0]}></Product>  
       <Product products={products[1]}></Product>  
   
      </header>
    </div>
  );
}
function Product(props){
  const productStyle={
    color: 'black',
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    padding: '10px',
    margin: '10px'
   
  }
  const {name, price} = props.products;
  console.log(name, price);
  return (
    <div style={productStyle}>
      <h5>{name}</h5>
      <h3> {price}</h3>
      <button>Buy Now</button>
    </div>
  )
}




export default App;
