import "./Cards.css";
import { Link } from "react-router-dom";

import Curtir from "../Curtir/Curtir";

function Cards({ pais, imagem, descricao, preco, pagina }) {
  return (
    <div className="card">
      <div className="card-imagem">
        <img src={imagem} alt={pais} />
      </div>
      <div className="card-conteudo">
        <h2>{pais}</h2>
        <p className="card-descricao">{descricao}</p>
        <p className="card-preco">R${preco}</p>
        <Curtir />
        <Link to={pagina} className="card-botao">
          Reservar
        </Link>
      </div>
    </div>
  );
}

export default Cards;
