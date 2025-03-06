import "./Footer.css";
import GitHub from "../../../public/GitHub.png";

function Footer() {
  return (
    <footer>
      <div id="contato">
        <a href="https://github.com/JuanMOLopes/website-viagens.git">
          <img src={GitHub} alt="GitHub" />
          GitHub
        </a>
        <p>
          <strong>Contato:</strong> viajadagatha@contato.com
        </p>
      </div>
      <div>
        <div>
          <h3>Sobre</h3>
        </div>
        <div>
          <h3>Agências</h3>
        </div>
        <div>
          <h3>Companhias Internacionais</h3>
        </div>
        <div>
          <h3>Companhias Nacionais</h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
