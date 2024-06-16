import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
export const metadata = {
  title: "AKAN | Accueil",
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
    <footer id="footer" className="footer bg-overlay">
      <div className="footer-main">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-md-6 footer-widget footer-about">
              <h3 className="widget-title">A propos de nous</h3>
              <img
                loading="lazy"
                className="footer-logo"
                src="images/footer-logo.png"
                alt="Constra"
              />
              <p>
                Location &amp; vente de tous types de véhicules et d'engins -
                Gestion locative - Plan - Suivi de chantier - Gros &amp; seconde
                oeuvre - Expertise de travaux - Décapage - Gestion de biens -
                Permis de construire - Devis quantitatif &amp; estimatif -
                Événementiel - Soutien scolaire
              </p>
              <div className="footer-social">
                <ul>
                  <li>
                    <a
                      href="https://facebook.com/themefisher"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/themefisher"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com/themefisher"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/themefisher"
                      aria-label="Github"
                    >
                      <i className="fab fa-github" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Footer social end */}
            </div>
            {/* Col end */}
            <div className="col-lg-4 col-md-6 footer-widget mt-5 mt-md-0">
              <h3 className="widget-title">Nos Horaires</h3>
              <div className="working-hours">
                Nous travaillons 7 jours sur 7, tous les jours sauf jours
                fériés. Contactez-nous en cas d'urgence, avec notre Hotline et
                notre formulaire de contact.
                <br />
                <br /> Lundi - Vendredi:{" "}
                <span className="text-right">08:00 - 17:00 </span>
                <br /> Samedi: <span className="text-right">09:00 - 13:00</span>
                <br /> Dimanche and jours fériés:{" "}
                <span className="text-right">09:00 - 12:00</span>
              </div>
            </div>
            {/* Col end */}
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 footer-widget">
              <h3 className="widget-title">Nos Services</h3>
              <ul className="list-arrow">
                <li>
                  <a href="services.html">Immobilier</a>
                </li>
                <li>
                  <a href="services.html">Imprimerie</a>
                </li>
                <li>
                  <a href="services.html">Transport</a>
                </li>
                <li>
                  <a href="services.html">Education Scolaire</a>
                </li>
              </ul>
            </div>
            {/* Col end */}
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </div>
      {/* Footer main end */}
      <div className="copyright">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="copyright-info text-center">
                <span>Copyright © 2024</span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="footer-menu text-center">
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="home.html">Accueil</a>
                  </li>
                  <li>
                    <a href="directeur.html">Qui sommes-nous ?</a>
                  </li>
                  <li>
                    <a href="team.html">Services</a>
                  </li>
                  <li>
                    <a href="galerie.html">Réalisations</a>
                  </li>
                  <li>
                    <a href="contact.html">Contactez-nous</a>
                  </li>
                </ul>
                <div className="copyright-info text-center">
                  <span style={{ display: "none" }}>
                    , Designed &amp; Developed by{" "}
                    <a href="#">Alexandre Kanga</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Row end */}
          <div
            id="back-to-top"
            data-spy="affix"
            data-offset-top={10}
            className="back-to-top position-fixed"
          >
            <button className="btn btn-primary" title="Back to Top">
              <i className="fa fa-angle-double-up" />
            </button>
          </div>
        </div>
        {/* Container end */}
      </div>
      {/* Copyright end */}
    </footer>
    {/* Footer end */}
    {/* Javascript Files
  ================================================== */}
    {/* initialize jQuery Library */}
    {/* Bootstrap jQuery */}
    {/* Slick Carousel */}
    {/* Color box */}
    {/* shuffle */}
    {/* Google Map API Key*/}
    {/* Google Map Plugin*/}
    {/* Template custom */}
  </div>
  {/* Body inner end */}

  </>
  );
}
