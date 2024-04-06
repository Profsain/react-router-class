const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: "lightblue",
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
