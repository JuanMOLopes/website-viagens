import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Estrelas from "../components/Avaliação/Estrelas";
import Footer from "../components/Footer/Footer";
import Campo from "../../public/Campo.jpg";
import Reservar from "../components/Reservar/Reservar";


function Oz() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <div className="container1">

          <div className="Campo"></div>

          <h2>Terra de Oz</h2>
          <p>
            A Terra de Oz é um lugar mágico e colorido, onde a fantasia ganha
            vida! Comece sua jornada pela Cidade das Esmeraldas, com suas ruas
            brilhantes e arquitetura deslumbrante. Não deixe de visitar o
            Palácio de Oz, onde você pode conhecer o famoso Mágico de Oz. Para
            os amantes da natureza, o Campo de Papoulas é um espetáculo à parte,
            com suas flores vibrantes e cenários de tirar o fôlego. E, é claro,
            não pode faltar uma parada na Estrada dos Tijolos Amarelos, o
            caminho que leva a aventuras inesquecíveis. A Terra de Oz é o
            destino perfeito para quem busca magia, cor e uma dose de nostalgia!
          </p>
          <div className="divisao">
            <Estrelas/>
            <Reservar preco="1728,99"/>
            </div>
          </div>
        </div>

      <Footer />
    </>
  );
}
export default Oz;
