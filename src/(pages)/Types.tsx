import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

const TypePage = () => {
  return (
    <section className="nesContainer nes-container container">
      <div className="row">
        <div className="col-md-12">
          <MainNavigation />

          <h1 className="oakHello">Type List</h1>

          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default TypePage;
