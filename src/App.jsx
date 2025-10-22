import "./App.css";
import BatterieToilettes from "./components/BatterieToilettes.jsx";
import OccupationToilettes from "./components/OccupationToilettes.jsx";
import MesureTavers from "./components/MesureTavers.jsx";
import MesureChaumont from "./components/MesureChaumont.jsx";

function App() {
  return (
    <>
      <div>
        <OccupationToilettes />
        <BatterieToilettes />
        <MesureTavers />
        <MesureChaumont />
      </div>
    </>
  );
}

export default App;
