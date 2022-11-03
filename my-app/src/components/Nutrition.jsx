function Nutriton(props) {
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
                    <span> %</span>
                </div>
                <div className="row sugar">
                    <span>Sugar</span>
                    <span>%</span>
                </div>
                <div className="row sodium">
                    <span>Sodium</span>
                    <span>%</span>
                </div>
                <div className="row carbs">
                    <span>Carbohydrates</span>
                    <span>%</span>
                </div>

            </div>
        </div>
    )
}

export default Nutriton;