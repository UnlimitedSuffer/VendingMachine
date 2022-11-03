import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home, {Away} from "./Home";
import Button from './components/Button';
import Nutriton from './components/Nutrition';

// console.log(window.toastr);
window.toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-left",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

function App() {
    const [inventoryList, updateInventoryList] = useState(new Map([
        ["A1",{
            name: "Coke",
            price:3.5,
            amount:6,
            nv:{
                calories:10,
                sugar:5,
                carb:2,
                sodium:13,
            }
        }],
        ["B1",{
            name: "Chip",
            price:4.5,
            amount:6,
            nv:{
                calories:7,
                sugar:4,
                carb:8,
                sodium:2,
            }
        }],
        ["C1",{
            name: "Donut",
            price:5.5,
            amount:6,
            nv:{
                calories:28,
                sugar:1,
                carb:9,
                sodium:5,
            }
        }],
        ["D1",{
            name: "Monster",
            price:6.5,
            amount:6,
            nv:{
                calories:38,
                sugar:7,
                carb:6,
                sodium:3,
            }
        }],
    
        ["A2",{
            name: "Milk",
            price:1.5,
            amount:6,
            nv:{
                calories:10,
                sugar:5,
                carb:0,
                sodium:0,
            }
        }],
        ["B2",{
            name: "Chocolate Milk",
            price:4,
            amount:6,
            nv:{
                calories:110,
                sugar:21,
                carb:62,
                sodium:11,
            }
        }],
        ["C2",{
            name: "Timibits",
            price:1,
            amount:6,
            nv:{
                calories:10,
                sugar:5,
                carb:3,
                sodium:2.5,
            }
        }],
        ["D2",{
            name: "Sprite",
            price:3,
            amount:6,
            nv:{
                calories:210,
                sugar:54,
                carb:20,
                sodium:10,
            }
        }],
    
        ["A3",{
            name: "Fanta",
            price:4,
            amount:6,
            nv:{
                calories:140,
                sugar:18,
                carb:9,
                sodium:7,
            }
        }],
        ["B3",{
            name: "Pepsi",
            price:6,
            amount:6,
            nv:{
                calories:130,
                sugar:5,
                carb:8,
                sodium:7,
            }
        }],
        ["C3",{
            name: "Skittles",
            price:3.9,
            amount:6,
            nv:{
                calories:16,
                sugar:15,
                carb:17,
                sodium:18,
            }
        }],
        ["D3",{
            name: "Candy",
            price:1.5,
            amount:6,
            nv:{
                calories:14,
                sugar:25,
                carb:20,
                sodium:20,
            }
        }],
    
        ["A4",{
            name: "Protein bar",
            price:5.5,
            amount:6,
            nv:{
                calories:290,
                sugar:13,
                carb:19,
                sodium:20,
            }
        }],
        ["B4",{
            name: "Coffee",
            price:1,
            amount:6,
            nv:{
                calories:0,
                sugar:0,
                carb:0,
                sodium:0,
            }
        }],
        ["C4",{
            name: "Bubble Tea",
            price:3.6,
            amount:6,
            nv:{
                calories:18,
                sugar:17,
                carb:98,
                sodium:99,
            }
        }],
        ["D4",{
            name: "Apple Pie",
            price:6.7,
            amount:6,
            nv:{
                calories:37,
                sugar:45,
                carb:99,
                sodium:36,
            }
        }],
    ]));

    const [inputValue, updateInputValue] = useState();

    function checkBalance(event){
        const cash = Number(event.target.value);
        if (!cash) { return updateInputValue(''); }
        updateInputValue(event.target.value);
    }
    
    function purchaseOrShowProduct(itemPrice){
        // console.log(`Clicked ${key}`)
        // check if theres any cash in it 
        // if no show product info
        // if yes make a purchase
        handle(itemPrice,inputValue)

    }

    function handle(itemPrice,inputValue){
        // console.log(itemPrice,inputValue);
        // console.log(inputValue == NaN ,itemPrice == NaN)
        
        const balance = calculate(itemPrice,inputValue);

        // >=0 bug 
        const isPostive = balance >= 0;
    
        if(!isFinite(itemPrice) || !isFinite(inputValue))
        //    return popup();    
        return popup("Please Enter a valid number!","error")
    
        if (isPostive) {
            // item quantity --;
            // inputvalue = balance 
            updateInputValue(String(balance));
            return popup(`Purchase successfull Here is your change: ${balance}`,"success");
        }else
            return popup(`Insuffcient fund!`, "warning",`Please insert enough money, this much:  ${-balance}`);
        
    }
    
  return <>
  <div className="wrapper">
        <Nutriton />
        <div className="keypad">
            <div className="info">
                Name of snack
            </div>
            <div className="slot-keys">
                {/* <Button>A1</Button> */}
                {[...inventoryList.entries()].map(function(object, index){
                   // console.log({object,index})
                   const [key,value] = object; 
                   return <Button onClick={(event) => purchaseOrShowProduct(value.price)} key={key}>{key}</Button>
                })}
            </div>
            <div className="input">
                <span> Insert Cash</span>
                <input placeholder="$ 10.95" type="text" value={inputValue} onChange={checkBalance}/>
            </div>
        </div>
    </div>
  </>;
}


export default App;

function calculate(itemPrice,billInsert){
    return billInsert-itemPrice;
}


function isFinite(num) { // NaN
    // number is both less than 
    return !(num > 0 == false && num < 0 == false)
}

function popup(title,status, message){
    window.toastr[status](message, title)

}
