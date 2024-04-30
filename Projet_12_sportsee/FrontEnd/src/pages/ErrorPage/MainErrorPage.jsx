import { Link } from "react-router-dom";
import "../../sass/Layout/MainErrorPage.scss";

/**
 * Composant représentant la page d'erreur principale
 * @returns {JSX.Element} Composant de la page MainErrorPage
 */
export default function MainErrorPage() {
  return (
    <div className="errorPage">
      <h1 className="errorPage__Title">
        Erreur <span className="errorPage__Type"> 404</span>
      </h1>
      <p className="errorPage__Text">
        Oups! Cette page n&apos;est pas disponible actuellement!
      </p>

      <Link className="errorPage--Link" to="/">
        Naviguer vers l&apos;accueil
      </Link>
    </div>
  );
}

MainErrorPage.propTypes = {};
