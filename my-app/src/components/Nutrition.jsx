function Nutriton({calories,sugar,sodium, carbs}) {
    return (
        <div className="nutrition-values">
            <div className="title"> Nutrition Values</div>
            <div className="facts">
                <div className="row">
                    <span>Amt/Serving</span>
                    <span>% of daily</span>
                </div>
                <div className="row calories">
                    <span>Calories</span>
                    <span>{calories} %</span>
                </div>
                <div className="row sugar">
                    <span>Sugar</span>
                    <span>{sugar} %</span>
                </div>
                <div className="row sodium">
                    <span>Sodium</span>
                    <span>{sodium} %</span>
                </div>
                <div className="row carbs">
                    <span>Carbohydrates</span>
                    <span>{carbs} %</span>
                </div>

            </div>
        </div>
    )
}

export default Nutriton;

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