import Footer from "../components/Footer";
import Header from "../components/Header";
import MainErrorPage from "../components/MainError";
import "../Sass/Pages/ErrorPage.scss";

export default function ErrorPage() {
  return (
    <div className="ErrorPage">
      <Header />
      <MainErrorPage />
      <Footer />
    </div>
  );
}
