import Footer from "../components/Footer";
import Header from "../components/Header";
import { Navigate, useParams } from "react-router-dom";
import MainDetailsPage from "../components/MainDetailsPage";
import "../Sass/Pages/DetailPage.scss";
import Datas from "../datas/DatasControlers.js";

// Afficher une page en fonction de son ID
export default function DetailsPage() {
  const urlIdObject = useParams("id");
  const { id } = urlIdObject;

  // Vérifier existance de ID dans les datas
  const isExist = Datas.map((data) => data.id).includes(id);

  if (isExist) {
    return (
      <div className="DetailsPage">
        <Header />
        {/* Afficher page en fonction de l'ID */}
        <MainDetailsPage pageId={id} />
        <Footer />
      </div>
    );
  } else {
    // Redirection vers page erreur 404 si ID inconnu
    return <Navigate to="/404" />;
  }
}
