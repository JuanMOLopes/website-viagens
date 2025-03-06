import "../App.css"

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="banner">
        <img src="" alt="" />
      </div>
      <div id="destinos">
        <Cards pais="Pacotes para OZ" descricao="teste teste teste teste" preco="10,00" pagina="/oz"/>
        <Cards pais="Pacotes para Cidadela dos Ricks" descricao="teste teste teste teste" preco="10,00" pagina="/cidadela"/>
        <Cards pais="Pacotes para Terra Média" descricao="teste teste teste teste" preco="10,00" pagina="/terramedia"/>
        <Cards pais="Pacotes para Gravity Falls" descricao="teste teste teste teste" preco="10,00" pagina="/gravityfalls"/>
        <Cards pais="Pacotes para Corte Noturna (Velaris)" descricao="teste teste teste teste" preco="10,00" pagina="/cortenoturna"/>
      </div>
      <Footer />
    </>
  );
}
export default Home;
