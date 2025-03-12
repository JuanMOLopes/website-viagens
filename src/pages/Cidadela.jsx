import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Estrelas from "../components/Avaliação/Estrelas";
import Footer from "../components/Footer/Footer";
import AnatomyPark from "../../public/ricks.jpg";
import Reservar from "../components/Reservar/Reservar";

function Cidadela() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <div className="container1">

          <div className="AnatomyPark"></div>

          <h2>Cidadela</h2>
          <p>
            Para os fãs de ficção científica e aventuras interdimensionais, a
            Cidadela dos Ricks é um destino imperdível! Localizada em uma
            dimensão paralela, essa metrópole é habitada por diversas versões do
            cientista mais inteligente do multiverso: Rick Sanchez. Explore os
            Laboratórios de Inovação, onde invenções malucas ganham vida, e
            visite o Conselho dos Ricks, onde as decisões mais importantes do
            multiverso são tomadas. Se você gosta de adrenalina, experimente o
            Portal Interdimensional, que permite viajar para realidades
            alternativas. A Cidadela dos Ricks é o lugar ideal para quem curte
            tecnologia avançada, humor ácido e uma boa dose de caos!
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
export default Cidadela;
