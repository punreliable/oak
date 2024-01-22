import { Outlet } from "react-router-dom";
// import styles from "./Root.module.scss";
// import Navbar from "../components/UI/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
