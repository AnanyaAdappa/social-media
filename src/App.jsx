import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Header from "./components/Header";
import Heading from "./components/Heading";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      {/* Write your code here */}
      <Header />
      <Heading />
      <Box1 />
      <Box2 />
    </div>
  );
}

export default App;
