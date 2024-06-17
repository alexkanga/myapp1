import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
export const metadata = {
  title: "AKAN | Contact",
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
       
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3972.5678488496706!2d-4.1890833!3d5.329888899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMTknNDcuNiJOIDTCsDExJzIwLjciVw!5e0!3m2!1sfr!2sci!4v1715905180130!5m2!1sfr!2sci"
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
              N&apos;hésitez pas à nous contacter si vous avez des questions, des
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
    <Footer />
    {/* Footer end */}
    
  </div>
  {/* Body inner end */}
  </>
  );
}
