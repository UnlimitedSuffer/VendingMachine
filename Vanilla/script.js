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
    ["B1","Coke"],
    ["C1","Coke"],
    ["D1","Coke"],

    ["A2","Milk"],
    ["B2","Milk"],
    ["C2","Milk"],
    ["D2","Milk"],

    ["A3","Candy"],
    ["B3","Candy"],
    ["C3","Candy"],
    ["D3","Candy"],

    ["A4","Protein Bar"],
    ["B4","Protein Bar"],
    ["C4","Protein Bar"],
    ["D4","Protein Bar"],
]);

for (const key of slotKeys){
    const slotKey = key.textContent;
    key.addEventListener("click",function(){
        // console.log(key.textContent, inventoryList.get(slotKey));
        infoElement.textContent = inventoryList.get(slotKey).name ? inventoryList.get(slotKey).name : inventoryList.get(slotKey)
        // console.log(inventoryList.get(slotKey).name);
        
    })
}

