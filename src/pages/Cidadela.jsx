import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Estrelas from "../components/Avaliação/Estrelas";
import Footer from "../components/Footer/Footer";
import Ricks from "../../public/cidadela.jpg";

function Cidadela() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <img src={Ricks} alt="" />
        <h2>Cidadela</h2>
        <p>
          A Cidadela dos Ricks é uma sociedade secreta onde Rick e Morty formam
          uma sociedade controlada pelo Rick Council. Ela serve como um lugar de
          lazer e encontro para um número incalculável de Rick e Morty que
          decidem residir permanentemente na Citadela. Rick avisa que qualquer
          um que explore a cidade é estúpido ou um dos milhões de infelizes
          recitados por Rick, que está sob o governo do Evil Morty.
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
export default Cidadela;
