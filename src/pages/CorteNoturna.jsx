import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Estrelas from "../components/Avaliação/Estrelas";
import Footer from "../components/Footer/Footer";

function CorteNoturna() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <img src="" alt="" />
        <h2>Corte Noturna</h2>
        <p>
          Bem-vindos ao Reino de Corte Noturna, um lugar onde a magia da noite
          reina. Exploraremos florestas sombrias, castelos imponentes e campos
          iluminados pela lua, habitados por criaturas misteriosas e seres
          mágicos. Cada canto do reino esconde segredos, e sob o brilho das
          estrelas, a escuridão se torna um espetáculo encantado. Prepare-se
          para viver uma experiência única, onde o mistério e a beleza se
          encontram a cada passo.
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
export default CorteNoturna;
