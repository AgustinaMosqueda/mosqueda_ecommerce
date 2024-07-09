import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {

  const saludo = "Turba Fert";

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a mi Ecommerce"}/>

    </div>
  );
}
export default App;
