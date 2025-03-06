import Header from "../components/Header/Header"
import Estrelas from "../components/Avaliação/Estrelas"
import Navbar from "../components/Navbar/Navbar"
import "../App.css";

function CorteNoturna() {
    return (
        <>
            <div>
                <Header />

                <img src="" alt="" />

                <p>Bem-vindos ao Reino de Corte Noturna, um lugar onde a magia da noite reina. Exploraremos florestas sombrias, castelos imponentes e campos iluminados pela lua, habitados por criaturas misteriosas e seres mágicos. Cada canto do reino esconde segredos, e sob o brilho das estrelas, a escuridão se torna um espetáculo encantado. Prepare-se para viver uma experiência única, onde o mistério e a beleza se encontram a cada passo.</p>

                <p>valor</p>

                <Estrelas />

                <Navbar />
            </div>
        </>
    )
}
export default CorteNoturna;