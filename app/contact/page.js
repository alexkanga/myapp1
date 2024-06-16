import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
export const metadata = {
  title: "AKAN | Accueil",
  description: "First Project Next",
};

export default function Home() {
  return (<>
  <div className="body-inner">
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
                <h1 className="banner-title">Contact</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="#">Accueil</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Contact</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Ecrivez-nous
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
    <section id="main-container" className="main-container">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            {/* <h2 class="section-title">Reaching our Office</h2> */}
            <h3 className="section-sub-title">Comment nous joindre ?</h3>
          </div>
        </div>
        {/*/ Title row end */}
        <div className="row">
          <div className="col-md-4">
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <i className="fas fa-map-marker-alt mr-0" />
              </span>
              <div className="ts-service-box-content">
                <h4>Notre siège</h4>
                <h5 className="pink-color-logo">
                  9051 Constra Incorporate, USA
                </h5>
              </div>
            </div>
          </div>
          {/* Col 1 end */}
          <div className="col-md-4">
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <i className="fa fa-envelope mr-0" />
              </span>
              <div className="ts-service-box-content">
                <h4>Ecrivez-nous</h4>
                <h5 className="pink-color-logo">office@Constra.com</h5>
              </div>
            </div>
          </div>
          {/* Col 2 end */}
          <div className="col-md-4">
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <i className="fa fa-phone-square mr-0" />
              </span>
              <div className="ts-service-box-content">
                <h4>Appelez-nous</h4>
                <h5 className="pink-color-logo">(+225) 015-184-5867</h5>
              </div>
            </div>
          </div>
          {/* Col 3 end */}
        </div>
        {/* 1st row end */}
        <div className="gap-60" />
        {/* <div class="google-map">
<div id="map" class="map" data-latitude="40.712776" data-longitude="-74.005974" data-marker="images/marker.png" data-marker-name="Constra"></div>
    </div> */}
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=mawu&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="100%"
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div className="gap-40" />
        <div className="row">
          <div className="col-md-12">
            <h4 className="column-title pink-color-logo">
              N'hésitez pas à nous contacter si vous avez des questions, des
              idées ou des projets excitants en tête.
            </h4>
            {/* contact form works with formspree.io  */}
            <form id="contact-form" action="#" method="post" role="form">
              <div className="error-container" />
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Nom et Prénoms</label>
                    <input
                      className="form-control form-control-name"
                      name="name"
                      id="name"
                      placeholder=""
                      type="text"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control form-control-email"
                      name="email"
                      id="email"
                      placeholder=""
                      type="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Objet</label>
                    <input
                      className="form-control form-control-subject"
                      name="subject"
                      id="subject"
                      placeholder=""
                      required=""
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control form-control-message"
                  name="message"
                  id="message"
                  placeholder=""
                  rows={10}
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="text-right">
                <br />
                <button className="btn btn-primary solid blank" type="submit">
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Content row */}
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
                    <a href="services.html">Services</a>
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
