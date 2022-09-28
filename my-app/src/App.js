import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Home, {Away} from "./Home";

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
    console.log({inventoryList,updateInventoryList, amount: inventoryList.get('A1')});
    let myOtherNumber = 0;
    setTimeout(function(){
        inventoryList.set('A1', {
            name: "Coke",
            price:4.5,
            amount:3,
            nv:{
                calories:10,
                sugar:5,
                carb:2,
                sodium:13,
            }
        })
        updateInventoryList(inventoryList);
        console.log({inventoryList,updateInventoryList, amount: inventoryList.get('A1')});
    }, 3000)
  return <>
  {JSON.stringify(inventoryList.get('A1'))}
  <div class="wrapper">
        <div class="nutrition-values">
            <div class="title"> Nutrition Values</div>
            <div class="facts">
                <div class="row">
                     <span>Amt/Serving</span>
                     <span>% of daily</span>
                </div>
                <div class="row calories">
                    <span>Calories</span>
                    <span> %</span>
               </div>
               <div class="row sugar">
                <span>Sugar</span>
                <span>%</span>
               </div>
               <div class="row sodium">
                <span>Sodium</span>
                <span>%</span>
               </div>
               <div class="row carbs">
                <span>Carbohydrates</span>
                <span>%</span>
               </div>
                
            </div>
        </div>
        <div class="keypad">
            <div class="info">
                Name of snack
            </div>
            <div class="slot-keys">
                <span>A1</span>
                <span>B1</span>
                <span>C1</span>
                <span>D1</span>
                <span>A2</span>
                <span>B2</span>
                <span>C2</span>
                <span>D2</span>
                <span>A3</span>
                <span>B3</span>
                <span>C3</span>
                <span>D3</span>
                <span>A4</span>
                <span>B4</span>
                <span>C4</span>
                <span>D4</span>
            </div>
            <div class="input">
                <span> Insert Cash</span>
                <input placeholder="$ 10.95" type="number"/>
            </div>
        </div>
    </div>
  </>;
}


export default App;
