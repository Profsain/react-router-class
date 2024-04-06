import {Routes, Route} from "react-router-dom";
import "./App.css";
import Footer from "./component/footer/Footer";
import NavigationCom from "./component/navigation/NavigationCom";
import Home from "./component/home/Home";
import AboutUs from "./component/about/AboutUs";
import Admission from "./component/admission/Admission";
import Application from "./component/application/Application";
import Gallery from "./component/gallery/Gallery";
import Blogs from "./component/blog/Blogs";
import Contact from "./component/contact/Contact";
import Science from "./component/Training/Science";
import Art from "./component/Training/Art";
import Commerce from "./component/Training/Commerce";
import NotFoundPage from "./component/NotFound/NotFoundPage";

function App() {
  return (
    <>
      {/* navigation bar */}
      <NavigationCom />

      {/* routes system*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/application" element={<Application />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/training/science" element={<Science />} />
        <Route path="/training/art" element={<Art />} />
        <Route path="/training/commerce" element={<Commerce />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* footer section */}
      <Footer />
    </>
  );
}

export default App;
