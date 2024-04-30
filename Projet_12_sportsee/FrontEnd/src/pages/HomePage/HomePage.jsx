import Header from "../../components/Header/Header.jsx";
import MainHomePage from "./MainHomePage.jsx";
import "../../sass/Pages/HomePage.scss";

/**
 * Composant représentant la page d'accueil principale
 * @returns {JSX.Element} Composant de la page d'accueil
 */

export default function HomePage() {
  return (
    <div className="homePageContent">
      <Header />
      <MainHomePage />
    </div>
  );
}

HomePage.propTypes = {};