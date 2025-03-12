import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Estrelas from "../components/Avaliação/Estrelas";
import Footer from "../components/Footer/Footer";
import Corte from "../../public/noturnacorte.png";

function CorteNoturna() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <div className="container1">

          <div className="Corte"></div>

          <h2>Corte Noturna</h2>
          <p>
            A Corte Noturna é um reino de mistério e intriga, perfeito para quem
            ama histórias de fantasia sombria. Conheça o Palácio da Rainha da
            Noite, um lugar majestoso e cheio de segredos, onde a lua brilha
            mais forte do que em qualquer outro lugar. Passeie pelos Jardins
            Lunares, com suas flores que só desabrocham sob a luz da lua. Para
            os aventureiros, a Floresta dos Sussurros oferece uma experiência
            única, com árvores antigas e criaturas místicas. A Corte Noturna é o
            destino certo para quem busca um clima envolvente, cheio de magia e
            mistério.
          </p>
          <div className="divisao">
            <div className="estrelas">
              <p></p>
              <Estrelas />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default CorteNoturna;
