import React from "react";
// import Header from "./components/header";
import Hero from "./components/hero";
import Dashboard from "./components/dashboard";

function App() {

  return (
     <main className = "max-w-[1000px] mx-auto p-8 font-sans bg-zinc-100 min-h-screen">

      {/* <Header /> */}
      <Hero />
      <Dashboard />
    </main> 
    
  );
}

export default App;



//useState
// function counter(){
//   const [count, setCount] = useState(0);
// }
//   return(
//     <div>
//       <p>count = {count};</p>
//       <button onclick = {() => setCount(count + 1)}> +1 </button>
//     </div>
//   );



// function ListItem({ animal }) {
//   return(
//     <li>animal: {animal}</li>
//   );
// }
// function List({ animals }) {
//   return(
//     <ul>
//       {animals.map((animal) => (<ListItem key ={animal} animal = {animal}/>))}
//     </ul>
//   );
// }
// function App() {
//   const animals = ["L", "T", "M", "C"];

// return(
//   <div>
//     <p>Animals:</p>
//     <List animals = {animals}/>
//   </div>
// );
// }

// export default function App() {
//   const animals = ["L", "T", "M", "C"];

//   return (
//     <div>
//       <p>Animals:</p>
//       {animals.map((animal) => (
//         <li key = {animal}>animal = {animal}</li>))}
//     </div>
//   );
// }


// function ProductCard({ id, title, price, onAdd }){
//   return(
//     <div className="card">
//       <p>Products:</p>
//       <h3>{title}</h3>
//       <p>${price}</p>
//       <button onClick={() => onAdd(id)}>Add to Cart</button>
//     </div>
//   );
// }


// function ProductGrid({ products, onAdd}) {
//   return(
//     <div style={{ display:"flex", flexWrap: "wrap"}}>
//       {products.map(p => (
//     <ProductCard key={p.id} id={p.id} 
//     title={p.title} price={p.price} onAdd={onAdd}/>))}
//     </div>
//   );

// }

// function App() {
//   const products = [{id:1, title:"Laptop", price:50000},
//                     {id:2, title:"Console", price:40000}];
                    
// function handleAddToCart(productId) {
//   console.log("Added to Cart", productId);
// }
//     return (
//       <div>
//         <h1>Products</h1>
//         <ProductGrid products={products} onAdd={handleAddToCart} />  
//       </div>

//     );

// }