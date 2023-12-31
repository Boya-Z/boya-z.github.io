import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoadingGif from '../../assets/img/loading.gif';
import { Helmet, HelmetProvider } from "react-helmet-async";
import '../../style.css';

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Maya - Portfolio</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="home-wrapper">
        <div className="home-left animate__animated animate__fadeInLeft">
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hello{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h2>
            I'm <span className="name-hover">Boya</span>
            <br />
            <span className="name-hover">Zeng</span>
          </h2>
          <NavLink to="/contact" className="btn-download text-center">
            Let's Connect
          </NavLink>
          {/* <AiFillFileText /> */}
          {/* &nbsp;&nbsp;Hire Me */}
        </div>
        <div className="home-right animate__animated animate__fadeIn animate__slower">
          <img
            className="home-image"
            style={{ position: 'absolute', left: '1300px', top: '200px' }}
            src={LoadingGif}
            alt="Avatar"
          />
        </div>

      </Container>
    </>
  );
}

export default Home;
