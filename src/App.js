import "./App.css";
import Content from "./UI/Components/Content/Content";
import Crystal from "./UI/Components/Crystal/Crystal";
import Footer from "./UI/Components/Footer/Footer";
import Header from "./UI/Components/Header/Header";
import Shop from "./UI/Components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Crystal crystalClass={"lapis"} coinsPerSec={0.1} />
      </Content>
      <Shop/>
      <Footer />
    </div>
  );
}

export default App;
