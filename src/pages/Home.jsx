import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import Banner1 from "../../public/banner1.jpg";
import Banner2 from "../../public/banner2.jpg";
import Gfg from "../../public/gravityfalls.png";
import Cig from "../../public/cidadela.jpg";
import Valg from "../../public/valfenda.png";
import Ozg from "../../public/oz.png";
import Cng from "../../public/cortenoturna.png";

function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="banner">
        <img src={Banner1} alt="" />
      </div>

      <div id="destinos">
        <Cards
          imagem={Ozg}
          pais="Pacotes para OZ"
          descricao="Viajando por furacões"
          preco="1728,99"
          pagina="/oz"
        />
        <Cards
          imagem={Cig}
          pais="Pacotes para Cidadela dos Ricks"
          descricao="Viajando por portais"
          preco="12000,50"
          pagina="/cidadela"
        />
        <Cards
          imagem={Valg}
          pais="Pacotes para Terra Média"
          descricao="-"
          preco="3050,00"
          pagina="/terramedia"
        />
        <Cards
          imagem={Gfg}
          pais="Pacotes para Gravity Falls"
          descricao="Saindo de Vinhedo"
          preco="606,66"
          pagina="/gravityfalls"
        />
        <Cards
          imagem={Cng}
          pais="Pacotes para Corte Noturna (Velaris)"
          descricao="-"
          preco="5600,00"
          pagina="/cortenoturna"
        />
      </div>

      <div className="banner">
        <img src={Banner2} alt="" />
      </div>

      <Footer />
    </>
  );
}
export default Home;
