import { useContext } from "react";
import ThemeContext from "../../store/ThemeContext";

const Footer = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const styles = {
    footer: {
      backgroundColor: isDarkTheme ? "#333" : "lightgray",
      color: "white",
      textAlign: "center",
      padding: "10px",
      position: "fixed",
      bottom: "0",
      width: "100%",
    },
  };

  return (
    <footer className="container-fluid" style={styles.footer}>
        <p>Copyright @ GMC Academy.com</p>
    </footer>
  );
};

export default Footer;
