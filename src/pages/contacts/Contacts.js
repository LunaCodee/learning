import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./Contacts.module.css";

const ContactsPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.contentWrapper}>
          <h2>Mūsų kontaktai:</h2>
          <p>Norite bendradarbiauti, naudotis mūsų paslaugomis ar sužinoti daugiau?</p>
          <p>Kviečiame užsukti į infocentrą: </p>
          <p>Darbo laikas I-V 10-19 val. V. Putvinskio g. 30, Kaunas.</p>
          <p>Arba susisiekti:</p>
          <p>pagalba@pagalba.lt / +370 679 44444</p>
          <p>kulturcentras@kn.lt / +370 664 22222</p>
          <p>jonas@kn.lt / +370 615 33333</p>
      </div>
      <Footer />
    </>
  );
};

export default ContactsPage;


