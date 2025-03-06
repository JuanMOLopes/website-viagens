import "./Curtir.css"
import { useState } from "react";

function Curtir() {
  const [Curtir, setCurtir] = useState(true);
  return (
    <>
      <p
        onClick={() => setCurtir(!Curtir)}
        className={Curtir ? "curtir-clicado" : "curtir-normal"}
      >
        {}
      </p>
    </>
  );
}
export default Curtir;
