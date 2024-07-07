import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "MAWU | Directeur",
  description: "Directeur",
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
              <h1 className="banner-title">MOT DU DIRECTEUR</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="#">Accueil</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Qui sommes-nous ?</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Mot du Directeur
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
          <h3 className="column-title">M. EBOUHO GRIFFETH ULRICH ABADJINA</h3>
          <p>
            Chers visiteurs et prospects, C&apos;est avec une grande joie et une
            profonde fierté que je vous accueille au nom de toute l&apos;équipe de{" "}
            <span className="into-sub-title-bold">MAWU</span>. Notre entreprise
            est tournée vers l&apos;avenir et s&apos;engage à vous offrir des services
            exceptionnels dans les domaines du transport, de la construction, de
            la location et vente de véhicules, ainsi que dans l&apos;encadrement
            scolaire. Que vous soyez à la recherche de solutions de mobilité
            adaptées, de véhicules de qualité, de services de construction
            fiables ou d&apos;un accompagnement scolaire personnalisé, sachez que
            chez <span className="into-sub-title-bold">MAWU</span>, nous mettons
            tout en œuvre pour répondre à vos besoins et dépasser vos attentes.
            Nous croyons en l&apos;importance de la confiance, de la qualité et de la
            satisfaction de nos clients. C&apos;est pourquoi chaque jour, notre
            équipe s&apos;efforce de vous offrir des solutions innovantes et des
            services de haut niveau. Nous sommes ravis de vous accueillir sur
            notre site et espérons que vous trouverez les informations que vous
            recherchez. N&apos;hésitez pas à nous contacter pour toute demande ou
            question. Nous sommes là pour vous accompagner dans la réalisation
            de vos projets. Merci de votre intérêt pour{" "}
            <span className="into-sub-title-bold">MAWU</span>. Nous sommes
            impatients de vous compter parmi nos clients et de vous offrir une
            expérience exceptionnelle. Bienvenue chez{" "}
            <span className="into-sub-title-bold">MAWU</span> !<br />
            Cordialement.
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
            {/* Item2 end */}
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
              Chez <span className="into-sub-title-bold">MAWU</span>, nous nous
              engageons à fournir à nos clients des services de qualité, des
              produits fiables et un accompagnement personnalisé. Notre équipe
              dévouée est là pour vous conseiller et vous aider à trouver la
              solution de mobilité ou d&apos;encadrement scolaire qui correspond le
              mieux à vos besoins.
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
                  <Image
                    loading="lazy"
                    className="w-100"
                    src="/images/team/team1.jpg"
                    alt="team-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="ts-team-content">
                  <h3 className="ts-name">Nats Stenman</h3>
                  <p className="ts-designation">Chief Operating Officer</p>
                  <p className="ts-description">
                    Nats Stenman began his career in construction with boots on
                    the ground
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
                  <Image
                    loading="lazy"
                    className="w-100"
                    src="/images/team/team2.jpg"
                    alt="team-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="ts-team-content">
                  <h3 className="ts-name">Angela Lyouer</h3>
                  <p className="ts-designation">Innovation Officer</p>
                  <p className="ts-description">
                    Nats Stenman began his career in construction with boots on
                    the ground
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
                  <Image
                    loading="lazy"
                    className="w-100"
                    src="/images/team/team3.jpg"
                    alt="team-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="ts-team-content">
                  <h3 className="ts-name">Mark Conter</h3>
                  <p className="ts-designation">Safety Officer</p>
                  <p className="ts-description">
                    Nats Stenman began his career in construction with boots on
                    the ground
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
                  <Image
                    loading="lazy"
                    className="w-100"
                    src="images/team/team4.jpg"
                    alt="team-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="ts-team-content">
                  <h3 className="ts-name">Ayesha Stewart</h3>
                  <p className="ts-designation">Finance Officer</p>
                  <p className="ts-description">
                    Nats Stenman began his career in construction with boots on
                    the ground
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
                  <Image
                    loading="lazy"
                    className="w-100"
                    src="/images/team/team5.jpg"
                    alt="team-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="ts-team-content">
                  <h3 className="ts-name">Dave Clarkte</h3>
                  <p className="ts-designation">Civil Engineer</p>
                  <p className="ts-description">
                    Nats Stenman began his career in construction with boots on
                    the ground
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
                  <Image
                    loading="lazy"
                    className="w-100"
                    src="/images/team/team6.jpg"
                    alt="team-img"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="ts-team-content">
                  <h3 className="ts-name">Elton Joe</h3>
                  <p className="ts-designation">Site Supervisor</p>
                  <p className="ts-description">
                    Nats Stenman began his career in construction with boots on
                    the ground
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
  <Footer />
  {/* Footer end */}
</div>

  </>
  );
}
