import "./Reservar.css";
import { useState } from "react";
import Estrelas from "../Avaliação/Estrelas";
import Curtir from "../Curtir/Curtir";

function Reservar({ preco }) {
  const [reserva, setReserva] = useState(true);

  return (
    <div className="reservar">
      <h3>Reserve sua passagem!</h3>
      <p>Por apenas: R${preco}</p>

      <div className="reservar-botoes">
        <Curtir />
        <button onClick={() => setReserva(!reserva)}>
          {reserva ? "Reservar" : "Reservado"}
        </button>
      </div>
    </div>
  );
}

export default Reservar;
