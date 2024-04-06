import {useNavigate} from 'react-router-dom';

export const SideBar = () => {
    const navigate = useNavigate();
    const styles = {
        sidebar: {
          width: "20%",
          height: "100vh",
            backgroundColor: "lightgray",
            position: "fixed",
            zIndex: "-1",
            top: "0",
            right: "0",
            padding: "10px",
            textAlign: "center",
            paddingTop: "90px"
        },
        button: {
            backgroundColor: "red",
            color: "white",
            padding: "10px",
            borderRadius: "10px",
            textDecoration: "none",
            border: "none",
            margin: "10px",
            display: "inline-block",
        },
    };

    // handle button
    const handleBtn = () => {
        // navigate to admission page
        navigate('/admission');
    }
  return (
      <div style={styles.sidebar}>
          <h1>This is SideBar us page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, earum! Vel similique ipsam quam facilis suscipit reiciendis voluptatem eos labore possimus molestias inventore deleniti harum doloribus omnis, dolorem laboriosam laborum!</p>

          <button onClick={handleBtn} style={styles.button}>Apply Now</button>
    </div>
  )
}
