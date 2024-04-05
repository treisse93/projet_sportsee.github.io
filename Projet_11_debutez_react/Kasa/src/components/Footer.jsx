import "../Sass/Components/Footer.scss";
import img from "../assets/Logos/FooterLogo.png";

/**
 * Afficher le pied de page.
 * @returns {JSX.Element} Le composant Footer.
 */
export default function Footer() {
  return (
    <footer className="container__footer">
      <img
        className="container__footer__logo"
        src={img}
        alt="Logo de Kaza en blanc sur fond noir"
      />
      <p className="copyrights">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
