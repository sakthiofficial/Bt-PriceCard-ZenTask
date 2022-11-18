import logo from './logo.svg';
import './App.css';
import{useState} from "react"

function App() {
  let [cardNum,setCard]=useState(0);
  let arr =[{proname:"Fancy Product",price:"$40.00 - $80.00"},{proname:"Special Item",price:"$20.00 $18.00"},{proname:"Sale Item",price:"$50.00 $25.00"},{proname:"Popular Item",price:"$40.00"},{proname:"Sale Item",
 price:" $50.00 $25.00"},{proname:"Fancy Product",
 price:"$120.00 - $280.00"},{proname:"Special Item",
 price:"$20.00 $18.00"},{proname:"Popular Item",
 price:"$40.00"}]

  return (
    <div className=" row App">
      <Items value={cardNum}/>
     
     { arr.map((val)=><Btcard name={val.proname} price={val.price} value={cardNum} curr={setCard}/>
      )}
    
    </div>
  );
}
function Btcard(prop){
  console.log();
  return(
    <div className=" col-sm-6 col-md-4 col-lg-4 card">
      <div className="card-title">

      </div>
      <div className="card-cont">
      <h4>{prop.name}</h4>
      <p>{prop.price}</p>
      <button className="btn1"  onClick={(() => {prop.curr(prop.value+1)})}>Add Card</button>
      <button className="btn2" onClick={(() => {prop.curr(prop.value-1)})}>Remove Card</button>
      </div>
    </div>
  )
}
function Items(prop){
  
  return(
    <div className="items">
    <button><i className="fa fa-cart-plus" aria-hidden="true"></i> Card<span className="logo">{prop.value}</span></button>
  </div>
  )
}
export default App;
