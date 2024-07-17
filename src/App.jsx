import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Reviews from "./components/Reviews/Reviews";

function App() {
  return (
    <div>
      <Navigation>
        <Header />
      </Navigation>
      <section id="about">
        <About />
      </section>
      <section id="catalog">
        <Catalog />
      </section>
      <section id="reviews">
       <Reviews/>
      </section>
      <section id="contacts">
        
      </section>
    </div>
  );
}

export default App;
