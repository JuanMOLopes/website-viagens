import Header from "../components/Header/Header"
import Estrelas from "../components/Avaliação/Estrelas"
import Navbar from "../components/Navbar/Navbar"
import "../App.css";
import Ozz from "../../public/ozzzzz.png"


function Oz() {
    return (
        <>
            <div>
                <Header />

                <img src={Ozz} alt="" />

                <p>Bem-vindo a Oz, um destino mágico onde a aventura e a fantasia ganham vida! Explore a vibrante Cidade das Esmeraldas, com sua arquitetura brilhante e o imponente castelo do Mágico, ou siga a icônica Estrada de Tijolos Amarelos até vilarejos encantadores como Munchkinlândia. Descubra as paisagens exuberantes da Terra dos Bons e os mistérios sombrios do Oeste, onde bruxas poderosas habitam. Com habitantes peculiares, criaturas fantásticas e surpresas a cada curva, Oz é o lugar perfeito para quem busca magia, emoção e um toque de sonho em sua jornada!</p>

                <p>valor</p>

                <Estrelas />

                <Navbar />
            </div>
        </>
    )
}
export default Oz;