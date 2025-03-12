import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Estrelas from "../components/Avaliação/Estrelas";
import Footer from "../components/Footer/Footer";

function TerraMedia() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <div className="container1">

          <div className="Reino"></div>

          <h2>Terra Média</h2>
          <p>
            A Terra Média é um mundo épico, repleto de paisagens deslumbrantes e
            histórias que marcaram gerações. Comece sua viagem pelo Condado, lar
            dos adoráveis hobbits, e aproveite para provar a famosa cerveja do
            Green Dragon. Em seguida, explore as majestosas montanhas de Rohan e
            Gondor, onde você pode sentir a grandeza dos reinos humanos. Para os
            mais corajosos, uma visita a Mordor é obrigatória, mas cuidado com o
            Olho que Tudo Vê! E não se esqueça de passar por Rivendell, o
            refúgio élfico que parece saído de um sonho. A Terra Média é um
            destino que combina aventura, história e paisagens de tirar o
            fôlego.
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
export default TerraMedia;
