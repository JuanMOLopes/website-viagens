import "./Footer.css";
import GitHub from "../../../public/GitHub.png";
import Logo from "../../../public/logo.png"

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
      <div className="lado-a-lado">
        <div id="sobre">
          <h3>Sobre</h3>
          <div className="links">
            <a href="">Atendimento ao Cliente;</a>
            <a href="">Blog do ViajaNet;</a>
            <a href="">Canais Oficiais;</a>
            <a href="">Políticas de Privacidade;</a>
            <a href="">Termos de Uso;</a>
            <a href="">Black Friday;</a>
            <a href="">Deletar minha conta</a>
          </div>
        </div>
        <div>
          <h3>Agências</h3>
          <div className="links">
            <a href="">Passagens aéreas noturnas;</a>
            <a href="">Passagens aéreas diurnas;</a>
            <a href="">Passagens com descontos;</a>
            <a href="">Passagens para a Cidade das Esmeraldas;</a>
            <a href="">Passagens para Hogwarts;</a>
            <a href="">Passagens para Nárnia;</a>
            <a href="">Passagens para Loguetown</a>
          </div>
        </div>
        <div>
          <h3>Companhias Internacionais</h3>
          <div className="links">
            <a href="">Hurricane;</a>
            <a href="">Elf-caravel;</a>
            <a href="">Port-gun;</a>
            <a href="">Illyrics;</a>
            <a href="">Stalin6</a>
          </div>
        </div>
        <div>
          <h3>Companhias Nacionais</h3>
          <div className="links">
            <a href="">Diário3lados;</a>
            <a href="">Alto precioso;</a>
            <a href="">Féricos N;</a>
            <a href="">Plataforma9</a>
          </div>
        </div>
      </div>
      <div className="logo">
        <img src={Logo} alt="" className="logo"/>
      </div>
      <div className="lado-a-lado">
        <div>
            <p className="copyright">© Grupo 2 - Todos os direitos reservados</p>
        </div>
        <div>
            <ul>
                <li>Agatha Aline França</li>
                <li>Ana Beatriz Farias Pereira</li>
                <li>Juan Matheus de Oliveira Lopes</li>
                <li>Lucas Aguiar Pereira Marin</li>
                <li>Zayra Alice França</li>
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
