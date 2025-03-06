import Header from "../components/Header/Header"
import Estrelas from "../components/Avaliação/Estrelas"
import Navbar from "../components/Navbar/Navbar"
import "../App.css"
import Terramedia from "../../public/terramedia"


function TerraMedia() {
    return (
        <>
            <div>
                <Header />

                <img src={Terramedia} alt="" />

                <p>Descubra a Terra Média, um destino épico onde a grandiosidade da natureza se mistura com lendas imortais! Caminhe pelas colinas verdejantes do Condado e experimente a hospitalidade dos hobbits, ou aventure-se pelas majestosas florestas élficas de Lothlórien. Para os mais destemidos, as montanhas nebulosas e as vastas planícies de Rohan oferecem paisagens de tirar o fôlego. Explore a imponência de Gondor e seus castelos ancestrais ou desafie as sombras de Mordor, se tiver coragem! Com uma rica história, povos fascinantes e cenários deslumbrantes, a Terra Média promete uma jornada inesquecível digna dos grandes heróis!</p>

                <p>valor</p>

                <Estrelas />

                <Navbar />
            </div>
        </>
    )
}
export default TerraMedia;