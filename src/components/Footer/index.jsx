import instagram from "./../../assets/paginaInicial/socialMedias/Instagram_logo.png"
import tiktok from "./../../assets/paginaInicial/socialMedias/tiktok_logo.png"
import animeProfile from "./../../assets/paginaInicial/patriocinadores/animeprofile.png";
import logoEp from "./../../assets/paginaInicial/patriocinadores/logoEP.png";
import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="redesSociais">
                <h3>DRM Connect</h3>

                <div className="social">
                    <a href="#"><img src={instagram} alt="Instagram" /></a>
                    <a href="#"><img src={tiktok} alt="TikTok" /></a>
                </div>
            </div>

            <div className="suporte">
                <h3>Suporte</h3>
                <a href="#">Política de Privacidade</a>
                <a href="#">Termos de Uso</a>
                <a href="#">Fale Conosco</a>
            </div>

            <div className="sobre-nos">
                <h3>Sobre nós</h3>
                <p>
                    Conectando aprendizado, inovação e evolução em uma única plataforma.
                </p>
            </div>
            <div className="patriocinadores">
                <h3>Patriocinadores</h3>
                <div className="patriocinadoresIcon">
                    <img src={animeProfile} alt="anime Profile" />
                    <img src={logoEp} alt="logoEp DRM" />
                </div>
            </div>
        </footer>
    )
}