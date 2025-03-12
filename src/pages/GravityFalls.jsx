import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Estrelas from "../components/Avaliação/Estrelas";
import Footer from "../components/Footer/Footer";
import Cabana from "../../public/Cabana.jpg";

function GravityFalls() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <img src={Cabana} alt="" />
        <h2>Gravity Falls</h2>
        <p>
          Gravity Falls é uma cidade pequena e misteriosa localizada no Oregon.
          Apesar de parecer tranquila, é repleta de fenômenos sobrenaturais e
          estranhos, como criaturas e eventos inexplicáveis. O local é conhecido
          por atrações turísticas peculiares, como a Mystery Shack, uma loja de
          curiosidades que esconde segredos ainda maiores. É uma cidade onde o
          comum e o extraordinário se misturam o tempo todo.
        </p>
        <div className="divisao">
          <div className="estrelas">
            <p></p>
            <Estrelas />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default GravityFalls;
