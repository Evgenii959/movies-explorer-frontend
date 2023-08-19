import Promo from "./Promo/Promo.js";
import Project from "./AboutProject/AboutProject.js";
import Techs from "./Techs/Techs.js";
import AboutMe from "./AboutMe/AboutMe.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";

function Main() {
    return (
        <>
            <Header />
            <Promo />
            <Project />
            <Techs />
            <AboutMe />
            <Footer />
        </>
    );
}

export default Main;
