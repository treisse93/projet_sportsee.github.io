import { Link } from "react-router-dom";
import "../Sass/Layout/MainError.scss";
import { useEffect } from "react";

/**
 * Afficher une page d'erreur 404
 * @returns {JSX.Element} Le composant MainErrorPage.
 */
export default function MainErrorPage() {
  useEffect(() => {
    document.title = `Kasa - Erreur`;
  });
  return (
    <main className="main__Component">
      <div className="main__component__msg">
        <h1 className="main__component__msg__error__text">404</h1>
        <p className="main__component__msg__oups">
          Oups! La page que vous demandez n&apos;existe pas.
        </p>
      </div>
      {/* Lien de retour vers la page d'accueil */}
      <Link className="main__component__msg__backlink" to="/">
        Retourner à la page d&apos;accueil
      </Link>
    </main>
  );
}
