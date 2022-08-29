const slotKeys = document.querySelectorAll(".slot-keys span");
const infoElement = document.querySelector(".info");

console.log(slotKeys);

const inventoryList = new Map([
    ["A1",{
        name: "Coke",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["B1",{
        name: "Chip",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["C1",{
        name: "Donut",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["D1",{
        name: "Monster",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],

    ["A2",{
        name: "Milk",
        price:3.5,
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
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["C2",{
        name: "Timibits",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["D2",{
        name: "Coke",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],

    ["A3",{
        name: "Coke",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["B3",{
        name: "Coke",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["C3",{
        name: "Coke",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["D3",{
        name: "Candy",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],

    ["A4",{
        name: "Protein bar",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["B4",{
        name: "Coke",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["C4",{
        name: "Coke",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
    ["D4",{
        name: "Coke",
        price:3.5,
        amount:6,
        nv:{
            calories:10,
            sugar:5,
            carb:0,
            sodium:0,
        }
    }],
]);

for (const key of slotKeys){
    const slotKey = key.textContent;
    key.addEventListener("click",function(){
        infoElement.textContent = inventoryList.get(slotKey)?.name
    })
}

