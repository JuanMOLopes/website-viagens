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
        <div className="container1">
        <div className="Cabana"></div>
          <h2>Gravity Falls</h2>
          <p>
            Se você é fã de mistérios e aventuras sobrenaturais, Gravity Falls é
            o lugar certo para você! Essa pequena cidade no Oregon esconde
            segredos incríveis. Visite o Mistério da Cabana, onde Dipper e Mabel
            viveram suas incríveis aventuras, e explore as exposições bizaras do
            museu. Não deixe de conhecer a Floresta dos Mistérios, onde
            criaturas estranhas e fenômenos inexplicáveis acontecem. E, claro,
            pare para tomar um "Shack Attack" no Mistério da Cabana Lanchonete.
            Gravity Falls é o destino perfeito para quem ama mistério, humor e
            uma boa dose de estranheza!
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
export default GravityFalls;
