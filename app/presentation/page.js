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
                <h1 className="banner-title">Présentation</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="#">Accueil</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="#">Qui sommes-nous ?</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Présentation
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
        <div className="row">
          <div className="col-lg-6">
            <h3 className="column-title">Notre savoir faire</h3>
            <p>
              <span className="into-sub-title-bold">MAWU</span> est une
              entreprise spécialisée dans la location et la vente de véhicules,
              camions et engins de chantier. Nous mettons à disposition de nos
              clients une large gamme de véhicules adaptés à leurs besoins, que
              ce soit pour des travaux de construction, de transport de
              marchandises ou pour tout autre projet nécessitant l'utilisation
              d'engins spécifiques.
              <br />
              <span className="into-sub-title-bold">MAWU</span> est aussi
              spécialisée dans le domaine de la construction. Nous proposons une
              large gamme de services pour répondre aux besoins de nos clients,
              que ce soit pour des projets de construction résidentielle,
              commerciale ou industrielle, plan, devis quantitatif et estimatif,
              l’accompagnement de l’obtention de permis de construction, la
              vente de terrain. Notre équipe expérimentée et qualifiée est en
              mesure de prendre en charge tous types de travaux de construction,
              de la conception à la réalisation. Nous mettons un point d'honneur
              à fournir des prestations de qualité, dans le respect des délais
              et des normes en vigueur. En plus de nos services de location et
              de vente, nous proposons également des services d'encadrement
              scolaire pour accompagner les élèves dans leur parcours éducatif.
              Notre équipe pédagogique qualifiée met en place des programmes
              personnalisés pour aider les élèves à progresser et à atteindre
              leurs objectifs académiques.
            </p>
          </div>
          {/* Col end */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div id="page-slider" className="page-slider small-bg">
              <div
                className="item"
                style={{
                  backgroundImage: "url(images/slider-pages/slide-page1.jpg)"
                }}
              >
                <div className="container">
                  <div className="box-slider-content">
                    <div className="box-slider-text">
                      <h2 className="box-slide-title">Leadership</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 1 end */}
              <div
                className="item"
                style={{
                  backgroundImage: "url(images/slider-pages/slide-page2.jpg)"
                }}
              >
                <div className="container">
                  <div className="box-slider-content">
                    <div className="box-slider-text">
                      <h2 className="box-slide-title">Relationships</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 2 end */}
              <div
                className="item"
                style={{
                  backgroundImage: "url(images/slider-pages/slide-page3.jpg)"
                }}
              >
                <div className="container">
                  <div className="box-slider-content">
                    <div className="box-slider-text">
                      <h2 className="box-slide-title">Performance</h2>
                    </div>
                  </div>
                </div>
              </div>
              {/* Item 3 end */}
            </div>
            {/* Page slider end*/}
            <blockquote>
              <p>
                Chez <span className="into-sub-title-bold">MAWU</span>, la
                satisfaction de nos clients est notre priorité. Nous mettons
                tout en œuvre pour répondre à leurs besoins de manière efficace
                et professionnelle. N'hésitez pas à nous contacter pour en
                savoir plus sur nos services et nos tarifs.
              </p>
            </blockquote>
          </div>
          {/* Col end */}
        </div>
        {/* Content row end */}
      </div>
      {/* Container end */}
    </section>
    {/* Main container end */}
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
