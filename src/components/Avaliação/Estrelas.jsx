import { useState } from "react";
import "./Estrelas.css";

function Estrelas() {
  const [avaliado, setAvaliado] = useState(0);

  return (
    <div className="estrelas-container">
      <h2>Avalie esse destino</h2>
    
      <div className="estrelas">
      <p
          onClick={() => setAvaliado(1)}
          className={avaliado >= 1 ? "marcado" : "normal"}
        >
          ⭐
        </p>
        {/* Verifica se avaliado é maior ou igual a 1 - então por exemplo: quando eu clico na segunda estrela, avaliado passa a valer 2, portanto marca como "marcado" essa e a segunda estrela */}
        <p
          onClick={() => setAvaliado(2)}
          className={avaliado >= 2 ? "marcado" : "normal"}
        >
          ⭐
        </p>
        <p
          onClick={() => setAvaliado(3)}
          className={avaliado >= 3 ? "marcado" : "normal"}
        >
          ⭐
        </p>
        <p
          onClick={() => setAvaliado(4)}
          className={avaliado >= 4 ? "marcado" : "normal"}
        >
          ⭐
        </p>
        <p
          onClick={() => setAvaliado(5)}
          className={avaliado >= 5 ? "marcado" : "normal"}
        >
          ⭐
        </p>
      </div>

      <p className="estrelas-mensagem">Sua avaliação é muito importante para nós!</p>
    </div>
  );
}

export default Estrelas;