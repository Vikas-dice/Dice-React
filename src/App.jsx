import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from "./components/foodItems";
import ErrorMsg from './components/ErrorMsg';


function App() {
  let foodItems=["milk","fruits","ghee","veg","soya","almonds"];

 
  // if(foodItems.length===0){
  //   return <h1>i am hungry !</h1>
  // }


  return <>
     <h1 className="vk-heading">Healthy Food !</h1>
     <ErrorMsg items={foodItems}></ErrorMsg> 
     <FoodItems items={foodItems}></FoodItems>
    
  
     

</>
  
  
 
}

export default App
