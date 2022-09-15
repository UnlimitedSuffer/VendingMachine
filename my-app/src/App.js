import logo from './logo.svg';
import './App.css';
import Home, {Away} from "./Home";

function App() {
  return <>
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
