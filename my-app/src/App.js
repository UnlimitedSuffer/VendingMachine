import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home, { Away } from "./Home";
import Button from './components/Button';
import Nutriton from './components/Nutrition';
// import fetch from 'node-fetch';

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


    const [inventoryList, updateInventoryList] = useState(new Map([]));

    useEffect(
        () => {
            fetch('http://localhost:3000/inventoryList').then((response) => {
                const jsonData = response.json();
                jsonData.then(inventoryList => {
                    // console.log(inventoryList)
                    const theMap = Object.keys(inventoryList).map(key => {
                        return [inventoryList[key].id, inventoryList[key][inventoryList[key].id]]
                    })
                    console.log(theMap);
                    updateInventoryList(new Map(theMap))
                });
            })
        }, []
    )


    const [inputValue, updateInputValue] = useState("");

    const [nvShowing, updateNvShowing] = useState({});

    const [nameShowing, updateNameShowing] = useState("");

    const [] = useState();

    function checkBalance(event) {
        const cash = Number(event.target.value);
        if (!cash) { return updateInputValue(''); }
        updateInputValue(event.target.value);
    }

    function purchaseOrShowProduct(value, key) {
        // console.log(`Clicked ${key}`)
        // check if theres any cash in it 
        // if no show product info
        // if yes make a purchase
        updateNvShowing(value.nv);
        updateNameShowing(value.name);
        handle(value, inputValue, key)
    }

    function handle(value, inputValue, key) {
        const itemPrice = value.price;
        // console.log(itemPrice,inputValue);
        // console.log(inputValue == NaN ,itemPrice == NaN)

        const balance = calculate(itemPrice, inputValue);

        // >=0 bug 
        const isPostive = balance >= 0;

        if (!isFinite(itemPrice) || !isFinite(inputValue)) {
            //    return popup();    
            return popup("Please Enter a valid number!", "error")
        }
        if (isPostive) {
            // item quantity --;
            // inputvalue = balance 
            updateInputValue(String(balance));
            updateNvShowing({});
            // 
            if (value.amount > 0) {
                value.amount--;
            } else if (value.amount == 0) {
                return popup(`Sorry!`, "warning", `We are out of stock for selected item!`)
            }

            const newMap = inventoryList.set(key, value)
            updateInventoryList(newMap)
            console.log(inventoryList);
            // Here is where we update the server
            return popup(`Purchase successfull Here is your change: ${balance}`, "success");
        } else
            updateNvShowing({});
        return popup(`Insuffcient fund!`, "warning", `Please insert enough money, this much:  ${-balance}`);

    }

    return <>
        <div className="wrapper">
            <Nutriton
                calories={nvShowing.calories}
                sugar={nvShowing.sugar}
                sodium={nvShowing.sodium}
                carbs={nvShowing.carb} />
            <div className="keypad">
                <div className="info">
                    {
                        nameShowing || "Name of snack"
                    }
                </div>
                <div className="slot-keys">
                    {/* <Button>A1</Button> */}
                    {[...inventoryList.entries()].map(function (object, index) {
                        // console.log({object,index})
                        const [key, value] = object;

                        return <Button onClick={(event) => purchaseOrShowProduct(value, key)} key={key}>{key}</Button>
                    })}
                </div>
                <div className="input">
                    <span> Insert Cash</span>
                    <input placeholder="$ 10.95" type="text" value={inputValue} onChange={checkBalance} />
                </div>
            </div>
        </div>
    </>;
}


export default App;

function calculate(itemPrice, billInsert) {
    return billInsert - itemPrice;
}


function isFinite(num) { // NaN
    // number is both less than 
    return !(num > 0 == false && num < 0 == false)
}

function popup(title, status, message) {
    window.toastr[status](message, title)

}

// property and actions

// get nutrition value

// display nutrition value 
