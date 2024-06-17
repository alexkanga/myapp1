import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "AKAN | Accueil",
  description: "First Project Next",
};

export default function Home() {
  return (<>
    <div className="body-inner">
      <div id="top-bar" className="top-bar" />
      {/* Header start */}
      <Header />
      {/*/ Header end */}
      <div className="banner-carousel banner-carousel-1 mb-0">
        <div
          className="banner-carousel-item"
          style={{ backgroundImage: "url(images/slider-main/bg1.jpg)" }}
        >
          <div className="slider-content">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-md-12 text-center">
                  <h2 className="slide-title-box" data-animation-in="slideInLeft">
                    17 Years of excellence in
                  </h2>
                  <h3
                    className="slide-sub-title"
                    data-animation-in="slideInRight"
                  >
                    Construction Industry
                  </h3>
                  <p data-animation-in="slideInLeft" data-duration-in="1.2">
                    <a
                      href="services.html"
                      className="slider btn btn-primary"
                      aria-label="nos-services"
                    >
                      Nos Services
                    </a>
                    <a
                      href="contact.html"
                      className="slider btn btn-primary border"
                      aria-label="contactez-nous"
                    >
                      Contactez-nous
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner-carousel-item"
          style={{ backgroundImage: "url(images/slider-main/bg2.jpg)" }}
        >
          <div className="slider-content text-left">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-md-12">
                  <h2 className="slide-title-box" data-animation-in="slideInDown">
                    World Class Service
                  </h2>
                  <h3 className="slide-title" data-animation-in="fadeIn">
                    When Service Matters
                  </h3>
                  <h3 className="slide-sub-title" data-animation-in="slideInLeft">
                    Your Choice is Simple
                  </h3>
                  <p data-animation-in="slideInRight">
                    <a
                      href="services.html"
                      className="slider btn btn-primary"
                      aria-label="nos-services"
                    >
                      Nos Services
                    </a>
                    <a
                      href="contact.html"
                      className="slider btn btn-primary border"
                      aria-label="contactez-nous"
                    >
                      Contactez-nous
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner-carousel-item"
          style={{ backgroundImage: "url(images/slider-main/bg3.jpg)" }}
        >
          <div className="slider-content text-right">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-md-12">
                  <h2 className="slide-title-box" data-animation-in="slideInDown">
                    Meet Our Engineers
                  </h2>
                  <h3 className="slide-sub-title" data-animation-in="fadeIn">
                    We believe sustainability
                  </h3>
                  <p
                    className="slider-description lead"
                    data-animation-in="slideInRight"
                  >
                    We will deal with your failure that determines how you achieve
                    success.
                  </p>
                  <div data-animation-in="slideInLeft">
                    <a
                      href="services.html"
                      className="slider btn btn-primary"
                      aria-label="nos-services"
                    >
                      Nos Services
                    </a>
                    <a
                      href="contact.html"
                      className="slider btn btn-primary border"
                      aria-label="contactez-nous"
                    >
                      Contactez-nous
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="call-to-action-box no-padding">
        <div className="container">
          <div className="action-style-box">
            <div className="row align-items-center">
              <div className="col-md-8 text-center text-md-left">
                <div className="call-to-action-text">
                  <h3 className="action-title">Nous comprenons vos besoins</h3>
                </div>
              </div>
              {/* Col end */}
              <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                <div className="call-to-action-btn">
                  <a className="btn btn-dark" href="#">
                    Demander un devis
                  </a>
                </div>
              </div>
              {/* col end */}
            </div>
            {/* row end */}
          </div>
          {/* Action style box */}
        </div>
        {/* Container end */}
      </section>
      {/* Action end */}
      <section id="ts-features" className="ts-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ts-intro">
                {/* <h2 class="into-title">About Us</h2> */}
                <h3 className="into-sub-title">Optez pour Mawu</h3>
                <p>
                  Faites confiance à{" "}
                  <span className="into-sub-title-bold">MAWU</span> pour vous
                  accompagner dans vos projets, que ce soit pour votre mobilité ou
                  votre éducation. Nous sommes là pour vous offrir des solutions
                  adaptées et un service de qualité.
                </p>
              </div>
              {/* Intro box end */}
              <div className="gap-20" />
            </div>
            {/* Col end */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h3 className="into-sub-title">Nos valeurs</h3>
              <p>
                Nous nous engageons à respecter les valeurs de notre charte
                Éthique.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-trophy" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">Excellence</h3>
                    </div>
                  </div>
                  {/* Service 1 end */}
                </div>
                {/* col end */}
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-sliders-h" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">Responsabilité</h3>
                    </div>
                  </div>
                  {/* Service 2 end */}
                </div>
                {/* col end */}
              </div>
              {/* Content row 1 end */}
              <div className="row">
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-thumbs-up" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">Engagement</h3>
                    </div>
                  </div>
                  {/* Service 1 end */}
                </div>
                {/* col end */}
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-users" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">Professionnalisme</h3>
                    </div>
                  </div>
                  {/* Service 2 end */}
                </div>
                {/* col end */}
              </div>
              {/* Content row 1 end */}
            </div>
            {/* Col end */}
          </div>
          {/* Row end */}
        </div>
        {/* Container end */}
      </section>
      {/* Feature are end */}
      <section id="facts" className="facts-area dark-bg">
        <div className="container">
          <div className="facts-wrapper">
            <div className="row">
              <div className="col-md-3 col-sm-6 ts-facts">
                <div className="ts-facts-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/service-icon1.png"
                    alt="facts-img"
                  />
                </div>
                <div className="ts-facts-content">
                  <h2 className="ts-facts-num">
                    <span className="counterUp" data-count={120}>
                      0
                    </span>
                  </h2>
                  <h3 className="ts-facts-title">Immobilier</h3>
                </div>
              </div>
              {/* Col end */}
              <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-sm-0">
                <div className="ts-facts-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/service-icon2.png"
                    alt="facts-img"
                  />
                </div>
                <div className="ts-facts-content">
                  <h2 className="ts-facts-num">
                    <span className="counterUp" data-count={8120}>
                      0
                    </span>
                  </h2>
                  <h3 className="ts-facts-title">Imprimerie</h3>
                </div>
              </div>
              {/* Col end */}
              <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                <div className="ts-facts-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/service-icon5.png"
                    alt="facts-img"
                  />
                </div>
                <div className="ts-facts-content">
                  <h2 className="ts-facts-num">
                    <span className="counterUp" data-count={54}>
                      0
                    </span>
                  </h2>
                  <h3 className="ts-facts-title">Transport</h3>
                </div>
              </div>
              {/* Col end */}
              <div className="col-md-3 col-sm-6 ts-facts mt-5 mt-md-0">
                <div className="ts-facts-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/service-icon3.png"
                    alt="facts-img"
                  />
                </div>
                <div className="ts-facts-content">
                  <h2 className="ts-facts-num">
                    <span className="counterUp" data-count={120}>
                      0
                    </span>
                  </h2>
                  <h3 className="ts-facts-title">Education</h3>
                </div>
              </div>
              {/* Col end */}
            </div>{" "}
            {/* Facts end */}
          </div>
          {/*/ Content row end */}
        </div>
        {/*/ Container end */}
      </section>
      {/* Facts end */}
      <section id="ts-service-area" className="ts-service-area pb-0">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              {/* <h2 class="section-title">Nous sommes des experts</h2> */}
              <h3 className="section-sub-title">NOS SERVICES</h3>
            </div>
          </div>
          {/*/ Title row end */}
          <div className="row">
            <div className="col-lg-4">
              <div className="ts-service-box d-flex">
                <div className="ts-service-box-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/service-icon1.png"
                    alt="service-icon"
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a href="#">Immobilier</a>
                  </h3>
                  <p>
                    Notre entreprise immobilière, reconnue pour son expertise,
                    répond aux besoins de ses clients en matière d'achat, de
                    construction, de vente ou de location de biens immobiliers.
                  </p>
                </div>
              </div>
              {/* Service 1 end */}
              <div className="ts-service-box d-flex">
                <div className="ts-service-box-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/service-icon2.png"
                    alt="service-icon"
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a href="#">Imprimerie</a>
                  </h3>
                  <p>
                    Notre entreprise d'impression se spécialise dans la conception
                    et la réalisation de supports de communication de qualité.
                  </p>
                </div>
              </div>
              {/* Service 2 end */}
            </div>
            {/* Col end */}
            <div className="col-lg-4 text-center">
              <img
                loading="lazy"
                className="img-fluid"
                src="images/services/service-center.jpg"
                alt="service-avater-image"
              />
            </div>
            {/* Col end */}
            <div className="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
              <div className="ts-service-box d-flex">
                <div className="ts-service-box-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/service-icon5.png"
                    alt="service-icon"
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a href="#">Transport</a>
                  </h3>
                  <p>
                    Notre entreprise se spécialise dans la gestion, la vente et la
                    location de tous types de véhicules et d'engins, offrant ainsi
                    une solution complète pour vos besoins de mobilité.
                  </p>
                </div>
              </div>
              {/* Service 3 end */}
              <div className="ts-service-box d-flex">
                <div className="ts-service-box-img">
                  <img
                    loading="lazy"
                    src="images/icon-image/service-icon3.png"
                    alt="service-icon"
                  />
                </div>
                <div className="ts-service-box-info">
                  <h3 className="service-box-title">
                    <a href="#">Education Scolaire</a>
                  </h3>
                  <p>
                    Notre équipe pédagogique qualifiée et passionnée met tout en
                    œuvre pour soutenir les apprenants dans leur réussite
                    académique.
                  </p>
                </div>
              </div>
              {/* Service 4 end */}
            </div>
            {/* Col end */}
          </div>
          {/* Content row end */}
        </div>
        {/*/ Container end */}
      </section>
      {/* Service end */}
      <section id="project-area" className="project-area solid-bg">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              {/* <h2 class="section-title">Work of Excellence</h2> */}
              <h3 className="section-sub-title">Nos Réalisations en image</h3>
            </div>
          </div>
          {/*/ Title row end */}
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
                      className="learn-more d-inline-block"
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
                      className="learn-more d-inline-block"
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
                      className="learn-more d-inline-block"
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
            {/* Col 3 end */}
          </div>
          <div className="col-12">
            <div className="general-btn text-center">
              <a className="btn btn-primary" href="galerie.html">
                Voir toutes les réalisations
              </a>
            </div>
          </div>
          {/* Content row end */}
        </div>
        {/*/ Container end */}
      </section>
      {/* Project area end */}
      <section id="ts-team" className="ts-team">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-12">
              {/* <h2 class="section-title">Quality Service</h2> */}
              <h3 className="section-sub-title">Nos partenaires et Clients</h3>
            </div>
          </div>
          {/*/ Title row end */}
          <div className="row">
            <div className="col-lg-12">
              <div id="team-slide" className="team-slide">
                <div className="item">
                  <div className="ts-team-wrapper">
                    <div className="team-img-wrapper">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="images/team/team1.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div className="ts-team-content">
                      <h3 className="ts-name">Nats Stenman</h3>
                      <p className="ts-designation">Chief Operating Officer</p>
                      <p className="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div className="team-social-icons">
                        <a target="_blank" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-google-plus" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                      {/*/ social-icons*/}
                    </div>
                  </div>
                  {/*/ Team wrapper end */}
                </div>
                {/* Team 1 end */}
                <div className="item">
                  <div className="ts-team-wrapper">
                    <div className="team-img-wrapper">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="images/team/team2.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div className="ts-team-content">
                      <h3 className="ts-name">Angela Lyouer</h3>
                      <p className="ts-designation">Innovation Officer</p>
                      <p className="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div className="team-social-icons">
                        <a target="_blank" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                      {/*/ social-icons*/}
                    </div>
                  </div>
                  {/*/ Team wrapper end */}
                </div>
                {/* Team 2 end */}
                <div className="item">
                  <div className="ts-team-wrapper">
                    <div className="team-img-wrapper">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="images/team/team3.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div className="ts-team-content">
                      <h3 className="ts-name">Mark Conter</h3>
                      <p className="ts-designation">Safety Officer</p>
                      <p className="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div className="team-social-icons">
                        <a target="_blank" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-google-plus" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                      {/*/ social-icons*/}
                    </div>
                  </div>
                  {/*/ Team wrapper end */}
                </div>
                {/* Team 3 end */}
                <div className="item">
                  <div className="ts-team-wrapper">
                    <div className="team-img-wrapper">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="images/team/team4.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div className="ts-team-content">
                      <h3 className="ts-name">Ayesha Stewart</h3>
                      <p className="ts-designation">Finance Officer</p>
                      <p className="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div className="team-social-icons">
                        <a target="_blank" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-google-plus" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                      {/*/ social-icons*/}
                    </div>
                  </div>
                  {/*/ Team wrapper end */}
                </div>
                {/* Team 4 end */}
                <div className="item">
                  <div className="ts-team-wrapper">
                    <div className="team-img-wrapper">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="images/team/team5.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div className="ts-team-content">
                      <h3 className="ts-name">Dave Clarkte</h3>
                      <p className="ts-designation">Civil Engineer</p>
                      <p className="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div className="team-social-icons">
                        <a target="_blank" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-google-plus" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                      {/*/ social-icons*/}
                    </div>
                  </div>
                  {/*/ Team wrapper end */}
                </div>
                {/* Team 5 end */}
                <div className="item">
                  <div className="ts-team-wrapper">
                    <div className="team-img-wrapper">
                      <img
                        loading="lazy"
                        className="w-100"
                        src="images/team/team6.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div className="ts-team-content">
                      <h3 className="ts-name">Elton Joe</h3>
                      <p className="ts-designation">Site Supervisor</p>
                      <p className="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div className="team-social-icons">
                        <a target="_blank" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-google-plus" />
                        </a>
                        <a target="_blank" href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                      </div>
                      {/*/ social-icons*/}
                    </div>
                  </div>
                  {/*/ Team wrapper end */}
                </div>
                {/* Team 6 end */}
              </div>
              {/* Team slide end */}
            </div>
          </div>
          {/*/ Content row end */}
        </div>
        {/*/ Container end */}
      </section>
      {/*/ Team end */}
      <section className="subscribe no-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="subscribe-call-to-acton">
                <h3>Pouvons-nous vous aider?</h3>
                <h4>(+225) 015-184-5867</h4>
              </div>
            </div>
            {/* Col end */}
            <div className="col-lg-8">
              <div className="ts-newsletter row align-items-center">
                <div className="col-md-5 newsletter-introtext">
                  <h4 className="text-white mb-0">Adresse e-mail</h4>
                  <p
                    className="text-white"
                    style={{ textTransform: "lowercase" }}
                  >
                    allo.mawu@gmail.com
                  </p>
                </div>
                <div className="col-md-7 newsletter-form">
                  <a className="btn btn-primary" href="contact.html">
                    Cliquez ici pour nous écrire
                  </a>
                </div>
              </div>
              {/* Newsletter end */}
            </div>
            {/* Col end */}
          </div>
          {/* Content row end */}
        </div>
        {/*/ Container end */}
      </section>
      {/* Footer start */}
      <Footer />
      {/* Footer end */}
    </div>
   
  </>
  );
}
