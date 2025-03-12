import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Estrelas from "../components/Avaliação/Estrelas";
import Footer from "../components/Footer/Footer";
import OOO from "../../public/ooo.jpg";

function AdventureTime() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <div className="container1">

          <div className="OOO"></div>

          <h2>CReino de OOO</h2>
          <p>
          O Reino de Ooo é um lugar mágico e excêntrico, onde a realidade se mistura com o fantástico e o impossível é uma constante. Com paisagens deslumbrantes e peculiares, o reino abriga uma variedade de personagens, criaturas e reinos, de castelos encantados a florestas misteriosas, passando por desertos onde o sol nunca parece se pôr. Cada canto de Ooo tem uma história para contar, e a aventura está sempre ao virar da esquina. Entre batalhas épicas e momentos de pura diversão, os heróis Finn e Jake vivem suas jornadas cheias de coragem, amizade e muita diversão. Em Ooo, onde a magia nunca termina, Finn, Jake e você são os heróis prontos para transformar qualquer dia comum em uma nova e épica aventura!
          </p>
          <div className="divisao">
              <Estrelas />
              <p>Avalie sua experiência!</p>
            </div>
          </div>
        </div>

      <Footer />
    </>
  );
}
export default AdventureTime;
