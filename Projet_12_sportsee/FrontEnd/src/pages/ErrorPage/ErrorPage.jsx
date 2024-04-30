import Header from "../../components/Header/Header";
import MainErrorPage from "./MainErrorPage";
import "../../sass/Pages/ErrorPage.scss";

/**
 * Composant représentant la page d'erreur principale
 * @returns {JSX.Element} Composant de la page ErrorPage
 */
export default function ErrorPage() {
  return (
    <div className="ErrorPage">
      <Header />
      <MainErrorPage />
    </div>
  );
}

ErrorPage.propTypes = {};
