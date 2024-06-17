import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata = {
  title: "AKAN | Galerie",
  description: "First Project Next",
};

export default function Home() {
  return (<>  <div className="body-inner">
    <div id="top-bar" className="top-bar" />
    {/*/ Topbar end */}
     {/* Header start */}
     <Header />
      {/*/ Header end */}
    <div
      id="banner-area"
      className="banner-area"
      style={{ backgroundImage: "url(images/banner/banner1.jpg)" }}
    >
      <div className="banner-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-heading">
                <h1 className="banner-title">Réalisations</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="#">Accueil</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Réalisations</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Toutes les réalisations
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            {/* Col end */}
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </div>
      {/* Banner text end */}
    </div>
    {/* Banner area end */}
    <section id="main-container" className="main-container pb-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="ts-service-box">
              <div className="ts-service-image-wrapper">
                <img
                  loading="lazy"
                  className="w-100"
                  src="images/services/service1.jpg"
                  alt="service-image"
                />
              </div>
              <div className="d-flex">
                {/* <div class="ts-service-box-img">
            <img loading="lazy" src="images/icon-image/service-icon1.png" alt="service-icon">
        </div> */}
                <div className="ts-service-info">
                  <h3 className="service-box-title">
                    <a href="galerie-single.html">Zero Harm Everyday</a>
                  </h3>
                  <p>
                    You have ideas, goals, and dreams. We have a culturally
                    diverse, forward thinking team looking for talent like.
                    Lorem ipsum dolor suscipit.
                  </p>
                  <a
                    className="learn-more d-inline-block btn btn-secondary"
                    href="galerie-single.html"
                    aria-label="service-details"
                  >
                    <i className="fa fa-caret-right" /> Cliquer pour voir
                  </a>
                </div>
              </div>
            </div>
            {/* Service1 end */}
          </div>
          {/* Col 1 end */}
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="ts-service-box">
              <div className="ts-service-image-wrapper">
                <img
                  loading="lazy"
                  className="w-100"
                  src="images/services/service2.jpg"
                  alt="service-image"
                />
              </div>
              <div className="d-flex">
                {/* <div class="ts-service-box-img">
            <img loading="lazy" src="images/icon-image/service-icon2.png" alt="service-icon">
        </div> */}
                <div className="ts-service-info">
                  <h3 className="service-box-title">
                    <a href="galerie-single.html">Virtual Construction</a>
                  </h3>
                  <p>
                    You have ideas, goals, and dreams. We have a culturally
                    diverse, forward thinking team looking for talent like.
                    Lorem ipsum dolor suscipit.
                  </p>
                  <a
                    className="learn-more d-inline-block btn btn-secondary"
                    href="galerie-single.html"
                    aria-label="service-details"
                  >
                    <i className="fa fa-caret-right" /> Cliquer pour voir
                  </a>
                </div>
              </div>
            </div>
            {/* Service2 end */}
          </div>
          {/* Col 2 end */}
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="ts-service-box">
              <div className="ts-service-image-wrapper">
                <img
                  loading="lazy"
                  className="w-100"
                  src="images/services/service3.jpg"
                  alt="service-image"
                />
              </div>
              <div className="d-flex">
                {/* <div class="ts-service-box-img">
            <img loading="lazy" src="images/icon-image/service-icon3.png" alt="service-icon">
        </div> */}
                <div className="ts-service-info">
                  <h3 className="service-box-title">
                    <a href="galerie-single.html">Build To Last</a>
                  </h3>
                  <p>
                    You have ideas, goals, and dreams. We have a culturally
                    diverse, forward thinking team looking for talent like.
                    Lorem ipsum dolor suscipit.
                  </p>
                  <a
                    className="learn-more d-inline-block btn btn-secondary"
                    href="galerie-single.html"
                    aria-label="service-details"
                  >
                    <i className="fa fa-caret-right" /> Cliquer pour voir
                  </a>
                  {/* <a class="btn btn-primary" href="contact.html">En savoir plus</a> */}
                </div>
              </div>
            </div>
            {/* Service3 end */}
          </div>
          {/* Col 3 end */}
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="ts-service-box">
              <div className="ts-service-image-wrapper">
                <img
                  loading="lazy"
                  className="w-100"
                  src="images/services/service4.jpg"
                  alt="service-image"
                />
              </div>
              <div className="d-flex">
                {/* <div class="ts-service-box-img">
            <img loading="lazy" src="images/icon-image/service-icon4.png" alt="service-icon">
        </div> */}
                <div className="ts-service-info">
                  <h3 className="service-box-title">
                    <a href="galerie-single.html">EXTERIOR DESIGN</a>
                  </h3>
                  <p>
                    You have ideas, goals, and dreams. We have a culturally
                    diverse, forward thinking team looking for talent like.
                    Lorem ipsum dolor suscipit.
                  </p>
                  <a
                    className="learn-more d-inline-block btn btn-secondary"
                    href="galerie-single.html"
                    aria-label="service-details"
                  >
                    <i className="fa fa-caret-right" /> Cliquer pour voir
                  </a>
                </div>
              </div>
            </div>
            {/* Service1 end */}
          </div>
          {/* Col 4 end */}
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="ts-service-box">
              <div className="ts-service-image-wrapper">
                <img
                  loading="lazy"
                  className="w-100"
                  src="images/services/service5.jpg"
                  alt="service-image"
                />
              </div>
              <div className="d-flex">
                {/* <div class="ts-service-box-img">
            <img loading="lazy" src="images/icon-image/service-icon5.png" alt="service-icon">
        </div> */}
                <div className="ts-service-info">
                  <h3 className="service-box-title">
                    <a href="galerie-single.html">RENOVATION</a>
                  </h3>
                  <p>
                    You have ideas, goals, and dreams. We have a culturally
                    diverse, forward thinking team looking for talent like.
                    Lorem ipsum dolor suscipit.
                  </p>
                  <a
                    className="learn-more d-inline-block btn btn-secondary"
                    href="galerie-single.html"
                    aria-label="service-details"
                  >
                    <i className="fa fa-caret-right" /> Cliquer pour voir
                  </a>
                </div>
              </div>
            </div>
            {/* Service2 end */}
          </div>
          {/* Col 5 end */}
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="ts-service-box">
              <div className="ts-service-image-wrapper">
                <img
                  loading="lazy"
                  className="w-100"
                  src="images/services/service6.jpg"
                  alt="service-image"
                />
              </div>
              <div className="d-flex">
                {/* <div class="ts-service-box-img">
            <img loading="lazy" src="images/icon-image/service-icon6.png" alt="service-icon">
        </div> */}
                <div className="ts-service-info">
                  <h3 className="service-box-title">
                    <a href="galerie-single.html">SAFETY MANAGEMENT</a>
                  </h3>
                  <p>
                    You have ideas, goals, and dreams. We have a culturally
                    diverse, forward thinking team looking for talent like.
                    Lorem ipsum dolor suscipit.
                  </p>
                  <a
                    className="learn-more d-inline-block btn btn-secondary"
                    href="galerie-single.html"
                    aria-label="service-details"
                  >
                    <i className="fa fa-caret-right" /> Cliquer pour voir
                  </a>
                </div>
              </div>
            </div>
            {/* Service3 end */}
          </div>
          {/* Col 6 end */}
        </div>
        {/* Main row end */}
      </div>
      {/* Conatiner end */}
    </section>
    {/* Main container end */}
    <Footer />
    {/* Footer end */}
    
  </div>
  {/* Body inner end */}

  </>
  );
}
