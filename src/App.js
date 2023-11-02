import './App.css';
import { Carousel } from "./components/Carousel";
import carouselData from "./data/carouselData.json"

const slides = carouselData;

function App() {
  return (
    <>
     <h1>Jennifer's Carousel</h1>
    <div className="App">
      <Carousel data={ slides } />
    </div>
    </>
  );
}

export default App;
