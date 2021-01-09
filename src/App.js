import "./App.css";
import Home from "./pages/home/Home.page";

function App() {
  console.log(process.env);
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
