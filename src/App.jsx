import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {

  const saludo = "Turba Fert";

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"!!"}/>

    </div>
  );
}
export default App;
