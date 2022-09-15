"use strict"

const slotKeys = document.querySelectorAll(".slot-keys span");
const infoElement = document.querySelector(".info");
const billInserted = document.querySelector(".input input");
console.dir(billInserted);
// console.log(slotKeys);

// create a map that contains product infomation
const inventoryList = new Map([
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
]);

// get nutrition value and show up on the left form 
function fillNv(fact){
    const facts = document.querySelector(".facts");
    const calories = facts.querySelector(".calories span:nth-child(2)");
    const sugar = facts.querySelector(".sugar span:nth-child(2)");
    const sodium = facts.querySelector(".sodium span:nth-child(2)");
    const carb = facts.querySelector(".carbs span:nth-child(2)");

    calories.textContent = `${fact?.nv?.calories} %`;
    sugar.textContent = `${fact?.nv?.sugar} %`;
    sodium.textContent = `${fact?.nv?.sodium} %`;
    carb.textContent = `${fact?.nv?.carb} %`;

    console.log({calories,sugar, sodium, carb});
}

// loop all the slot keys and get object 
for (const key of slotKeys){
    const slotKey = key.textContent;
    key.addEventListener("click",function(){
        fillNv(inventoryList.get(slotKey));
        infoElement.textContent = inventoryList.get(slotKey)?.name
        handle(inventoryList.get(slotKey)?.price,billInserted.valueAsNumber);
        console.dir(billInserted);
    })
}

function isFinite(num) { // NaN
    // number is both less than 
    return !(num > 0 == false && num < 0 == false)
}
// calculate function - needs to be improved 
function handle(itemPrice,billInsert){
    console.log(itemPrice,billInsert);
    console.log(billInsert == NaN ,itemPrice == NaN)
    
    const balance = calculate(itemPrice,billInsert);
    const isPostive = balance > 0;

    if(!isFinite(itemPrice) || !isFinite(billInsert))
    //    return alert();    
    return alert("Please Enter a valid number!","error")

    if (isPostive) 
        // item quantity --;
        return alert(`Purchase successfull Here is your change: ${balance}`,"success");
    else
        return alert(`Insuffcient fund!`, "warning",`Please insert enough money, this much:  ${-balance}`);
}

// Pure function -  no side effects 
function calculate(itemPrice,billInsert){
    return billInsert-itemPrice;
}

// test if user put money
// test if money enough
// test if give the product
// test if 

// if typeof billInsert != Number
//     then console.log(please insert a bill)

// create varible balance = calculate();
// create varible isPostive = balance >0
// if isPostive
//     alert(purchase successfull, balance)

// else
//     alert(insfuccient funds, balance)

function alert(title,status, message){
    toastr.options = {
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
        toastr[status](message, title)
}