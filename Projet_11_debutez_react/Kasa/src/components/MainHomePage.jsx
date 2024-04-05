import "../Sass/Layout/MainHomePage.scss";
import Datas from "../datas/DatasControlers.js";
import Card from "../components/Card";
import Cover from "../components/Cover";
import coverImg from "../assets/pictures/HomePageCover.png";
import { useEffect } from "react";

/**
 * Afficher la page d'accueil principale
 * @returns {JSX.Element} Le composant MainHomePage.
 */
export default function MainHomePage() {
  useEffect(() => {
    document.title = `Kasa - Page d'accueil`;
  });
  return (
    <main className="main__home__page">
      {/* Afficher la couverture principale */}
      <Cover
        type="main"
        title="Chez vous, partout et ailleurs"
        img={coverImg}
      />
      {/* Afficher des cartes à partir des données fournies */}
      <section id="cards__section">
        <div className="cards__container">
          {Datas.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              description={item.description}
              id={item.id}
              img={item.cover}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
