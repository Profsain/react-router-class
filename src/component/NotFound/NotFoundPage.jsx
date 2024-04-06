import { Link } from "react-router-dom";
const NotFoundPage = () => {
    const styles = {
        button: {
            backgroundColor: "lightblue",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            textDecoration: "none",
            margin: "10px",
            display: "inline-block",
        },
        
    }
  return (
    <div className="container">
          <h1>404 Page Not Found</h1>
          
          <p>Sorry, the page you are looking for does not exist.</p>
          <a href="/" style={styles.button}> Go Back Home</a>
            <Link to="/gallery" style={styles.button}>Go to Gallery</Link>
    </div>
  );
};

export default NotFoundPage;
