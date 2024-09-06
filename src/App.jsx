import "./App.css";
import bgImage from "./assets/images/bg.jpg";
import { Card } from "./components/Card/Card";
function App() {
  return (
    <div
      className="app h-screen w-screen m-0 p-0 relative bg-cover bg-center "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Card />
    </div>
  );
}

export default App;
