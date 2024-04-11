import Header from "../../components/Header/Header";
import MainErrorPage from "./MainErrorPage";
import "../../sass/Pages/ErrorPage.scss";

export default function ErrorPage() {
  return (
    <div className="ErrorPage">
      <Header />
      <MainErrorPage />
    </div>
  );
}