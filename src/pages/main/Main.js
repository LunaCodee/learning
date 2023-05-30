import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import KaunasPhoto from "../../assets/KaunasCastle.jpg";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
      <Navbar />

      <div className={styles.contentWrapper}>
        <img src={KaunasPhoto} className={styles.headingImage} />
        <div className={styles.textWrapper}>
          <h1>Visa kultūra vienoje vietoje</h1>
          <h4>Aplankyk Kauną</h4>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Main;