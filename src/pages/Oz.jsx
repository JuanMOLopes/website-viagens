import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Estrelas from "../components/Avaliação/Estrelas";
import Footer from "../components/Footer/Footer";
import Campo from "../../public/Campo.jpg";

function Oz() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <img src={Campo} alt="" />
        <h2></h2>
        <p></p>
        <div className="divisao">
          <div className="estrelas">
            <p></p>
            <Estrelas />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Oz;
