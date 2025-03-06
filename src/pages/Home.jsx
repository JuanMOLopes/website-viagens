import "../App.css"

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Banner from "../../public/banner.png";
import Gfg from "../../public/gravityfalls.png";
import Cig from "../../public/cidadela.png";
import Valg from "../../public/valfenda.png";
import Ozg from "../../public/oz.png";
import Cng from "../../public/cortenoturna.png";


function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="banner">
          <img src={Banner}alt="" /></div>
      </div>
      <div id="destinos">
        <Cards imagem={Ozg} pais="Pacotes para OZ" descricao="teste teste teste teste" preco="1728,99" pagina="/oz"/>
        <Cards imagem={Cig} pais="Pacotes para Cidadela dos Ricks" descricao="teste teste teste teste" preco="12000,50" pagina="/cidadela"/>
        <Cards imagem={Valg} pais="Pacotes para Terra Média" descricao="teste teste teste teste" preco="3050,00" pagina="/terramedia"/>
        <Cards imagem={Gfg} pais="Pacotes para Gravity Falls" descricao="teste teste teste teste" preco="606,66" pagina="/gravityfalls"/>
        <Cards imagem={Cng} pais="Pacotes para Corte Noturna (Velaris)" descricao="teste teste teste teste" preco="5600,00" pagina="/cortenoturna"/>
      </div>
      <Footer />
    </>
  );
}
export default Home;
